import { Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { auth } from '@clerk/nextjs/server';
import { SignInCardButton } from '../form/Button';
import { fetchFavoriteId } from '@/actions/actions';
import FavoriteToggleForm from './FavoriteToggleForm';

const FavoriteToggleButton = async ({ LandmarkId }: { LandmarkId: string }) => {
    const { userId } = await auth()
    console.log(userId)

    if (!userId) return <SignInCardButton />

    const favoriteId = await fetchFavoriteId({ LandmarkId })

    // console.log('favoriteId', favoriteId)

    return (

        <FavoriteToggleForm favoriteId={favoriteId} LandmarkId={LandmarkId} />

    )
}
export default FavoriteToggleButton