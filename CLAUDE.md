@AGENTS.md

# Meridian Repute — project rules

Marketing site for **Meridian Repute**, an AI-era reputation management &
brand intelligence consultancy. Built with Next.js 16 (App Router) + Tailwind
CSS v4, shipped as a **static export** (`output: "export"`) to cPanel/Apache
shared hosting (Namecheap). The only server-side piece is `public/contact.php`,
which handles the consultation form via PHP mail().

Read `docs/CODING_GUIDELINES.md`, `docs/DESIGN_SYSTEM.md`, and
`docs/SEO_CHECKLIST.md` before non-trivial work. Read `DEPLOY.md` before
touching build/deploy. `PLAN.md` is the roadmap.

## Golden rules

1. **Docs before code.** Next.js 16 differs from training data — consult
   `node_modules/next/dist/docs/` (per `AGENTS.md`) before using any Next API.
2. **Content lives in data, not JSX.** All marketing copy/lists come from
   `src/lib/content.ts` and `src/lib/site-config.ts`. Edit copy there; don't
   hardcode strings into components.
3. **Server Components by default.** Only add `"use client"` when a component
   needs state, effects, or event handlers (nav toggle, testimonials drag,
   consultation form). Keep client components small and leaf-level.
4. **No server runtime — it's a static export.** No Server Actions, API routes,
   ISR, or `next/image` optimization (images are `unoptimized`). Forms post to a
   PHP endpoint (`public/contact.php`). Metadata routes are marked
   `export const dynamic = "force-static"`.
5. **SEO is a feature, not an afterthought.** Any new page/route must set
   `metadata` (title, description, canonical with trailing slash), be added to
   `sitemap.ts`, and get relevant JSON-LD. Follow `docs/SEO_CHECKLIST.md`.
6. **Respect the design system.** Use the Tailwind theme tokens
   (`bg-cream`, `text-ink`, `text-muted`, `border-border`, `text-terracotta`,
   `text-forest`) — never raw hexes in components. See `docs/DESIGN_SYSTEM.md`.
7. **Accessibility + motion.** Exactly one `<h1>` per page; sections use
   `<h2>`/`<h3>` in order. All animation must be gated by `motion-safe:` or the
   global `prefers-reduced-motion` reset in `globals.css`.
8. **Keep the build static-friendly.** The homepage prerenders fully static.
   Don't introduce request-time APIs on it without a deliberate reason.

## Commands

- `npm run dev` — dev server (webpack; polling via `.env.local` for low
  file-watch environments). `npm run dev:turbo` for Turbopack on normal machines.
- `npm run build` — static export to `out/` (`output: "export"`).
- `npm run preview` — build + serve `out/` locally (static).
- `npm run typecheck` / `npm run lint` — must pass before committing.
- `npm run package:cpanel` — build + zip `out/` for cPanel upload (see DEPLOY.md).

## Definition of done for a change

`npm run lint` + `npm run typecheck` + `npm run build` all pass, and you have
visually verified the affected section in `npm run preview`.
