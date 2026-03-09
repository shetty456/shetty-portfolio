'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    title: 'From B2C to B2B: Data-Led Product Pivot',
    description:
      'How cohort analysis revealed a $3x LTV opportunity, leading to a product pivot that drove 180% ARR growth in 12 months.',
    company: 'Triveni Digital',
    outcome: '180% ARR Growth',
    gradient: 'from-blue-500 to-indigo-600',
    href: '#',
  },
  {
    title: "Designing Yelow's Creator Growth Loop",
    description:
      'Designed a viral referral mechanism timed to the creator\'s first $100 milestone, driving 500+ organic acquisitions/month at $12 CAC vs $180 paid.',
    company: 'Yelow',
    outcome: '500+ Creators/Month',
    gradient: 'from-indigo-500 to-violet-600',
    href: '#',
  },
]

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
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient thumbnail */}
              <div className={`h-48 bg-gradient-to-br ${cs.gradient} flex items-center justify-center`}>
                <div className="text-center text-white">
                  <div className="text-3xl font-bold opacity-90">{cs.outcome}</div>
                  <div className="text-sm opacity-70 mt-1">{cs.company}</div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {cs.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">{cs.description}</p>
                <a
                  href={cs.href}
                  className="inline-flex items-center text-blue-600 font-semibold text-sm hover:gap-3 gap-2 transition-all"
                >
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
