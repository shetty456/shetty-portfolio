'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
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

        {/* ── LabLens ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <a
            href={LABLENS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col lg:flex-row w-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 min-h-[400px]"
          >
            {/* Left — content */}
            <div className="lg:w-2/5 bg-slate-50 p-10 flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">Solo Build</span>
                <span className="text-xs font-semibold text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">AI / LLM · 1 day</span>
              </div>

              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    LabLens — AI Blood Report Interpreter
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 flex-shrink-0 mt-0.5 transition-colors" />
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  LLM pipeline that converts blood report images/PDFs into plain-language summaries with colour-coded verdicts. Core trade-off: tightened classification thresholds to prevent false Urgents — recall traded for trust, deliberately.
                </p>
              </div>
            </div>

            {/* Right — screenshot */}
            <div className="lg:w-3/5 relative overflow-hidden min-h-[280px] bg-slate-900">
              <Image
                src="/projects/lablens-screenshot.png"
                alt="LabLens app — blood report interpreter"
                fill
                className="object-cover object-top"
              />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
