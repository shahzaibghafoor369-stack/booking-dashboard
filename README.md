# Multi-Agent Booking & Commission Platform — Phase 3 Dashboard

This is the **Admin & Agent Dashboard** for the Multi-Agent Booking Platform.
It connects to Airtable, Stripe, and n8n to manage bookings, payouts, and agents.

## 🚀 Tech Stack
- Next.js 14 (App Router)
- Clerk (Authentication)
- Airtable (Database)
- Tailwind CSS + Shadcn UI (Styling)
- Vercel (Hosting)
- Sentry (Error Monitoring)

## 🧩 Features
- Admin Dashboard — view all bookings, agents, and earnings
- Agent Dashboard — see personal bookings and payout history
- Role-based authentication (Admin / Agent)
- Dark & Light theme support
- Integrated with Airtable via API
- Secure environment variables setup

## ⚙️ Environment Variables

Create a `.env` file or set these in your Vercel project settings:

```bash
AIRTABLE_API_KEY=your_airtable_pat
AIRTABLE_BASE_ID=your_airtable_base_id
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
SENTRY_DSN=your_sentry_dsn
