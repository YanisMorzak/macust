import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import TemplateMac from "@/src/components/TemplateMac";
import { ArrowRight, Check, Star } from "lucide-react";
import CustomerReview from "../components/CustomerReview";
import {  Reviews } from "../components/Reviews";
import { buttonVariants } from "../components/ui/button";
import Link from "next/link";
import { cn } from "../lib/utils";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-800 via-violet-900 to-slate-800 text-white">
      <section>
        <MaxWidthWrapper className='pb-24 pt-10 sm:pb-32 lg:gap-x-12 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
          <div className='relative mx-auto text-center flex flex-col items-center lg:items-start'>
              <h1 className='relative w-fit tracking-tight text-balance mt-24 font-bold !leading-tight text-5xl md:text-6xl lg:text-7xl mt'>
                Your Image on a{' '}
                <span className='bg-gradient-to-r from-violet-600 to-violet-200 bg-clip-text text-transparent'>Custom</span>{' '}
                Macbook
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center text-balance mx-auto md:text-wrap'>
              Immortalize your favorite <span className='font-semibold'>designs</span> on the back of your Macbook. Macust lets you customize your device to bring your own personality to it.
              </p>
              <ul className='mt-8 space-y-2 mx-auto font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center '>
                    <Check className='h-5 w-5 shrink-0 text-green-600' />
                    High-quality, durable print
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-green-600' />5 year
                    print guarantee
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-green-600' />
                    Modern Macbook models supported
                  </li>
                </div> 
              </ul>
              <Link
              href='/configure/upload'
              className={cn(buttonVariants({
                size: 'sm',
                variant: 'purple',
              }), 'md:h-12 rounded-md px-8 text-md mt-8 mx-auto')}>
              Create case
              <ArrowRight className='ml-1.5 h-5 w-5' />
              </Link>

            </div>
          </div>

          <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-28 lg:mx-0 lg:mt-20 h-fit'>
            <div className='relative md:max-w-xl'>
               <img
                src='/line.png'
                className='absolute w-20 -left-6 -bottom-6 select-none'
              />
               <TemplateMac className='w-full md:w-[430px]' imgSrc='/testimonials/Samurai-removebg-preview.png' />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper className='py-24'>
          <div className='mb-20 px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl sm:text-center'>
              <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-white'>
                Upload your photo and get{' '}
                <span className='relative px-2 bg-gradient-to-r from-slate-800 to-violet-600 rounded-md text-white'>
                  your Macbook
                </span>{' '}
                now
              </h2>
            </div>
          </div>

          <div className='mx-auto max-w-6xl px-6 lg:px-8'>
            <div className='relative flex flex-col items-center md:grid grid-cols-2 gap-40'>
              <img
                src='/arrow.png'
                className='absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0'
              />

              <div className='relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl'>
                <img
                  src='/steve-jobs.png'
                  className='rounded-xl object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full'
                />
              </div>

              <TemplateMac className='w-full' imgSrc='/steve-jobs-mac.png' />
            </div>
          </div>

          <ul className='mx-auto mt-20 max-w-prose sm:text-lg space-y-2 w-fit'>


            <div className='flex flex-col justify-center'>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              High-quality ink
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              Scratch and fingerprint resistant coating
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />
              Wireless charging compatible
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-green-600 inline mr-1.5' />5 year
              print warranty
            </li>
            <Link
              href='/configure/upload'
              className={cn(buttonVariants({
                size: 'sm',
                variant: 'purple',
              }), 'md:h-12 rounded-md px-8 text-md mt-8')}>
              Create case
              <ArrowRight className='ml-1.5 h-5 w-5' />
        </Link>
            </div>
          </ul>
          </MaxWidthWrapper>
          </section>

       {/* value proposition section */}
       <section className='grainy-dark py-24'>
       <CustomerReview />
       <div className='pt-16'>
          <h2 className="pt-20 order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-white capitalize"><span className='bg-gradient-to-r from-slate-800 to-violet-600 rounded-md px-4'>Customs</span> ideas</h2>
          <Reviews />
        </div>
       </section>
    </div>
  ); 
}
