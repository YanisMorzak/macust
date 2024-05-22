import { db } from "@/src/db"
import { notFound } from "next/navigation"

interface PageProps {
    searchParams: {
      [key: string]: string | string[] | undefined
    }
  }

  const Page = async ({ searchParams }: PageProps) => {
    const { id } = searchParams

  // return 404 page if we don't have the id
  if (!id || typeof id !== 'string') {
        return notFound()
    }
     
  const configuration = await db.configuration.findUnique({
    where: { id },
  })

  if (!configuration) {
    return notFound()
  }
    
  const { imageUrl, width, height } = configuration
  
    return (
      <div>{id}</div>
    )
  }
  
  export default Page