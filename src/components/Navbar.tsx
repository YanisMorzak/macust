import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { cn } from '../lib/utils'

const Navbar = async () => {

  // obtenir les informations de session de l'utilisateur actuellement connecté
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  // vérifie si l'utilisateur connecté est un administrateur en comparant son adresse e-mail avec une adresse e-mail administrateur définie dans les variables d'environnement
  const isAdmin = user?.email === process.env.ADMIN_EMAIL

  return (
    <nav className='sticky z-[100] h-20 inset-x-0 top-0 w-full border-b border-slate-600 bg-slate-800 backdrop-blur-lg transition-all text-white'>
      <MaxWidthWrapper>
        <div className='flex h-20 items-center justify-between border-b border-slate-600'>
          <Link href='/' className='flex z-40 font-semibold text-4xl'>
            Ma<span className='text-purple-600'>cust</span>
          </Link>
        <div className='h-full flex items-center space-x-4'>
        {user ? (
            <>
            <Link
                href='/api/auth/logout'
                 className={cn(buttonVariants({
                  size: 'sm',
                  variant: 'purple',
                }), 'md:h-10 rounded-md px-8')}>
                Sign out
            </Link>
            {isAdmin ? (
                  <Link
                    href='/dashboard'
                    className={cn(buttonVariants({
                      size: 'sm',
                      variant: 'secondary',
                    }), 'md:h-10 rounded-md px-8')}>
                    Dashboard ✨
                  </Link>
            ): null}
            <Link
                  href='/configure/upload'
                  className={cn(buttonVariants({
                    size: 'sm',
                    variant: 'purple',
                  }), 'md:h-10 rounded-md px-8')}>
                  Create case
                  <ArrowRight className='ml-1.5 h-5 w-5' />
                </Link>
            </>
        ): <>
        <Link
            href='/api/auth/register'
             className={cn(buttonVariants({
              size: 'sm',
              variant: 'purple',
            }), 'md:h-10 rounded-md px-8 text-md')}>
            Sign up
        </Link>
       
        <Link
            href='/api/auth/login'
            className={cn(buttonVariants({
              size: 'sm',
              variant: 'secondary',
            }), 'md:h-10 rounded-md px-8 text-md')}>
            Login
        </Link>
        <div className='h-8 w-px bg-zinc-200 hidden sm:block' />
        <Link
              href='/configure/upload'
              className={cn(buttonVariants({
                size: 'sm',
                variant: 'purple',
              }), 'md:h-10 rounded-md px-8 text-md')}>
              Create case
              <ArrowRight className='ml-1.5 h-5 w-5' />
        </Link>
        </>}
        </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar