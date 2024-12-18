import LoadingCard from "@/components/card/LoadingCard"
import LandmarkContainer from "@/components/home/LandmarkContainer"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"


const page = async ({ searchParams }: { searchParams: { search?: string } }) => {

  // search 
  const { search } = await searchParams;
  console.log('search', search)

  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer search={search} />
      </Suspense>

    </section>
  )
}
export default page