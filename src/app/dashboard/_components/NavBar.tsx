import { BrandLogo } from '@/components/BrandLogo'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className='container flex py-4 bg-background shadow'>
      <nav className='container flex items-center gap-10'>
        <Link className='mr-auto' href='/dashboard'><BrandLogo /></Link>
        <Link className='mr-auto' href='/dashboard/products'>Products</Link>
        <Link className='mr-auto' href='/dashboard/analytics'>Analytics</Link>
        <Link className='mr-auto' href='/dashboard/subscription'>Subscription</Link>
        <UserButton />
      </nav>
    </header>
  )
}
