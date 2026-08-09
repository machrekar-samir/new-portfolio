import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { personalInfo, socialLinks } from '../../data/portfolio'
import Button from '../ui/Button'
import GlassCard from '../ui/GlassCard'
import SocialIcons from '../ui/SocialIcons'
import { supabase } from '../../lib/supabase'

const contactDetails = [
  { icon: Mail, label: 'Email', value: personalInfo.email },
  { icon: Phone, label: 'Phone', value: personalInfo.phone },
  { icon: MapPin, label: 'Location', value: personalInfo.location },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

 const handleSubmit = async (e) => {
  e.preventDefault()

  const { error } = await supabase
    .from('Contact_messages')
    .insert([
      {
        Name: form.name,
        Email: form.email,
        Subject: form.subject,
        message: form.message,
      },
    ])

  if (error) {
    console.error('Supabase error:', error)
    alert('Message send nahi hua. Please try again.')
    return
  }

  alert('Message successfully sent!')

  setForm({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
}
  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted/60 outline-none transition-all focus:border-primary/40 focus:shadow-[0_0_20px_rgba(45,212,191,0.08)]'

  return (
    <div className="relative py-10 lg:py-14">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <span className="mb-3 inline-block text-sm font-medium tracking-widest text-primary uppercase">
                Contact
              </span>
              <h2 className="font-poppins text-3xl font-bold tracking-tight text-white md:text-4xl">
                Let&apos;s Work Together!
              </h2>
              <p className="mt-4 max-w-md text-muted leading-relaxed">
                Have a project in mind or want to collaborate? Drop me a message and I&apos;ll get
                back to you as soon as possible.
              </p>
            </motion.div>

            <div className="mb-8 space-y-4">
              {contactDetails.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{label}</p>
                    <p className="font-medium text-white">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <SocialIcons links={socialLinks} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <GlassCard className="p-6 md:p-8" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-muted">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-muted">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm text-muted">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Project inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button type="submit" icon={Send} className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
