# SEO & AI-SEO checklist

This site is optimized for both classic search engines and AI answer engines
(ChatGPT, Gemini, Claude, Perplexity). Work through this list for any new page
or significant content change.

## What's already in place

- **Metadata API** (`src/app/layout.tsx`): title template, description,
  keywords, canonical, Open Graph, Twitter card, robots directives,
  `metadataBase`.
- **Dynamic OG image** at `/opengraph-image` (branded, 1200×630).
- **`sitemap.ts`** → `/sitemap.xml`, **`robots.ts`** → `/robots.txt` (explicitly
  allows GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai,
  PerplexityBot, Google-Extended, OAI-SearchBot).
- **JSON-LD** structured data: `Organization` (layout), `ProfessionalService`
  ×2 offices, `Service`/`OfferCatalog`, and `FAQPage` (page).
- **`/llms.txt`** (`public/llms.txt`): plain-language summary + facts for LLMs.
- **Semantic HTML**: single H1, ordered headings, `<address>`, `<nav>`,
  `<main>`, `<footer>`.
- **Performance**: fully static prerender, `next/font` (no layout shift),
  compression, security headers, no render-blocking third-party JS.

## Per-page checklist

- [ ] Export `metadata` (or `generateMetadata`) with a unique **title** (≤ ~60
      chars) and **description** (~150–160 chars).
- [ ] Set a **canonical** URL via `alternates.canonical`.
- [ ] Add the route to `src/app/sitemap.ts` with sensible `changeFrequency` /
      `priority`.
- [ ] Add appropriate **JSON-LD** (Article/BlogPosting/Service/FAQ/BreadcrumbList
      as relevant); validate at <https://validator.schema.org/> and Google's
      Rich Results Test.
- [ ] Exactly one **H1**; logical H2/H3 nesting; descriptive link text.
- [ ] All images use `next/image` with meaningful `alt` (empty `alt=""` only for
      decorative).
- [ ] Real, substantive copy (AI engines cite text, not visuals) — put durable
      facts in `lib/` and, if broadly useful, reflect them in `llms.txt`.

## AI-SEO (generative engine optimization) specifics

- Keep **factual claims explicit and self-contained** in prose — AI engines
  extract sentences, so "Meridian Repute, founded in 2020, has offices in
  Lahore and Houston" beats scattering those facts across visuals.
- Maintain **structured data parity**: the JSON-LD, visible copy, and
  `llms.txt` should agree. Update all three together.
- Prefer **question-shaped headings + direct answers** (see the FAQ data) —
  this is what answer engines quote.
- Don't hide meaningful content behind interaction only; ensure it's in the
  server-rendered HTML.

## Before launch (production)

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real domain and rebuild (it's inlined
      into canonical/sitemap/JSON-LD).
- [ ] Verify `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, `/llms.txt`.
- [ ] Submit `sitemap.xml` in Google Search Console + Bing Webmaster Tools.
- [ ] Add `verification` codes (Google/Bing) to `metadata` once you have them.
- [ ] Run Lighthouse (target 95+ SEO/Best-Practices/Accessibility) and a
      Rich Results test on the homepage.
