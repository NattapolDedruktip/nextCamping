
import FormInput from "@/components/form/FormInput"
import { SubmitButton } from "@/components/form/Button"
import FormContainer from "@/components/form/FormContainer"
import { createLandmarkAction } from "@/actions/actions"
import CategoryInput from "@/components/form/CategoryInput"
import TextAreaInput from "@/components/form/TextAreaInput"
import ProvincesInput from "@/components/form/ProvincesInput"
import MapLandMark from "@/components/map/MapLandMark"
import ImageInput from "@/components/form/ImageInput"




const CreateLandmark = async () => {


    return (
        <section className="w-3/5 mx-auto">
            <h1 className="text-2xl font-semibold mb-8 capitalize">Create Landmark</h1>
            <div className="border p-8 rounded-md ">

                <FormContainer action={createLandmarkAction} >
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInput name='name'
                            label="Landmark Name"
                            type="text"
                            placeholder="Landmark Name..." />
                        {/* category  */}
                        <CategoryInput />
                    </div>



                    {/* text area */}
                    <div >
                        <TextAreaInput name="description" />
                    </div>

                    {/* price */}
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <FormInput name='price'
                            label="Price"
                            type="text"
                            placeholder="Price..." />

                        {/* province input */}
                        <ProvincesInput />
                    </div >

                    <ImageInput />

                    <MapLandMark />


                    <SubmitButton text='Create Landmark' size='lg' />
                </FormContainer>

            </div>
        </section>
    )
}
export default CreateLandmark