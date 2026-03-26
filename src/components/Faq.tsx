"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Flip Engine X?",
    a: "Flip Engine X is a barcode scanning app built for Amazon FBA book resellers. Scan barcodes at thrift stores, library sales, and book sales — the app instantly shows Keepa data, profit calculations, sales rank, gating status, and whether a book is worth flipping on Amazon.",
  },
  {
    q: "How is Flip Engine X different from ScoutIQ, ScoutLY, or Go2Lister?",
    a: "Flip Engine X is a PWA (Progressive Web App) that works on any device — no app store needed. It includes features competitors charge extra for: intrinsic value analysis (avg price when items actually sold), a built-in repricer, team accounts, and 20-parameter trigger alerts. Plus it has a modern interface built by actual resellers who flip books.",
  },
  {
    q: "What is a PWA and do I need to download it from the App Store?",
    a: "A PWA (Progressive Web App) installs directly from your browser — no App Store or Google Play needed. Visit the app in Chrome or Safari, then add it to your home screen. It works offline, syncs across devices, and updates instantly without waiting for app store approval.",
  },
  {
    q: "How much does Flip Engine X cost?",
    a: "Flip Engine X starts at $9.99/month for the Starter plan with a 3-day free trial. Pro ($29.99/mo), Elite ($79.99/mo), and Enterprise ($199.99/mo) plans launch in April 2025 with additional features like unlimited scans, repricer, multi-marketplace support, and team accounts. Annual billing saves 20%.",
  },
  {
    q: "What is Intrinsic Value and why does it matter?",
    a: "Intrinsic Value shows you the average price at which a book actually sold — not just what sellers are listing it for. It analyzes Keepa rank drops (each drop indicates a sale) and cross-references the price at that moment over 90-day and 365-day windows. This gives you a realistic sale price instead of inflated listing prices.",
  },
  {
    q: "Can I use a Bluetooth barcode scanner with Flip Engine X?",
    a: "Yes. Flip Engine X supports both camera scanning and Bluetooth barcode scanners. Pair any Bluetooth scanner for rapid-fire scanning at library sales and book sales — point, click, done. No camera aiming needed, which is much faster for high-volume sourcing.",
  },
  {
    q: "Does Flip Engine X work with Amazon Seller Central?",
    a: "Yes. Pro plans and above include Amazon SP-API integration for real-time inventory sync, gating checks (know instantly if you're approved to sell an item), competitive pricing data, and sales analytics — all connected directly to your Seller Central account.",
  },
  {
    q: "What is the FBA profit calculator?",
    a: "The built-in profit calculator shows your real profit after all Amazon fees — referral fees, FBA fulfillment fees, closing fees, weight-based shipping, and storage. Enter your buy cost, and the app calculates your margin instantly so you know whether to buy before you scan the next book.",
  },
  {
    q: "Can I use Flip Engine X for retail arbitrage or online arbitrage?",
    a: "Absolutely. While Flip Engine X is optimized for FBA book resellers, the barcode scanner, Keepa lookups, profit calculator, and batch management work for any Amazon product category. It's useful for retail arbitrage at stores like Goodwill, Salvation Army, and library sales, as well as online arbitrage sourcing.",
  },
  {
    q: "What are Founders badges?",
    a: "Early access users who join the waitlist receive a permanent Founder achievement badge displayed on their account and ranked pages. This is an exclusive perk for users who signed up before the full launch in April 2025.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="parallax-section py-16 sm:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12" data-animate>
          <div className="font-pixel text-[9px] text-[#FDE047] glow-yellow tracking-widest mb-4">FAQ</div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F1F0FF] mb-4">
            Got <span className="text-[#8B5CF6]">Questions</span>?
          </h2>
          <p className="max-w-lg mx-auto text-[rgba(241,240,255,0.55)] text-lg">
            Everything you need to know about the best FBA book scanning app.
          </p>
        </div>

        <div className="space-y-3" data-animate>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const colors = [
              { accent: "#8B5CF6", glow: "rgba(139,92,246,0.3)" },
              { accent: "#22D3EE", glow: "rgba(34,211,238,0.3)" },
              { accent: "#00ff80", glow: "rgba(0,255,128,0.3)" },
              { accent: "#FDE047", glow: "rgba(253,224,71,0.3)" },
              { accent: "#C4B5FD", glow: "rgba(196,181,253,0.3)" },
            ];
            const c = colors[i % colors.length];

            return (
              <div
                key={i}
                className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? "laser-border" : ""}`}
                style={{
                  border: isOpen ? undefined : "1px solid rgba(139,92,246,0.08)",
                  boxShadow: isOpen ? `0 0 20px ${c.glow}` : "none",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center gap-4"
                  style={{ cursor: "pointer", background: "none", border: "none", color: "#F1F0FF" }}
                >
                  {/* Pixel number badge */}
                  <span
                    className="font-pixel text-[8px] shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{
                      background: isOpen ? `${c.accent}20` : "rgba(255,255,255,0.03)",
                      border: `1px solid ${isOpen ? `${c.accent}50` : "rgba(255,255,255,0.06)"}`,
                      color: isOpen ? c.accent : "rgba(241,240,255,0.25)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-bold leading-relaxed flex-1">{faq.q}</span>
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke={isOpen ? c.accent : "rgba(241,240,255,0.2)"}
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className="shrink-0"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 fade-in-up" style={{ paddingLeft: 56 }}>
                    <div
                      className="rounded-lg px-4 py-3"
                      style={{
                        background: `${c.accent}06`,
                        borderLeft: `2px solid ${c.accent}40`,
                      }}
                    >
                      <p className="text-sm text-[rgba(241,240,255,0.6)] leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Export FAQ data for JSON-LD schema
export const faqData = faqs;
