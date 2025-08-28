import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata = {
  title: "DJH - Direct Journey Line Holdings",
  description: "Redefining truck parking by transforming underutilized land into critical infrastructure that serves drivers, fleets, and communities nationwide.",
  keywords: "truck parking, logistics, infrastructure, real estate, technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
