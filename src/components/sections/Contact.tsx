'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="section-padding bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's build something together.
          </h2>
          <p className="text-slate-400 text-xl leading-relaxed mb-12">
            Open to PM roles, consulting engagements, and interesting conversations about products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8"
            >
              <a href="mailto:hanamshettysunil6@gmail.com">
                <Mail className="mr-2 h-5 w-5" /> Send Email
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-500 text-white rounded-full px-8"
            >
              <a href="tel:+919353129101">
                <Phone className="mr-2 h-5 w-5" /> +91 93531 29101
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 bg-transparent"
            >
              <a
                href="https://linkedin.com/in/sunilhanamshetty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
