
import { Button } from "@/components/ui/button"
import FormInput from "@/components/form/FormInput"
import { SubmitButton } from "@/components/form/Button"
import FormContainer from "@/components/form/FormContainer"
import { createLandmarkAction } from "@/actions/actions"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"




const CreateProfile = async () => {


    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">Create Landmark</h1>
            <div className="border p-8 rounded-md ">

                <FormContainer action={createLandmarkAction} >
                    <div className="grid md:grid-cols-1 gap-4 mt-4">
                        <FormInput name='name'
                            label="Landmark Name"
                            type="text"
                            placeholder="Landmark Name..." />
                    </div>
                    <SubmitButton text='Create Landmark' size='lg' />
                </FormContainer>

            </div>
        </section>
    )
}
export default CreateProfile