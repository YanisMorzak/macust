'use client'

import MaxWidthWrapper from '../MaxWidthWrapper'
import ReviewGrid from './ReviewGrid'

export function Reviews() {
    return (
      <MaxWidthWrapper className='relative max-w-5xl'>  
        <ReviewGrid />
      </MaxWidthWrapper>
    )
  }
