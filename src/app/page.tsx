import MaxWidthWrapper from "@/src/components/MaxWidthWrapper";
import TemplateMac from "@/src/components/TemplateMac";
import { Check, Star } from "lucide-react";
import CustomerReview from "../components/CustomerReview";
import {  Reviews } from "../components/Reviews";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-800 via-violet-800 to-slate-800 text-white">
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

              <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5 mx-auto'>
                <div className='flex -space-x-4'>
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-1.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-2.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-3.png'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-4.jpg'
                    alt='user image'
                  />
                  <img
                    className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user-5.jpg'
                    alt='user image'
                  />
                </div>
                <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                    <Star className='h-4 w-4 text-purple-500 fill-purple-500' />
                    <Star className='h-4 w-4 text-purple-500 fill-purple-500' />
                    <Star className='h-4 w-4 text-purple-500 fill-purple-500' />
                    <Star className='h-4 w-4 text-purple-500 fill-purple-500' />
                    <Star className='h-4 w-4 text-purple-500 fill-purple-500' />
                  </div>

                  <p>
                    <span className='font-semibold'>1.250</span> happy customers
                  </p>
                </div>
                </div>

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

       {/* value proposition section */}
       <section className='grainy-dark py-24'>
       <CustomerReview />
       <div className='pt-16'>
          <h2 className="pt-8 order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-white capitalize"><span className='bg-gradient-to-r from-slate-800 to-violet-600 rounded-md px-4'>Customs</span> ideas</h2>
          <Reviews />
        </div>
       </section>

       <section>
        <MaxWidthWrapper className='py-24'>
          <div className='mb-12 px-6 lg:px-8'>
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
          </MaxWidthWrapper>
          </section>
    </div>
  ); 
}
