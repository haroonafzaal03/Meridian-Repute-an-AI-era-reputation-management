"use client";

import { useRef } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { NetworkGraph } from "@/components/network-graph";
import { testimonials } from "@/lib/content";

const accentColor = {
  terracotta: "var(--color-terracotta)",
  forest: "var(--color-forest)",
} as const;

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

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
                {t.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={t.photo}
                    alt={t.name}
                    width={60}
                    height={60}
                    loading="lazy"
                    className="-mt-[46px] h-[60px] w-[60px] flex-shrink-0 rounded-full border-2 border-cream object-cover shadow-[0_0_0_1px_#c9c4bb]"
                  />
                ) : (
                  <div
                    className="-mt-[46px] flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-full border-2 border-cream bg-cream text-[15px] font-light tracking-[0.05em] shadow-[0_0_0_1px_#c9c4bb]"
                    style={{ color: accentColor[t.accent] }}
                    aria-hidden
                  >
                    {initials(t.name)}
                  </div>
                )}
                <p className="text-[clamp(13px,1.4vw,15px)] leading-[1.9] font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <span
                  aria-hidden
                  className="h-px w-[22px]"
                  style={{ backgroundColor: accentColor[t.accent] }}
                />
                <div className="flex flex-col items-center gap-1.5">
                  {t.linkedin ? (
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase transition-colors hover:text-terracotta"
                    >
                      {t.name}
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden
                        className="h-3 w-3 fill-current opacity-60 transition-opacity group-hover/link:opacity-100"
                      >
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                      </svg>
                      <span className="sr-only">— view LinkedIn profile</span>
                    </a>
                  ) : (
                    <span className="text-[11px] tracking-[0.2em] uppercase">{t.name}</span>
                  )}
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
