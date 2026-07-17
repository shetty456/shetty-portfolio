import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cult.fit Growth Machine — Conversion Funnel MVP',
  description:
    'Intelligence layer to move Cult.fit from metric-watching to action-taking. Members hitting 3 workouts/week showed 3× retention uplift.',
  alternates: { canonical: '/case-studies/cult-growth-machine' },
  openGraph: {
    title: 'Cult.fit Growth Machine — Conversion Funnel MVP | Sunil Hanamshetty',
    description:
      'Intelligence layer to move Cult.fit from metric-watching to action-taking. Members hitting 3 workouts/week showed 3× retention uplift.',
    url: 'https://sunil-pm-portfolio.netlify.app/case-studies/cult-growth-machine',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cult.fit Growth Machine — Conversion Funnel MVP | Sunil Hanamshetty',
    description:
      'Intelligence layer to move Cult.fit from metric-watching to action-taking. Members hitting 3 workouts/week showed 3× retention uplift.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
