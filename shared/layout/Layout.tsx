import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

interface I_Layout {
  children: React.ReactNode
}

const Layout = ({ children }: I_Layout) => {
  const router = useRouter()
  const { pathname } = router
  const [closeNotification, setCloseNotification] = React.useState(false)
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout;
