import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import JsonLd from '@/components/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const BASE_URL = 'https://sunil-pm-portfolio.netlify.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Sunil Hanamshetty — Product Manager',
    template: '%s | Sunil Hanamshetty',
  },
  description:
    'Experimentation-driven PM with 4+ years building B2C consumer products in EdTech, FinTech, and Health. 2× Founder, 1M+ users shipped.',
  keywords: [
    'Product Manager',
    'PM Portfolio',
    'Sunil Hanamshetty',
    'Product Strategy',
    'EdTech',
    'FinTech',
    'Health Tech',
    'Growth',
    'Experimentation',
  ],
  authors: [{ name: 'Sunil Hanamshetty', url: BASE_URL }],
  creator: 'Sunil Hanamshetty',
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Sunil Hanamshetty',
    title: 'Sunil Hanamshetty — Product Manager',
    description:
      'Experimentation-driven PM with 4+ years building B2C consumer products. 2× Founder, 1M+ users shipped.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Sunil Hanamshetty — Product Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunil Hanamshetty — Product Manager',
    description:
      'Experimentation-driven PM with 4+ years building B2C consumer products. 2× Founder, 1M+ users shipped.',
    images: ['/opengraph-image'],
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sunil Hanamshetty',
  jobTitle: 'Product Manager',
  description:
    'Experimentation-driven PM with 4+ years building B2C consumer products in EdTech, FinTech, and Health. 2× Founder, 1M+ users shipped.',
  url: BASE_URL,
  email: 'hanamshettysunil6@gmail.com',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd data={personSchema} />
      </head>
      <body>{children}</body>
    </html>
  )
}
