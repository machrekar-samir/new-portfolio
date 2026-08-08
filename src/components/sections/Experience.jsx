import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'
import { experience } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

export default function Experience() {
  return (
    <div className="relative py-10 lg:py-14">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-8">
        <SectionHeading
          label="Career"
          title="Work Experience"
          subtitle="A timeline of roles where I've grown and shipped front-end products."
          align="center"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-0 bottom-0 left-[100px] w-px bg-gradient-to-b from-primary/40 via-secondary/20 to-transparent md:left-[118px]" />

          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
              className="relative mb-8 flex flex-col gap-5 md:mb-10 md:gap-8 md:flex-row md:pl-[118px] pl-10"
            >
              <div className="w-full flex-shrink-0 pt-1 md:w-[118px]">
                <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-2 text-[11px] font-semibold text-primary whitespace-nowrap shadow-[0_0_16px_rgba(45,212,191,0.12)]">
                  {item.period}
                </span>
              </div>

              <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-primary/40 via-secondary/20 to-transparent md:left-[118px]" />
              <div className="absolute left-6 top-5 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_12px_#2DD4BF] md:left-[118px]" />

              <div className="flex-1">
                <GlassCard className="p-5 md:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Building2 size={18} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-white">{item.role}</h3>
                      <p className="text-sm text-secondary">{item.company}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
