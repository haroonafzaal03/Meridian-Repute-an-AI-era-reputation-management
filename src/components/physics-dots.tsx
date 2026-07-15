"use client";

import { useEffect, useRef } from "react";

export type PhysicsDot = {
  size: number;
  background: string;
  boxShadow: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

/**
 * Decorative dots that drift and bounce inside their parent, either off a
 * rectangular boundary (dots anchored top-left, coords in px) or a circular one
 * (dots anchored to centre, coords are offsets from centre). Pure rAF physics;
 * frozen at their initial position when the user prefers reduced motion.
 */
export function PhysicsDots({
  boundary,
  dots,
  pad = 20,
}: {
  boundary: "rect" | "circle";
  dots: PhysicsDot[];
  pad?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotEls = useRef<(HTMLDivElement | null)[]>([]);
  const dotsRef = useRef(dots);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const states = dotsRef.current.map((d) => ({ x: d.x, y: d.y, vx: d.vx, vy: d.vy }));
    const paint = () =>
      states.forEach((s, i) => {
        const el = dotEls.current[i];
        if (el) el.style.transform = `translate(${s.x}px, ${s.y}px)`;
      });

    paint();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const step = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      states.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        if (boundary === "rect") {
          if (s.x < pad) {
            s.x = pad;
            s.vx *= -1;
          }
          if (s.x > w - pad) {
            s.x = w - pad;
            s.vx *= -1;
          }
          if (s.y < pad) {
            s.y = pad;
            s.vy *= -1;
          }
          if (s.y > h - pad) {
            s.y = h - pad;
            s.vy *= -1;
          }
        } else {
          const r = Math.min(w, h) / 2 - pad;
          const d = Math.hypot(s.x, s.y);
          if (d > r) {
            const nx = s.x / d;
            const ny = s.y / d;
            const dot = s.vx * nx + s.vy * ny;
            s.vx -= 2 * dot * nx;
            s.vy -= 2 * dot * ny;
            s.x = nx * r;
            s.y = ny * r;
          }
        }
      });
      paint();
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [boundary, pad]);

  const anchor = boundary === "circle" ? "top-1/2 left-1/2" : "top-0 left-0";

  return (
    <div ref={containerRef} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <div
          key={i}
          ref={(el) => {
            dotEls.current[i] = el;
          }}
          className={`absolute ${anchor} rounded-full`}
          style={{
            width: d.size,
            height: d.size,
            marginLeft: -d.size / 2,
            marginTop: -d.size / 2,
            background: d.background,
            boxShadow: d.boxShadow,
          }}
        />
      ))}
    </div>
  );
}
