import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Required for cPanel/Passenger (Node.js-capable shared hosting): produces
  // .next/standalone with a minimal server.js that doesn't need node_modules installed.
  // See DEPLOY.md.
  output: "standalone",
  compress: true,
  poweredByHeader: false,
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
