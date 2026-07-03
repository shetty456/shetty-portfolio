'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Clock } from 'lucide-react'

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
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Case Studies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Plum Personal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Link href="/case-studies/plum-personal" className="group block bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300">
              {/* Cover */}
              <div className="h-48 bg-gradient-to-br from-slate-900 via-slate-800 to-pink-950 flex items-end p-6 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-pink-500/10 border border-pink-500/20" />
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-pink-500/10 border border-pink-500/20" />
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-pink-400 bg-pink-400/10 border border-pink-400/20 px-2.5 py-1 rounded-full">Product Strategy</span>
                  <span className="text-xs font-semibold text-slate-400 bg-white/10 px-2.5 py-1 rounded-full">Health-tech · B2B2C</span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Plum Personal — ARPU &amp; CLTV Growth Strategy
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 mt-0.5 transition-colors" />
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  How a unified app — holding both employer and personal insurance — transforms Plum from an episodic claims tool into a weekly health habit, growing ARPU and CLTV.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  {[
                    { label: 'Base revenue lift', value: '~12.6%' },
                    { label: 'Lives covered', value: '6L+' },
                    { label: 'NPS', value: '79' },
                  ].map(stat => (
                    <div key={stat.label}>
                      <span className="font-bold text-slate-900">{stat.value}</span>
                      <span className="text-slate-400 ml-1">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Coming soon */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
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
              <p className="text-slate-400 text-sm">Case study being written — check back soon.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
