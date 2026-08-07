import { skillsByCategory } from '../../data/portfolio'

const skillEmojis = {
  react: '⚛️',
  js: '⚡',
  html: '🌐',
  css: '🎨',
  tailwind: '💨',
  node: '🟢',
  express: '🚀',
  mongo: '🍃',
  git: '🔀',
  figma: '🎯',
  vscode: '💻',
  motion: '✨',
  api: '🔗',
}

export default function SkillOrbit({ category = 'Frontend' }) {
  const skills = skillsByCategory[category] || []
  const size = 360
  const cx = size / 2
  const cy = size / 2
  const radius = 120

  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ width: size, height: size, maxWidth: '100%' }}
    >
      <div className="absolute inset-0 rounded-full border border-primary/10 bg-primary/5 animate-pulse-glow" />
      <div className="absolute rounded-full border border-dashed border-secondary/25" style={{ inset: '2rem' }} />
      <div className="absolute rounded-full border border-violet/15" style={{ inset: '3.5rem' }} />

      <div className="absolute h-14 w-14 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_40px_rgba(45,212,191,0.5)]" />

      <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        {skills.map((_, i) => {
          const angle = (i / skills.length) * 360 - 90
          const rad = (angle * Math.PI) / 180
          const x = cx + Math.cos(rad) * radius
          const y = cy + Math.sin(rad) * radius
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="url(#orbitGrad)"
              strokeWidth="1"
              opacity="0.35"
            />
          )
        })}
      </svg>

      {skills.map((skill, i) => {
        const angle = (i / skills.length) * 360 - 90
        const rad = (angle * Math.PI) / 180
        const x = cx + Math.cos(rad) * radius
        const y = cy + Math.sin(rad) * radius

        return (
          <div
            key={skill.name}
            className="absolute flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-bg-card/80 text-xl backdrop-blur-sm shadow-[0_0_20px_rgba(45,212,191,0.12)]"
            style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
            title={skill.name}
          >
            {skillEmojis[skill.icon]}
          </div>
        )
      })}
    </div>
  )
}
