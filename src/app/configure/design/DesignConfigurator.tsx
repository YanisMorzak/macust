import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import { cn } from "@/src/lib/utils";
import NextImage from 'next/image'

interface DesignConfiguratorProps {
    configId: string
    imageUrl: string
    imageDimensions: { width: number; height: number }
  }

export default function DesignConfigurator({
  configId,
  imageUrl,
  imageDimensions,
}: DesignConfiguratorProps) {
  return (
    <div className='relative mt-20 grid grid-cols-1 lg:grid-cols-3 mb-20 pb-20'>
    <div
      className='relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'>
      <div className='relative w-60 md:w-[400px] bg-opacity-50 pointer-events-none aspect-[1831/1296]'>
        <AspectRatio ratio={1831 / 1296} className='pointer-events-none relative z-50 aspect-[1831/1296] w-full'>
        <NextImage
              fill
              alt='phone image'
              src='/mac-template-2.png'
              className='pointer-events-none z-50 select-none'
            />
        </AspectRatio>
        <div className='absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]' />
      </div>
      <div className='relative w-full h-full'>
            <NextImage
              src={imageUrl}
              fill
              alt='your image'
              className='pointer-events-none'
            />
          </div>
    </div>
    </div>
  )
}
