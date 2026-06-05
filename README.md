# Company2You — Next.js Website

Built with Next.js 14 + Tailwind CSS. Deploy on Vercel.

## Local Development

```bash
npm install
cp .env.example .env.local
# Add your Resend API key to .env.local
npm run dev
```

## Vercel Deployment

1. Push this folder to a GitHub repo
2. Import the repo in Vercel (vercel.com/new)
3. Go to **Settings → Environment Variables**
4. Add: `RESEND_API_KEY` = your Resend API key
5. Deploy

## Email Setup (Resend — free tier)

1. Go to [resend.com](https://resend.com) and create a free account
2. Copy your API key from the dashboard
3. Add it as `RESEND_API_KEY` in Vercel environment variables
4. All enquiries will land in **Company2You.uk@gmail.com**

> Free tier: 100 emails/day, 3,000/month — more than enough.

## Connecting a Custom Domain

In Vercel: **Settings → Domains → Add Domain → company2you.co.uk**

---
Built by tyl3rbuilds
