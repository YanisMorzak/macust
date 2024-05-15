import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'

const Navbar = async () => {

  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-slate-600 bg-slate-800 backdrop-blur-lg transition-all text-white'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-slate-600'>
          <Link href='/' className='flex z-40 font-semibold'>
            Ma<span className='text-purple-600'>cust</span>
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar