'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const STEPS = [
  {
    id: 0,
    label: 'Step 0',
    phase: null,
    title: 'Sign-Up Page',
    color: 'bg-slate-100 text-slate-700 border-slate-300',
    note: 'Entry point. The right-column social proof (Roche, Ryanair, Schneider, G2/Capterra ratings) pre-empts the "is this legit?" concern before the user fills the form — reducing drop-off at the first friction point.',
  },
  {
    id: 1,
    label: 'Step 1',
    phase: 'Phase 1',
    title: 'Role-Based Entry',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    note: 'One question, one tap. Role selection personalises every downstream step — templates, demo content, and value framing. Finance & Accounts pre-selected as the highest-volume segment with the clearest ROI story.',
  },
  {
    id: 2,
    label: 'Step 2',
    phase: 'Phase 1',
    title: 'Pre-Loaded Demo',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    note: 'Value before commitment. A pre-loaded AP invoice extracts in 4 seconds with 97–99% confidence scores — directly addressing the Finance Manager\'s core trust problem. No upload required, zero setup friction.',
  },
  {
    id: 3,
    label: 'Step 3',
    phase: 'Phase 1',
    title: 'Template Marketplace',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
    note: 'Social proof at the point of commitment — named enterprise customers and ratings on every card. Screen 3c is the core aha: 14 structured fields vs 6 raw, with GSTIN, PO match, and GL code added by the template. This is Nanonets\' real value over commodity OCR.',
  },
  {
    id: 4,
    label: 'Step 4',
    phase: 'Phase 1',
    title: 'Time-Saved Insight',
    color: 'bg-orange-50 text-orange-700 border-orange-200',
    note: 'Converts the demo into a business case — 66 hrs/month, ₹18K in errors avoided. The CFO-shareable quote enables internal championing, which matters in enterprise where the product user and the budget owner are rarely the same person.',
  },
  {
    id: 5,
    label: 'Step 5',
    phase: 'Phase 1',
    title: 'Template Editing + IKEA Effect',
    color: 'bg-sky-50 text-sky-700 border-sky-200',
    note: 'IKEA effect: users who invest effort customising a template are significantly more likely to return. Adding GL Code and saving as "My AP Template" creates ownership. 5b closes with the daily workflow loop — upload → extract → posts to SAP — planting the habit before the session ends.',
  },
]

export default function NanonetsOnboardingCaseStudy() {
  const [activeStep, setActiveStep] = useState(0)

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
            Nanonets — Onboarding Redesign
          </h1>
          <p className="text-slate-400 text-sm mb-10">Product Strategy · B2B SaaS · Activation</p>

          {/* ── Overview ─────────────────────────────── */}
          <Section title="Overview">
            <p>Users interpret Nanonets as a generic extraction tool rather than a system for automating enterprise document workflows.</p>
            <p>Core insight is that Nanonets fails to communicate pre-defined workflow-to-business-value during their onboarding flow.</p>
            <p>My recommendation is to implement a 5-step flow that takes a new Nanonets user from sign-up to first experienced value in under 5 minutes, helping the user understand workflow automation that saves manual effort.</p>
          </Section>

          {/* ── Company & Context ────────────────────── */}
          <Section title="Company &amp; Context">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border border-slate-200">
                    <th className="text-left p-3 bg-slate-50 font-semibold text-slate-700 w-36">Category</th>
                    <th className="text-left p-3 bg-slate-50 font-semibold text-slate-700">Key Findings</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      cat: 'Business Model',
                      findings: 'Revenue comes from subscription plans (Growth & Enterprise) and usage-based pricing tied to document/page processing volume. Growth appears focused on enterprise expansion and workflow automation.',
                    },
                    {
                      cat: 'Company Vision & Strategy',
                      findings: 'Vision: Make Machine Learning as ubiquitous as databases. Mission: Transform unstructured data into actionable intelligence. The current focus is expanding enterprise adoption, investing in AI agents/workflows, and scaling GTM efforts following Series B funding.',
                    },
                    {
                      cat: 'Primary Users',
                      findings: 'Operations teams, Finance/AP teams, Procurement teams, Shared Service Centres, Compliance teams, and Enterprise IT teams responsible for document-heavy workflows.',
                    },
                    {
                      cat: 'User Goals',
                      findings: 'Reduce manual document processing, improve accuracy, accelerate workflows, lower operational costs, and integrate extracted data into existing systems.',
                    },
                    {
                      cat: 'User Pain Points',
                      findings: 'High manual effort, slow processing times, document errors, exception handling, disconnected workflows, and complex integrations across enterprise systems.',
                    },
                    {
                      cat: 'Competitive Landscape',
                      findings: 'Rossum — Very strong for AP and supplier collaboration in large enterprises; implementation is heavier compared to Nanonets.\n\nDocsumo — Good for financial docs with deep customisation, but involves more template/training work.\n\nABBYY — Good for financial docs with deep customisation. Legacy feels, higher implementation overhead.\n\nAmazon Textract — Massive scale, native to AWS, pay-as-you-go. DIY, customers must build surrounding workflows.',
                    },
                  ].map(row => (
                    <tr key={row.cat} className="border border-slate-200">
                      <td className="p-3 font-semibold text-slate-900 align-top">{row.cat}</td>
                      <td className="p-3 text-slate-700 whitespace-pre-line align-top">{row.findings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* ── Problem Definition ───────────────────── */}
          <Section title="Problem Definition">
            <p>28-year-old finance manager in a mid-sized enterprise startup in Bangalore, who looks after AP, AR and reconciliation, struggles with the process of identifying and cross-checking invoices and payments during the closing cycle, because the invoice-to-ERP workflow is fragmented across multiple systems with no unified automated pipeline.</p>
            <p>This results in repeated manual verification, leading to operational overhead.</p>
          </Section>

          {/* ── Research Insights ────────────────────── */}
          <Section title="Research Insights">
            <ul className="space-y-4 list-disc list-outside pl-5 text-slate-700 text-sm">
              <li>I spoke with a Nanonets sales rep. His fundamental statement, &ldquo;OCR has become a commodity; it is more important to put out structured data with accuracy at scale.&rdquo; I learnt that Nanonets&apos; core strength lies in its model accuracy with its ability to detect complex handwriting, charts and table structures. Connectors with other enterprise tools ensure that the whole process is automated and synced.</li>
              <li>After going through 5 whys to understand why someone would need a tool for extracting invoices and payments, the core reason was that the user relies on multiple systems that are not coherently integrated, leading to frequent manual verification during the closing cycle with no unified automated pipeline at scale.</li>
              <li>Compared to Nanonets, other leading competitors I evaluated have a complex onboarding process with enterprise gating (ABBYY, Hypatos), personal email gating (Docsumo), confusing UX flow (Rossum) and self-serve implementation (Textract). Resulting in a sales-led understanding of product workflow.</li>
              <li>Users perceive Nanonets as similar to ChatGPT or Claude based on its onboarding experience. Following is their user flow: Signup (Google Login) &rarr; GPT-like interface &rarr; How can I help you with your documents today (or try from examples) &rarr; Asks clarifying questions and necessary documents &rarr; problem solved &rarr; text is extracted &rarr; nudge to create an agent based on the same workflow.</li>
              <li>The onboarding fails to communicate what actions to take and what outputs to expect, which prevents them from meaningful interaction with the system.</li>
            </ul>
            <div className="mt-6">
              <h3 className="font-bold text-slate-900 mb-2">Summary</h3>
              <p>Nanonets is perceived as similar to ChatGPT, while its core strength lies in model accuracy and structured data at scale, with enterprise integrations.</p>
              <p>What the user needs is an onboarding story that solves the automated workflow operation without depending on sales to realise the value to interact meaningfully with the system.</p>
            </div>
          </Section>

          {/* ── Solution & Rationale ─────────────────── */}
          <Section title="Solution &amp; Rationale">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Personalisation / Segmentation</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-sm">
                  <li>Role-based entry — Helps users determine whether Nanonets is relevant to their business needs.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Communicate how the system works</h3>
                <ul className="list-disc list-outside pl-5 space-y-2 text-sm">
                  <li>Pre-loaded demo with a sample invoice showing instant extraction — Helps the user classify whether the workflow supports their business requirements or not, without manually going through the whole process.</li>
                  <li>Template-based workflow backed by social proof — Helps the user figure out the most suitable template that suits their business workflow based on usage by other business leaders in the industry.</li>
                  <li>Aha moment of syncing and extraction — defined by pre-defined workflow templates — Helps user solve the problem of deeper integration with other enterprise tools used in their business and relieves the pain of accurate synchronisation across tools.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Value Justification</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-sm">
                  <li>Time saved post-extraction insight in terms of time and money — Gives immediate value in terms of time and money, and helps the manager decide whether the tool is worth investing in or not.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Workflow reusability</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-sm">
                  <li>Template editing based on business needs — reduces user anxiety by allowing users to modify available templates as per business requirements without adding the operational overload of building a workflow from scratch.</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* ── Prioritise ───────────────────────────── */}
          <Section title="Prioritise">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border border-slate-200">
                    {['Step', 'Impact', 'Effort', 'Phase', 'Trust barrier removed'].map(h => (
                      <th key={h} className="text-left p-3 bg-slate-50 font-semibold text-slate-700">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { step: 'Step 1: Role-based entry', impact: 'High', effort: 'Low', phase: 'V1', trust: 'Relevance doubt' },
                    { step: 'Step 2: Pre-loaded demo', impact: 'High', effort: 'Low', phase: 'V1', trust: 'Workflow credibility doubt' },
                    { step: 'Step 3: Template + social proof', impact: 'High', effort: 'Medium', phase: 'V1', trust: 'Authenticity and usage credibility doubt' },
                    { step: 'Step 4: Connector abstraction', impact: 'High', effort: 'High', phase: 'V2', trust: 'Data ownership and syncing doubt' },
                    { step: 'Step 5: Time saved Insight', impact: 'High', effort: 'Low', phase: 'V1', trust: 'ROI doubt' },
                    { step: 'Step 6: Template editing', impact: 'High', effort: 'Low', phase: 'V1', trust: 'Workflow customisation doubt' },
                  ].map(row => (
                    <tr key={row.step} className="border border-slate-200">
                      <td className="p-3 text-slate-700 font-medium">{row.step}</td>
                      <td className="p-3 text-slate-700">{row.impact}</td>
                      <td className="p-3 text-slate-700">{row.effort}</td>
                      <td className="p-3 text-slate-700">{row.phase}</td>
                      <td className="p-3 text-slate-700">{row.trust}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* ── Recommendation ───────────────────────── */}
          <Section title="Recommendation">
            <p>My recommendation is to implement a 5-step flow that takes a new Nanonets user from sign-up to first experienced value in under 5 minutes.</p>
            <p>The 5-step flow is personalised, ensuring users evaluate Nanonets in the context of their specific business problem rather than a generic extraction-automation tool that saves manual effort.</p>

            <div className="mt-6">
              <h3 className="font-bold text-slate-900 mb-2">Tradeoffs</h3>
              <p>The framing of the problem is to discuss the tension between showing AI &ldquo;magic&rdquo; immediately (risks setting unrealistic expectations) vs. honest onboarding (slower but builds trust).</p>
              <p>My research revealed that Nanonets was being perceived as a generic AI extraction tool rather than a structured automation workflow.</p>
              <p>AI &ldquo;magic&rdquo; helps the user arrive at the extraction faster, but won&apos;t lead to meaningful interaction. Because the value lies in the workflow automation rather than in the extraction.</p>
              <p>I chose honest onboarding that results in higher drop-offs at the role selection level. Users who don&apos;t see their role will leave before reaching the demo, leading to better conversion of qualified users who can see value in the automation workflow.</p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-slate-900 mb-2">Rollout Sequencing</h3>
              <p>Phase 1 ships steps (1, 2, 3, 5, 6) leading to enhanced onboarding and activation by forming a causal chain.</p>
              <p>Phase 2 ships step 4 — connector abstraction, creates high switching cost for Nanonets clients, by deeper integration with other enterprise tools.</p>
            </div>
          </Section>

          {/* ── Solution Wireframes ──────────────────── */}
          <Section title="Solution Wireframes">
            <p className="text-slate-500 text-sm mb-6">A 6-step onboarding flow from sign-up to first experienced value. Click a step to jump to it in the prototype below.</p>

            {/* Step pill navigator */}
            <div className="flex flex-wrap gap-2 mb-5">
              {STEPS.map(s => (
                <button
                  key={s.id}
                  onClick={() => setActiveStep(s.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                    activeStep === s.id
                      ? 'bg-[#3b63f0] text-white border-[#3b63f0] shadow-sm'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {s.label}
                  {s.phase && (
                    <span className="text-[10px] font-normal opacity-70">· {s.phase}</span>
                  )}
                </button>
              ))}
            </div>

            {/* Animated step card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="mb-5 p-4 rounded-xl border border-slate-100 bg-slate-50"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${STEPS[activeStep].color}`}>
                    {STEPS[activeStep].label}{STEPS[activeStep].phase ? ` · ${STEPS[activeStep].phase}` : ''}
                  </span>
                  <span className="text-sm font-bold text-slate-900">{STEPS[activeStep].title}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{STEPS[activeStep].note}</p>
              </motion.div>
            </AnimatePresence>

            {/* Wireframe image */}
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <Image
                src="/case-studies/nanonets/nanonets_onboarding_v4.png"
                alt="Nanonets onboarding flow wireframes — 6 steps from sign-up to first experienced value"
                width={1440}
                height={2400}
                className="w-full h-auto"
              />
            </div>
          </Section>

          {/* ── Success Metrics ──────────────────────── */}
          <Section title="Success Metrics">
            <div className="space-y-5">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Activation rate estimation</h3>
                <p>Baseline estimated at 25% — below the B2B SaaS average of 37.5% (Userpilot 2024) due to enterprise complexity and the high bar of first workflow extraction as the activation event, and below the AI/ML sector average of 54.8% due to finance and compliance onboarding friction.</p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-2">Assumptions (common across all scenarios)</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-sm">
                  <li>Role-section improves user quality across the funnel</li>
                  <li>Pre-built demo and templates reduce workflow effort</li>
                  <li>Improvements are benchmarked against AI SaaS onboarding, with an aggressive estimate assuming stronger template-based usage adoption.</li>
                </ul>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border border-slate-200">
                      {['Scenario', 'Activation Rate', 'Lift'].map(h => (
                        <th key={h} className="text-left p-3 bg-slate-50 font-semibold text-slate-700">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { scenario: 'Baseline', rate: '25%', lift: '—' },
                      { scenario: 'Conservative', rate: '30%', lift: '+5 pts' },
                      { scenario: 'Base Case', rate: '37%', lift: '+12 pts' },
                      { scenario: 'Aggressive', rate: '45%', lift: '+20 pts' },
                    ].map(row => (
                      <tr key={row.scenario} className="border border-slate-200">
                        <td className="p-3 text-slate-700 font-medium">{row.scenario}</td>
                        <td className="p-3 text-slate-700">{row.rate}</td>
                        <td className="p-3 text-slate-700">{row.lift}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>The above projections are estimated based on reducing onboarding friction, workflow usability and time-to-value. Actual impact would be validated by an A/B experiment comparing the current onboarding flow against the proposed flow.</p>

              <div>
                <h3 className="font-bold text-slate-900 mb-2">Leading Metrics</h3>
                <ol className="list-decimal list-outside pl-5 space-y-1 text-sm">
                  <li>Activation rate (North Star Metric)</li>
                  <li>Onboarding completion rate</li>
                  <li>Time-to-value</li>
                  <li>Abandonment rate before the first value — to identify false positives affecting activation rate.</li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-2">Lagging Metrics</h3>
                <ol className="list-decimal list-outside pl-5 space-y-1 text-sm">
                  <li>Repeat-usage rate</li>
                  <li>Free to Paid conversion rate</li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-2">Second-order Effects</h3>
                <ol className="list-decimal list-outside pl-5 space-y-1 text-sm">
                  <li>Template usage</li>
                  <li>Template creation and Template marketplace</li>
                  <li>Habit formation and lower CAC</li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-2">Guard-rail metrics</h3>
                <ol className="list-decimal list-outside pl-5 space-y-1 text-sm">
                  <li>Extraction accuracy per document type</li>
                  <li>NPS</li>
                  <li>False positive on extracted data</li>
                </ol>
              </div>
            </div>
          </Section>

          {/* ── Risks & Open Questions ───────────────── */}
          <Section title="Risks &amp; Open Questions">
            <ul className="space-y-4 list-disc list-outside pl-5 text-sm text-slate-700">
              <li>A role-first entry point assumes users can accurately map themselves to predefined roles. As Nanonets serves a broader set of industries, role boundaries become ambiguous, increasing friction and reducing personalisation accuracy.</li>
              <li>Data theft concern for user-created templates — Third-party templates are a natural concern for first-time users, and this needs to be mitigated by clearly showing the security compliance of Nanonets during template selection.</li>
              <li>Template marketplace quality concern — Needs to be regulated by ensuring a comprehensive audit of templates submitted to the marketplace, to ensure that high-quality templates are available. These templates undergo routine checks to maintain industry standards.</li>
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
