import { Label } from "../ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { categories } from "@/utils/categories"


const CategoryInput = ({ defaultValue }: { defaultValue?: string }) => {
    const name = 'category'
    return (
        <div className="mb-2">
            <Label htmlFor={name} className="capitalize"> {name}</Label>
            <Select
                defaultValue={defaultValue || categories[0].label}
                name={name}
                required
            >
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="select category of landmark..." />
                </SelectTrigger>
                <SelectContent>
                    {
                        categories.map((item, index) => {
                            return <SelectItem value={item.label} key={index}>
                                <span className="capitalize flex items-center gap-4"><item.icon />{item.label}</span>
                            </SelectItem>
                        })
                    }


                </SelectContent>
            </Select>

        </div>
    )
}
export default CategoryInput