"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Logo — appears top-LEFT once scrolled past the hero */}
      <a
        href="#hero"
        aria-label="Meridian Repute — home"
        className="fixed top-7 left-7 z-50 flex items-center gap-2.5 rounded-full border border-border bg-cream/70 py-2 pr-5 pl-4 backdrop-blur-sm transition-[opacity,transform] duration-500"
        style={{
          opacity: scrolled ? 1 : 0,
          transform: scrolled ? "translateY(0)" : "translateY(-8px)",
          pointerEvents: scrolled ? "auto" : "none",
        }}
      >
        <span aria-hidden className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-terracotta" />
        <span className="text-[12px] whitespace-nowrap text-ink uppercase">
          <span className="font-normal tracking-[0.24em]">Meridian</span>{" "}
          <span className="font-light tracking-[0.24em]">Repute</span>
        </span>
      </a>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="fixed top-7 right-7 z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-border bg-cream/70 backdrop-blur-sm"
      >
        <span
          className="h-px w-4 bg-ink transition-transform duration-300"
          style={{ transform: open ? "translateY(6.5px) rotate(45deg)" : "none" }}
        />
        <span
          className="h-px w-4 bg-ink transition-opacity duration-300"
          style={{ opacity: open ? 0 : 1 }}
        />
        <span
          className="h-px w-4 bg-ink transition-transform duration-300"
          style={{ transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none" }}
        />
      </button>

      <nav
        aria-hidden={!open}
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-9 bg-cream transition-opacity duration-500"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-2xl font-extralight tracking-[0.2em] text-ink uppercase transition-[letter-spacing,color] duration-300 hover:tracking-[0.32em] hover:text-terracotta sm:text-3xl"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
