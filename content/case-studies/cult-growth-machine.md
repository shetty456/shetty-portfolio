---
title: Cult.fit Growth Machine — Conversion Funnel MVP
company: Cult.fit
type: Growth
domain: Health-tech · Analytics
---

# Cult.fit Growth Machine — Conversion Funnel MVP

## Overview

Cult.fit is a health-tech and fitness platform helping users build healthier lifestyles through a combination of physical fitness centres, digital workouts, wellness programs, nutrition, and community-driven engagement.

The biggest pain point for internal teams is that they can see metrics, but cannot identify which behavioural interventions improve long-term retention and monetisation.

The core insight is that users who form a workout habit convert to paid at significantly higher rates. Optimising for habit formation is the right strategic lever.

My recommended solution is to build a coherent decision-making system that aligns teams towards habit formation — structured across three phases: Measure, Diagnose, and Act.

## Problem

A traditional dashboard tracks relevant metrics (WAU, MAU), but doesn't act as a decision-making system that surfaces product problems affecting business impact.

The opportunity is to build a workflow that answers what is being measured, what needs to be diagnosed, and what action needs to be taken.

## Core Insight

Cult's strongest retention signal is: "3 days/week for 4 weeks". Backed by a seven-year study of 1.5 lakh members, users who complete the 3×4 cycle are three times more likely to stay active long-term. (Source: indiantelevision.com, November 2025)

This makes habit formation the single most important lever to optimise across acquisition, activation, and retention.

## Product Philosophy

Instead of being a set of activity metrics, the dashboard should be a decision-making system. The dashboard is structured across three phases:

- Measure — Surface what is happening across the funnel in week 1
- Diagnose — Identify which cohorts and channels are driving or dragging habit formation
- Act — Track experiments and surface ranked recommendations to reduce SPM cognitive load

## Product Decisions

### Habit OS

Shows where the funnel is leaking and the steps that can be intervened on in week 1. Helps the Senior PM measure whether the product is moving towards targeted habit formation or not.

### User Cohorts

The core segmentation layer of the system. Helps an SPM diagnose and compare different cohorts, giving a clear picture of which cohorts are driving habit formation.

### Channel Comparison

Diagnoses core acquisition channels that are driving habit formation at a lower CAC. Identifies channels that should be scaled, paused, and reviewed.

### Experiment Tracker

The acting layer based on the diagnosis of cohorts and channel comparison. Helps the SPM track relevant experiments informed by the data above.

### Recommendations

The intelligence layer based on all the previous steps. Reduces SPM cognitive load on product decisions.

Runs a 5-rule engine — biggest funnel drop, worst-performing cohort, best-ROI paid channel, 48h activation gap, lowest week-1 retention — each scored against live DB data and ranked by projected NSM impact.

## Risks & Open Questions

1. Retention may not be driven by habit formation alone — it could be a combination of a strong local atomic network, offline/online experience, and community support. This might vary geographically, meaning cohorts may need to be segmented across geography to surface the true drivers of habit formation outcomes.

2. Metric optimisation risk — The goal of habit formation should be achieved without affecting long-term revenue. Optimising purely for the 3×4 signal could create short-term engagement that doesn't translate to paid conversion or renewal.

3. Dashboard is a decision-support layer, not a deciding layer — The SPM has to make the call and prioritise what the team needs to invest in, based on experiments, qualitative data, and team resources. The system reduces cognitive load, it doesn't replace judgement.
