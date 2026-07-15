"use client";

import { useEffect, useRef } from "react";

/**
 * Brand pointer: a spinning ring + core dot that follows the mouse, trailing
 * soft ripples. The markup is always rendered but hidden via CSS until the
 * effect adds `.cursor-active` to <html> — which only happens on fine pointers
 * (real mouse) without a reduced-motion preference. Touch/keyboard users, and
 * anyone if JS fails, keep the native cursor.
 */
export function CursorRing() {
  const ringRef = useRef<HTMLDivElement>(null);
  const rippleLayerRef = useRef<HTMLDivElement>(null);
  const lastRipple = useRef(0);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    const root = document.documentElement;
    root.classList.add("cursor-active");

    const onMove = (e: MouseEvent) => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      const now = performance.now();
      if (now - lastRipple.current > 130 && rippleLayerRef.current) {
        lastRipple.current = now;
        const dot = document.createElement("div");
        dot.style.cssText = `position:absolute; left:${e.clientX}px; top:${e.clientY}px; width:8px; height:8px; border-radius:50%; border:1px solid rgba(26,26,26,0.32); transform:translate(-50%,-50%); animation:ripple-expand 1.1s ease-out forwards; pointer-events:none;`;
        rippleLayerRef.current.appendChild(dot);
        window.setTimeout(() => dot.remove(), 1200);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      root.classList.remove("cursor-active");
    };
  }, []);

  return (
    <>
      <div
        ref={rippleLayerRef}
        aria-hidden
        className="cursor-ripples pointer-events-none fixed inset-0 z-[9998] overflow-hidden"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="cursor-ring pointer-events-none fixed top-0 left-0 z-[9999] h-0 w-0 [transform:translate(-200px,-200px)] transition-transform duration-[90ms] ease-linear"
      >
        <div className="absolute top-0 left-0 h-1 w-1 rounded-full bg-ink [animation:cursor-core_2.4s_ease-in-out_infinite]" />
        <div className="absolute top-0 left-0 h-[30px] w-[30px] rounded-full border border-[rgba(26,26,26,0.28)] [border-right-color:rgba(46,89,81,0.55)] [border-top-color:rgba(168,98,63,0.75)] [animation:cursor-spin_3.5s_linear_infinite]" />
        <div className="absolute top-0 left-0 h-[46px] w-[46px] rounded-full border border-dashed border-[rgba(26,26,26,0.22)] [animation:cursor-spin-rev_9s_linear_infinite]" />
      </div>
    </>
  );
}
