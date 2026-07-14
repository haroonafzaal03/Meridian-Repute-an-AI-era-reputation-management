---
name: add-page
description: Add a new SEO-complete route/page to the Meridian Repute site (e.g. a service detail page, blog post, or landing page). Use when creating any new page so it ships with metadata, sitemap entry, JSON-LD, and on-brand markup.
---

# Add a new page to Meridian Repute

Every new route must be SEO- and AI-SEO-complete on arrival. Follow this so
nothing is missed. See `docs/SEO_CHECKLIST.md` and `docs/DESIGN_SYSTEM.md`.

## Steps

1. **Create the route** under `src/app/<segment>/page.tsx` as a Server
   Component. Keep any interactivity in a small `"use client"` child.

2. **Export `metadata`** (static object if it doesn't depend on request data):
   ```ts
   import type { Metadata } from "next";
   export const metadata: Metadata = {
     title: "…",                     // unique, ≤ ~60 chars (layout appends brand)
     description: "…",               // ~150–160 chars
     alternates: { canonical: "/<segment>" },
   };
   ```
   OG/Twitter/robots are inherited from the root layout; override only if needed.

3. **Add to the sitemap** — append an entry in `src/app/sitemap.ts` with a
   sensible `changeFrequency` and `priority`.

4. **Add JSON-LD** appropriate to the page type (Service, BlogPosting, FAQPage,
   BreadcrumbList, …) as a `<script type="application/ld+json">`, escaping with
   `.replace(/</g, "\\u003c")` (see existing helpers in `src/app/page.tsx`).
   Keep it consistent with the visible copy.

5. **Content in `lib/`** — put copy/lists in `src/lib/content.ts`, not inline.

6. **Markup & style** — one `<h1>`, ordered headings, theme tokens
   (`bg-cream`, `text-ink`, `text-muted`, `text-terracotta`, `text-forest`),
   `motion-safe:` on any animation. Reuse `ScrollReveal` for entrances.

7. **Navigation** — if it should appear in the menu, add it to `navLinks` in
   `src/lib/content.ts` (use a real path, not a `#hash`, for separate routes).

8. **Verify:**
   ```bash
   npm run lint && npm run typecheck && npm run build
   npm run preview   # eyeball the page + view-source for metadata/JSON-LD
   ```
   Validate structured data at https://validator.schema.org/.
