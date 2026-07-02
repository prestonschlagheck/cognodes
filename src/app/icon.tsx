import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Black rounded square with a yellow "C", generated as a PNG
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
          color: "#d7ff3d",
          fontSize: 24,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        C
      </div>
    ),
    { ...size }
  );
}
