import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

// Note: `lastModified` is intentionally omitted so the sitemap carries no date
// signal (avoids any year appearing anywhere on the site / in crawl data).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteConfig.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/ethics-standards/`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteConfig.url}/privacy-policy/`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/terms-of-service/`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/disclaimer/`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
