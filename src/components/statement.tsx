import { ScrollReveal } from "@/components/scroll-reveal";
import { PhysicsDots } from "@/components/physics-dots";

export function Statement() {
  return (
    <section className="relative flex min-h-[66vh] items-center justify-center overflow-hidden px-6 py-16">
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[8%] left-[6%] h-[300px] w-[300px] rounded-full blur-[16px] [animation:blob-float-1_17s_ease-in-out_infinite] [background:radial-gradient(circle,rgba(168,98,63,0.16),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] bottom-[6%] h-[340px] w-[340px] rounded-full blur-[18px] [animation:blob-float-2_21s_ease-in-out_infinite] [background:radial-gradient(circle,rgba(46,89,81,0.14),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[30%] right-[18%] h-[190px] w-[190px] rounded-full blur-[12px] [animation:blob-float-3_15s_ease-in-out_infinite] [background:radial-gradient(circle,rgba(201,196,187,0.3),transparent_70%)]"
      />

      <ScrollReveal className="relative flex aspect-[4/3] max-h-[440px] w-[min(88vw,700px)] items-center justify-center">
        {/* Morphing double frame */}
        <div
          aria-hidden
          className="absolute inset-0 border border-border [animation:organic-morph_16s_ease-in-out_infinite]"
        />
        <div
          aria-hidden
          className="absolute inset-5 border border-[rgba(26,26,26,0.08)] [animation:organic-morph_16s_ease-in-out_infinite_reverse]"
        />

        {/* Bouncing dots inside the frame */}
        <PhysicsDots
          boundary="rect"
          pad={26}
          dots={[
            {
              size: 11,
              background: "radial-gradient(circle at 35% 30%, #D89A73, #A8623F 70%)",
              boxShadow: "0 0 12px 2px rgba(168,98,63,0.5)",
              x: 50,
              y: 40,
              vx: 0.6,
              vy: 0.4,
            },
            {
              size: 9,
              background: "radial-gradient(circle at 35% 30%, #5C8A81, #2E5951 70%)",
              boxShadow: "0 0 12px 2px rgba(46,89,81,0.45)",
              x: 230,
              y: 130,
              vx: -0.45,
              vy: 0.55,
            },
            {
              size: 7,
              background: "radial-gradient(circle at 35% 30%, #C9A98C, #A8623F 70%)",
              boxShadow: "0 0 10px 2px rgba(168,98,63,0.4)",
              x: 140,
              y: 210,
              vx: 0.5,
              vy: -0.35,
            },
          ]}
        />

        <p className="relative px-6 text-center text-[clamp(18px,3.2vw,32px)] leading-[1.8] font-extralight tracking-[0.22em] uppercase">
          Discretion. Precision. Results.
        </p>
      </ScrollReveal>
    </section>
  );
}
