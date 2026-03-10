'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock } from 'lucide-react'

export default function CaseStudies() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="case-studies" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Case Studies</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-2">
            Deep dives
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100"
            >
              <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 text-slate-400">
                  <Clock className="w-8 h-8" />
                  <span className="text-sm font-medium">Coming soon</span>
                </div>
              </div>
              <div className="p-8">
                <div className="h-4 bg-slate-100 rounded w-3/4 mb-3" />
                <div className="h-3 bg-slate-100 rounded w-full mb-2" />
                <div className="h-3 bg-slate-100 rounded w-5/6 mb-6" />
                <p className="text-slate-400 text-sm">Case studies are being written — check back soon.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
