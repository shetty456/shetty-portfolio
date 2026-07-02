'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'

const stats = [
  { value: '15%→28%', label: 'D1 Retention' },
  { value: '1M+', label: 'Users Shipped' },
  { value: '90+', label: 'Weekly Active Educators' },
]

export default function Hero() {
  return (
    <section className="min-h-0 flex items-center pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Left — 60% */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Available for New Opportunities
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h2 className="text-lg font-semibold text-slate-600 mb-1">Hi, I'm Sunil Hanamshetty</h2>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900 mb-6"
            >
              Experimentation{' '}
              <span className="text-blue-600">Driven</span>{' '}
              Product Builder
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-slate-500 leading-relaxed mb-6 max-w-xl"
            >
              4+ years shipping EdTech, FinTech, and Health products at 1M+ user scale.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 w-full sm:w-auto"
              >
                <a href="#case-studies">
                  View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-slate-200 hover:border-blue-200 hover:text-blue-600 w-full sm:w-auto"
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start"
            >
              {stats.map(stat => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl px-4 py-3 border border-blue-100 shadow-sm"
                >
                  <div className="text-3xl font-extrabold text-blue-700">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — 40% — profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex lg:col-span-2 justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Soft glow backdrop */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-300 opacity-40 blur-xl" />
              {/* Photo */}
              <div className="absolute inset-0 rounded-full overflow-hidden ring-4 ring-white shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Sunil Hanamshetty"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
