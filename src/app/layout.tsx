import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sunil Hanamshetty — Product Manager',
  description:
    'Experimentation-driven PM with 4+ years building B2C consumer products in EdTech, FinTech, and Health. 2× Founder, 1M+ users shipped.',
  keywords: ['Product Manager', 'PM Portfolio', 'Sunil Hanamshetty', 'Product Strategy'],
  openGraph: {
    title: 'Sunil Hanamshetty — Product Manager',
    description: 'Experimentation-driven PM. 2× Founder, 1M+ users shipped.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
