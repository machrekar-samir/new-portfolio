import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, personalInfo } from '../../data/portfolio'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-white/5 glass-strong px-5 py-4 lg:hidden">
        <NavLink to="/" onClick={close} className="font-poppins text-xl font-bold text-white">
          {personalInfo.firstName}
          <span className="text-primary">.</span>
        </NavLink>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 text-white transition-colors hover:border-primary/40"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-bg/70 backdrop-blur-sm lg:hidden"
              onClick={close}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-50 flex h-full w-[min(320px,85vw)] flex-col border-l border-white/5 glass-strong lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
                <span className="font-poppins text-lg font-bold text-white">Menu</span>
                <button
                  onClick={close}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-1 p-4">
                {navLinks.map(({ path, label, number }, i) => (
                  <motion.div
                    key={path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={path}
                      end={path === '/'}
                      onClick={close}
                      className={({ isActive }) =>
                        `flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-muted hover:bg-white/5 hover:text-white'
                        }`
                      }
                    >
                      <span className="text-xs font-semibold text-primary/60">{number}</span>
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto border-t border-white/5 p-6">
                <NavLink
                  to="/contact"
                  onClick={close}
                  className="btn-gradient block w-full rounded-full py-3.5 text-center text-sm font-semibold text-white shadow-[0_0_30px_rgba(45,212,191,0.3)]"
                >
                  Contact Me
                </NavLink>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
