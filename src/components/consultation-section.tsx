import { ScrollReveal } from "@/components/scroll-reveal";
import { ConsultationForm } from "@/components/consultation-form";

export function ConsultationSection() {
  return (
    <section
      id="consultation"
      className="flex min-h-screen items-center justify-center px-6 py-20 sm:py-24"
    >
      <ScrollReveal className="grid w-full max-w-5xl items-center gap-16 sm:grid-cols-2">
        <div className="flex flex-col gap-9 text-left">
          <div
            aria-hidden
            className="flex h-40 w-40 items-center justify-center rounded-full border border-border"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[15px] font-extralight tracking-[0.16em] uppercase">
                Meridian
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-px w-3 bg-ink" />
                <span className="text-[8px] font-light tracking-[0.3em] uppercase">Repute</span>
                <span className="h-px w-3 bg-ink" />
              </div>
            </div>
          </div>

          <p className="text-xs font-light tracking-[0.5em] text-muted uppercase">
            Begin a Conversation
          </p>

          <p className="text-[clamp(24px,3.4vw,38px)] leading-[1.5] font-extralight uppercase">
            Your Name
            <br />
            Deserves a
            <br />
            Strategy.
          </p>

          <p className="max-w-[340px] text-[clamp(11px,1.2vw,13px)] leading-[1.9] font-light text-muted">
            A confidential conversation with our advisors. No obligation, no
            noise — only clarity on where you stand.
          </p>
        </div>

        <ConsultationForm />
      </ScrollReveal>
    </section>
  );
}
