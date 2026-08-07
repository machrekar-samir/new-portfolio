import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Download, ArrowUpRight } from 'lucide-react'
import { personalInfo, socialLinks, featuredProject } from '../../data/portfolio'
import Button from '../ui/Button'
import SocialIcons from '../ui/SocialIcons'
import GlassCard from '../ui/GlassCard'

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Hero() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-[calc(100vh-80px)]">
<div className="mx-auto max-w-[1500px] px-8 py-8 lg:px-12 lg:py-12">        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-14">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="flex-1 text-center lg:text-left"
          >
            <motion.p variants={fadeUp} className="mb-3 text-lg font-medium text-muted">
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-poppins text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.5rem] xl:text-6xl"
            >
              {personalInfo.firstName}{' '}
              <span className="text-gradient">{personalInfo.lastName}</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-3 text-xl font-semibold sm:text-2xl">
              <span className="text-gradient-cyan">{personalInfo.title}</span>
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-lg text-muted leading-relaxed mx-auto lg:mx-0"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <Button iconRight={ArrowRight} onClick={() => navigate('/projects')}>
                View My Work
              </Button>
              <Button variant="outline" icon={Download} href={personalInfo.cvUrl}>
                Download CV
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex justify-center lg:justify-start">
              <SocialIcons links={socialLinks} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex-shrink-0 animate-float"
          >
            <div className="absolute -inset-8 blob-glow bg-gradient-to-br from-primary/25 via-secondary/10 to-violet/10 blur-2xl animate-pulse-glow" />
            <div className="relative p-2">
              <div className="blob-frame overflow-hidden border-2 border-primary/40 glow-ring">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                  alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
                  className="h-[300px] w-[260px] object-cover sm:h-[360px] sm:w-[300px] lg:h-[400px] lg:w-[340px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-10 pb-8 lg:mt-14"
        >
          <GlassCard className="overflow-hidden p-0" hover={false}>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <span className="mb-2 text-xs font-medium tracking-widest text-primary uppercase">
                  Featured Project
                </span>
                <h3 className="font-poppins mb-2 text-2xl font-bold text-white">
                  {featuredProject.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {featuredProject.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={featuredProject.url}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors"
                >
                  View Project
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="relative h-48 overflow-hidden md:h-auto md:w-[42%]">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-bg-card/80 via-transparent to-transparent md:bg-gradient-to-l" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  )
}
