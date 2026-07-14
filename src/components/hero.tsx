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
