import { OrbitLabels } from "@/components/orbit-labels";
import { PhysicsDots } from "@/components/physics-dots";

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

function WordmarkRing({
  dot,
}: {
  dot: { background: string; boxShadow: string };
}) {
  return (
    <div className="relative aspect-square w-[min(72vw,320px)] opacity-0 [animation:hero-ring-in_1.4s_cubic-bezier(0.2,0.7,0.2,1)_forwards,breathe_8s_ease-in-out_1.4s_infinite]">
      <PhysicsDots
        boundary="circle"
        pad={16}
        dots={[{ size: 7, background: dot.background, boxShadow: dot.boxShadow, x: 18, y: -14, vx: 0.34, vy: 0.42 }]}
      />
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-full border border-border bg-cream/80 p-4">
        <span
          aria-hidden
          className="text-[clamp(16px,4.4vw,30px)] font-extralight tracking-[0.22em] whitespace-nowrap uppercase opacity-0 [animation:hero-word-in_1.6s_cubic-bezier(0.2,0.7,0.2,1)_0.3s_both]"
        >
          Meridian
        </span>
        <span aria-hidden className="flex items-center gap-2.5">
          <span className="h-px w-6 origin-right bg-ink [animation:hairline-grow_1s_ease_0.9s_both]" />
          <span className="text-[clamp(8px,1.8vw,11px)] font-light tracking-[0.4em] whitespace-nowrap uppercase">
            Repute
          </span>
          <span className="h-px w-6 origin-left bg-ink [animation:hairline-grow_1s_ease_0.9s_both]" />
        </span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center gap-9 overflow-hidden px-6 py-24 text-center sm:gap-14"
    >
      {/* Grain texture */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]">
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.022 0.035" numOctaves={3} seed={7} stitchTiles="stitch" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="a" />
          <feComponentTransfer in="a">
            <feFuncA type="gamma" amplitude={1} exponent={11} offset={0} />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* Organic blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-[8%] left-[6%] h-[320px] w-[440px] rounded-[42%_58%_55%_45%/45%_40%_60%_55%] blur-[32px] [animation:blob-float-1_22s_ease-in-out_infinite] [background:radial-gradient(ellipse_at_40%_40%,rgba(26,26,26,0.05),transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-[10%] right-[8%] h-[340px] w-[400px] rounded-[55%_45%_40%_60%/50%_55%_45%_50%] blur-[30px] [animation:blob-float-2_26s_ease-in-out_infinite] [background:radial-gradient(ellipse_at_60%_60%,rgba(168,150,120,0.15),transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute top-[32%] -right-[6%] h-[280px] w-[280px] rounded-full blur-[26px] [animation:blob-float-3_19s_ease-in-out_infinite] [background:radial-gradient(circle,rgba(26,26,26,0.045),transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute bottom-[4%] left-[14%] h-[220px] w-[260px] rounded-[48%_52%_45%_55%/55%_45%_58%_42%] blur-[24px] [animation:blob-float-1_24s_ease-in-out_infinite_reverse] [background:radial-gradient(ellipse_at_45%_55%,rgba(168,150,120,0.12),transparent_72%)]" />

      {/* Ghost rings */}
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(26,26,26,0.06)] [animation:ring-ghost_10s_ease-in-out_infinite]" />
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(26,26,26,0.05)] [animation:ring-ghost_12s_ease-in-out_infinite_1s]" />

      {/* Shimmer sweep */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-3/5 mix-blend-soft-light [animation:shimmer-sweep_9s_ease-in-out_infinite] [background:linear-gradient(100deg,transparent_40%,rgba(255,255,255,0.55)_50%,transparent_60%)]" />
      </div>

      {/* Ring */}
      <div className="relative flex items-center justify-center">
        <div className="relative flex aspect-square w-[min(64vw,320px)] flex-shrink-0 items-center justify-center">
          <OrbitLabels items={orbitPlatforms} radiusPercent={50} />
          <div aria-hidden className="pointer-events-none absolute inset-[-14px] rounded-full border border-dashed border-[rgba(26,26,26,0.14)]" />
          <WordmarkRing dot={{ background: "#A8623F", boxShadow: "0 0 8px rgba(168,98,63,0.6)" }} />
        </div>
      </div>

      {/* Headline */}
      <div className="relative flex max-w-[96vw] flex-col items-center gap-5 opacity-0 [animation:fade-up_0.9s_cubic-bezier(0.2,0.7,0.2,1)_1.1s_both]">
        <div className="flex items-center gap-3.5">
          <span className="h-px w-6 bg-terracotta" />
          <span className="text-[clamp(10px,1.2vw,12px)] font-light tracking-[0.5em] text-muted uppercase">
            AI Reputation Intelligence
          </span>
          <span className="h-px w-6 bg-terracotta" />
        </div>
        <h1 className="text-[clamp(24px,5.1vw,76px)] leading-[1.2] font-extralight [letter-spacing:-0.005em]">
          <span className="sr-only">Meridian Repute — AI Reputation Intelligence. </span>
          <span className="underline decoration-terracotta decoration-2 underline-offset-[0.18em]">
            Your
          </span>{" "}
          reputation{" "}
          <span className="relative inline-block">
            <span
              aria-hidden
              className="absolute top-[0.16em] left-[0.12em] h-[0.13em] w-[0.13em] rounded-full bg-terracotta [animation:dot-float_3s_ease-in-out_infinite] [box-shadow:0_0_0.5em_rgba(168,98,63,0.6)]"
            />
            speaks
          </span>
          <br />
          <span className="text-terracotta italic">before you do.</span>
        </h1>
      </div>
    </section>
  );
}
