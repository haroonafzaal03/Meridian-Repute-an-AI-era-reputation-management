import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | AI-Era Reputation Management & Brand Intelligence`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI reputation management",
    "AI visibility assessment",
    "executive branding",
    "online reputation management",
    "crisis communication strategy",
    "digital trust consulting",
    "reputation audit",
    "generative engine optimization",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | AI-Era Reputation Management & Brand Intelligence`,
    description: siteConfig.description,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AI-Era Reputation Management & Brand Intelligence`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f4f0",
};

function OrganizationJsonLd() {
  const organization = {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    description: siteConfig.description,
    foundingDate: String(siteConfig.foundedYear),
    email: siteConfig.email,
    sameAs: [],
    address: siteConfig.offices.map((office) => ({
      "@type": "PostalAddress",
      streetAddress: office.streetAddress,
      addressLocality: office.addressLocality,
      addressRegion: "addressRegion" in office ? office.addressRegion : undefined,
      postalCode: "postalCode" in office ? office.postalCode : undefined,
      addressCountry: office.addressCountry,
    })),
    contactPoint: siteConfig.offices.map((office) => ({
      "@type": "ContactPoint",
      telephone: office.telephone,
      contactType: "sales",
      areaServed: office.addressCountry,
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable}`}>
      <body className="min-h-screen bg-cream text-ink font-sans antialiased">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
