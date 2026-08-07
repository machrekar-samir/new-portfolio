import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`glass rounded-[28px] ${className}`}
      whileHover={
        hover
          ? { y: -4, boxShadow: '0 0 40px rgba(45, 212, 191, 0.14)' }
          : undefined
      }
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
