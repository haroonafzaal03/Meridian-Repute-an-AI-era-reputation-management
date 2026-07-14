import { siteConfig } from "@/lib/site-config";

export function ContactFooter() {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center gap-12 px-6 py-20 text-center sm:py-24"
    >
      <div className="flex flex-wrap justify-center gap-14">
        {siteConfig.offices.map((office) => (
          <address key={office.id} className="flex flex-col items-center gap-2.5 not-italic">
            <span className="text-[11px] font-bold tracking-[0.35em] uppercase">
              {office.name}
            </span>
            <span className="max-w-[260px] text-[13px] leading-[1.8]">
              {office.streetAddress}, {office.addressLocality}
              {"addressRegion" in office ? `, ${office.addressRegion}` : ""}
              {"postalCode" in office ? ` ${office.postalCode}` : ""}
            </span>
            <a href={`tel:${office.telephone}`} className="text-[13px] tracking-[0.1em]">
              {office.telephone}
            </a>
          </address>
        ))}
      </div>

      <a
        href={`mailto:${siteConfig.email}`}
        className="border-b border-border pb-0.5 text-[13px] tracking-[0.15em] transition-[letter-spacing] duration-[400ms] hover:tracking-[0.25em]"
      >
        {siteConfig.email}
      </a>

      <p className="text-[11px] font-light tracking-[0.35em] text-muted uppercase">
        {siteConfig.name} · Lahore · Est. {siteConfig.foundedYear}
      </p>
    </footer>
  );
}
