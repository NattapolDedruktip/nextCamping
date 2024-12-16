import { z,ZodSchema} from 'zod'

export const profileSchema = z.object({
    firstName : z.string().min(2,"first name must has more than 2 characters"),
    lastName : z.string().min(2,'last name must has more than 2 characters'),
    userName : z.string().min(2,"user name must has more than 2 characters"),
})

const validateImage = () => {
    const maxFileSize = 1024*1024   // 1 mb
    return z.instanceof(File)
    .refine((file)=>{
       return file.size <= maxFileSize
    },"File size must less than 1 mb")
}

export const imageSchema = z.object({
    image : validateImage()
})

export const landmarkSchema = z.object({
    name: z.string().min(2,{message : "name must more than 2 characters"})
    .max(30,{message:"name must less than 30 characters"}),
    category: z.string(),
    description: z.string()
    .min(2,{message:"description must more than 2 characters"})
    .max(30,{message:"description must less than 30 characters"}),
    price:z.coerce.number().int().min(0,{message:"price must more than 0"}),
    province: z.string(),
    lat: z.coerce.number(),
    lng:z.coerce.number()
})


export const validateWithZod = <T>(schema :ZodSchema<T> , data:unknown):T => {
    const result = schema.safeParse(data)
    if(!result.success) {
        const errors = result.error?.errors.map((error)=> error.message)
        throw new Error(errors.join(','))
    }
    return result.data
}