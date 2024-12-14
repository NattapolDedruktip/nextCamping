'use server'

import { profileSchema, validateWithZod } from "@/utils/schemas"
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import db from "@/utils/db"
import { redirect } from "next/navigation"

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
    const user = await currentUser()
    if(!user) throw new Error("please login")
    const rawData = Object.fromEntries(formData)
    // const validateField = validateWithZod(profileSchema,rawData)
    console.log('rawData', rawData)

    // for prisma

    return {message :"Create Landmark Success!"}

    } catch (error) {
        // console.log(error)
        return renderError(error)
    }
    redirect('/')
    
}