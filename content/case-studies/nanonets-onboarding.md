---
title: Nanonets — Onboarding Redesign
company: Nanonets
type: case-study
tags: [product-strategy, b2b-saas, activation, onboarding, ux]
---

# Nanonets — Onboarding Redesign

## Overview

Users interpret Nanonets as a generic extraction tool rather than a system for automating enterprise document workflows.

Core insight is that Nanonets fails to communicate pre-defined workflow-to-business-value during their onboarding flow.

My recommendation is to implement a 5-step flow that takes a new Nanonets user from sign-up to first experienced value in under 5 minutes, helping the user understand workflow automation that saves manual effort.

## Company & Context

**Business Model:** Revenue comes from subscription plans (Growth & Enterprise) and usage-based pricing tied to document/page processing volume. Growth appears focused on enterprise expansion and workflow automation.

**Company Vision & Strategy:** Vision: Make Machine Learning as ubiquitous as databases. Mission: Transform unstructured data into actionable intelligence. The current focus is expanding enterprise adoption, investing in AI agents/workflows, and scaling GTM efforts following Series B funding.

**Primary Users:** Operations teams, Finance/AP teams, Procurement teams, Shared Service Centres, Compliance teams, and Enterprise IT teams responsible for document-heavy workflows.

**User Goals:** Reduce manual document processing, improve accuracy, accelerate workflows, lower operational costs, and integrate extracted data into existing systems.

**User Pain Points:** High manual effort, slow processing times, document errors, exception handling, disconnected workflows, and complex integrations across enterprise systems.

**Competitive Landscape:**
- Rossum — Very strong for AP and supplier collaboration in large enterprises; implementation is heavier compared to Nanonets.
- Docsumo — Good for financial docs with deep customisation, but involves more template/training work.
- ABBYY — Good for financial docs with deep customisation. Legacy feels, higher implementation overhead.
- Amazon Textract — Massive scale, native to AWS, pay-as-you-go. DIY, customers must build surrounding workflows.

## Problem Definition

28-year-old finance manager in a mid-sized enterprise startup in Bangalore, who looks after AP, AR and reconciliation, struggles with the process of identifying and cross-checking invoices and payments during the closing cycle, because the invoice-to-ERP workflow is fragmented across multiple systems with no unified automated pipeline.

This results in repeated manual verification, leading to operational overhead.

## Research Insights

1. I spoke with a Nanonets sales rep. His fundamental statement, "OCR has become a commodity; it is more important to put out structured data with accuracy at scale." I learnt that Nanonets' core strength lies in its model accuracy with its ability to detect complex handwriting, charts and table structures. Connectors with other enterprise tools ensure that the whole process is automated and synced.

2. After going through 5 whys to understand why someone would need a tool for extracting invoices and payments, the core reason was that the user relies on multiple systems that are not coherently integrated, leading to frequent manual verification during the closing cycle with no unified automated pipeline at scale.

3. Compared to Nanonets, other leading competitors I evaluated have a complex onboarding process with enterprise gating (ABBYY, Hypatos), personal email gating (Docsumo), confusing UX flow (Rossum) and self-serve implementation (Textract). Resulting in a sales-led understanding of product workflow.

4. Users perceive Nanonets as similar to ChatGPT or Claude based on its onboarding experience. Following is their user flow: Signup (Google Login) → GPT-like interface → How can I help you with your documents today (or try from examples) → Asks clarifying questions and necessary documents → problem solved → text is extracted → nudge to create an agent based on the same workflow.

5. The onboarding fails to communicate what actions to take and what outputs to expect, which prevents them from meaningful interaction with the system.

**Summary:** Nanonets is perceived as similar to ChatGPT, while its core strength lies in model accuracy and structured data at scale, with enterprise integrations. What the user needs is an onboarding story that solves the automated workflow operation without depending on sales to realise the value to interact meaningfully with the system.

## Solution & Rationale

### Personalisation / Segmentation
- Role-based entry — Helps users determine whether Nanonets is relevant to their business needs.

### Communicate how the system works
- Pre-loaded demo with a sample invoice showing instant extraction — Helps the user classify whether the workflow supports their business requirements or not, without manually going through the whole process.
- Template-based workflow backed by social proof — Helps the user figure out the most suitable template that suits their business workflow based on usage by other business leaders in the industry.
- Aha moment of syncing and extraction — defined by pre-defined workflow templates — Helps user solve the problem of deeper integration with other enterprise tools used in their business and relieves the pain of accurate synchronisation across tools.

### Value Justification
- Time saved post-extraction insight in terms of time and money — Gives immediate value in terms of time and money, and helps the manager decide whether the tool is worth investing in or not.

### Workflow reusability
- Template editing based on business needs — reduces user anxiety by allowing users to modify available templates as per business requirements without adding the operational overload of building a workflow from scratch.

## Prioritise

| Step | Impact | Effort | Phase | Trust barrier removed |
|------|--------|--------|-------|----------------------|
| Step 1: Role-based entry | High | Low | V1 | Relevance doubt |
| Step 2: Pre-loaded demo | High | Low | V1 | Workflow credibility doubt |
| Step 3: Template + social proof | High | Medium | V1 | Authenticity and usage credibility doubt |
| Step 4: Connector abstraction | High | High | V2 | Data ownership and syncing doubt |
| Step 5: Time saved Insight | High | Low | V1 | ROI doubt |
| Step 6: Template editing | High | Low | V1 | Workflow customisation doubt |

## Recommendation

My recommendation is to implement a 5-step flow that takes a new Nanonets user from sign-up to first experienced value in under 5 minutes.

The 5-step flow is personalised, ensuring users evaluate Nanonets in the context of their specific business problem rather than a generic extraction-automation tool that saves manual effort.

### Tradeoffs

The framing of the problem is to discuss the tension between showing AI "magic" immediately (risks setting unrealistic expectations) vs. honest onboarding (slower but builds trust).

My research revealed that Nanonets was being perceived as a generic AI extraction tool rather than a structured automation workflow.

AI "magic" helps the user arrive at the extraction faster, but won't lead to meaningful interaction. Because the value lies in the workflow automation rather than in the extraction.

I chose honest onboarding that results in higher drop-offs at the role selection level. Users who don't see their role will leave before reaching the demo, leading to better conversion of qualified users who can see value in the automation workflow.

### Rollout Sequencing

Phase 1 ships steps (1, 2, 3, 5, 6) leading to enhanced onboarding and activation by forming a causal chain.

Phase 2 ships step 4 — connector abstraction, creates high switching cost for Nanonets clients, by deeper integration with other enterprise tools.

## Success Metrics

**Activation rate estimation:** Baseline estimated at 25% — below the B2B SaaS average of 37.5% (Userpilot 2024) due to enterprise complexity and the high bar of first workflow extraction as the activation event, and below the AI/ML sector average of 54.8% due to finance and compliance onboarding friction.

| Scenario | Activation Rate | Lift |
|----------|----------------|------|
| Baseline | 25% | — |
| Conservative | 30% | +5 pts |
| Base Case | 37% | +12 pts |
| Aggressive | 45% | +20 pts |

**Leading Metrics:**
1. Activation rate (North Star Metric)
2. Onboarding completion rate
3. Time-to-value
4. Abandonment rate before the first value — to identify false positives affecting activation rate.

**Lagging Metrics:**
1. Repeat-usage rate
2. Free to Paid conversion rate

**Second-order Effects:**
1. Template usage
2. Template creation and Template marketplace
3. Habit formation and lower CAC

**Guard-rail metrics:**
1. Extraction accuracy per document type
2. NPS
3. False positive on extracted data

## Risks & Open Questions

- A role-first entry point assumes users can accurately map themselves to predefined roles. As Nanonets serves a broader set of industries, role boundaries become ambiguous, increasing friction and reducing personalisation accuracy.
- Data theft concern for user-created templates — Third-party templates are a natural concern for first-time users, and this needs to be mitigated by clearly showing the security compliance of Nanonets during template selection.
- Template marketplace quality concern — Needs to be regulated by ensuring a comprehensive audit of templates submitted to the marketplace, to ensure that high-quality templates are available. These templates undergo routine checks to maintain industry standards.
