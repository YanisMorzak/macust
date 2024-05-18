'use client'

import { cn } from '@/src/lib/utils'
import React, { HTMLAttributes } from 'react'
import TemplateMac from '../TemplateMac'

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
  }

export default function Review({ imgSrc, className, ...props }: ReviewProps) {
    const POSSIBLE_ANIMATION_DELAYS = [
        '0s',
        '0.1s',
        '0.2s',
        '0.3s',
        '0.4s',
        '0.5s',
      ]
    
      const animationDelay =
        POSSIBLE_ANIMATION_DELAYS[
          Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
        ]
  return (
    <div
        className={cn(
          'animate-fade-in rounded-[2.25rem] bg-gradient-to-br from-violet-700 to-purple-600 p-6 opacity-0 shadow-xl shadow-slate-900/5',
          className
        )}
        style={{ animationDelay }}
        {...props}>
        <TemplateMac imgSrc={imgSrc} />
      </div>
  )
}
