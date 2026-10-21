import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Black circle with a bold yellow "C", in next/og's built-in sans
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
          borderRadius: "50%",
        }}
      >
        <span
          style={{
            display: "flex",
            color: "#d7ff3d",
            fontSize: 22,
            fontWeight: 700,
            lineHeight: 1,
            transform: "translateY(-1.4px)",
          }}
        >
          C
        </span>
      </div>
    ),
    { ...size }
  );
}
