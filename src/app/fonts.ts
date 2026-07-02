import localFont from "next/font/local";

export const helveticaNow = localFont({
  src: [
    { path: "../../font/HelveticaNowDisplay-Thin.woff2", weight: "100", style: "normal" },
    { path: "../../font/HelveticaNowDisplay-ExtLt.woff2", weight: "200", style: "normal" },
    { path: "../../font/HelveticaNowDisplay-Light.woff2", weight: "300", style: "normal" },
    { path: "../../font/HelveticaNowDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../font/HelveticaNowDisplay-RegIta.woff2", weight: "400", style: "italic" },
    { path: "../../font/HelveticaNowDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../font/HelveticaNowDisplay-MedIta.woff2", weight: "500", style: "italic" },
    { path: "../../font/HelveticaNowDisplay-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../font/HelveticaNowDisplay-BoldIta.woff2", weight: "700", style: "italic" },
    { path: "../../font/HelveticaNowDisplay-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "../../font/HelveticaNowDisplay-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-helvetica-now",
  display: "swap",
});
