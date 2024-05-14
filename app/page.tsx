import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-violet-900 via-gray-800 to-violet-900 text-white">
      <section>
        <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
          <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                <img src="/mcust-1.png" className="w-full" alt="" />
              </div>
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-5xl md:text-6xl lg:text-7xl'>
                Your Image on a{' '}
                <span className='bg-gradient-to-r from-violet-600 to-violet-200 bg-clip-text text-transparent'>Custom</span>{' '}
                Macbook
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
              Immortalize your favorite <span className='font-semibold'>designs</span> on the back of your Macbook. Macust lets you customize your device to bring your own personality to it.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  ); 
}
