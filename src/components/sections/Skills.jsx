import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories, skillsByCategory } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import ProgressBar from '../ui/ProgressBar'
import SkillOrbit from '../ui/SkillOrbit'

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Frontend')
  const skills = skillsByCategory[activeTab] || []

  return (
    <div className="relative py-10 lg:py-14">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-8">
        <SectionHeading
          label="Skills"
          title="My Skills"
          subtitle="Technologies and tools I use to bring ideas to life."
          align="center"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeTab === cat
                  ? 'btn-gradient text-white shadow-[0_0_20px_rgba(45,212,191,0.22)]'
                  : 'border border-white/10 text-muted hover:border-primary/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          >
            <div className="space-y-5">
              {skills.map(({ name, level }, i) => (
                <ProgressBar key={name} label={name} level={level} delay={i * 0.08} />
              ))}
            </div>

            <div className="flex items-center justify-center">
              <SkillOrbit category={activeTab} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
