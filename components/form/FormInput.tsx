import { Input } from "../ui/input"
import { Label } from "../ui/label"

type FormInputProps = {
    name: string
    type: string
    label?: string  // ? for not require
    defaultValue?: string
    placeholder?: string
}

const FormInput = (props: FormInputProps) => {
    const { name, type, label, defaultValue, placeholder } = props
    return (
        <div className="mb-2">
            <Label htmlFor={name}>
                {label}
            </Label>

            <Input name={name} type={type} placeholder={placeholder} defaultValue={defaultValue} />
        </div>
    )
}
export default FormInput