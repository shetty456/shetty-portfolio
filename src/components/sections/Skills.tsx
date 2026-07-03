'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    category: 'Product',
    skills: ['Roadmap Definition', 'Funnel Analysis', 'Activation & Retention', 'North-Star Metrics', 'Monetization Experiments', 'PLG Loops', 'Time-to-First-Value', 'MVP & Iterative Shipping'],
  },
  {
    category: 'Analytics & Experimentation',
    skills: ['AARRR Framework', 'SQL-Based Analysis', 'A/B Testing', 'Metric-Driven Pivots', 'Pricing Experiments', 'Willingness-to-Pay', 'Mixpanel', 'Google Analytics'],
  },
  {
    category: 'Technical',
    skills: ['SQL', 'JavaScript', 'Python', 'Next.js', 'Postman', 'Supabase', 'Figma', 'Notion', 'ClickUp'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Skills
          </h2>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-start gap-6"
            >
              <div className="md:w-52 flex-shrink-0">
                <span className="font-bold text-slate-900">{cat.category}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
