export const siteConfig = {
  name: "Meridian Repute",
  tagline: "Your reputation speaks before you do.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://meridianrepute.com",
  description:
    "Meridian Repute builds, protects, and strengthens reputation in the AI era — AI visibility assessments, executive branding, online reputation management, and crisis communication strategy for organizations and executives.",
  email: "info@meridianrepute.com",
  foundedYear: 2020,
  offices: [
    {
      id: "pakistan",
      name: "Pakistan Office",
      streetAddress: "1207-08, 12th Floor, High Q Tower, Jail Road, Gulberg V",
      addressLocality: "Lahore",
      addressCountry: "PK",
      telephone: "+92-333-4723813",
    },
    {
      id: "usa",
      name: "USA Office",
      streetAddress: "10333 Harwin Dr, Suite 235F",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77036",
      addressCountry: "US",
      telephone: "+1-214-898-3223",
    },
  ],
} as const;
