import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-pixel" });

export const metadata: Metadata = {
  title: "Flip Engine X — Scan. Flip. Stack.",
  description: "The fastest FBA scanning and batching tool for Amazon resellers. Camera barcode scanning, Keepa lookups, profit calculations, and inventory management in one PWA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${pressStart.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
