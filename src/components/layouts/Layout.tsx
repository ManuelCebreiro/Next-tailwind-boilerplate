import React from 'react'
import { Footer } from '../organism/Footer'
import { Navbar } from '../organism/Navbar'

type LayoutProps = {
  children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
