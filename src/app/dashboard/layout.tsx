import React, { type ReactNode } from 'react'

import { Navbar } from './_components/NavBar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    // Entire light blue screen
    <div className='min-h-screen bg-accent/5'>
      <Navbar />
      <div className='container py-6'>{children}</div>
    </div>
  )
}
