import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-pixel" });

export const metadata: Metadata = {
  title: "Flip Engine X — The Fastest FBA Book Scanning App for Amazon Resellers",
  description:
    "Scan barcodes, pull Keepa data, calculate profit, check gating, and batch your FBA inventory — all from one app. Built by resellers for resellers. The best alternative to ScoutIQ, ScoutLY, and Go2Lister.",
  keywords: [
    "FBA scanner",
    "FBA scanning app",
    "Amazon FBA",
    "book scanning app",
    "FBA book scanner",
    "Amazon reseller tool",
    "FBA reseller",
    "barcode scanner FBA",
    "Keepa scanner",
    "FBA profit calculator",
    "Amazon seller scanner",
    "book flipping",
    "FBA sourcing",
    "FBA inventory management",
    "FBA batch management",
    "Amazon gating check",
    "FBA repricing",
    "ScoutIQ alternative",
    "ScoutLY alternative",
    "Go2Lister alternative",
    "Keepa alternative",
    "FBA app",
    "Amazon FBA tool",
    "book arbitrage",
    "retail arbitrage",
    "online arbitrage",
    "Amazon seller app",
    "FBA automation",
    "Flip Engine X",
    "flipenginex",
  ],
  authors: [{ name: "Flip Engine X" }],
  creator: "Flip Engine X",
  publisher: "Flip Engine X",
  metadataBase: new URL("https://flipenginex.com"),
  alternates: {
    canonical: "https://flipenginex.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flipenginex.com",
    siteName: "Flip Engine X",
    title: "Flip Engine X — The Fastest FBA Book Scanning App",
    description:
      "Scan barcodes, pull Keepa data, calculate profit, check gating, and batch your FBA inventory. Built by resellers for resellers. Better than ScoutIQ, ScoutLY, and Go2Lister.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flip Engine X — FBA Scanning App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flip Engine X — Fastest FBA Scanner",
    description:
      "Scan barcodes, pull Keepa data, calculate profit. The best FBA scanning app for Amazon book resellers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/icon-x-192.png",
  },
  verification: {
    // Add your Google Search Console verification code here after setup
    // google: "your-verification-code",
  },
};

// JSON-LD structured data for rich snippets
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Flip Engine X",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android, iOS",
  description:
    "The fastest FBA book scanning app for Amazon resellers. Scan barcodes, pull Keepa data, calculate profit, check gating, and batch your inventory.",
  url: "https://flipenginex.com",
  image: "https://flipenginex.com/icon-x-512.png",
  author: {
    "@type": "Organization",
    name: "Flip Engine X",
    url: "https://flipenginex.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "3-day free trial, then $19.99/month",
  },
  aggregateRating: undefined, // Add when you have reviews
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${pressStart.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
