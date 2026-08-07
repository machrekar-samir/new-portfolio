import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navLinks, personalInfo } from '../../data/portfolio'

export default function TopNavbar() {
  const topLinks = navLinks.filter((l) => l.id !== 'contact')

  return (
<header className="fixed top-0 left-0 right-0 z-50 hidden border-b border-white/5 glass-strong lg:block">      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-4">
        <NavLink to="/" className="font-poppins text-xl font-bold text-white">
          {personalInfo.firstName}
          <span className="text-primary">.</span>
        </NavLink>

        <nav className="flex items-center gap-0.5">
          {topLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `relative rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive ? 'text-primary' : 'text-muted hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-xl border border-primary/20 bg-primary/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="btn-gradient rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(45,212,191,0.25)] transition-all duration-300 hover:shadow-[0_0_32px_rgba(45,212,191,0.4)]"
        >
          Contact Me
        </NavLink>
      </div>
    </header>
  )
}
