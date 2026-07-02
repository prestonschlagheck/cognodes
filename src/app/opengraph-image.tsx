import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "CogNodes — We build AI-powered software for startups and businesses";

// Branded share card that mirrors the site's hero (regenerated on every deploy)
export default function OpengraphImage() {
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
          background: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#fafafa", fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>
          Ship Smarter With
        </div>
        <div style={{ display: "flex", color: "#d7ff3d", fontSize: 200, fontWeight: 800, letterSpacing: -6, lineHeight: 1, marginTop: 4 }}>
          CogNodes
        </div>
        <div style={{ display: "flex", color: "#8a8a8a", fontSize: 30, marginTop: 40, maxWidth: 860, textAlign: "center" }}>
          We design and build AI-powered software for startups and businesses.
        </div>
      </div>
    ),
    { ...size }
  );
}
