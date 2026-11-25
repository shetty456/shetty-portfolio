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
    'Two-time founder and product manager building consumer growth and fintech products. Triveni reached 259 peak WAU; Miracle of Mind crossed 1M launch-day downloads.',
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
      'Two-time founder and product manager building consumer growth and fintech products. Triveni reached 259 peak WAU; Miracle of Mind crossed 1M launch-day downloads.',
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
      'Two-time founder and product manager building consumer growth and fintech products. Triveni reached 259 peak WAU; Miracle of Mind crossed 1M launch-day downloads.',
    images: ['/opengraph-image'],
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sunil Hanamshetty',
  jobTitle: 'Product Manager',
  description:
    'Two-time founder and product manager building consumer growth and fintech products. Triveni reached 259 peak WAU; Miracle of Mind crossed 1M launch-day downloads.',
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
