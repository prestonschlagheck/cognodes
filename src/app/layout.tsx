import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL('https://djh.vercel.app'),
  title: "DJH - Direct Journeyline Holdings",
  description: "Direct Journeyline Holdings redefines truck parking by transforming underutilized land into critical infrastructure. Our companies - Riggy's, Journeyline Properties, and Truckbays - serve drivers, fleets, and communities nationwide with innovative parking solutions.",
  keywords: "truck parking, logistics infrastructure, real estate development, parking technology, truck stops, fleet management, commercial real estate, transportation infrastructure, Direct Journeyline Holdings, Riggy's, Journeyline Properties, Truckbays",
  authors: [{ name: "Direct Journeyline Holdings" }],
  creator: "Direct Journeyline Holdings",
  publisher: "Direct Journeyline Holdings",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://djh.vercel.app',
    siteName: 'Direct Journeyline Holdings',
    title: 'Direct Journeyline Holdings - Transforming Truck Parking Infrastructure',
    description: 'Redefining truck parking by transforming underutilized land into critical infrastructure that serves drivers, fleets, and communities nationwide.',
    images: [
      {
        url: '/logos/djh-full-white.png',
        width: 1200,
        height: 630,
        alt: 'Direct Journeyline Holdings Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Direct Journeyline Holdings - Transforming Truck Parking Infrastructure',
    description: 'Redefining truck parking by transforming underutilized land into critical infrastructure that serves drivers, fleets, and communities nationwide.',
    images: ['/logos/djh-full-white.png'],
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
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
