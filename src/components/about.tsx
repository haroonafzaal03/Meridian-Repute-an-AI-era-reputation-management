import { ScrollReveal } from "@/components/scroll-reveal";
import { OrbitLabels } from "@/components/orbit-labels";
import { capabilities } from "@/lib/content";

const creativeLabels = [
  { name: "Spotify", color: "#1DB954" },
  { name: "Figma", color: "#A259FF" },
  { name: "Adobe", color: "#FF0000" },
  { name: "Flow", color: "#2E5951" },
  { name: "Dribbble", color: "#EA4C89" },
  { name: "Behance", color: "#1769FF" },
];

const accentColor = {
  terracotta: "var(--color-terracotta)",
  forest: "var(--color-forest)",
} as const;

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <ScrollReveal
        as="section"
        className="relative mx-auto grid max-w-5xl items-center gap-16 sm:grid-cols-2"
      >
        <div className="relative aspect-square w-full">
          <OrbitLabels items={creativeLabels} radiusPercent={44} />
          <div
            aria-hidden
            className="absolute h-[88%] w-[88%] rounded-[58%_42%_50%_50%/50%_50%_50%_50%] border border-border"
            style={{ top: "6%", left: "6%" }}
          />
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[63%_37%_54%_46%/55%_45%_55%_45%] bg-paper shadow-[0_40px_80px_rgba(26,26,26,0.14)]">
            <span className="px-8 text-center text-xs tracking-[0.2em] text-muted uppercase">
              Brand visual placeholder
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-left">
          <div className="flex items-center gap-4">
            <span className="h-px w-7 bg-terracotta" />
            <span className="text-xs font-light tracking-[0.5em] text-muted uppercase">
              About Meridian Repute
            </span>
          </div>

          <p className="text-[clamp(19px,2.6vw,27px)] leading-[1.6] font-extralight">
            Building, protecting, and strengthening reputation{" "}
            <span className="text-terracotta italic">in the AI era.</span>
          </p>

          <p className="max-w-md text-[clamp(12px,1.3vw,14px)] leading-[2] font-light text-muted">
            We combine AI-powered reputation intelligence with strategic
            advisory — helping organizations understand how they are perceived
            across search engines, AI assistants, social media, news, and
            digital platforms.
          </p>

          <ul className="flex flex-wrap gap-2.5">
            {capabilities.map((c) => (
              <li
                key={c.name}
                className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-[11px] font-light tracking-[0.1em] uppercase transition-colors hover:border-[var(--accent)]"
                style={{ "--accent": accentColor[c.accent] } as React.CSSProperties}
              >
                <span
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: accentColor[c.accent] }}
                />
                {c.name}
              </li>
            ))}
          </ul>

          <p className="max-w-md text-[clamp(12px,1.3vw,14px)] leading-[2] font-light text-muted">
            Today&apos;s reputation is no longer shaped by people alone — it
            is shaped by Google, AI assistants, reviews, news, and social
            media. We manage all of it with data-driven insight and practical
            strategy.
          </p>

          <p className="mt-2 border-t border-border pt-6 text-[clamp(13px,1.5vw,15px)] leading-[1.9] font-extralight tracking-[0.12em] uppercase">
            Building Trust.{" "}
            <span className="text-forest">Strengthening Influence.</span>{" "}
            Shaping AI Perception.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
