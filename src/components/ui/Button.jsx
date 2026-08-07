import { motion } from 'framer-motion'

const variants = {
  primary:
    'btn-gradient text-white shadow-[0_0_30px_rgba(45,212,191,0.28)] hover:shadow-[0_0_40px_rgba(45,212,191,0.42)]',
  outline:
    'border border-primary/40 text-white hover:border-primary hover:text-primary bg-transparent hover:bg-primary/5',
  ghost: 'text-muted hover:text-primary bg-transparent',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  icon: Icon,
  iconRight: IconRight,
  type = 'button',
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer'

  const classes = `${base} ${variants[variant]} ${className}`

  const content = (
    <>
      {Icon && <Icon size={18} />}
      {children}
      {IconRight && <IconRight size={18} />}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  )
}
