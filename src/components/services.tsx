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
              className="flex items-start gap-6 border-b border-border py-7 px-1 transition-[letter-spacing] duration-500 hover:tracking-[0.05em]"
            >
              <span className="flex-shrink-0 pt-0.5 text-[13px] font-light tracking-[0.15em] text-muted">
                {s.num}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[clamp(15px,2.4vw,22px)] font-extralight tracking-[0.18em] uppercase">
                  {s.name}
                </h3>
                <p className="text-[clamp(11px,1.2vw,13px)] leading-[1.7] font-light tracking-[0.08em] text-muted uppercase">
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
