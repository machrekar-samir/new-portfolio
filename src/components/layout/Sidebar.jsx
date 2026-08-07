import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navLinks, personalInfo } from '../../data/portfolio'

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 z-40 hidden h-screen w-[220px] flex-col border-r border-white/5 glass-strong lg:flex">
      <div className="flex flex-1 flex-col px-5 py-8">
        <NavLink to="/" className="font-poppins mb-10 block text-xl font-bold text-white">
          {personalInfo.firstName}
          <span className="text-primary">.</span>
        </NavLink>

        <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">
          Pages
        </p>

        <nav className="flex flex-col gap-0.5">
          {navLinks.map(({ path, label, number }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `group relative flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all duration-300 ${
                  isActive ? 'text-primary' : 'text-muted hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 rounded-xl border border-primary/25 bg-primary/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 text-xs font-semibold text-primary/60">
                    {number}
                  </span>
                  <span className="relative z-10">{label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="sidebar-dot"
                      className="relative z-10 ml-auto h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_#2DD4BF]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/5 p-5">
        <NavLink
          to="/contact"
          className="block w-full cursor-pointer rounded-full border border-primary/35 px-4 py-2.5 text-center text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/10 hover:shadow-[0_0_24px_rgba(45,212,191,0.15)]"
        >
          Contact Me
        </NavLink>
      </div>
    </aside>
  )
}
