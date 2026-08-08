import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { personalInfo, socialLinks } from '../../data/portfolio'
import SocialIcons from '../ui/SocialIcons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row lg:px-8">
        <p className="text-sm text-muted">
          &copy; {year} {personalInfo.firstName} {personalInfo.lastName}. All rights reserved.
        </p>

        <SocialIcons links={socialLinks} />

        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="btn-gradient flex h-10 w-10 items-center justify-center rounded-full text-white transition-all hover:shadow-[0_0_24px_rgba(45,212,191,0.4)] hover:-translate-y-0.5"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  )
}
