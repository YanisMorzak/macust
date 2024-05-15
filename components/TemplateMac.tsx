import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface MacProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  dark?: boolean
}

const TemplateMac = ({ imgSrc, className, dark = false, ...props }: MacProps) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}>
      <img
        src={
          '/mac-template-2.png'
        }
        className='pointer-events-none z-50 select-none'
        alt='macbook image'
      />

      <div className='absolute z-80 inset-0'>
        <img
          className='object-cover h-full'
          src={imgSrc}
          alt='overlaying macbook image'
        />
      </div>
    </div>
  )
}

export default TemplateMac