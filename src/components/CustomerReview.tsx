'use client'

import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Check, Star } from 'lucide-react'

export default function CustomerReview() {
  return (   
        <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
          <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
            <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-white'>
              What {' '}
              <span className='bg-gradient-to-r from-slate-800 to-violet-600 rounded-md px-4'>
              our customers
              </span>{' '}
              say
            </h2>
        </div>

        <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
            <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2'>
                  <Star className='h-5 w-5 text-purple-500 fill-purple-500' />
                  <Star className='h-5 w-5 text-purple-500 fill-purple-500' />
                  <Star className='h-5 w-5 text-purple-500 fill-purple-500' />
                  <Star className='h-5 w-5 text-purple-500 fill-purple-500' />
                  <Star className='h-5 w-5 text-purple-500 fill-purple-500' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "The case feels durable and I even got a compliment on the
                  design. Had the case for two and a half months now and{' '}
                  <span className='p-0.5 px-1 bg-purple-700 text-white'>
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it."
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                  className='rounded-full h-12 w-12 object-cover'
                  src='/users/user-1.png'
                  alt='user'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>Jonathan</p>
                  <div className='flex gap-1.5 items-center text-zinc-200'>
                    <Check className='h-4 w-4 stroke-[3px] text-purple-500' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
             {/* second user review */}
             <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20'>
              <div className='flex gap-0.5 mb-2'>
                <Star className='h-5 w-5 text-purple-500 fill-purple-500' />
                <Star className='h-5 w-5 text-purple-500 fill-purple-500' />
                <Star className='h-5 w-5 text-purple-500 fill-purple-500' />
                <Star className='h-5 w-5 text-purple-500 fill-purple-500' />
                <Star className='h-5 w-5 text-purple-500 fill-purple-500' />
              </div>
              <div className='text-lg leading-8'>
                <p>
                  "I usually keep my phone together with my keys in my pocket
                  and that led to some pretty heavy scratchmarks on all of my
                  last phone cases. This one, besides a barely noticeable
                  scratch on the corner,{' '}
                  <span className='p-0.5 px-1 bg-purple-700 text-white'>
                    looks brand new after about half a year
                  </span>
                  . I dig it."
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                  className='rounded-full h-12 w-12 object-cover'
                  src='/users/user-4.jpg'
                  alt='user'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>Josh</p>
                  <div className='flex gap-1.5 items-center text-zinc-200'>
                  <Check className='h-4 w-4 stroke-[3px] text-purple-500' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
              
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
        </MaxWidthWrapper>
  )
}
