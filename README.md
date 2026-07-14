# Meridian Repute

Marketing site for **Meridian Repute** — an AI-era reputation management &
brand intelligence consultancy (offices in Lahore, Pakistan and Houston, TX;
est. 2020). A rebuild of the original static HTML demo as a fast, SEO- and
AI-SEO-optimized **Next.js** application, deployable to Node.js shared hosting.

## Tech stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4**
- **zod** (validation) · **nodemailer** (consultation email)
- Deploy target: **cPanel / Passenger** (Next.js `output: standalone`)

## Quick start

```bash
npm ci
cp -n .env.example .env.local   # optional: add SMTP creds for the form
npm run dev                     # http://localhost:3000
```

> On machines with a low OS file-watch limit, `npm run dev` uses webpack with
> polling (configured via `.env.local`). Use `npm run dev:turbo` for Turbopack
> on a normal machine, or `npm run preview` for a non-watching production serve.

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Dev server (webpack; polling-friendly) |
| `npm run dev:turbo` | Dev server (Turbopack) |
| `npm run build` | Production build (`output: standalone`) |
| `npm run preview` | Build + serve production locally |
| `npm run package:cpanel` | Assemble the cPanel/Passenger deploy bundle |
| `npm run lint` / `npm run typecheck` | Quality gates |

## Project layout

```
src/app/         Routes, layout, metadata (sitemap/robots/OG), server action
src/components/  One component per page section
src/lib/         site-config.ts (org facts) + content.ts (marketing copy)
docs/            Coding guidelines, design system, SEO checklist
.claude/skills/  bootstrap · deploy-cpanel · add-page
```

## SEO & AI-SEO

Metadata API, dynamic OG image, sitemap, robots (search + AI crawlers:
GPTBot/ClaudeBot/PerplexityBot/Google-Extended/…), JSON-LD (Organization,
ProfessionalService, Service, FAQ), and `llms.txt`. See
[`docs/SEO_CHECKLIST.md`](docs/SEO_CHECKLIST.md).

## Documentation

- [`CLAUDE.md`](CLAUDE.md) — project rules for contributors / AI agents
- [`DEPLOY.md`](DEPLOY.md) — cPanel / Passenger deployment walkthrough
- [`PLAN.md`](PLAN.md) — phased execution roadmap
- [`docs/`](docs/) — coding guidelines, design system, SEO checklist
