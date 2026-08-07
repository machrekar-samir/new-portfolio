import { motion } from 'framer-motion'
import { MapPin, Mail, User, Clock } from 'lucide-react'
import { personalInfo, stats } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

const infoItems = [
  { icon: User, label: 'Name', value: `${personalInfo.firstName} ${personalInfo.lastName}` },
  { icon: Mail, label: 'Email', value: personalInfo.email },
  { icon: MapPin, label: 'Location', value: personalInfo.location },
  { icon: Clock, label: 'Availability', value: personalInfo.availability },
]

export default function About() {
  return (
    <div className="relative py-10 lg:py-14">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              label="About Me"
              title="About Me"
              subtitle={personalInfo.aboutExtended}
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {infoItems.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3.5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{label}</p>
                    <p className="text-sm font-medium text-white">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="absolute -inset-4 blob-glow bg-primary/10 blur-xl" />
            <div className="relative">
              <div className="blob-frame overflow-hidden border border-primary/30 glow-ring">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                  alt="About me"
                  className="h-[300px] w-full object-cover sm:h-[340px]"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-4 -right-4 rounded-2xl border border-primary/20 bg-bg-card/90 px-5 py-4 backdrop-blur-xl glow-primary"
              >
                <p className="font-poppins text-2xl font-bold text-primary">1+</p>
                <p className="text-xs text-muted">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {stats.map(({ label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
            >
              <GlassCard className="p-5 text-center sm:p-6" hover>
                <p className="font-poppins text-3xl font-bold text-gradient md:text-4xl">{value}</p>
                <p className="mt-2 text-xs text-muted sm:text-sm">{label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
