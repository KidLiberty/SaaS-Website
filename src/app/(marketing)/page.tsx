import type { ReactNode } from 'react'
import Link from 'next/link'
import { SignUpButton } from '@clerk/nextjs'
import { ArrowRight, CheckIcon } from 'lucide-react'

import { NeonIcon } from './_icons/Neon'
import { ClerkIcon } from './_icons/Clerk'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { subscriptionTiersInOrder } from '../../data/subscriptionTiers'
import { formatCompactNumber } from '@/lib/formatters'
import { cn } from '@/lib/utils'
import { BrandLogo } from '@/components/BrandLogo'

/*
  text-balance for formatting on small screen sizes
  tracking-tight for bigger text readability
*/

export default function HomePage() {
  return (
    <>
      <section className='min-h-screen flex flex-col px-4 gap-8 justify-center items-center text-center text-balance bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)]'>
        <h1 className='m-4 text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight'>Price Smarter, Sell Bigger!</h1>
        <p className='max-w-screen-xl text-lg lg:text-3xl'>Optimize your product pricing across countries to maximize sales. Capture 85% of the untapped market with location-based dynamic pricing</p>
        <SignUpButton>
          <Button className='flex p-6 gap-2 text-lg rounded-xl'>
            Get started for free <ArrowRight className='size-5' />
          </Button>
        </SignUpButton>
      </section>
      <section className='bg-primary text-primary-foreground'>
        <div className='container flex flex-col py-16 px-8 lg:px-16 gap-16'>
          <h2 className='text-3xl text-center text-balance'>Trusted by the top modern companies</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16'>
            <Link href='/https://neon.tech'><NeonIcon /></Link>
            <Link href='/https://clerk.com'><ClerkIcon /></Link>
            <Link href='/https://neon.tech'><NeonIcon /></Link>
            <Link href='/https://clerk.com'><ClerkIcon /></Link>
            <Link href='/https://neon.tech'><NeonIcon /></Link>
            <Link href='/https://clerk.com'><ClerkIcon /></Link>
            <Link href='/https://neon.tech'><NeonIcon /></Link>
            <Link href='/https://clerk.com'><ClerkIcon /></Link>
            <Link href='/https://neon.tech'><NeonIcon /></Link>
            <Link className='md:max-xl:hidden' href='/https://clerk.com'><ClerkIcon /></Link>
          </div>
        </div>
      </section>
      <section id='pricing' className='px-8 py-16 bg-accent/5'>
        <h2 className='mb-8 text-4xl text-center text-balance font-semibold'>Pricing software which pays for itself 20x over</h2>
        <div className='container grid grid-cols-2 lg:grid-cols-4 gap-4 mx-auto'>
          {subscriptionTiersInOrder.map(subscriptionTier => <PricingCard key={subscriptionTier.name} {...subscriptionTier} />)}
        </div>
      </section>
      <footer className='container pt-16 pb-8 flex flex-col sm:flex-row gap-8 sm:gap-4 items-start'>
        <Link className='mr-8' href='/'><BrandLogo /></Link>
        <div className='flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-lg'>
          <FooterLinkGroup
            title='Help'
            links={[
              { label: 'PPP Discounts', href: '#' },
              { label: 'Discount API', href: '#' },
            ]}
          />
          <FooterLinkGroup
            title='Solutions'
            links={[
              { label: 'Newsletter', href: '#' },
              { label: 'SaaS Business', href: '#' },
              { label: 'Online Courses', href: '#' },
            ]}
          />
          <FooterLinkGroup
            title='Features'
            links={[{ label: 'PPP Discounts', href: '#' }]}
          />
          <FooterLinkGroup
            title='Tools'
            links={[
              { label: 'Salary Converter', href: '#' },
              { label: 'Coupon Generator', href: '#' },
              { label: 'Stripe App', href: '#' },
            ]}
          />
          <FooterLinkGroup
            title='Company'
            links={[
              { label: 'Affiliate', href: '#' },
              { label: 'Twitter', href: '#' },
              { label: 'Terms of Service', href: '#' },
            ]}
          />
          <FooterLinkGroup
            title='Integrations'
            links={[
              { label: 'Lemon Squeezy', href: '#' },
              { label: 'Gumroad', href: '#' },
              { label: 'Stripe', href: '#' },
              { label: 'Chargebee', href: '#' },
              { label: 'Paddle', href: '#' },
            ]}
          />
          <FooterLinkGroup
            title='Tutorials'
            links={[
              { label: 'Any Website', href: '#' },
              { label: 'Lemon Squeezy', href: '#' },
              { label: 'Gumroad', href: '#' },
              { label: 'Stripe', href: '#' },
              { label: 'Chargebee', href: '#' },
              { label: 'Paddle', href: '#' },
            ]}
          />
        </div>
      </footer>
    </>
  )
}

function PricingCard({ name, priceInCents, maxNumberOfVisits, maxNumberOfProducts, canRemoveBranding, canAccessAnalytics, canCustomizeBanner }: (typeof subscriptionTiersInOrder)[number]) {
  const isMostPopular = name === 'Standard'
  return (
    <Card>
      <CardHeader>
        <div className='mb-8 text-accent font-semibold'>{name}</div>
        <CardTitle className='text-xl font-bold'>${priceInCents / 100} /mo</CardTitle>
        <CardDescription>{formatCompactNumber(maxNumberOfVisits)} pricing page visits /mo</CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button className='w-full text-lg rounded-lg' variant={isMostPopular ? 'accent' : 'default'}>Get Started</Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className='flex flex-col gap-4 items-start'>
        <Feature className='font-bold'>{maxNumberOfProducts} {maxNumberOfProducts === 1 ? 'product' : 'products'}</Feature>
        <Feature className=''>PPP Discounts</Feature>
        {canCustomizeBanner && <Feature>Banner Customization</Feature>}
        {canAccessAnalytics && <Feature>Advanced Analytics</Feature>}
        {canRemoveBranding && <Feature>Remove Easy PPP Branding</Feature>}
      </CardFooter>
    </Card>
  )
}

function Feature({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <CheckIcon className='size-4 p-0.5 stroke-accent bg-accent/25 rounded-full' />
      <span>{children}</span>
    </div>
  )
}

function FooterLinkGroup({ title, links }: { title: string, links: { label: string, href: string }[] }) {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='font-semibold'>{title}</h3>
      <ul className='flex flex-col gap-2 text-sm'>
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}