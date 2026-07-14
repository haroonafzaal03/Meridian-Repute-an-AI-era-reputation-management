"use client";

import { useState } from "react";
import { navLinks } from "@/lib/content";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
