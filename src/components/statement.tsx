import { ScrollReveal } from "@/components/scroll-reveal";

export function Statement() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6 py-10">
      <ScrollReveal>
        <p className="max-w-3xl text-center text-[clamp(20px,4vw,38px)] leading-[1.8] font-extralight tracking-[0.22em] uppercase">
          Discretion. Precision. Results.
        </p>
      </ScrollReveal>
    </section>
  );
}
