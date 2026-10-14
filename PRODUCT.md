# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (carecall-web) + Nest.js (carecall-api) + PostgreSQL/Prisma + Vapi.ai + Twilio + OpenAI GPT-4o-mini (Structured Outputs) + BullMQ/Redis + Supabase Auth

## Users

- **Primary:** Healthcare agency staff managing Medicare Remote Patient Monitoring (RPM) programs
- **Core buyers/operators:** Staff who configure rosters, review daily summaries, and receive escalations
- **End users:** Senior patients (ages 65+) receiving daily phone-based health check-ins

## Product Purpose

CareCall is a B2B2C telephony AI agent that places a daily outbound phone check-in to seniors, captures health status information, and escalates urgent issues to agency staff. It operates without requiring a mobile app — voice-first for low-tech senior callers.

## Positioning

A voice-first RPM check-in that works for seniors who will not use an app, with a hard 5-minute call cap, long pause tolerance tuned for elderly callers, and deterministic keyword-based escalation that never relies on the LLM alone for safety-critical paths.

## Operating Context

- Daily CRON job triggers per-patient outbound calls via Vapi
- Calls are hard-capped at 5 minutes server-side and redundantly at the telephony layer
- Vapi streams webhook events to the backend; handlers are idempotent and signature-verified
- After the call, GPT-4o-mini summarizes the transcript into structured RPM data
- Critical responses trigger agency SMS notifications via Twilio
- Agency staff review summaries on a Next.js dashboard scoped by `agency_id`
- Scheduling respects patient timezone and quiet hours (9am–6pm local)
- PII (name, phone, transcript) is encrypted at rest and redacted from all logs

## Capabilities and Constraints

- Outbound daily calls without requiring a mobile app
- Voice Activity Detection tuned for natural pauses (silence timeout ≥ 5000ms)
- Hard 5-minute call cap enforced server-side and at the telephony layer
- Structured RPM summarization via GPT-4o-mini Structured Outputs
- Escalation via SMS when `escalation_required === true`, plus keyword fallback ("fell", "chest pain", "can't breathe")
- Idempotent escalation: one SMS per patient per day unless severity increases
- Exponential backoff for failed outbound attempts (max 3 retries)
- Webhook replay/idempotency: duplicate events must not create duplicate summaries or SMS
- Consent capture with `consent_captured_at` timestamp
- All queries scoped by `agency_id`
- Config validated at startup with zod

## Brand Commitments

- Name: CareCall
- Voice: Calm, clear, and simple — suited for elderly callers and clinical staff
- Compliance posture: defensible to a compliance reviewer and clinical staff; privacy and auditability over feature velocity

## Evidence on Hand

- `care-call/ARCHITECTURE.md` — full architecture and implementation specification
- `care-call/carecall-web/` — Next.js scaffold (UI not yet built)
- `care-call/carecall-api/` — Nest.js scaffold with controllers, services, jobs, prisma (backend stubs)
- `care-call/SETUP_GUIDE.md`

**Absences:** No production UI, no live deployment, no real patient data, no consent records.

## Product Principles

1. Safety-critical paths (escalation, call cutoff) must never rely on a single mechanism — combine LLM output with keyword fallback and enforce the hard cap at both the backend and telephony layer.
2. Privacy is non-negotiable: PII is encrypted at rest, redacted from logs, and scoped by `agency_id` on every query.
3. Reliability over velocity: webhook handlers are idempotent and signature-verified; retries use exponential backoff with a 3-attempt cap.
4. Seniors are the primary callers: voice scripts are simple and clear, pauses are long, and the interface is large and forgiving.
5. Every design decision must be defensible to a compliance reviewer and to the agency's clinical staff.

## Accessibility & Inclusion

- WCAG AA baseline for the agency dashboard
- Senior-friendly: large typography, simple clear voice scripts, no complex gestures
- Voice Activity Detection silence timeout of at least 5000ms so patients are not interrupted mid-sentence
- Proper disclosure statement at the start of every recorded call