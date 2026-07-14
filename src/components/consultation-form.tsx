"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitConsultation, type ConsultationState } from "@/app/actions/consultation";

const initialConsultationState: ConsultationState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group mt-2 flex items-center gap-2.5 self-start border border-ink bg-transparent px-11 py-[18px] text-[11px] font-light tracking-[0.4em] uppercase transition-[letter-spacing,background-color,color,transform,box-shadow] duration-[400ms] hover:-translate-y-0.5 hover:bg-ink hover:tracking-[0.55em] hover:text-cream hover:shadow-[0_16px_32px_rgba(26,26,26,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Request a Consultation"}
      <span
        aria-hidden
        className="inline-block -translate-x-2 opacity-0 transition-[transform,opacity] duration-[400ms] group-hover:translate-x-0 group-hover:opacity-100"
      >
        →
      </span>
    </button>
  );
}

export function ConsultationForm() {
  const [state, formAction] = useActionState(submitConsultation, initialConsultationState);

  return (
    <form action={formAction} className="flex flex-col gap-7">
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

      <SubmitButton />

      <p
        role="status"
        aria-live="polite"
        className="min-h-4 text-[11px] font-light tracking-[0.05em] text-muted"
      >
        {state.message}
      </p>
    </form>
  );
}
