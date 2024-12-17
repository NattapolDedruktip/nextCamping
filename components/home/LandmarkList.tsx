import { LandmarkCardProps } from "@/utils/types"
import LandmarkCard from "../card/LandmarkCard"

const LandmarkList = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
    return (
        <section className="grid gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                landmarks.map((landmark) => {
                    return <LandmarkCard key={landmark.id} landmark={landmark} />
                })
            }
        </section>
    )
}
export default LandmarkList