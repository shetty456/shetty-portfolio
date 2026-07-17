import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Sunil Hanamshetty — Product Manager'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#0f172a',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            width: '64px',
            height: '4px',
            background: '#2563eb',
            borderRadius: '2px',
          }}
        />

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#f8fafc',
              lineHeight: 1.1,
              letterSpacing: '-1px',
            }}
          >
            Sunil Hanamshetty
          </div>
          <div
            style={{
              fontSize: '28px',
              fontWeight: 500,
              color: '#94a3b8',
              lineHeight: 1.4,
            }}
          >
            Product Manager · 2× Founder · 1M+ users shipped
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: '18px',
              color: '#475569',
            }}
          >
            EdTech · FinTech · Health
          </div>
          <div
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#2563eb',
            }}
          >
            sunil-pm-portfolio.netlify.app
          </div>
        </div>
      </div>
    ),
    size,
  )
}
