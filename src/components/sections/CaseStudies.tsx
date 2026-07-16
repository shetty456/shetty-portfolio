'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

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

          {/* Cult.fit Growth Machine */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/case-studies/cult-growth-machine" className="group block bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300">
              {/* Cover */}
              <div className="h-48 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 flex items-end p-6 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-orange-500/10 border border-orange-500/20" />
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-orange-500/10 border border-orange-500/20" />
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-orange-400 bg-orange-400/10 border border-orange-400/20 px-2.5 py-1 rounded-full">Growth</span>
                  <span className="text-xs font-semibold text-slate-400 bg-white/10 px-2.5 py-1 rounded-full">Health-tech · Analytics</span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Cult.fit Growth Machine — Conversion Funnel MVP
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 mt-0.5 transition-colors" />
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  A decision-making system that moves Cult.fit from tracking metrics to surfacing actions — built around the 3×4 habit formation signal.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  {[
                    { label: 'retention uplift', value: '3×' },
                    { label: 'members studied', value: '1.5L' },
                    { label: 'intelligence engine', value: '5-rule' },
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

        </div>
      </div>
    </section>
  )
}
