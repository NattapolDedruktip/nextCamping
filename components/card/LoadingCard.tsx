import { Skeleton } from "../ui/skeleton"

const LoadingCard = () => {
    return (
        <div className="grid gap-8 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    )
}

export const SkeletonCard = () => {
    return <div>
        <Skeleton className="relative h-[300px] rounded-md mb-2" />
        <Skeleton className="relative w-3/4 h-4 rounded-md mb-2" />
        <Skeleton className="relative w-1/2 h-4 rounded-md mb-2" />
        <Skeleton className="relative w-1/4 h-4 rounded-md mb-2" />
    </div>
}

export default LoadingCard