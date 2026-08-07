import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowUpRight } from 'lucide-react'
import { blogPosts } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import GlassCard from '../ui/GlassCard'

export default function Blog() {
  return (
    <div className="relative py-10 lg:py-14">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-8">
        <SectionHeading
          label="Blog"
          title="Latest Articles"
          subtitle="Thoughts on design, development, and building better digital products."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group block"
            >
              <GlassCard className="h-full overflow-hidden p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full border border-primary/30 bg-bg/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-poppins mb-3 flex items-start justify-between gap-2 text-base font-semibold text-white transition-colors group-hover:text-primary">
                    {post.title}
                    <ArrowUpRight
                      size={16}
                      className="mt-0.5 flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}
