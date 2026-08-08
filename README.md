# Kinship — Therapy Membership Demo

Frontend-only React demo for a culturally connected virtual therapy membership platform.

## Dual UI

- **Mobile (≤900px):** phone-width app shell, sticky top bar, bottom tab navigation
- **Desktop (>900px):** sidebar console layout for PC

Resize the browser to see both experiences.

## Demo logins

| Role | Email | Password |
|------|-------|----------|
| Client | client@kinship.demo | demo123 |
| Therapist | therapist@kinship.demo | demo123 |
| Admin | admin@kinship.demo | demo123 |

## Included

- Role-based dashboards
- Client: matching, book, sessions, membership, alerts
- Therapist: clients, availability, accept/decline appts, sessions
- Admin: people, matching, appointments, payments/refunds, reports

## Run

```bash
npm install
npm run dev
```

## Deploy (Vercel)

`npm run build` → `dist` · SPA rewrites in `vercel.json`
