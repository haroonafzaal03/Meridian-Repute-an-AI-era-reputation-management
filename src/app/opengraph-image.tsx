import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";
export const alt = `${siteConfig.name} — AI-Era Reputation Management & Brand Intelligence`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F6F4F0",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 380,
            height: 380,
            borderRadius: "50%",
            border: "1px solid #C9C4BB",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 22,
          }}
        >
          <div style={{ display: "flex", fontSize: 56, letterSpacing: 10, color: "#1A1A1A" }}>
            MERIDIAN
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 34, height: 1, background: "#1A1A1A" }} />
            <div style={{ display: "flex", fontSize: 20, letterSpacing: 8, color: "#1A1A1A" }}>
              REPUTE
            </div>
            <div style={{ width: 34, height: 1, background: "#1A1A1A" }} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 22,
            letterSpacing: 6,
            color: "#6B665D",
          }}
        >
          YOUR REPUTATION SPEAKS BEFORE YOU DO
        </div>
      </div>
    ),
    { ...size }
  );
}
