# Design system

Meridian Repute's look is **quiet editorial luxury**: a warm off-white canvas,
near-black serif-adjacent sans (Jost), generous letter-spacing, hairline rules,
and two restrained accent colors. Restraint is the brand — when unsure, remove.

## Color tokens

Defined in `src/app/globals.css` under `@theme`; use the Tailwind classes, not
the hexes.

| Token | Hex | Tailwind | Use |
|---|---|---|---|
| Cream | `#F6F4F0` | `bg-cream` | Page background |
| Paper | `#F2EFE9` | `bg-paper` | Cards (testimonials, about visual) |
| Ink | `#1A1A1A` | `text-ink` | Primary text, hairlines |
| Muted | `#6B665D` | `text-muted` | Secondary text, labels, captions |
| Border | `#C9C4BB` | `border-border` | Hairline borders, rings |
| Terracotta | `#A8623F` | `text-terracotta` | Warm accent (accent A) |
| Forest | `#2E5951` | `text-forest` | Cool accent (accent B) |

Accents alternate terracotta/forest through lists. In data they're named
(`"terracotta" | "forest"`) and mapped to CSS vars in the component.

Third-party platform brand colors (ChatGPT green, Claude coral, …) are the one
exception where raw hex belongs in data (`lib/content.ts`, `hero.tsx`) — they
are logos, not theme colors.

## Typography

- **Family:** Jost (`next/font/google`), weights 200/300/400 + 300 italic,
  exposed as `--font-jost` / `font-sans`.
- **Weights:** extralight (200) for display, light (300) for body, normal (400)
  sparingly for small labels. Never bold except the two deliberate
  `font-bold` micro-labels ("Trusted in Confidence", office names).
- **Tracking:** wide is the signature. Display ~`0.22em`, section eyebrows
  `0.5em`, uppercase labels `0.3em`. Uppercase for labels/eyebrows/nav.
- **Fluid scale:** use `clamp()` for anything that spans hero→mobile, e.g.
  `text-[clamp(18px,7vw,42px)]`.

## Layout & spacing

- Content max-widths: prose ~`max-w-5xl` (About/Consultation), services
  `max-w-xl`, testimonials `max-w-6xl`.
- Sections are full-viewport where they anchor nav (`min-h-screen`) or
  generously padded (`py-24 sm:py-32`).
- Two-column sections use `grid sm:grid-cols-2` and collapse to one column on
  mobile.

## Motion

- Entrances: `ScrollReveal` (IntersectionObserver → `fade-up`, opacity+translate).
- Ambient: orbit-label `float`, marquee scroll, hover letter-spacing/translate.
- **Every** animation is `motion-safe:` gated or covered by the global
  `prefers-reduced-motion` reset in `globals.css`. Keep it subtle and slow
  (0.9s–46s); this brand whispers.

## Shape language

- Circles and rings (hero wordmark, consultation orbit, avatars) — thin
  `1px` borders in `border` color.
- Organic blob radii on the About visual
  (`rounded-[63%_37%_54%_46%/55%_45%_55%_45%]`).
- Asymmetric card corners on testimonials
  (`rounded-tr-[56px] rounded-bl-[56px]`).

## Accessibility

- One `<h1>` per page (the hero wordmark carries an `sr-only` full-text H1).
- Headings nest in order; decorative SVG/among-labels get `aria-hidden`.
- Interactive controls have visible focus and real `<label>`s.
- Maintain AA contrast: `text-muted` on `cream` passes for body copy; don't go
  lighter for anything essential.
