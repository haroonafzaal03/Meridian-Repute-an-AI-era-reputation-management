import { ScrollReveal } from "@/components/scroll-reveal";
import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="px-6 py-24 sm:py-32"
    >
      <ScrollReveal className="mx-auto flex w-full max-w-4xl flex-col gap-12">
        <div className="relative flex flex-col items-center gap-5 text-center">
          <span className="text-xs font-light tracking-[0.5em] text-muted uppercase">
            How It Works
          </span>
          <h2
            id="how-it-works-heading"
            className="relative max-w-2xl text-[clamp(20px,3vw,32px)] leading-[1.4] font-extralight"
          >
            <span
              aria-hidden
              className="absolute -top-3 -right-4 h-2 w-2 rounded-full bg-terracotta [animation:dot-float_3.4s_ease-in-out_infinite] [box-shadow:0_0_8px_rgba(168,98,63,0.6)] sm:-right-6"
            />
            How AI Reputation Intelligence Works
          </h2>
          <p className="max-w-xl text-[clamp(12px,1.3vw,14px)] leading-[1.9] font-light text-muted">
            Our AI Visibility Score quantifies how consistently, accurately, and
            favorably AI assistants and search engines describe a person, brand,
            or organization — tracked over time and translated into practical
            strategy.
          </p>
        </div>

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step) => (
            <li key={step.num} className="flex flex-col gap-4">
              <span className="text-[13px] font-light tracking-[0.15em] text-terracotta">
                {step.num}
              </span>
              <h3 className="text-[clamp(14px,2vw,18px)] font-extralight tracking-[0.18em] uppercase">
                {step.title}
              </h3>
              <p className="text-[clamp(11px,1.2vw,13px)] leading-[1.8] font-light text-muted">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </ScrollReveal>
    </section>
  );
}
