"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "sending" | "success" | "error";

export function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (res.ok && json.ok) {
        setStatus("success");
        setMessage("Thank you — we'll be in touch shortly.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(
          json.error ||
            `Something went wrong. Please email us directly at ${siteConfig.email}.`
        );
      }
    } catch {
      setStatus("error");
      setMessage(
        `Couldn't reach the server. Please email us directly at ${siteConfig.email}.`
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      {/* Honeypot: bots fill this; humans never see it. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[10px] font-light tracking-[0.3em] text-muted uppercase">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="FULL NAME"
          required
          className="border-0 border-b border-border bg-transparent px-0.5 py-2.5 text-sm font-light tracking-[0.08em] focus:border-ink focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[10px] font-light tracking-[0.3em] text-muted uppercase">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="EMAIL ADDRESS"
          required
          className="border-0 border-b border-border bg-transparent px-0.5 py-2.5 text-sm font-light tracking-[0.08em] focus:border-ink focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[10px] font-light tracking-[0.3em] text-muted uppercase">
          Tell us briefly
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="WHAT BRINGS YOU HERE"
          rows={3}
          className="resize-none border-0 border-b border-border bg-transparent px-0.5 py-2.5 text-sm font-light tracking-[0.08em] focus:border-ink focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-2 flex items-center gap-2.5 self-start border border-ink bg-transparent px-11 py-[18px] text-[11px] font-light tracking-[0.4em] uppercase transition-[letter-spacing,background-color,color,transform,box-shadow] duration-[400ms] hover:-translate-y-0.5 hover:bg-ink hover:tracking-[0.55em] hover:text-cream hover:shadow-[0_16px_32px_rgba(26,26,26,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request a Consultation"}
        <span
          aria-hidden
          className="inline-block -translate-x-2 opacity-0 transition-[transform,opacity] duration-[400ms] group-hover:translate-x-0 group-hover:opacity-100"
        >
          →
        </span>
      </button>

      <p
        role="status"
        aria-live="polite"
        className="min-h-4 text-[11px] font-light tracking-[0.05em]"
        style={{ color: status === "error" ? "var(--color-terracotta)" : "var(--color-muted)" }}
      >
        {message}
      </p>
    </form>
  );
}
