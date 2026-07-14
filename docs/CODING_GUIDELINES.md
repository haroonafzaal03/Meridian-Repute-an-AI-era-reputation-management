# Coding guidelines

Conventions for the Meridian Repute codebase. Keep new code reading like the
code already here.

## Stack

- **Next.js 16**, App Router, TypeScript (strict), React 19.
- **Tailwind CSS v4** (CSS-first config via `@theme` in `src/app/globals.css`).
- **zod** for input validation, **nodemailer** for transactional email.

## Project structure

```
src/
  app/
    layout.tsx            Root layout: fonts, global metadata, Organization JSON-LD
    page.tsx              Homepage: composes sections + page-level JSON-LD
    globals.css           Tailwind import + theme tokens + keyframes
    sitemap.ts            /sitemap.xml
    robots.ts             /robots.txt (search + AI crawlers)
    opengraph-image.tsx   Dynamic OG image (next/og)
    icon.svg              Favicon
    actions/
      consultation.ts     "use server" — form handler (validation + email)
  components/             One component per section, PascalCase files
  lib/
    site-config.ts        Org facts: name, url, email, offices
    content.ts            Marketing copy: services, testimonials, etc.
```

## TypeScript & React

- Server Components by default. Add `"use client"` only for interactivity, and
  keep those components as small leaves (see `site-nav`, `testimonials`,
  `consultation-form`).
- Type component props inline or with a local `type`. Avoid `any`.
- Prefer `const` arrow-free named functions for components:
  `export function Hero() { … }`.
- Derive, don't duplicate: read shared data from `lib/`, map it in the view.
- No default exports for components (except Next's required files: `page.tsx`,
  `layout.tsx`, route handlers, metadata routes).

## Styling

- Tailwind utility classes only; no CSS Modules or inline `style` except for
  genuinely dynamic values (computed positions, per-item accent colors).
- Use theme tokens (`bg-cream`, `text-ink`, `text-terracotta`, …). Never paste
  raw hex codes into components — add a token in `globals.css` instead.
- Arbitrary values are fine for the editorial letter-spacing / `clamp()` type
  scale that defines this brand (e.g. `tracking-[0.22em]`,
  `text-[clamp(18px,7vw,42px)]`) — that's intentional, not a smell.
- Every animation is gated: `motion-safe:animate-*`, or relies on the global
  `prefers-reduced-motion` reset. Never ship unconditional infinite motion.

## Data & content

- All copy and list data live in `src/lib/content.ts`; org/contact facts in
  `src/lib/site-config.ts`. A content change should touch only `lib/`.
- Accent colors are referenced by name (`"terracotta" | "forest"`) in data and
  mapped to CSS vars in the component — keep that indirection.

## Server Actions

- Files with `"use server"` may export **only async functions**. Put shared
  types/constants in the consuming client component.
- Validate every input with zod; never trust `FormData`.
- Never throw raw errors to the client; return a typed state object with a
  friendly `message`. Log details server-side with `console.error`.
- Read secrets from `process.env` at runtime; fail gracefully (and tell the
  user to email directly) if SMTP isn't configured.

## Quality gates

Before committing: `npm run lint && npm run typecheck && npm run build`, then
eyeball the change in `npm run preview`. Use `/code-review` for a diff review.
