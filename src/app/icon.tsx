import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Yellow "nodes" mark on black, generated as a PNG for broad compatibility
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: 7,
        }}
      >
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#d7ff3d" strokeWidth="1.8" strokeLinecap="round">
            <line x1="10.5" y1="11.5" x2="21.5" y2="11.5" />
            <line x1="10.5" y1="11.5" x2="16" y2="21.5" />
            <line x1="21.5" y1="11.5" x2="16" y2="21.5" />
          </g>
          <g fill="#d7ff3d">
            <circle cx="10.5" cy="11.5" r="3" />
            <circle cx="21.5" cy="11.5" r="3" />
            <circle cx="16" cy="21.5" r="3" />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  );
}
