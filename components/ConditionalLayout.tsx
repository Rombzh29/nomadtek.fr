'use client'

import { usePathname } from 'next/navigation'
import Header from './header'
import Footer from './footer'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const pagesSansLayout = ['/card']

  const hideLayout = pagesSansLayout.includes(pathname)

  return (
    <>
      {!hideLayout && <Header />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  )
}