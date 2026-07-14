import { techPartners } from "@/lib/content";

export function TechPartners() {
  const doubled = [...techPartners, ...techPartners];

  return (
    <section aria-label="Tools and platforms we integrate with" className="px-6 py-16">
      <p className="mb-11 text-center text-xs font-light tracking-[0.5em] text-muted uppercase">
        Tech Partners
      </p>
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <ul className="marquee-track flex w-max gap-12 motion-reduce:animate-none">
          {doubled.map((tp, i) => (
            <li
              key={`${tp.name}-${i}`}
              className="flex flex-shrink-0 items-center gap-2 whitespace-nowrap"
            >
              <span
                className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ backgroundColor: tp.color, boxShadow: `0 0 6px ${tp.color}` }}
              />
              <span className="text-xs tracking-[0.14em]" style={{ color: tp.color }}>
                {tp.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
