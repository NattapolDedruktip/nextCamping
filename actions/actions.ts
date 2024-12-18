'use server'

import { imageSchema, landmarkSchema, profileSchema, validateWithZod } from "@/utils/schemas"
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import db from "@/utils/db"
import { redirect } from "next/navigation"
import { uploadFile } from "@/utils/supabase"
import { revalidatePath } from "next/cache"

const getAuthUser = async() => {
    const user = await currentUser()

    if(!user) {
        throw new Error("You must logged in first!!")
    }
    if(!user.privateMetadata.hasProfile) redirect('/profile/create')

    return user
}

const renderError = (error: unknown): { message: string } => {
    return {
        message: error instanceof Error ? error.message : "An Error !!"
    }
}

export const createProfileAction = async (prevState: any, formData: FormData) => {
    try {
    const user = await currentUser()
    if(!user) throw new Error("please login")
    const rawData = Object.fromEntries(formData)
    const validateField = validateWithZod(profileSchema,rawData)

    //upload to db in supabase
    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validateField,
      },
    });

    //upload meta data in clerk
    const client = await clerkClient()
    await client.users.updateUserMetadata(user.id,{
        privateMetadata:{
            hasProfile:true
        }
    })
    return {message :"Create Profile Success!"}

    } catch (error) {
        // console.log(error)
        return renderError(error)
    }
    redirect('/')
    
}

export const createLandmarkAction = async (prevState: any, formData: FormData):Promise<{message :string}> => {
    try {
    const user = await getAuthUser()
    const rawData = Object.fromEntries(formData)
    const file = formData.get('image') as File
    
    //step 1 validate data
    const validatedFile = validateWithZod(imageSchema,{image:file})
    const validateField = validateWithZod(landmarkSchema,rawData)
    console.log('validatedFile', validatedFile)
    
    //step 2 upload image to supabase

    const fullPath = await uploadFile(validatedFile.image)
    console.log('fullPath', fullPath)

    //step 3 insert to DB

    await db.landmark.create({
        data : {
            ...validateField,
            image:fullPath,
            profileId:user.id
        }
    })


    // return {message :"Create Landmark Success!"}

    } catch (error) {
        // console.log(error)
        return renderError(error)
    }
    redirect('/')
    
}

export const fetchLandmarks = async (
    {search="",category}:{search?:string,category?:string}) => {

    const landmarks = await db.landmark.findMany({
        where:{
            category:category,
            OR:[
                {name:{contains:search,mode:'insensitive'}},
                {description:{contains:search,mode:'insensitive'}},        
                {province:{contains:search,mode:'insensitive'}},        
            ]
        },
        orderBy: {
            createdAt : 'desc'
        }
    })

    return landmarks
}

export const fetchFavoriteId = async({LandmarkId}:{LandmarkId:string})=>{
    const user = await getAuthUser()
    const favorite = await db.favorite.findFirst({
        where : {
            landmarkId:LandmarkId,
            profileId:user.id
        },
        select:{
            id:true
        }
    })

    return favorite?.id || null
}

export const toggleFavoriteAction = async(prevState:{
    favoriteId : string | null
    LandmarkId : string
    pathname : string
}) => {
    const {favoriteId , LandmarkId , pathname} = prevState
    const user = await getAuthUser()
    try {
        // delete first if there is favorite id
        if(favoriteId) {
            await db.favorite.delete({
                where : {
                    id : favoriteId
                }
            })
        }else { //create if there is no favorite id
            await db.favorite.create({
                data : {
                    landmarkId : LandmarkId,
                    profileId : user.id
                }
            })
        }
        revalidatePath(pathname) // for refreshing page
        return {message : favoriteId 
            ? "Remove Favorite Success!" 
            : "Add Favorite Success!"
        }
    } catch (error) {
        
    }
    return {message : 'Add favorite'}
}

export const fetchFavorites = async() =>{
    const user = await getAuthUser()
    const favorites = await db.favorite.findMany({
        where : {
            profileId: user.id
        },
        select:{
            landmark:{
                select:{
                    id:true,
                    name:true,
                    description:true,
                    image:true,
                    price:true,
                    province:true,
                    lat:true,
                    lng:true,
                    category:true
                }
            }
        }
    })

    return favorites.map((favorite)=> favorite.landmark)
}