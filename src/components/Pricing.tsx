"use client";

import { useState } from "react";
import WaitlistModal from "./WaitlistModal";

const plans = [
  {
    name: "STARTER",
    tier: "starter",
    monthly: "$19.99",
    annual: "$14.99",
    desc: "Available now — 3-day free trial, then $19.99/mo. The only plan during early access.",
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
    ctaClass: "cta-btn cta-btn-green w-full justify-center",
    cardClass: "glass-card laser-border laser-border-green",
    accent: "#00ff80",
    popular: false,
    locked: false,
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
    cta: "Coming in April",
    ctaClass: "cta-btn w-full justify-center cursor-default",
    cardClass: "glass-card",
    accent: "#8B5CF6",
    popular: false,
    locked: true,
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
    cta: "Coming in April",
    ctaClass: "cta-btn w-full justify-center cursor-default",
    cardClass: "glass-card",
    accent: "#22D3EE",
    popular: false,
    locked: true,
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
    cta: "Coming in April",
    ctaClass: "cta-btn w-full justify-center cursor-default",
    cardClass: "glass-card",
    accent: "#C4B5FD",
    popular: false,
    locked: true,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistPlan, setWaitlistPlan] = useState("undecided");

  function openWaitlist(plan: string) {
    setWaitlistPlan(plan);
    setShowWaitlist(true);
  }


  return (
    <>
      <section id="pricing" className="parallax-section pt-16 sm:pt-24 pb-6 sm:pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-animate>
            <div className="font-pixel text-[9px] text-[#00ff80] glow-green tracking-widest mb-4">PRICING</div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F1F0FF] mb-4">
              Pick Your <span className="text-[#8B5CF6]">Level</span>
            </h2>
            <p className="max-w-lg mx-auto text-[rgba(241,240,255,0.55)] text-lg mb-8">
              Early access is here — start with a 3-day free trial on Starter, then $19.99/mo. Pro, Elite, and Enterprise launch in April.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {plans.map((p, i) => (
              <div
                key={p.name}
                data-animate
                className={`opacity-0 ${p.cardClass} p-6 rounded-2xl relative flex flex-col`}
                style={{
                  animationDelay: `${i * 0.12}s`,
                  opacity: p.locked ? undefined : undefined,
                }}
              >
                {/* "Coming in April" badge for locked plans */}
                {p.locked && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-pixel text-[7px] tracking-widest px-4 py-1 rounded-full"
                    style={{
                      background: "rgba(139,92,246,0.15)",
                      border: "1px solid rgba(139,92,246,0.4)",
                      color: "#C4B5FD",
                    }}
                  >
                    COMING APRIL
                  </div>
                )}

                {/* "Available Now" badge for Starter */}
                {!p.locked && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 font-pixel text-[7px] tracking-widest px-4 py-1 rounded-full"
                    style={{
                      background: "rgba(0,255,128,0.15)",
                      border: "1px solid rgba(0,255,128,0.5)",
                      color: "#00ff80",
                    }}
                  >
                    AVAILABLE NOW
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

                <ul className={`space-y-2.5 mb-6 flex-1 ${p.locked ? "opacity-50" : ""}`}>
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

                {p.locked ? (
                  <button
                    onClick={() => openWaitlist(p.tier)}
                    className={p.ctaClass}
                    style={{
                      background: "rgba(139,92,246,0.08)",
                      border: "1px solid rgba(139,92,246,0.2)",
                      color: "rgba(241,240,255,0.3)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    {p.cta}
                  </button>
                ) : (
                  <button
                    onClick={() => openWaitlist(p.tier)}
                    className={p.ctaClass}
                  >
                    {p.cta}
                  </button>
                )}

                {!p.locked && (
                  <div className="text-[10px] text-[rgba(241,240,255,0.3)] text-center mt-2">
                    Join the waitlist to start your free trial
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Waitlist CTA below pricing cards */}
          <div className="text-center mt-10" data-animate>
            <p className="text-sm text-[rgba(241,240,255,0.45)] mb-4">
              Interested in Pro, Elite, or Enterprise? Join the waitlist to be notified when they launch in April.
            </p>
            <button
              onClick={() => openWaitlist("undecided")}
              className="cta-btn cta-btn-primary"
            >
              Join Early Access Waitlist
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <WaitlistModal
        open={showWaitlist}
        onClose={() => setShowWaitlist(false)}
        initialPlan={waitlistPlan}
      />
    </>
  );
}
