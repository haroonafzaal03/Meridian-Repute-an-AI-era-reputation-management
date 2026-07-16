import { ScrollReveal } from "@/components/scroll-reveal";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section
      id="services"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-20"
    >
      <ScrollReveal className="w-full max-w-xl">
        <h2 className="mb-16 text-center text-xs font-light tracking-[0.5em] text-muted uppercase">
          What We Do
        </h2>
        <ol className="border-t border-border">
          {services.map((s) => (
            <li
              key={s.num}
              className="group relative flex items-start gap-6 border-b border-border py-7 pr-1 pl-1 transition-[padding] duration-500 hover:pl-4"
            >
              {/* Accent bar that grows in on hover */}
              <span
                aria-hidden
                className="absolute top-1/2 left-0 h-0 w-px -translate-y-1/2 bg-terracotta transition-[height] duration-500 group-hover:h-[62%]"
              />
              <span className="flex-shrink-0 pt-0.5 text-[13px] font-light tracking-[0.15em] text-muted transition-colors duration-500 group-hover:text-terracotta">
                {s.num}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[clamp(15px,2.4vw,22px)] font-extralight tracking-[0.18em] uppercase transition-[letter-spacing] duration-500 group-hover:tracking-[0.3em]">
                  {s.name}
                </h3>
                <p className="text-[clamp(11px,1.2vw,13px)] leading-[1.7] font-light tracking-[0.08em] text-muted uppercase transition-colors duration-500 group-hover:text-ink">
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </ScrollReveal>
    </section>
  );
}
