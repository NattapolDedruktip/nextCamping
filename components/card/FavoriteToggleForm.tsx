'use client'
import { toggleFavoriteAction } from "@/actions/actions"
import FormContainer from "../form/FormContainer"
import { usePathname } from "next/navigation"
import { CardSubmitButton } from "../form/Button"

const FavoriteToggleForm = ({
    favoriteId,
    LandmarkId
}: {
    favoriteId: string | null
    LandmarkId: string
}) => {
    const pathname = usePathname() // for refresh page
    console.log('favoriteId', favoriteId)
    console.log('pathname', pathname)

    const toggleAction = toggleFavoriteAction.bind(null, {
        favoriteId,
        LandmarkId,
        pathname
    })
    return (
        <FormContainer action={toggleAction}>

            <CardSubmitButton isFavorite={favoriteId ? true : false} />

        </FormContainer>
    )
}
export default FavoriteToggleForm