import { z,ZodSchema} from 'zod'

export const profileSchema = z.object({
    firstName : z.string().min(2,"first name must has more than 2 characters"),
    lastName : z.string().min(2,'last name must has more than 2 characters'),
    userName : z.string().min(2,"user name must has more than 2 characters"),
})



export const validateWithZod = <T>(schema :ZodSchema<T> , data:unknown):T => {
    const result = schema.safeParse(data)
    if(!result.success) {
        const errors = result.error?.errors.map((error)=> error.message)
        throw new Error(errors.join(','))
    }
    return result.data
}