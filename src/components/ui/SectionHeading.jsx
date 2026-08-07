import { motion } from 'framer-motion'

export default function SectionHeading({ label, title, subtitle, align = 'left' }) {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className={`mb-10 md:mb-14 ${isCenter ? 'text-center' : ''}`}
    >
      {label && (
        <span className="mb-3 inline-block text-sm font-medium tracking-widest text-primary uppercase">
          {label}
        </span>
      )}
      <h2 className="font-poppins text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-muted leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
