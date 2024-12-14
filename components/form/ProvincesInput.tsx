import { Label } from "../ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { provinces } from "@/utils/provinces"

const ProvincesInput = ({ defaultValue }: { defaultValue?: string }) => {
    const name = 'province'
    return (
        <div className="mb-2">
            <Label htmlFor={name} className="capitalize"> {name}</Label>
            <Select
                defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
                name={name}
                required
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="select category of landmark..." />
                </SelectTrigger>
                <SelectContent>
                    {
                        provinces.map((item, index) => {
                            return <SelectItem value={item.PROVINCE_NAME} key={index}>
                                <span className="capitalize flex items-center gap-4">{item.PROVINCE_NAME}</span>
                            </SelectItem>
                        })
                    }


                </SelectContent>
            </Select>

        </div>
    )
}
export default ProvincesInput