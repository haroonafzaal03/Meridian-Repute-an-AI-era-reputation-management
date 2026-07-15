import { ScrollReveal } from "@/components/scroll-reveal";

export function Statement() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[120px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[6px] [animation:ink-drift-big_14s_ease-in-out_infinite] [background:radial-gradient(circle,rgba(168,98,63,0.14),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[30%] left-[28%] h-2 w-2 rounded-full bg-[rgba(46,89,81,0.35)] blur-[1px] [animation:ink-drift_9s_ease-in-out_infinite_1s]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[65%] left-[72%] h-[5px] w-[5px] rounded-full bg-[rgba(168,98,63,0.4)] blur-[1px] [animation:ink-drift_11s_ease-in-out_infinite_2.4s]"
      />
      <ScrollReveal>
        <p className="max-w-3xl text-center text-[clamp(20px,4vw,38px)] leading-[1.8] font-extralight tracking-[0.22em] uppercase">
          Discretion. Precision. Results.
        </p>
      </ScrollReveal>
    </section>
  );
}
