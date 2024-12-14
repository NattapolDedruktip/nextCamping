
import FormInput from "@/components/form/FormInput"
import { SubmitButton } from "@/components/form/Button"
import FormContainer from "@/components/form/FormContainer"
import { createLandmarkAction } from "@/actions/actions"
import CategoryInput from "@/components/form/CategoryInput"




const CreateLandmark = async () => {


    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">Create Landmark</h1>
            <div className="border p-8 rounded-md ">

                <FormContainer action={createLandmarkAction} >
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInput name='name'
                            label="Landmark Name"
                            type="text"
                            placeholder="Landmark Name..." />
                    </div>

                    {/* category  */}
                    <div>
                        <CategoryInput />
                    </div>
                    <SubmitButton text='Create Landmark' size='lg' />
                </FormContainer>

            </div>
        </section>
    )
}
export default CreateLandmark