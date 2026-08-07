import { motion } from 'framer-motion'

export default function ProgressBar({ label, level, delay = 0 }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-white">{label}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="progress-bar h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
