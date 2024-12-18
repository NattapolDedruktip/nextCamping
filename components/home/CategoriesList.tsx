import { categories } from "@/utils/categories"
import Link from "next/link"



const CategoriesList = ({ search, category }:
    { search?: string, category?: string }) => {

    const searchTerm = search ? `&search=${search}` : ""
    return (
        <div>
            <div className="flex justify-center my-4 font-bold gap-x-4">
                {
                    categories.map((item) => {
                        const isActive = item.label === category
                        return (
                            <Link
                                href={`/?category=${item.label}${searchTerm}`}
                                key={item.label}>
                                <article className={`flex hover:text-primary hover:scale-105 hover:duration-300  p-3 gap-2 flex-col justify-center items-center 
                                    ${isActive ? 'text-primary' : ""}`}>
                                    <item.icon />
                                    <p>
                                        {item.label}
                                    </p>
                                </article>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default CategoriesList