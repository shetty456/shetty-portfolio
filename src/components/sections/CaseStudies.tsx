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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

          {/* ── Plum Personal ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Link href="/case-studies/plum-personal" className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300">

              {/* Hero — upward revenue trend */}
              <div className="h-56 bg-gradient-to-br from-[#1a0a2e] via-[#2d1155] to-[#6b21a8] relative overflow-hidden flex flex-col justify-between p-6 flex-shrink-0">
                {/* Sparkline */}
                <svg viewBox="0 0 200 60" className="absolute bottom-10 left-0 right-0 w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="pinkFade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#f9a8d4" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon points="0,55 40,44 80,36 120,22 160,11 200,3 200,60 0,60" fill="url(#pinkFade)" />
                  <polyline points="0,55 40,44 80,36 120,22 160,11 200,3" fill="none" stroke="#f9a8d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                </svg>
                {/* Metric */}
                <div className="relative z-10">
                  <div className="text-4xl font-black text-white tracking-tight leading-none">~12.6%</div>
                  <div className="text-pink-300 text-[11px] font-semibold mt-1.5 tracking-widest uppercase">Base revenue lift</div>
                </div>
                {/* Tags */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-pink-300 bg-pink-400/10 border border-pink-400/20 px-2.5 py-1 rounded-full">Product Strategy</span>
                  <span className="text-xs font-semibold text-slate-400 bg-white/10 px-2.5 py-1 rounded-full">Health-tech · B2B2C</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Plum Personal — ARPU &amp; CLTV Growth Strategy
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 mt-0.5 transition-colors" />
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Shift Plum from a yearly claims event to a weekly health habit. Strategy to grow ARPU by embedding personal insurance into daily life for 6L+ insured employees.
                </p>
                <div className="flex-1" />
                <div className="flex flex-wrap gap-4 text-sm pt-6 border-t border-slate-50 mt-6">
                  {[
                    { label: 'Base revenue lift', value: '~12.6%' },
                    { label: 'Lives covered', value: '6L+' },
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

          {/* ── Cult.fit Growth Machine ────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-full"
          >
            <Link href="/case-studies/cult-growth-machine" className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300">

              {/* Hero — 3×4 habit dot grid */}
              <div className="h-56 bg-gradient-to-br from-[#1c0a00] via-[#431407] to-[#9a3412] relative overflow-hidden flex flex-col justify-between p-6 flex-shrink-0">
                {/* Dot grid: 3 cols × 4 rows = the 3×4 habit signal */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-2.5">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-3.5 h-3.5 rounded-full transition-all ${
                        i < 10 ? 'bg-orange-400 shadow-[0_0_6px_rgba(251,146,60,0.6)]' : 'bg-orange-900/50'
                      }`}
                    />
                  ))}
                </div>
                {/* Metric */}
                <div className="relative z-10">
                  <div className="text-4xl font-black text-white tracking-tight leading-none">3×</div>
                  <div className="text-orange-300 text-[11px] font-semibold mt-1.5 tracking-widest uppercase">Retention uplift</div>
                </div>
                {/* Tags */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-orange-300 bg-orange-400/10 border border-orange-400/20 px-2.5 py-1 rounded-full">Growth</span>
                  <span className="text-xs font-semibold text-slate-400 bg-white/10 px-2.5 py-1 rounded-full">Health-tech · Analytics</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Cult.fit Growth Machine — Conversion Funnel MVP
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 mt-0.5 transition-colors" />
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Built the intelligence layer to move Cult.fit from metric-watching to action-taking. Core signal: members who hit 3 workouts/week for 4 weeks are 3× more likely to stay.
                </p>
                <div className="flex-1" />
                <div className="flex flex-wrap gap-4 text-sm pt-6 border-t border-slate-50 mt-6">
                  {[
                    { label: 'retention uplift', value: '3×' },
                    { label: 'members studied', value: '1.5L' },
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

          {/* ── Nanonets Onboarding ────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full"
          >
            <Link href="/case-studies/nanonets-onboarding" className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300">

              {/* Hero — 6-step onboarding journey */}
              <div className="h-56 bg-gradient-to-br from-[#000d2e] via-[#0f1f6b] to-[#1e3a8a] relative overflow-hidden flex flex-col justify-between p-6 flex-shrink-0">
                {/* Step nodes */}
                <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-1.5">
                  {['S0', 'S1', 'S2', 'S3', 'S4', 'S5'].map((s, i) => (
                    <div key={s} className="flex items-center gap-1.5">
                      <div className={`w-[3px] rounded-full flex-shrink-0 ${i < 5 ? 'h-4 bg-blue-500/40' : 'h-0'}`} />
                      <div
                        className={`w-8 h-6 rounded-md flex items-center justify-center text-[9px] font-bold flex-shrink-0 ${
                          i < 4
                            ? 'bg-blue-400 text-white shadow-[0_0_8px_rgba(96,165,250,0.5)]'
                            : 'bg-blue-900/50 text-blue-400 border border-blue-700/50'
                        }`}
                      >
                        {s}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Vertical connector line behind nodes */}
                <div className="absolute right-[26px] top-[calc(50%-56px)] w-[3px] h-28 bg-gradient-to-b from-blue-400/60 to-blue-800/20 rounded-full" />
                {/* Metric */}
                <div className="relative z-10">
                  <div className="text-4xl font-black text-white tracking-tight leading-none">&lt;5 min</div>
                  <div className="text-blue-300 text-[11px] font-semibold mt-1.5 tracking-widest uppercase">Sign-up to first value</div>
                </div>
                {/* Tags */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-blue-300 bg-blue-400/10 border border-blue-400/20 px-2.5 py-1 rounded-full">Onboarding</span>
                  <span className="text-xs font-semibold text-slate-400 bg-white/10 px-2.5 py-1 rounded-full">B2B SaaS · Activation</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Nanonets — Onboarding Redesign
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 mt-0.5 transition-colors" />
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Nanonets was read as ChatGPT for docs — not a workflow automation tool. Redesigned onboarding to communicate structured data at scale and hit first value in under 5 minutes.
                </p>
                <div className="flex-1" />
                <div className="flex gap-6 text-sm pt-6 border-t border-slate-50 mt-6">
                  {[
                    { label: 'activation lift', value: '+12 pts' },
                    { label: 'time-to-value', value: '<5 min' },
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
