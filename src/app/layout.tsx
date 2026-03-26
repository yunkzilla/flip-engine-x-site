import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-pixel" });

export const metadata: Metadata = {
  title: "Flip Engine X — The All-in-One FBA Scanning & Sourcing App for Amazon Resellers",
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
    title: "Flip Engine X — All-in-One FBA Scanning & Sourcing App",
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
    title: "Flip Engine X — All-in-One FBA Scanner",
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
    google: "QjwrkI4xxTCM5-qUgM0hsu_JE1ryBqLdEL_W_lm8qzI",
  },
};

// JSON-LD structured data — multiple schemas for rich snippets
const schemas = [
  // SoftwareApplication schema
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Flip Engine X",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    description:
      "The fastest FBA book scanning app for Amazon resellers. Scan barcodes, pull Keepa data, calculate profit, check gating, and batch your inventory. Best alternative to ScoutIQ, ScoutLY, and Go2Lister.",
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
      description: "3-day free trial, then $9.99/month. Pro plans launching April 2025.",
    },
  },
  // Organization schema
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Flip Engine X",
    url: "https://flipenginex.com",
    logo: "https://flipenginex.com/icon-x-512.png",
    description: "FBA scanning and sourcing tools for Amazon book resellers.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@flipenginex.com",
      contactType: "customer support",
    },
    sameAs: [],
  },
  // FAQ schema — boosts "People also ask" visibility
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Flip Engine X?",
        acceptedAnswer: { "@type": "Answer", text: "Flip Engine X is a barcode scanning app built for Amazon FBA book resellers. Scan barcodes at thrift stores, library sales, and book sales — the app instantly shows Keepa data, profit calculations, sales rank, gating status, and whether a book is worth flipping on Amazon." },
      },
      {
        "@type": "Question",
        name: "How is Flip Engine X different from ScoutIQ, ScoutLY, or Go2Lister?",
        acceptedAnswer: { "@type": "Answer", text: "Flip Engine X is a PWA that works on any device without app store downloads. It includes intrinsic value analysis, a built-in repricer, team accounts, and 20-parameter trigger alerts — features competitors charge extra for or don't offer at all." },
      },
      {
        "@type": "Question",
        name: "How much does Flip Engine X cost?",
        acceptedAnswer: { "@type": "Answer", text: "Flip Engine X starts at $9.99/month for the Starter plan with a 3-day free trial. Pro ($29.99/mo), Elite ($79.99/mo), and Enterprise ($199.99/mo) plans launch in April 2025. Annual billing saves 20%." },
      },
      {
        "@type": "Question",
        name: "What is Intrinsic Value?",
        acceptedAnswer: { "@type": "Answer", text: "Intrinsic Value shows the average price at which a book actually sold, not just listing prices. It analyzes Keepa rank drops and cross-references prices at the moment of sale over 90-day and 365-day windows." },
      },
      {
        "@type": "Question",
        name: "Can I use a Bluetooth barcode scanner?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. Flip Engine X supports both camera scanning and Bluetooth barcode scanners for rapid-fire scanning at library sales and book sales." },
      },
      {
        "@type": "Question",
        name: "Does Flip Engine X work with Amazon Seller Central?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. Pro plans and above include Amazon SP-API integration for real-time inventory sync, gating checks, competitive pricing data, and sales analytics." },
      },
      {
        "@type": "Question",
        name: "Can I use Flip Engine X for retail arbitrage?",
        acceptedAnswer: { "@type": "Answer", text: "Absolutely. While optimized for FBA book resellers, the barcode scanner, Keepa lookups, profit calculator, and batch management work for any Amazon product category including retail arbitrage and online arbitrage." },
      },
    ],
  },
  // WebSite schema with search action
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Flip Engine X",
    url: "https://flipenginex.com",
    description: "The fastest FBA book scanning app for Amazon resellers. Better than ScoutIQ, ScoutLY, and Go2Lister.",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className={`${inter.variable} ${pressStart.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
