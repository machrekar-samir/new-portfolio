import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import BackgroundEffect from './BackgroundEffect'
// import Sidebar from './Sidebar'
import TopNavbar from './TopNavbar'
import MobileMenu from './MobileMenu'
import Footer from '../sections/Footer'
import PageTransition from '../ui/PageTransition'

export default function PageLayout() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen text-white">
      <BackgroundEffect />
      {/* <Sidebar /> */}

      <div className="relative z-10">        <TopNavbar />
        <MobileMenu />

        <main className="min-h-screen pt-[72px] lg:pt-[80px]">
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  )
}
