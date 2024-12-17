import { fetchFavorites } from "@/actions/actions"
import LandmarkList from "@/components/home/LandmarkList"

const FavoritePage = async () => {
    const favorites = await fetchFavorites()
    console.log('favorites', favorites)
    return (
        <LandmarkList landmarks={favorites} />
    )
}
export default FavoritePage