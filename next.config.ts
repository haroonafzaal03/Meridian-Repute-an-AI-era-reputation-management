import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Static HTML export for plain cPanel/Apache shared hosting (no Node runtime).
  // Produces `out/` — upload its contents to the domain's document root.
  // Security headers, HTTPS redirect, clean URLs, caching are handled by the
  // .htaccess shipped in public/. See DEPLOY.md.
  output: "export",
  // Emit each route as <route>/index.html so Apache serves clean directory URLs
  // (e.g. /privacy-policy/) without extra rewrite rules or 403s.
  trailingSlash: true,
  poweredByHeader: false,
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // No server-side image optimizer in a static export.
    unoptimized: true,
  },
};

export default nextConfig;
