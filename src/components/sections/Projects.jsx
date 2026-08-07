import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects, projectCategories } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <div className="relative py-10 lg:py-14">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="My Projects"
          subtitle="Selected work showcasing design craft and technical execution."
          align="center"
        />

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'btn-gradient text-white shadow-[0_0_20px_rgba(45,212,191,0.22)]'
                  : 'border border-white/10 text-muted hover:border-primary/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <GlassCard className="group overflow-hidden p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-poppins mb-2 text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted">{project.description}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-secondary"
                    >
                      View Project
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
