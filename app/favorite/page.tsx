import { fetchFavorites } from "@/actions/actions"
import EmptyList from "@/components/home/EmptyList"
import LandmarkList from "@/components/home/LandmarkList"

const FavoritePage = async () => {
    const favorites = await fetchFavorites()
    if (favorites.length === 0) {
        return <EmptyList
            heading="No favorite items "
        />
    }
    // console.log('favorites', favorites)
    return (
        <LandmarkList landmarks={favorites} />
    )
}
export default FavoritePage