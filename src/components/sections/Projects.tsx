'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const LABLENS_URL = 'https://g5krkpcmod8ag2utggy60ra7m.bolt.host/'

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* ── LabLens ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <a
              href={LABLENS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Hero — verdict badge motif */}
              <div className="h-56 bg-[#0d0d0d] relative overflow-hidden flex flex-col justify-between p-6 flex-shrink-0">

                {/* Verdict badges — the product's core output */}
                <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 bg-red-950/60 border border-red-800/50 rounded-lg px-3 py-2">
                    <div className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_6px_rgba(248,113,113,0.8)]" />
                    <span className="text-[11px] font-bold text-red-300 tracking-wide">Urgent</span>
                  </div>
                  <div className="flex items-center gap-2 bg-amber-950/60 border border-amber-700/50 rounded-lg px-3 py-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
                    <span className="text-[11px] font-bold text-amber-300 tracking-wide">Monitor</span>
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-950/60 border border-emerald-700/50 rounded-lg px-3 py-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                    <span className="text-[11px] font-bold text-emerald-300 tracking-wide">Normal</span>
                  </div>
                </div>

                {/* Score */}
                <div className="relative z-10">
                  <div className="text-4xl font-black text-white tracking-tight leading-none">81<span className="text-2xl text-slate-400">/100</span></div>
                  <div className="text-slate-400 text-[11px] font-semibold mt-1.5 tracking-widest uppercase">Hackathon score</div>
                </div>

                {/* Tags */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  <span className="text-xs font-semibold text-slate-300 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full">Solo Build</span>
                  <span className="text-xs font-semibold text-slate-400 bg-white/5 px-2.5 py-1 rounded-full">AI/LLM · 1 day</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    LabLens — AI Blood Report Interpreter
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 mt-0.5 transition-colors" />
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  LLM pipeline that converts blood report images/PDFs into plain-language summaries with colour-coded verdicts. Core trade-off: tightened classification thresholds to prevent false Urgents — recall traded for trust, deliberately.
                </p>
                <div className="flex-1" />
                <div className="flex gap-6 text-sm pt-6 border-t border-slate-50 mt-6">
                  {[
                    { label: 'hackathon score', value: '81/100' },
                    { label: 'build time', value: '1 day' },
                  ].map(stat => (
                    <div key={stat.label}>
                      <span className="font-bold text-slate-900">{stat.value}</span>
                      <span className="text-slate-400 ml-1">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
