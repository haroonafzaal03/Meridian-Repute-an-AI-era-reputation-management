import { ScrollReveal } from "@/components/scroll-reveal";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="px-6 py-24 sm:py-28">
      <ScrollReveal className="mx-auto flex w-full max-w-3xl flex-col gap-12">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="text-xs font-light tracking-[0.5em] text-muted uppercase">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-[clamp(20px,3vw,32px)] font-extralight tracking-[0.05em]"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="border-t border-border">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-border py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-[clamp(13px,1.6vw,16px)] font-light tracking-[0.04em] [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden
                  className="flex-shrink-0 text-terracotta transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-[clamp(12px,1.3vw,14px)] leading-[1.9] font-light text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
