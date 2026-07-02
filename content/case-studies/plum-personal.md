---
title: Plum Personal — ARPU & CLTV Growth Strategy
company: Plum
type: Product Strategy
domain: Health-tech · B2B2C
version: V4
---

# Plum Personal — ARPU & CLTV Growth Strategy

## Overview

Plum is a B2B employee benefits platform that provides group health insurance to companies. They want to increase their ARPU and CLTV by introducing a new product line called **Plum Personal**, for B2C users.

The core insight is that Plum's usage is based on insurance reimbursement. This translates to episodic usage of the product.

The goal is to transition Plum from episodic usage to a **product of weekly habit**, and if possible, to a daily habit.

My recommended solution is one app that holds both the employer's group policy and personal top-up policy, with a single claims view, one wallet, and one health history — without changing underlying insurance operations.

This shifts Plum from a transactional insurance tool to an integrated health platform, increasing engagement frequency while creating stronger opportunities for upsells and cross-sells, leading to increased ARPU and CLTV.

**The long-term growth loop:**

> Daily usage → High engagement frequency → Richer health and financial behaviour data → Better recommendations → Stronger upsell and cross-sell conversion → Higher ARPU and CLTV → Increased switching cost and customer retention.

---

## Company & Context

| Category | Key Findings |
|---|---|
| **Business Model** | ICICI Lombard, HDFC Ergo General Insurance, and Star Health and Allied Insurance are insurers for Plum. The company makes money via commission (~93% of revenue, ₹38.46 crore), while health benefits and services contribute around ₹2.9 crore. |
| **Users** | End users of the platform include Admin/HR teams in SMBs and employees of the organisation, with Plum Personal trying to activate even users who have been terminated from their current employment. |
| **Market** | The general health insurance market in India has about 20 crore users, while group health insurance has a market of $10B USD and an estimated growth rate of 50% in the next 5 years. |
| **Plum's Market Share** | Plum's website states that they currently cover around 6 lakh users. |
| **Founder's Mission** | The founder's personal mission is to cover 10 million lives by 2030. The gap in the market still resonates with Plum's original vision of connecting with the messy middle: the workforce that is kept out of insurance because of their smaller size. |
| **Competitors** | Onsurity — focused on digitising SME insurance with monthly TeamSure plans. Nova Benefits — goes premium, offering comprehensive wellness suites. Pazcare — cloud-based benefits administration platform. Loop Health — pushes primary care hard with its "Health Assurance" model bundling insurance + in-house doctors + unlimited consultations + chronic disease management. |
| **Current Product** | B2B flagship product, with plans to enter B2B2C. Group health insurance, Plum Lite membership (small teams), tele-health + primary care, Plum Wellbeing. NPS score of 79, 90-second onboarding, 7-day claim cycle, cashless hospital discharge in as little as 20 minutes. |

---

## Problem Definition

Plum's current B2B model has a ceiling on ARPU because the end user has no purchasing power and no reason to open the app between claims.

The primary user — a salaried employee in a Tier 1 Indian city, aged 25 to 40, often with a family member to cover — has no say in benefits, opens the app twice a year during a claim, and Plum has no information about their daily health life.

The opportunity is to shift purchase power to the individual so Plum can convert them into a paying and engaged user.

---

## Research Insights

**Insight 1 — Users pay a premium for perceived value.**
Conversations with Plum and Even Healthcare representatives revealed that Plum's premium is ~50% lower than Even Healthcare's. Yet Even commands higher prices because of a more comprehensive benefit set. This shows users are willing to pay a higher premium when perceived value outweighs cost.

**Insight 2 — The real job-to-be-done: avoid getting sick.**
A 5-Whys exercise on why someone needs health insurance revealed the core reason is that the user doesn't want to get sick, and it is the failure of the system to identify health risks early. The cost of a hospital visit for minor issues outweighs the benefit it brings.

**Insight 3 — HR is the wrong conversion layer.**
Plum operates as a B2B2C model where cross-sell add-ons are decided by HR/Admin teams. However, HR doesn't directly experience the pain of end-users, making it difficult to justify the add-ons at scale. ARPU is constrained by a top-down decision layer which is less aware and harder to influence — a structural limitation in upselling through HR-led channels.

**Insight 4 — Engagement frequency is Plum's moat.**
93% of Plum's revenue comes from insurance providers. Structurally, apart from B2B network effects and a high NPS, Plum doesn't have a solid moat. Becoming a weekly habit product changes this — richer health data creates better personalisation, higher switching cost for the user, and stronger renewal rates.

---

## Solution & Rationale

### A — Free tele-consultation (1 per month)

Offering Plum users 1 free tele-consultation per month helps in early mitigation of health issues, leading to increased platform trust and engagement. Continued engagement creates upsell opportunities for paid consultation, helping expand ARPU.

---

### B — Layered group + personal insurance with single-claims view

Layering group health insurance with personal insurance, a single-claims view, and one health history converts B2B users into personal insurance purchasers. A consolidated view of the user's health data enables better personalisation and recommendations, improving cross-sell conversion and driving ARPU.

---

### C — Unlimited consultations + daily health bytes

Unlimited health consultations and daily health bytes, along with an organisation-level leaderboard, encourage preventive healthcare and drive platform engagement. Frequent engagement leads to better recommendations and improves cross-sell conversion, helping expand ARPU.

---

### D — Family member discounts

Family member discounts act as a referral loop driving acquisition and household-level adoption. Shared insurance coverage drives platform retention and insurance renewal likelihood, helping expand CLTV.

---

## Prioritisation

| Priority | Feature | Rationale |
|---|---|---|
| **HI / ME** — Highest priority | Layering of personal and professional health insurance | The platform that makes everything else possible |
| **HI / HE** — Phase 2 bet | Bundling everything in a single layer + preventive healthcare in policy by default | High value but operationally complex |
| **MI / LE** — Quick win | Discounts on adding parents and other family members | Low effort, strong retention lever |
| **LI / LE** — Engagement seed | Free tele-consultations | Easy to ship, habit-forming |

---

## Recommendation

My primary recommendation is to build a **layering of personal and professional health insurance as a unified interface**.

Layering is not one of the four solutions. It's the platform that makes the other three possible. Without a single-view app that holds both policies, free tele-consults have nowhere to live, bundling has no data to bundle against, and family discounts have no account to apply to.

Everything else is a feature. Layering is the foundation. Once layering is live, free tele-consults, family discounts, and bundling become the natural next sequence of bets.

This unlocks the B2B2C transition for Plum without violating IRDAI compliance constraints. The unified layer provides a consolidated view of users' health data, which is necessary to improve ARPU and CLTV.

---

## Rollout Sequence

**Phase 1 (Month 1–3): Build unified policy view for existing B2B users.**
No new product, just consolidation. Validate that users engage with a single-pane view of their employer coverage.

**Phase 2 (Month 4–6): Launch personal top-up as opt-in for employees in pilot companies.**
Family discounts go live here. Measure conversion, ARPU lift, and claims routing complexity.

**Phase 3 (Month 7–12): Expand to all users, add the free tele-consult layer.**
Activate daily health bytes, the unlimited consult upsell, and begin measuring the engagement → data → recommendation flywheel.

### Solution wireframes

![Plum Personal wireframes — home experience, personal insurance layer, and smart claims flow](/case-studies/plum/plum_screens_composite.png)

---

## Success Metrics & Measurement

### ARPU Estimation

**Model assumptions:**
- User base: 6,00,000+
- Average premium: ₹5,000/year
- Insurance commission: 15%
- Add-on price (Plum revenue): ₹2,000/user/year
- Add-on adoption: 20% of paying users *(India OPD benefit adoption growing 35% YoY, 61% usage when available. Secondary anchor: Aflac WorkForces Report — 22% opt-in for voluntary life insurance, 16% for critical illness)*

| Scenario | Conversion | Paying Users | Commission Rev | Add-on Users | Add-on Rev | Total Revenue |
|---|---|---|---|---|---|---|
| Conservative | 3% | 18,000 | ₹1.35 Cr | 3,600 | ₹0.72 Cr | ₹2.07 Cr |
| **Base** | **7%** | **42,000** | **₹3.15 Cr** | **8,400** | **₹1.68 Cr** | **₹4.83 Cr** |
| Aggressive | 10% | 60,000 | ₹4.50 Cr | 12,000 | ₹2.40 Cr | ₹6.90 Cr |

**Strategic insight:** ~93% of Plum's revenue is dependent on insurer commission; add-ons ensure Plum's heavy dependency on insurer commission reduces over time. The base scenario of ₹4.83 Cr is a ~12.6% revenue lift on the current base of ₹38.46 crore.

### Leading Metrics
- Weekly Active Users (WAU)
- Cross-sell funnel conversion rate after first tele-consultation
- Up-sell conversion rate after employer insurance expiration

### Lagging Metrics
- Weekly app retention (app retention as a whole)
- ARPU (Average Revenue Per User)
- CLTV (Customer Lifetime Value)

### Second-Order Effects
Improved app engagement → higher interaction frequency → richer user health data → better recommendations → improved word-of-mouth acquisition → stronger retention and Plum adoption.

### Guardrail Metrics
- NPS of Plum app
- Personal insurance renewal rate
- Claims orchestration TAT

---

## Risks & Open Questions

**1. Employment continuity risk**
If a user leaves an employer offering Plum, the transition from employer-sponsored insurance to personal coverage must remain seamless without disrupting access, claims history, or active benefits.

**2. Data privacy and visibility boundaries**
The layered model requires strict separation between employer-visible insurance data and user-private personal health information. The system must ensure explicit consent and granular controls before sharing any personal health data with employers.

**3. Claims orchestration complexity**
When both employer and personal insurance policies apply to the same medical event, Plum must reliably orchestrate claim routing, prioritisation, and reimbursement flows without creating operational confusion or delays.

**4. Insurance partner alignment**
Plum depends on insurers such as ICICI Lombard and HDFC Ergo continuing to view Plum as a distribution and retention layer rather than a competing consumer insurance platform.

**5. Tele-consultation unit economics**
Free tele-consultations may improve engagement and generate data for better upsells, but long-term sustainability depends on usage caps, conversion into paid services, and operational cost control.

**6. Regulatory and compliance uncertainty**
The integration of employer and personal insurance experiences must continue to comply with evolving IRDAI regulations around data sharing, insurance distribution, and healthcare services.
