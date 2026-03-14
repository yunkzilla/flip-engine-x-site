"use client";

import { useState } from "react";

const APP_URL = "https://semirebelliously-nonanguished-ciera.ngrok-free.dev";

const plans = [
  {
    name: "STARTER",
    tier: "starter",
    monthly: "$19.99",
    annual: "$14.99",
    desc: "Get scanning with core features and solid limits.",
    features: [
      "Camera barcode scanner",
      "Bluetooth scanner support",
      "Keepa lookups + title search",
      "Profit calculator with fee breakdown",
      "25 scans per block (3 min cooldown)",
      "Up to 3 triggers",
      "Market prices & Bookrun",
    ],
    missing: ["Batches", "SP-API", "Inventory Sync", "Gating Checks", "Repricer"],
    cta: "Start 3-Day Trial",
    ctaClass: "cta-btn cta-btn-primary w-full justify-center",
    cardClass: "glass-card",
    accent: "#8B5CF6",
    popular: false,
  },
  {
    name: "PRO",
    tier: "pro",
    monthly: "$49.99",
    annual: "$39.99",
    desc: "Full power for serious resellers.",
    features: [
      "Everything in Starter",
      "75 scans per block (2 min cooldown)",
      "Unlimited triggers (999)",
      "Batch management",
      "Amazon SP-API integration",
      "Inventory sync & gating checks",
      "Repricer available as add-on",
    ],
    missing: ["Multi-Marketplace", "Team Accounts"],
    cta: "Start 3-Day Trial",
    ctaClass: "cta-btn cta-btn-green w-full justify-center",
    cardClass: "glass-card laser-border laser-border-green",
    accent: "#00ff80",
    popular: true,
  },
  {
    name: "ELITE",
    tier: "elite",
    monthly: "$99.99",
    annual: "$79.99",
    desc: "Unlimited scans and full automation.",
    features: [
      "Everything in Pro",
      "Unlimited scans (no cooldown)",
      "Repricer included (1,000 products)",
      "Multi-marketplace support",
      "1 team account included",
      "Cloud sync across all devices",
    ],
    missing: [],
    cta: "Start 3-Day Trial",
    ctaClass: "cta-btn cta-btn-primary w-full justify-center",
    cardClass: "glass-card",
    accent: "#22D3EE",
    popular: false,
  },
  {
    name: "ENTERPRISE",
    tier: "enterprise",
    monthly: "$199.99",
    annual: "$159.99",
    desc: "For teams and high-volume operations.",
    features: [
      "Everything in Elite",
      "Repricer included (2,500 products)",
      "5 team accounts included",
      "CSV export",
      "Priority support",
      "Dedicated account manager",
    ],
    missing: [],
    cta: "Contact Us",
    ctaClass: "cta-btn cta-btn-primary w-full justify-center",
    cardClass: "glass-card",
    accent: "#C4B5FD",
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="parallax-section py-16 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12" data-animate>
          <div className="font-pixel text-[9px] text-[#00ff80] glow-green tracking-widest mb-4">PRICING</div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F1F0FF] mb-4">
            Pick Your <span className="text-[#8B5CF6]">Level</span>
          </h2>
          <p className="max-w-lg mx-auto text-[rgba(241,240,255,0.55)] text-lg mb-8">
            3-day free trial on every plan. No credit card required.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 rounded-full px-2 py-1" style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)" }}>
            <button
              onClick={() => setAnnual(false)}
              className="font-bold text-sm px-4 py-2 rounded-full transition-all"
              style={{
                background: !annual ? "rgba(139,92,246,0.25)" : "transparent",
                color: !annual ? "#C4B5FD" : "rgba(241,240,255,0.4)",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className="font-bold text-sm px-4 py-2 rounded-full transition-all"
              style={{
                background: annual ? "rgba(0,255,128,0.15)" : "transparent",
                color: annual ? "#00ff80" : "rgba(241,240,255,0.4)",
              }}
            >
              Annual
              <span className="ml-2 text-[10px] font-pixel" style={{ color: "#00ff80" }}>SAVE 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {plans.map((p, i) => (
            <div
              key={p.name}
              data-animate
              className={`opacity-0 ${p.cardClass} p-6 rounded-2xl relative`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-pixel text-[7px] tracking-widest px-4 py-1 rounded-full"
                  style={{
                    background: "rgba(0,255,128,0.15)",
                    border: "1px solid rgba(0,255,128,0.5)",
                    color: "#00ff80",
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              <div className="font-pixel text-[10px] tracking-wider mb-1" style={{ color: p.accent }}>
                {p.name}
              </div>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-black text-[#F1F0FF]">{annual ? p.annual : p.monthly}</span>
                <span className="text-sm text-[rgba(241,240,255,0.4)] font-semibold">/mo</span>
              </div>
              {annual && (
                <div className="text-[11px] font-semibold mb-1" style={{ color: "#00ff80" }}>
                  billed annually
                </div>
              )}

              <p className="text-sm text-[rgba(241,240,255,0.45)] mb-5">{p.desc}</p>

              <ul className="space-y-2.5 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] text-[rgba(241,240,255,0.7)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
                {p.missing.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] text-[rgba(241,240,255,0.25)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(241,240,255,0.2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={p.tier === "enterprise" ? "mailto:support@flipenginex.com" : `${APP_URL}/plans?plan=${p.tier}&billing=${annual ? "annual" : "monthly"}`}
                target={p.tier === "enterprise" ? undefined : "_blank"}
                rel={p.tier === "enterprise" ? undefined : "noopener noreferrer"}
                className={p.ctaClass}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-12 text-center" data-animate>
          <div className="glass-card inline-block px-8 py-5 rounded-2xl">
            <div className="font-pixel text-[9px] text-[#FDE047] glow-yellow tracking-widest mb-3">ADD-ONS</div>
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-[rgba(241,240,255,0.6)] font-semibold">
              <span>
                <span className="text-[#C4B5FD]">Repricer</span> — $10/mo per 250 products (Pro+)
              </span>
              <span>
                <span className="text-[#C4B5FD]">Team Account</span> — $25/mo per additional seat
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
