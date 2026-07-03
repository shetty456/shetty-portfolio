'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const contextRows = [
  {
    category: 'Business Model',
    finding: 'ICICI Lombard, HDFC Ergo General Insurance, and Star Health and Allied Insurance are insurers for Plum. The company makes money via commission (~93% of revenue, 38.46 crore), while health benefits and services contribute around 2.9 crore.',
  },
  {
    category: 'Users',
    finding: 'End users of the platform include Admin/HR teams in SMBs and employees of the organisation, with Plum Personal trying to activate even users who have been terminated from their current employment.',
  },
  {
    category: 'Market',
    finding: 'The general health insurance market in India has about 20 crore users, while group health insurance has a market of 10B USD and an estimated growth rate of 50% in the next 5 years.',
  },
  {
    category: "Plum's market share",
    finding: "Plum's website states that they currently cover around 6 lakh users.",
  },
  {
    category: "Founder's mission",
    finding: "The founder's personal mission is to cover 10 million lives by 2030. The gap in the market still resonates with Plum's original vision of connecting with the messy middle: the workforce that is kept out of insurance because of their smaller size.",
  },
  {
    category: 'Competitors',
    finding: 'Onsurity — focused on digitising SME insurance with monthly TeamSure plans. Nova Benefits — goes premium, offering comprehensive wellness suites. Pazcare — positions as a cloud-based benefits administration platform. Loop Health — pushes primary care hard with its "Health Assurance" model bundling insurance + in-house doctors + unlimited consultations + chronic disease management.',
  },
  {
    category: 'Current Product',
    finding: 'B2B flagship product, with plans to enter B2B2C. Group health insurance, Plum Lite membership (small teams), tele-health + primary care, Plum Wellbeing. What works: a very strong NPS score of 79 and a 90-second onboarding flow. Faster, tech-driven claims: a 7-day claim cycle and enabling cashless hospital discharge in as little as 20 minutes.',
  },
  {
    category: 'Metric Context',
    finding: "The current target ARPU is naturally fuelled by higher commission rates from the insurer. However, it doesn't guarantee the CLTV of the user. That is why the path is to enter Plum Personal and cover users who are out of the workforce.",
  },
]

const arpuRows = [
  { scenario: 'Conservative', conversion: '3%', users: '18,000', commission: '₹1.35 Cr', addonUsers: '3,600', addonRevenue: '₹0.72 Cr', total: '₹2.07 Cr', highlight: false },
  { scenario: 'Base', conversion: '7%', users: '42,000', commission: '₹3.15 Cr', addonUsers: '8,400', addonRevenue: '₹1.68 Cr', total: '₹4.83 Cr', highlight: true },
  { scenario: 'Aggressive', conversion: '10%', users: '60,000', commission: '₹4.50 Cr', addonUsers: '12,000', addonRevenue: '₹2.40 Cr', total: '₹6.90 Cr', highlight: false },
]


export default function PlumPersonalCaseStudy() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6 pt-28 pb-24">

          {/* Back */}
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-700 transition-colors mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </Link>

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-2">
            Plum Personal — ARPU &amp; CLTV Growth Strategy
          </h1>
          <p className="text-slate-400 text-sm mb-12">Product Strategy · Health-tech · B2B2C</p>

          {/* ── Overview ─────────────────────────────── */}
          <Section title="Overview">
            <p>Plum is a B2B employee benefits platform that provides group health insurance to companies. They want to increase their ARPU and CLTV by introducing a new product line called Plum Personal, for B2C users.</p>
            <p>The core insight is that Plum's usage is based on insurance reimbursement. This translates to episodic usage of the product.</p>
            <p>The goal is to transition Plum from episodic usage to a product of weekly habit, and if possible, to a daily habit.</p>
            <p>My recommended solution is one app that holds both the employer's group policy and personal top-up policy, with a single claims view, one wallet, and one health history without changing underlying insurance operations.</p>
            <p>This shifts Plum from a transactional insurance tool to an integrated health platform, increasing engagement frequency while creating stronger opportunities for upsells and cross-sells, leading to increased ARPU and CLTV.</p>
            <p>The long term growth-loop works as follows:</p>
            <p className="text-slate-600">
              Daily usage → High engagement frequency → richer health and financial behaviour data → better recommendations → stronger upsell and cross-sell conversion → higher ARPU and CLTV → increased switching cost and customer retention.
            </p>
          </Section>

          {/* ── Company & Context ────────────────────── */}
          <Section title="Company &amp; Context">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-2 pr-6 font-semibold text-slate-600 w-40">Category</th>
                    <th className="text-left py-2 font-semibold text-slate-600">Key Findings</th>
                  </tr>
                </thead>
                <tbody>
                  {contextRows.map((row) => (
                    <tr key={row.category} className="border-b border-slate-100">
                      <td className="py-3 pr-6 text-slate-600 align-top text-sm leading-snug">{row.category}</td>
                      <td className="py-3 text-slate-700 leading-relaxed text-sm">{row.finding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* ── Problem Definition ───────────────────── */}
          <Section title="Problem Definition">
            <p>{"Plum's current B2B model has a ceiling on ARPU because the end user has no purchasing power and no reason to open the app between claims."}</p>
            <p>The primary user, who is a salaried employee in a Tier 1 Indian city, aged 25 to 40, often has a family member to cover, has no say in benefits, opens the app twice a year during a claim, and Plum has no information about their daily health life.</p>
            <p>The opportunity is to shift purchase power to the individual so Plum can convert them into a paying and engaged user.</p>
          </Section>

          {/* ── Research Insights ────────────────────── */}
          <Section title="Research Insights">
            <ul className="space-y-3 list-disc list-outside pl-5 text-slate-700">
              <li>I spoke with Plum and Even Healthcare representatives, and the stark observation was that Plum has a 50% lower premium than Even Healthcare. However Even Healthcare offers a more comprehensive set of benefits, which makes the higher premium price justified from a user perspective. This suggests that users are willing to pay a higher premium when the perceived value outweighs cost.</li>
              <li>After going through 5 Whys and trying to understand why someone needs a health insurance, the core reason was user doesn't want to get sick and it is the failure of the system to identify health risks early. The cost of hospital visit for every silly issue outweighs the benefit it brings.</li>
              <li>Plum operates as a B2B2C model where cross-sell add-ons are decided by HR/Admin teams. However, HR doesn't directly experience the pain of end-users making it difficult to justify the add-ons at scale. As a result ARPU is constrained by top-down decision layer which is less-aware and harder to influence, this leads to structural limitation in upselling through HR-led channels.</li>
              <li>93% of Plum's revenue comes from insurance providers. Structurally apart from B2B network and higher NPS Plum doesn't have a solid moat. Plum gets to have a deeper understanding about user's health life by ensuring that Plum becomes a weekly habit product - which is a huge data moat and leads to higher switching cost for user, leading to higher renewal rate.</li>
            </ul>
          </Section>

          {/* ── Solution & Rationale ─────────────────── */}
          <Section title="Solution &amp; Rationale">
            <ul className="space-y-3 list-disc list-outside pl-5 text-slate-700">
              <li>Offering Plum users 1 free tele-consultation per month helps in early mitigation of health issues leading to increased platform trust and engagement. Continued engagement creates upsell opportunities for paid consultation helping expand ARPU.</li>
              <li>Layering group health insurance with personal insurance with a single-claims view and one health history helps in converting B2B users to purchase personal health insurance. A consolidated view of user's health data points helps in better personalisation and recommendation leading to improved conversion rate for upsells and cross-sells driving ARPU.</li>
              <li>Unlimited health consultations and daily health bytes, along with an organisation-level leaderboard, encourage preventive healthcare and drive platform engagement. Frequent engagement leads to better recommendations and improves cross-sell conversion, helping expand ARPU.</li>
              <li>Family member discounts act as referral loop driving acquisition and household level adoption. Shared insurance coverage drives platform retention and insurance renewal likelihood helping expand CLTV.</li>
            </ul>
          </Section>

          {/* ── Prioritise ───────────────────────────── */}
          <Section title="Prioritise">
            <ul className="space-y-2 list-disc list-outside pl-5 text-slate-700 text-sm">
              <li>High Impact, Medium Effort (HI/ME) — Layering of personal and professional health insurance</li>
              <li>High Impact, High Effort (HI/HE) — Bundling everything in a single layer, Adding preventive health care into policy by default</li>
              <li>Medium Impact, Low Effort (MI/LE) — Discounts on adding parents and other family members</li>
              <li>Low Impact, Low Effort (LI/LE) — Free tele-consultations</li>
            </ul>
          </Section>

          {/* ── Recommendation ───────────────────────── */}
          <Section title="Recommendation">
            <p>My primary recommendation is to build a layering of personal and professional health insurance as a unified interface.</p>
            <p>Layering is not one of the four solutions. It's the platform that makes the other three possible. Without a single-view app that holds both policies, free tele-consults have nowhere to live, bundling has no data to bundle against, and family discounts have no account to apply to. Everything else is a feature. Layering is the foundation. Once layering is live, free tele-consults, family discounts, and bundling become the natural next sequence of bets.</p>
            <p>This unlocks the B2B2C transition for Plum without violating IRDAI compliance constraints. The unified layer provides a consolidated view of users' health data, which is necessary to improve ARPU and CLTV.</p>

            <h3 className="text-base font-bold text-slate-900 mt-8 mb-3">Rollout Sequence</h3>
            <ul className="space-y-2 list-disc list-outside pl-5 text-slate-700 text-sm">
              <li>Phase 1 (Month 1 to 3): Build unified policy view for existing B2B users. No new product, just consolidation.</li>
              <li>Phase 2 (Month 4 to 6): Launch personal top-up as opt-in for employees in pilot companies.</li>
              <li>Phase 3 (Month 7 to 12): Expand to all users, add a free tele-consult layer.</li>
            </ul>

            <h3 className="text-base font-bold text-slate-900 mt-8 mb-4">Solution wireframes</h3>
            <Image
              src="/case-studies/plum/plum_screens_composite.png"
              alt="Plum Personal wireframes — home experience, personal insurance layer, and smart claims flow"
              width={1200}
              height={1800}
              className="w-full h-auto rounded-lg"
            />
          </Section>

          {/* ── Success Metrics ──────────────────────── */}
          <Section title="Success Metrics &amp; Measurement">
            <p className="font-semibold text-slate-900">ARPU Estimation:</p>
            <p>We model revenue across two streams:</p>
            <ol className="list-decimal list-outside pl-5 space-y-1 text-slate-700 text-sm">
              <li>Insurance commission (existing model)</li>
              <li>Plum-owned add-on ecosystem (new layer enabled by layering)</li>
            </ol>

            <p className="font-semibold text-slate-900 mt-6">Assumptions (common across scenarios)</p>
            <ul className="space-y-1 list-disc list-outside pl-5 text-slate-700 text-sm">
              <li>User base: 6,00,000+</li>
              <li>Average premium: ₹5,000/year</li>
              <li>Insurance commission: 15%</li>
              <li>Add-on price (Plum revenue): ₹2,000/user/year</li>
              <li>Add-on adoption: 20% of paying users (India's OPD benefit adoption growing 35% YoY, with 61% usage when available. Secondary anchor — Aflac WorkForces Report showing 22% opt-in for voluntary life insurance and 16% for critical illness coverage)</li>
            </ul>

            <div className="overflow-x-auto mt-6">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-slate-300">
                    <th className="text-left py-2 pr-4 font-semibold text-slate-600">Scenario</th>
                    <th className="text-left py-2 pr-4 font-semibold text-slate-600">Conversion to Paid</th>
                    <th className="text-left py-2 pr-4 font-semibold text-slate-600">Paying Users</th>
                    <th className="text-left py-2 pr-4 font-semibold text-slate-600">Insurance Commission Revenue</th>
                    <th className="text-left py-2 pr-4 font-semibold text-slate-600">Add-on Users (20% of paying)</th>
                    <th className="text-left py-2 pr-4 font-semibold text-slate-600">Add-on Revenue</th>
                    <th className="text-left py-2 font-semibold text-slate-600">Total Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {arpuRows.map((row) => (
                    <tr key={row.scenario} className="border-b border-slate-100">
                      <td className="py-2.5 pr-4 text-slate-700">{row.scenario}</td>
                      <td className="py-2.5 pr-4 text-slate-700">{row.conversion}</td>
                      <td className="py-2.5 pr-4 text-slate-700">{row.users}</td>
                      <td className="py-2.5 pr-4 text-slate-700">{row.commission}</td>
                      <td className="py-2.5 pr-4 text-slate-700">{row.addonUsers}</td>
                      <td className="py-2.5 pr-4 text-slate-700">{row.addonRevenue}</td>
                      <td className={`py-2.5 text-slate-900 ${row.highlight ? 'font-bold' : ''}`}>{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate-700 mt-4">Strategic Insight: ~93% of Plum's revenue is dependent on insurer commission; add-ons ensure Plum's heavy dependency on insurer commission is reduced over time.</p>
            <p className="text-sm text-slate-700">Base scenario of 4.83 Cr is <strong>~12.6% revenue lift</strong> on the current base revenue of 38.46 crore.</p>

            <p className="font-medium text-slate-900 mt-6 mb-2">Leading metrics:</p>
            <ul className="space-y-1 list-disc list-outside pl-5 text-slate-700 text-sm">
              <li>Weekly active users (WAU)</li>
              <li>Cross-sell funnel conversion rate after first tele-consultation</li>
              <li>Up-sell conversion rate after employer insurance expiration</li>
            </ul>

            <p className="font-medium text-slate-900 mt-5 mb-2">Lagging metrics:</p>
            <ul className="space-y-1 list-disc list-outside pl-5 text-slate-700 text-sm">
              <li>Weekly app retention (app retention as whole)</li>
              <li>ARPU (Average Revenue Per User)</li>
              <li>CLTV (Customer Lifetime Value)</li>
            </ul>

            <p className="font-medium text-slate-900 mt-5 mb-2">Second-order effects:</p>
            <p className="text-sm text-slate-700">Improved app engagement → higher interaction frequency → richer user health data → better recommendations → improved word-of-mouth acquisition → stronger retention and Plum adoption.</p>

            <p className="font-medium text-slate-900 mt-5 mb-2">Guardrail metrics:</p>
            <ul className="space-y-1 list-disc list-outside pl-5 text-slate-700 text-sm">
              <li>NPS of Plum app</li>
              <li>Personal insurance renewal rate</li>
            </ul>
          </Section>

          {/* ── Risks ────────────────────────────────── */}
          <Section title="Risks &amp; Open Questions">
            <ul className="space-y-4 list-disc list-outside pl-5 text-slate-700 text-sm">
              <li><strong className="text-slate-900">Employment continuity risk</strong> — If a user leaves an employer offering Plum, the transition from employer-sponsored insurance to personal coverage must remain seamless without disrupting access, claims history, or active benefits.</li>
              <li><strong className="text-slate-900">Data privacy and visibility boundaries</strong> — The layered model requires strict separation between employer-visible insurance data and user-private personal health information. The system must ensure explicit consent and granular controls before sharing any personal health data with employers.</li>
              <li><strong className="text-slate-900">Claims orchestration complexity</strong> — When both employer and personal insurance policies apply to the same medical event, Plum must reliably orchestrate claim routing, prioritisation, and reimbursement flows without creating operational confusion or delays.</li>
              <li><strong className="text-slate-900">Insurance partner alignment</strong> — Plum depends on insurers such as ICICI Lombard and HDFC Ergo continuing to view Plum as a distribution and retention layer rather than a competing consumer insurance platform.</li>
              <li><strong className="text-slate-900">Tele-consultation unit economics</strong> — Free tele-consultations may improve engagement and generate data for better upsells, but long-term sustainability depends on usage caps, conversion into paid services, and operational cost control.</li>
              <li><strong className="text-slate-900">Regulatory and compliance uncertainty</strong> — The integration of employer and personal insurance experiences must continue to comply with evolving IRDAI regulations around data sharing, insurance distribution, and healthcare services.</li>
            </ul>
          </Section>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-slate-100">
            <Link href="/#case-studies" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-700 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to portfolio
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-12 pt-10 border-t border-slate-100">
      <h2
        className="text-xl font-bold text-slate-900 mb-5"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="space-y-4 text-slate-700 leading-relaxed text-[15px]">
        {children}
      </div>
    </div>
  )
}
