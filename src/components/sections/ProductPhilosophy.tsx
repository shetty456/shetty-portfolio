'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const principles = [
  {
    number: '01',
    title: 'Experimentation Over Opinion',
    description:
      'Every product decision is a hypothesis. I design experiments before writing PRDs, ensuring features are validated through real user behavior rather than internal assumptions.',
  },
  {
    number: '02',
    title: 'Retention Before Acquisition',
    description:
      'Growth without retention is a leaky bucket. My first question for any product: "Do our existing users come back?" I build retention loops before scaling acquisition.',
  },
  {
    number: '03',
    title: 'Systems Thinking',
    description:
      'Great products are interconnected systems. I map the full user journey before optimizing any single surface, looking for second-order effects and compounding loops.',
  },
  {
    number: '04',
    title: 'User Empathy + Data Together',
    description:
      'Neither pure data nor pure intuition is sufficient. I pair quantitative signals with qualitative research to build a complete picture of user needs.',
  },
]

export default function ProductPhilosophy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="philosophy" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Philosophy</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-2">
            How I think about products
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-100"
            >
              <span className="text-5xl font-bold text-blue-100 block mb-4">{p.number}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
              <p className="text-slate-500 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
