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
    'Experimentation-driven PM with 5+ years building consumer apps, SaaS, and creator ecosystems. 1M+ users shipped, 90+ A/B tests run.',
  keywords: ['Product Manager', 'PM Portfolio', 'Sunil Hanamshetty', 'Product Strategy'],
  openGraph: {
    title: 'Sunil Hanamshetty — Product Manager',
    description: 'Experimentation-driven PM building products at scale.',
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
