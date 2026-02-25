const plans = [
  {
    name: "FREE",
    price: "$0",
    period: "forever",
    desc: "Get started with the core scanning experience.",
    features: [
      "Camera barcode scanner",
      "Manual UPC/ISBN entry",
      "Basic profit calculator",
      "1 batch slot",
      "Light/dark mode",
    ],
    cta: "Start Free",
    ctaClass: "cta-btn cta-btn-primary w-full justify-center",
    cardClass: "glass-card",
    accent: "#8B5CF6",
    popular: false,
  },
  {
    name: "PRO",
    price: "$19",
    period: "/month",
    desc: "Full power for serious resellers.",
    features: [
      "Everything in Free",
      "Keepa integration (unlimited lookups)",
      "20 custom trigger parameters",
      "Unlimited batches",
      "Bluetooth scanner support",
      "Amazon SP-API integration",
      "Inventory sync & gating checks",
      "Cloud sync (triggers & settings)",
      "Priority support",
    ],
    cta: "Go Pro",
    ctaClass: "cta-btn cta-btn-green w-full justify-center",
    cardClass: "glass-card laser-border laser-border-green",
    accent: "#00ff80",
    popular: true,
  },
  {
    name: "ENTERPRISE",
    price: "$49",
    period: "/month",
    desc: "For teams and high-volume operations.",
    features: [
      "Everything in Pro",
      "Multi-user team access",
      "Advanced analytics dashboard",
      "Bulk inventory management",
      "Custom Engine X pricing rules",
      "Dedicated account manager",
      "API access",
    ],
    cta: "Contact Us",
    ctaClass: "cta-btn cta-btn-primary w-full justify-center",
    cardClass: "glass-card",
    accent: "#C4B5FD",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="parallax-section py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <div className="font-pixel text-[9px] text-[#00ff80] glow-green tracking-widest mb-4">PRICING</div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F1F0FF] mb-4">
            Pick Your <span className="text-[#8B5CF6]">Level</span>
          </h2>
          <p className="max-w-lg mx-auto text-[rgba(241,240,255,0.55)] text-lg">
            Start free. Upgrade when you&apos;re ready to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((p, i) => (
            <div
              key={p.name}
              data-animate
              className={`opacity-0 ${p.cardClass} p-6 rounded-2xl relative`}
              style={{ animationDelay: `${i * 0.15}s` }}
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
                <span className="text-4xl font-black text-[#F1F0FF]">{p.price}</span>
                <span className="text-sm text-[rgba(241,240,255,0.4)] font-semibold">{p.period}</span>
              </div>

              <p className="text-sm text-[rgba(241,240,255,0.45)] mb-6">{p.desc}</p>

              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-[rgba(241,240,255,0.7)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#" className={p.ctaClass}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
