import Link from "next/link";

export function PolicyShell({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-[720px] px-6 pt-18 pb-24">
      <div className="mb-16 text-center">
        <Link href="/" className="inline-block text-ink">
          <span className="block pl-[0.42em] text-[22px] font-extralight tracking-[0.42em] uppercase">
            Meridian
          </span>
          <span className="mt-2.5 inline-block text-[11px] font-light tracking-[0.55em] text-muted uppercase">
            Repute
          </span>
        </Link>
      </div>

      <h1 className="mb-3 text-center text-[clamp(22px,4vw,30px)] font-extralight tracking-[0.2em] uppercase">
        {title}
      </h1>
      <p className="mb-18 text-center text-[11px] tracking-[0.3em] text-muted uppercase">
        Last updated · {lastUpdated}
      </p>

      <div className="policy-prose">{children}</div>

      <Link
        href="/"
        className="mt-22 block text-center text-[11px] tracking-[0.32em] text-muted uppercase"
      >
        ← Back to Meridian Repute
      </Link>
    </main>
  );
}
