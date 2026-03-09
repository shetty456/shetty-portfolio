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
    <section className="min-h-screen flex items-center pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Left — 60% */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-blue-600 font-semibold text-sm tracking-wider uppercase mb-4">
                Product Manager
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900 mb-6"
            >
              Experimentation{' '}
              <span className="text-blue-600">Driven</span>{' '}
              Product Builder
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-500 leading-relaxed mb-10 max-w-xl"
            >
              I build products by running experiments, following data, and staying close to users.
              4+ years shipping EdTech, FinTech, and Health products — from 0→1 and at 1M+ user scale.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {stats.map(stat => (
                <div
                  key={stat.label}
                  className="bg-slate-50 rounded-2xl px-6 py-4 border border-slate-100"
                >
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
              >
                <a href="#case-studies">
                  View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-slate-200 hover:border-blue-200 hover:text-blue-600"
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right — 40% — abstract art */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Gradient blob */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-200 opacity-60" />
              <div className="absolute top-8 left-8 right-8 bottom-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-20" />
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-12 right-12 w-16 h-16 bg-blue-500 rounded-2xl opacity-80 rotate-12"
              />
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-16 left-12 w-12 h-12 bg-indigo-400 rounded-xl opacity-60 -rotate-6"
              />
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-600 rounded-3xl opacity-30"
              />
              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-700 opacity-80">SH</div>
                  <div className="text-xs text-blue-500 mt-1 font-medium tracking-wider uppercase">PM</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
