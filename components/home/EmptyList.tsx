import Link from "next/link"
import { Button } from "../ui/button"

function EmptyList({ heading = "No item", message = "Please try again", btnText = "Back Home" }
    : { heading?: string, message?: string, btnText?: string }) {
    return (
        <div>
            <h2 className="text-xl font-bold">{heading}</h2>
            <p className="text-lg mb-4">{message}</p>
            <Button className="capitalize" asChild>
                <Link href={'/'}>
                    {btnText}
                </Link>
            </Button>
        </div>
    )
}
export default EmptyList