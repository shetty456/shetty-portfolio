'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    company: 'Triveni',
    role: 'Founder & Product Lead',
    dateRange: 'May 2025 — Present',
    type: 'Founder',
    bullets: [
      'Deprioritized AI Notes after SQL cohort and funnel analysis and shifted to teacher-led quizzes; Mixpanel D1 retention was 15% in an earlier period and 28% in a later period.',
      'Built a teacher-led content model with 32 active creators; 19 created content again at least 8 weeks after their first record; reached 259 peak WAU.',
      'Ran early Rs 10/20 gated quizzes and later Rs 399/599 CET courses; reached 22 paying customers and Rs 7,744 gross across both.',
      'Built an Agno pipeline that turns PDFs into notes and quizzes, with an LLM-as-judge check that regenerates outputs failing accuracy rules.',
    ],
  },
  {
    company: 'Isha Foundation',
    role: 'Product Engineer (Product & UX)',
    dateRange: 'Jun 2024 — Mar 2025',
    type: 'Consumer',
    bullets: [
      'Owned the Flutter build of audio listening, sharing, quote capture, and profiles for Miracle of Mind, which crossed 1M downloads within 24 hours of launch.',
      'Built a remote feature switch to hide Sadhguru Wisdom in the UI without an app update if its third-party API failed under launch traffic.',
    ],
  },
  {
    company: 'Yelow',
    role: 'Software Engineer (Loan Origination Product)',
    dateRange: 'Jan 2023 — Jun 2024',
    type: 'FinTech',
    bullets: [
      'Built the full auto-loan application journey as sole frontend engineer: OTP, PAN, Aadhaar, CKYC, income checks, loan calculator, and disbursal.',
      'Designed admin-triggered recovery for applications stalled by KYC API failures, so ops could fix and resubmit them instead of losing the applicant mid-funnel.',
      'Integrated 10+ bank and KYC partners for a 500-user pilot, including OneMoney (Account Aggregator) and OCR document checks.',
      'Shipped a customer landing page in a 7-day sprint to test demand before the full launch.',
    ],
  },
  {
    company: 'Mignon',
    role: 'Co-founder',
    dateRange: 'Jan 2022 — Aug 2023',
    type: 'Founder',
    bullets: [
      'Conducted 20+ salon-owner interviews to validate booking and customer-discovery pain points, translating qualitative research into early product priorities.',
      'Shipped push notifications in response to salon-owner requests.',
      'Continued Mignon part-time after joining Yelow in Jan 2023, supporting onboarded salons while exploring ways to make the business viable through Aug 2023.',
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
        <div className="mt-16 grid md:grid-cols-2 gap-8 border-t border-slate-100 pt-10">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Education</h3>
            <p className="text-slate-600">University of Horticultural Sciences, Bagalkot</p>
            <p className="text-slate-500 text-sm">B.Tech Food Technology · CGPA 7.9/10 · 2016–2020</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Certification</h3>
            <p className="text-slate-600">Harvard CS50 (online)</p>
            <p className="text-slate-500 text-sm">Introduction to Computer Science · Sep 2021</p>
          </div>
        </div>
      </div>
    </section>
  )
}
