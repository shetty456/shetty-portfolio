import type { Metadata } from 'next'

const description =
  "How redesigning Nanonets' onboarding cut time-to-value to under 5 minutes and lifted activation by 12 points."

export const metadata: Metadata = {
  title: 'Nanonets Onboarding Redesign — Case Study',
  description,
  alternates: { canonical: '/case-studies/nanonets-onboarding' },
  openGraph: {
    title: 'Nanonets Onboarding Redesign — Case Study | Sunil Hanamshetty',
    description,
    url: 'https://sunil-pm-portfolio.netlify.app/case-studies/nanonets-onboarding',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nanonets Onboarding Redesign — Case Study | Sunil Hanamshetty',
    description,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
