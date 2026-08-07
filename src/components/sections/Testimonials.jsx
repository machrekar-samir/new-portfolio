import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  const testimonial = testimonials[current]

  return (
    <section id="testimonials" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading label="Testimonials" title="What People Say" />
          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 text-white transition-all hover:border-accent/40 hover:text-accent"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 text-white transition-all hover:border-accent/40 hover:text-accent"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <GlassCard className="relative overflow-hidden p-8 md:p-12" hover={false}>
          <Quote
            size={80}
            className="absolute top-6 right-8 text-accent/10 md:top-8 md:right-12"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:gap-10 md:text-left"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="h-20 w-20 flex-shrink-0 rounded-full border-2 border-accent/30 object-cover shadow-[0_0_24px_rgba(20,241,217,0.2)]"
              />
              <div>
                <p className="mb-6 text-lg leading-relaxed text-white/90 md:text-xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-sora font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-accent">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-accent' : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
