import { fetchLandmarks } from "@/actions/actions"
import LandmarkList from "./LandmarkList"
import { LandmarkCardProps } from "@/utils/types"
import Hero from "@/app/hero/Hero"


const LandmarkContainer = async () => {

    const landmarks: LandmarkCardProps[] = await fetchLandmarks()
    console.log('landmarks', landmarks)
    return (
        <div>
            <Hero landmarks={landmarks} />
            <LandmarkList landmarks={landmarks} />
        </div>
    )
}
export default LandmarkContainer