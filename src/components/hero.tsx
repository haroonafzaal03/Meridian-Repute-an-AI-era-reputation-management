import { OrbitLabels } from "@/components/orbit-labels";

const orbitPlatforms = [
  { name: "ChatGPT", color: "#10A37F" },
  { name: "Gemini", color: "#4285F4" },
  { name: "Claude", color: "#D97757" },
  { name: "Perplexity", color: "#20808D" },
  { name: "Google", color: "#4285F4" },
  { name: "LinkedIn", color: "#0A66C2" },
  { name: "Bing", color: "#008373" },
  { name: "Meta", color: "#0866FF" },
  { name: "YouTube", color: "#FF0000" },
  { name: "Instagram", color: "#E1306C" },
  { name: "X", color: "#1A1A1A" },
  { name: "TikTok", color: "#EE1D52" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-10 text-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(26,26,26,0.06)] [animation:ring-ghost_10s_ease-in-out_infinite]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(26,26,26,0.05)] [animation:ring-ghost_12s_ease-in-out_infinite_1s]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-3/5 mix-blend-soft-light [animation:shimmer-sweep_9s_ease-in-out_infinite] [background:linear-gradient(100deg,transparent_40%,rgba(255,255,255,0.55)_50%,transparent_60%)]" />
      </div>

      <div className="relative flex aspect-square w-[min(88vw,600px)] items-center justify-center">
        <OrbitLabels items={orbitPlatforms} radiusPercent={48} />

        <h1 className="flex aspect-square w-[min(66vw,380px)] flex-col items-center justify-center gap-4 rounded-full border border-border bg-cream p-4 sm:gap-6">
          <span className="sr-only">
            Meridian Repute — AI-Era Reputation Management &amp; Brand Intelligence
          </span>
          <span
            aria-hidden
            className="text-[clamp(18px,7vw,42px)] font-extralight tracking-[0.22em] whitespace-nowrap uppercase"
          >
            Meridian
          </span>
          <span aria-hidden className="flex items-center gap-3 sm:gap-4">
            <span className="h-px w-6 bg-ink sm:w-8" />
            <span className="text-[clamp(9px,2.2vw,14px)] font-light tracking-[0.4em] whitespace-nowrap uppercase">
              Repute
            </span>
            <span className="h-px w-6 bg-ink sm:w-8" />
          </span>
        </h1>
      </div>

      <p className="mt-11 max-w-3xl text-[clamp(11px,1.4vw,14px)] font-light tracking-[0.35em] uppercase">
        Your reputation speaks before you do.
      </p>
    </section>
  );
}
