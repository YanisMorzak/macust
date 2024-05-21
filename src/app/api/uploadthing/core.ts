import { createUploadthing, type FileRouter } from "uploadthing/next";
import { z } from 'zod'
 
// crée une instance de l'outil "uploadthing" en utilisant la fonction createUploadthing() et la stocke dans la variable f
const f = createUploadthing();
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
  .input(z.object({ configId: z.string().optional() }))
    // Set permissions and file types for this FileRoute
    .middleware(async ({ input }) => {
      // This code runs on your server before upload
      return {input}
    })
    .onUploadComplete(async ({ metadata, file }) => {
        const { configId } = metadata.input
        return { configId }
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;