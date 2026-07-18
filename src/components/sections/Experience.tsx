'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    company: 'Triveni',
    role: 'Founder & Product Lead',
    dateRange: '2025 — Present',
    type: 'Founder',
    bullets: [
      'Led strategic pivot from AI-first to Teacher-Led trust model, improving D1 retention from 15% to 28% in 6 weeks',
      'Analyzed user behavior via SQL and funnel data to deprecate low-impact AI Notes, refocusing roadmap on Quiz-First core loop',
      'Designed and launched a creator-led PLG sharing loop, growing WAU to a peak of 259 while achieving 70% retention in a key user cohort',
      'Ran 3 monetization experiments (entry-fee tournaments, gated quizzes, tiered access), validating willingness-to-pay across 2 tiers and establishing early ARPU benchmarks that informed subscription pricing',
      'Built an agentic AI pipeline (Agno) for PDF-to-notes and quiz generation with quality evals',
      'Defined north-star metrics (activation → retention → creator output) and aligned execution to unit economics',
    ],
  },
  {
    company: 'Isha Foundation',
    role: 'Product Engineer (Product & UX)',
    dateRange: '2024 — 2025',
    type: 'Consumer',
    bullets: [
      'Built and shipped Flutter features for a consumer app that reached 1M+ downloads in less than 24 hours',
      'Designed and implemented a backend traffic management system preventing cascading failures during a 1M+ user launch',
      'Partnered with Product and Design to deliver high-fidelity UX, balancing speed, usability, and reliability under scale',
      'Acted as bridge between product intent and engineering execution during high-risk launches',
    ],
  },
  {
    company: 'Yelow',
    role: 'Software Engineer (Systems & Funnels)',
    dateRange: '2023 — 2024',
    type: 'FinTech',
    bullets: [
      'Built admin-triggered fallback flows to recover KYC applications during third-party API failures, improving funnel completion',
      'Shipped high-conversion landing page within a 7-day sprint, accelerating PMF experiments',
      'Led 10+ Banking and KYC integrations supporting a 500-user FinTech pilot across vendors and internal teams',
      'Contributed to API strategy and system design, balancing compliance, reliability, and speed',
    ],
  },
  {
    company: 'Mignon',
    role: 'Co-founder',
    dateRange: '2022 — 2023',
    type: 'Founder',
    bullets: [
      'Led strategic pivot from feature-driven to demand-first GTM — 20+ salon interviews to identify top-3 booking pain points',
      'Redesigned value proposition around salon owner ROI, resulting in higher-quality inbound leads and improved demo conversion',
      'Built push-notification and re-engagement experiments, testing PLG loops and repeat usage hypotheses',
      'Owned end-to-end product discovery, experimentation, and early GTM execution',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-100 ml-3 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="md:pl-12 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-2 border-blue-500 bg-white hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>

                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{exp.company}</h3>
                    <p className="text-slate-500 mt-0.5">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                      {exp.type}
                    </Badge>
                    <span className="text-sm text-slate-400">{exp.dateRange}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
