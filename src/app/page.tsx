import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechPartners } from "@/components/tech-partners";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { Statement } from "@/components/statement";
import { ConsultationSection } from "@/components/consultation-section";
import { ContactFooter } from "@/components/contact-footer";
import { siteConfig } from "@/lib/site-config";
import { services, faqs } from "@/lib/content";

function LocalBusinessJsonLd() {
  const jsonLd = siteConfig.offices.map((office) => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#${office.id}`,
    parentOrganization: { "@id": `${siteConfig.url}/#organization` },
    name: `${siteConfig.name} — ${office.name}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: office.streetAddress,
      addressLocality: office.addressLocality,
      addressRegion: "addressRegion" in office ? office.addressRegion : undefined,
      postalCode: "postalCode" in office ? office.postalCode : undefined,
      addressCountry: office.addressCountry,
    },
    telephone: office.telephone,
    email: siteConfig.email,
    url: siteConfig.url,
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function ServiceCatalogJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Reputation Management",
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: ["PK", "US"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Reputation & AI Visibility Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.desc,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <ServiceCatalogJsonLd />
      <FaqJsonLd />
      <SiteNav />
      <main>
        <Hero />
        <About />
        <TechPartners />
        <Services />
        <Testimonials />
        <Statement />
        <ConsultationSection />
      </main>
      <ContactFooter />
    </>
  );
}
