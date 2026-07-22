'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import EmbedViewer from '@/components/ui/EmbedViewer'

const DASHBOARD_URL = 'https://cultdashboard.netlify.app/'

export default function CultGrowthMachineCaseStudy() {
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
            Cult.fit Growth Machine — Conversion Funnel MVP
          </h1>
          <p className="text-slate-400 text-sm mb-8">Growth · Health-tech · Analytics</p>

          <div className="mb-12">
            <EmbedViewer url={DASHBOARD_URL} />
          </div>

          {/* ── Overview ─────────────────────────────── */}
          <Section title="Overview">
            <p>Cult.fit is a health-tech and fitness platform helping users build healthier lifestyles through a combination of physical fitness centres, digital workouts, wellness programs, nutrition, and community-driven engagement.</p>
            <p>The biggest pain point for internal teams is that they can see metrics, but cannot identify which behavioural interventions improve long-term retention and monetisation.</p>
            <p>The core insight is that users who form a workout habit convert to paid at significantly higher rates. Optimising for habit formation is the right strategic lever.</p>
            <p>My recommended solution is to build a coherent decision-making system that aligns teams towards habit formation — structured across three phases: Measure, Diagnose, and Act.</p>
          </Section>

          {/* ── Problem ──────────────────────────────── */}
          <Section title="Problem">
            <p>A traditional dashboard tracks relevant metrics (WAU, MAU), but doesn&apos;t act as a decision-making system that surfaces product problems affecting business impact.</p>
            <p>The opportunity is to build a workflow that answers what is being measured, what needs to be diagnosed, and what action needs to be taken.</p>
          </Section>

          {/* ── Core Insight ─────────────────────────── */}
          <Section title="Core Insight">
            <p>{"Cult's strongest retention signal is: \"3 days/week for 4 weeks\"."} Backed by a seven-year study of 1.5 lakh members, users who complete the 3×4 cycle are three times more likely to stay active long-term. <span className="text-slate-500 text-sm">(Source: indiantelevision.com, November 2025)</span></p>
            <p>This makes habit formation the single most important lever to optimise across acquisition, activation, and retention.</p>
          </Section>

          {/* ── Product Philosophy ───────────────────── */}
          <Section title="Product Philosophy">
            <p>Instead of being a set of activity metrics, the dashboard should be a decision-making system. The current dashboard is structured across three phases:</p>
            <ol className="list-decimal list-outside pl-5 space-y-2 text-slate-700 text-sm">
              <li><strong className="text-slate-900">Measure</strong> — Surface what is happening across the funnel in week 1</li>
              <li><strong className="text-slate-900">Diagnose</strong> — Identify which cohorts and channels are driving or dragging habit formation</li>
              <li><strong className="text-slate-900">Act</strong> — Track experiments and surface ranked recommendations to reduce SPM cognitive load</li>
            </ol>
          </Section>

          {/* ── Product Decisions ────────────────────── */}
          <Section title="Product Decisions">
            <div className="space-y-8">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Habit OS</h3>
                <p>Shows where the funnel is leaking and the steps that can be intervened on in week 1. Helps the Senior PM measure whether the product is moving towards targeted habit formation or not.</p>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">User Cohorts</h3>
                <p>The core segmentation layer of the system. Helps an SPM diagnose and compare different cohorts, giving a clear picture of which cohorts are driving habit formation.</p>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Channel Comparison</h3>
                <p>Diagnoses core acquisition channels that are driving habit formation at a lower CAC. Identifies channels that should be scaled, paused, and reviewed.</p>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Experiment Tracker</h3>
                <p>The acting layer based on the diagnosis of cohorts and channel comparison. Helps the SPM track relevant experiments informed by the data above.</p>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Recommendations</h3>
                <p>The intelligence layer based on all the previous steps. Reduces SPM cognitive load on product decisions.</p>
                <p className="mt-2">Runs a 5-rule engine — biggest funnel drop, worst-performing cohort, best-ROI paid channel, 48h activation gap, lowest week-1 retention — each scored against live DB data and ranked by projected NSM impact.</p>
              </div>
            </div>
          </Section>

          {/* ── Risks & Open Questions ───────────────── */}
          <Section title="Risks &amp; Open Questions">
            <ul className="space-y-4 list-disc list-outside pl-5 text-slate-700 text-sm">
              <li>
                <strong className="text-slate-900">Retention may not be driven by habit formation alone</strong> — It could be a combination of a strong local atomic network, offline/online experience, and community support. This might vary geographically, meaning cohorts may need to be segmented across geography to surface the true drivers of habit formation outcomes.
              </li>
              <li>
                <strong className="text-slate-900">Metric optimisation risk</strong> — The goal of habit formation should be achieved without affecting long-term revenue. Optimising purely for the 3×4 signal could create short-term engagement that doesn&apos;t translate to paid conversion or renewal.
              </li>
              <li>
                <strong className="text-slate-900">Dashboard is a decision-support layer, not a deciding layer</strong> — The SPM has to make the call and prioritise what the team needs to invest in, based on experiments, qualitative data, and team resources. The system reduces cognitive load, it doesn&apos;t replace judgement.
              </li>
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
