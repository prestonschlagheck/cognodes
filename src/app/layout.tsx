import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://cognodes.com'),
  title: "CogNodes - Build With Us",
  description: "CogNodes designs and builds AI-powered software for startups and businesses. Websites, web apps, workflow automation, and AI integration. Premium quality at startup prices.",
  keywords: "AI software development, AI integration, workflow automation, web development, Next.js, React, N8N, custom web apps, startup software, AI agents, RAG systems, voice AI",
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
    title: 'CogNodes - Build With Us',
    description: 'We design and build AI-powered software for startups and businesses. Websites, automation, and AI integration. Premium quality at startup prices.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CogNodes - Build With Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CogNodes - Build With Us',
    description: 'We design and build AI-powered software for startups and businesses. Websites, automation, and AI integration. Premium quality at startup prices.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
