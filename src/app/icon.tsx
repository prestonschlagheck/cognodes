import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Black circle with a yellow "C" set in Helvetica Now Display (the site font)
export default function Icon() {
  const font = readFileSync(join(process.cwd(), "font/HelveticaNowDisplay-Bold.ttf"));

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
          color: "#d7ff3d",
          fontSize: 22,
          fontFamily: "HelveticaNow",
        }}
      >
        C
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "HelveticaNow", data: font, weight: 700, style: "normal" }],
    }
  );
}
