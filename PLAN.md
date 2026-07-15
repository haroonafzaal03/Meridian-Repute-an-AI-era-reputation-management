# Meridian Repute — execution roadmap

From a static HTML demo to an SEO- and AI-SEO-optimized Next.js site on
Node.js shared hosting. Phase 0 is **done** (this repo); the rest is the
forward plan.

---

## Phase 0 — Foundation ✅ (done in this repo)

- Next.js 16 (App Router, TS, React 19) + Tailwind v4 scaffold.
- Faithful rebuild of the demo: hero, about, tech-partner marquee, services,
  testimonials, statement, consultation, contact/footer — as semantic,
  accessible, responsive components with content driven from `src/lib/`.
- Consultation form rebuilt as a **Server Action** (zod validation + nodemailer
  SMTP) replacing the old `mailto:` hack, with graceful "not configured"
  fallback.
- SEO/AI-SEO baseline: Metadata API (title/desc/canonical/OG/Twitter/robots),
  dynamic OG image, `sitemap.ts`, `robots.ts` (search + AI crawlers),
  JSON-LD (Organization, ProfessionalService×2, Service/OfferCatalog, FAQPage),
  `llms.txt`, `next/font`, security headers, fully static prerender.
- Deploy target wired for cPanel/Passenger (`output: standalone`,
  `package:cpanel` script, `DEPLOY.md`) — bundle verified booting + serving.
- Rules & skills: `CLAUDE.md`, `docs/{CODING_GUIDELINES,DESIGN_SYSTEM,SEO_CHECKLIST}.md`,
  `.claude/skills/{bootstrap,deploy-cpanel,add-page}`.

### Phase 0.1 — "Requested design changes v3" ✅ (done)

- Canonical host set to **www.meridianrepute.com**; contact email corrected
  `How@` → **`info@meridianrepute.com`** (cascades via `site-config.ts`).
- New homepage sections: **How It Works** (4-step process) and a **visible FAQ**
  (10 Q&As; previously only in JSON-LD). Added to nav.
- **4 policy routes** — `/privacy-policy`, `/terms-of-service`, `/disclaimer`,
  `/ethics-standards` — brand-styled via `PolicyShell`, each with metadata +
  canonical.
- Footer **legal nav** + an **Ethics link in About body copy** (selling point).
- JSON-LD expanded to an `@graph` adding **WebSite** + **BreadcrumbList**;
  `sitemap.ts` now lists the policy routes (no fragment URLs).

---

## Phase 1 — Content parity & real assets (1–2 days)

**Goal:** replace placeholders; make every fact real and consistent.

- [ ] Drop in real brand assets: logo, favicon set, About visual, client/team
      photos (swap the placeholder blocks in `about.tsx`, `testimonials.tsx`).
- [ ] Confirm/correct all copy, service descriptions, testimonials (attribute
      real ones or clearly keep them anonymized), office details, phone/email.
- [ ] Finalize the OG image (either keep the generated one or supply a designed
      1200×630 PNG).
- [ ] Decide the canonical production domain and set `NEXT_PUBLIC_SITE_URL`.
- [ ] Add real social profile URLs to the Organization JSON-LD `sameAs`.

## Phase 2 — SEO / AI-SEO hardening (1–2 days)

**Goal:** move from "technically correct" to "ranking + citable".

- [ ] Rewrite titles/descriptions with target keywords ("AI reputation
      management", "AI visibility assessment", "online reputation management
      Pakistan/USA", executive branding).
- [ ] Expand thin content — the demo is visually rich but text-light, and both
      Google and AI engines rank/cite **text**. Add substantive sections
      (methodology, what an audit includes, who it's for).
- [ ] Add a visible FAQ section rendering the `faqs` data (currently only in
      JSON-LD) — question-shaped headings + direct answers are prime
      answer-engine fodder.
- [ ] Validate all structured data (schema.org validator + Google Rich Results).
- [ ] Set up Google Search Console + Bing Webmaster Tools; submit the sitemap;
      add `verification` codes to `metadata`.
- [ ] Add per-office `LocalBusiness` detail (hours, geo) if walk-in relevant.

## Phase 3 — Performance & accessibility polish (1 day)

- [ ] Lighthouse pass — target 95+ on SEO / Best Practices / Accessibility and
      strong Core Web Vitals (LCP/CLS/INP).
- [ ] Fix the mobile hero orbit-label overflow on very narrow (<380px) screens
      (scale radius/labels down or hide outer ring on `xs`).
- [ ] Audit reduced-motion behavior and keyboard navigation end-to-end.
- [ ] Confirm font subsetting and no layout shift; lazy-load anything below the
      fold that isn't already static.

## Phase 4 — Forms & backend robustness (0.5–1 day)

- [ ] Wire real SMTP creds in cPanel; send a live test; confirm deliverability
      (SPF/DKIM/DMARC on the domain so mail doesn't spam-folder).
- [ ] Add spam protection (honeypot field + basic rate limit; optional
      hCaptcha/Turnstile).
- [ ] Add a success confirmation UI state + optional autoresponder to the lead.
- [ ] (Optional) Persist submissions (email is fine to start; consider a Google
      Sheet/CRM webhook later).

## Phase 5 — Deploy to production (0.5 day)

- [ ] `npm run package:cpanel`, smoke-test bundle, upload/extract in cPanel,
      set env vars, start app (`DEPLOY.md`).
- [ ] Point DNS / SSL (Let's Encrypt via cPanel AutoSSL); force HTTPS.
- [ ] Post-deploy verification of `/`, `/robots.txt`, `/sitemap.xml`,
      `/opengraph-image`, `/llms.txt`, and the live form.
- [ ] Add analytics that don't hurt Core Web Vitals (e.g. Plausible, or GA4 via
      `next/script` `afterInteractive`).

## Phase 6 — Growth surface (ongoing)

**Goal:** the compounding SEO/AI-SEO work once the core is live.

- [ ] **Blog / insights** (`/insights`) with MDX — the biggest lever for both
      organic search and getting cited by AI engines. Each post: metadata,
      `BlogPosting` JSON-LD, sitemap entry, OG image (the `add-page` skill
      covers the checklist).
- [ ] **Service detail pages** (`/services/reputation-audit`, etc.) — deeper,
      keyword-focused pages with `Service` + `BreadcrumbList` schema.
- [ ] **Case studies** with measurable outcomes (great for E-E-A-T and AI
      citation) — anonymized if needed.
- [ ] Internal linking between insights ↔ services ↔ home.
- [ ] Ongoing AI-visibility monitoring — literally the product; periodically
      check how ChatGPT/Gemini/Claude/Perplexity describe Meridian Repute and
      feed gaps back into content + `llms.txt`.
- [ ] Consider i18n (Urdu/English) if the Pakistan market warrants it —
      Next's `alternates.languages` + localized sitemap are already supported.

---

## Known follow-ups / tech debt

- Mobile hero label overflow on ultra-narrow screens (Phase 3).
- Testimonial avatars are placeholders (Phase 1).
- SMTP is unconfigured until Phase 4/5 — form intentionally degrades gracefully.
- Consider moving off `next start` warning by documenting `node server.js` as
  the canonical local production run (already the case on cPanel).
