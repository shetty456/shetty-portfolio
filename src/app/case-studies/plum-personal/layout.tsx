import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plum Personal — ARPU & CLTV Growth Strategy',
  description:
    'Strategy to grow ARPU by embedding personal insurance into daily life for 6L+ insured employees, achieving ~12.6% base revenue lift.',
  alternates: { canonical: '/case-studies/plum-personal' },
  openGraph: {
    title: 'Plum Personal — ARPU & CLTV Growth Strategy | Sunil Hanamshetty',
    description:
      'Strategy to grow ARPU by embedding personal insurance into daily life for 6L+ insured employees, achieving ~12.6% base revenue lift.',
    url: 'https://sunil-pm-portfolio.netlify.app/case-studies/plum-personal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plum Personal — ARPU & CLTV Growth Strategy | Sunil Hanamshetty',
    description:
      'Strategy to grow ARPU by embedding personal insurance into daily life for 6L+ insured employees, achieving ~12.6% base revenue lift.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
