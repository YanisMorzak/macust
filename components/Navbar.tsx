import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'

const Navbar = async () => {
  const user = true

  return (
    <nav className='sticky z-[100] h-14 lg:h-16 inset-x-0 top-0 w-full border-b border-slate-600 bg-slate-800 backdrop-blur-lg transition-all text-white'>
      <MaxWidthWrapper>
        <div className='flex h-14 lg:h-16 items-center justify-between border-b border-slate-600'>
          <Link href='/' className='flex z-40 font-semibold text-2xl lg:text-3xl'>
            Ma<span className='text-purple-600'>cust</span>
          </Link>
        <div className='h-full flex items-center space-x-4'>
        {user ? (
              <>
            <Link
                href='/api/auth/logout'
                 className={buttonVariants({
                 size: 'sm',
                 variant: 'purple',
                })}>
                Sign out
            </Link>
            </>
        ): <></>}
        </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar