# CareCall Setup Guide (npm, TypeScript everywhere)

## Apps
- carecall-web/ (Next.js dashboard + TypeScript + Tailwind)
- carecall-api/ (NestJS server + TypeScript + Prisma)

## One-time setup (run in order, confirm each)
1. cd care-call/carecall-api && npm install
2. npm create nestjs (already done; use existing)
3. Set DATABASE_URL + REDIS_URL in .env from .env.example
4. npx prisma migrate dev (DB created per ARCHITECTURE.md schema)
5. cd ../carecall-web && npm install; npm run dev

## Run
- Server: cd carecall-api && npm run start:dev
- Web: cd carecall-web && npm run dev
- Both: use concurrently from root package.json

## Security / Best Practices (from ARCHITECTURE.md)
- Hard cap 300s enforced server-side (never model-only)
- VAD silence >=5000ms
- Webhook HMAC verified + idempotent
- PII redacted from logs; encrypt transcripts at rest
- Escalation: keyword fallback + LLM output combined
- Timezone-aware scheduling; respect 9am-6pm + quiet hours
- Exponential backoff retries max 3
npx prisma migrate dev executed (schema defined)
Supabase Auth + RLS + agency_id scoping
