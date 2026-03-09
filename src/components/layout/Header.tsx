'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Impact', href: '#impact' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Experience', href: '#experience' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Skills', href: '#skills' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-bold text-slate-900 text-lg tracking-tight hover:text-blue-600 transition-colors">
          Sunil Hanamshetty
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          asChild
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5"
        >
          <a href="#contact">Contact</a>
        </Button>
      </div>
    </header>
  )
}
