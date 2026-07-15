"use client";

import { useRef } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { NetworkGraph } from "@/components/network-graph";
import { testimonials } from "@/lib/content";

const accentColor = {
  terracotta: "var(--color-terracotta)",
  forest: "var(--color-forest)",
} as const;

export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const dragState = useRef({ dragging: false, startX: 0, startScroll: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = { dragging: true, startX: e.clientX, startScroll: track.scrollLeft };
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !dragState.current.dragging) return;
    track.scrollLeft = dragState.current.startScroll - (e.clientX - dragState.current.startX);
  };

  const onPointerUp = () => {
    dragState.current.dragging = false;
  };

  return (
    <section
      id="testimonials"
      className="relative flex flex-col items-center overflow-hidden px-0 py-20 text-center sm:py-28"
    >
      <NetworkGraph className="inset-0 h-full w-full" />
      <ScrollReveal className="relative flex w-full max-w-6xl flex-col items-center gap-14">
        <h2 className="text-xs font-bold tracking-[0.5em] uppercase">
          Trusted in Confidence
        </h2>

        <ul
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="flex w-full cursor-grab gap-6 overflow-x-auto px-6 pt-2 pb-5 [scroll-snap-type:x_proximity] active:cursor-grabbing"
        >
          {testimonials.map((t) => (
            <li
              key={t.id}
              className="mt-8 flex-none [scroll-snap-align:start]"
              style={{ width: "290px" }}
            >
              <div className="relative flex flex-col items-center gap-5 overflow-hidden rounded-tr-[56px] rounded-bl-[56px] bg-paper px-8 pt-14 pb-9 transition-[transform,box-shadow] duration-[450ms] hover:-translate-y-1.5 hover:shadow-[0_28px_50px_rgba(26,26,26,0.14)]">
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-0 left-5 font-serif text-8xl leading-none italic"
                  style={{ color: accentColor[t.accent], opacity: 0.14 }}
                >
                  &ldquo;
                </span>
                <span
                  aria-hidden
                  className="absolute top-0 left-0 h-[40%] w-[3px]"
                  style={{ backgroundColor: accentColor[t.accent], opacity: 0.6 }}
                />
                <div className="-mt-[46px] h-[60px] w-[60px] flex-shrink-0 rounded-full border-2 border-cream bg-border/40 shadow-[0_0_0_1px_#c9c4bb]" />
                <p className="text-[clamp(13px,1.4vw,15px)] leading-[1.9] font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <span
                  aria-hidden
                  className="h-px w-[22px]"
                  style={{ backgroundColor: accentColor[t.accent] }}
                />
                <div className="flex flex-col items-center gap-1.5">
                  <span className="text-[11px] tracking-[0.2em] uppercase">{t.name}</span>
                  <span className="text-[10px] font-light tracking-[0.15em] text-muted uppercase">
                    {t.role}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="text-[10px] font-light tracking-[0.3em] text-muted uppercase">
          Drag to explore
        </p>
      </ScrollReveal>
    </section>
  );
}
