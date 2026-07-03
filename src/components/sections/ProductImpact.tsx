'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Users, FlaskConical, Zap } from 'lucide-react'

const impacts = [
  {
    icon: TrendingUp,
    title: 'Retention Improvement',
    description: 'Drove D1 retention from 15% to 28% in 6 weeks through a data-led pivot to a Teacher-Led model at Triveni.',
    metric: '15% → 28%',
    color: 'blue',
  },
  {
    icon: Users,
    title: 'Scale',
    description: 'Built and shipped products actively used by over 1 million users across consumer and B2B segments.',
    metric: '1M+ Users',
    color: 'indigo',
  },
  {
    icon: FlaskConical,
    title: 'PLG Growth',
    description: 'Designed and launched a PLG creator-share loop at Triveni, scaling to 90+ Weekly Active Educators with ~70% cohort retention.',
    metric: '90+ WAEs',
    color: 'violet',
  },
  {
    icon: Zap,
    title: 'Founder',
    description: 'Founded Triveni (EdTech) and Mignon (B2B SaaS) from 0 to 1, owning product discovery, GTM, and monetization end-to-end.',
    metric: '2×',
    color: 'blue',
  },
]

export default function ProductImpact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="impact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Results that matter
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {impacts.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-2">{item.metric}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
