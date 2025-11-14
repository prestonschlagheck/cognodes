import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL('https://cognodes.com'),
  title: "CogNodes - AI-Powered Business Automation",
  description: "Transform your service-based business with AI automation. Automated quote generation, customer engagement, smart email assistants, and 24/7 AI receptionists that help you make more money and optimize workflows.",
  keywords: "AI automation, business automation, AI receptionist, automated quotes, customer engagement, email assistant, chatbot, appointment scheduling, service business, AI technology, workflow optimization",
  authors: [{ name: "CogNodes" }],
  creator: "CogNodes",
  publisher: "CogNodes",
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
    url: 'https://cognodes.com',
    siteName: 'CogNodes',
    title: 'CogNodes - AI-Powered Business Automation Solutions',
    description: 'Transform your service-based business with AI automation. Make more money and optimize workflows with intelligent automation solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CogNodes - AI-Powered Business Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CogNodes - AI-Powered Business Automation Solutions',
    description: 'Transform your service-based business with AI automation. Make more money and optimize workflows with intelligent automation solutions.',
    images: ['/og-image.png'],
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
