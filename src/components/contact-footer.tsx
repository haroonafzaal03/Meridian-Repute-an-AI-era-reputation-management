import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { legalLinks } from "@/lib/content";
import { NetworkGraph } from "@/components/network-graph";

export function ContactFooter() {
  return (
    <footer
      id="contact"
      className="relative flex flex-col items-center gap-12 overflow-hidden px-6 py-20 text-center sm:py-24"
    >
      <NetworkGraph className="-inset-[10%] h-[120%] w-[120%]" />
      <div className="relative flex flex-wrap justify-center gap-14">
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
        className="relative border-b border-border pb-0.5 text-[13px] tracking-[0.15em] transition-[letter-spacing] duration-[400ms] hover:tracking-[0.25em]"
      >
        {siteConfig.email}
      </a>

      <nav
        aria-label="Legal"
        className="relative flex flex-wrap justify-center gap-x-2 gap-y-1 text-[clamp(10px,1.1vw,12px)] font-light tracking-[0.08em] text-muted"
      >
        {legalLinks.map((link, i) => (
          <span key={link.href} className="flex items-center gap-2">
            <Link href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </Link>
            {i < legalLinks.length - 1 && <span aria-hidden>·</span>}
          </span>
        ))}
      </nav>

      <p className="relative text-[11px] font-light tracking-[0.35em] text-muted uppercase">
        {siteConfig.name} · Lahore · Est. {siteConfig.foundedYear}
      </p>
    </footer>
  );
}
