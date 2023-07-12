import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}
export const Layout = ({ children }: LayoutProps) => {
  return <div className="flex min-h-screen flex-col items-center justify-between p-24">{children}</div>
}
