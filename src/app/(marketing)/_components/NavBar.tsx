import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'

import { BrandLogo } from '@/components/BrandLogo'

export function NavBar() {
  return (
    <header className='w-full fixed top-0 flex py-6 shadow-xl bg-background/95 z-10'>
      <nav className='container flex items-center gap-10 font-semibold'>
        {/* Cool way to space instead of jb */}
        <Link className='mr-auto' href='/'><BrandLogo /></Link>
        <Link className='text-lg' href='#'>Features</Link>
        <Link className='text-lg' href='/#pricing'>Pricing</Link>
        <Link className='text-lg' href='#'>About</Link>
        <span className='text-lg'>
          <SignedIn>
            <Link href='/dashboard'>Dashboard</Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>Login</SignInButton>
          </SignedOut>
        </span>
      </nav>
    </header>
  )
}