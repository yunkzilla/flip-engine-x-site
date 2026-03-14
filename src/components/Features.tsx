const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ),
    title: "Camera Scanner",
    desc: "Hybrid barcode engine — native BarcodeDetector API with ZXing fallback. Supports EAN-13, UPC-A, CODE-128, ISBN, and rotated barcodes with auto-retry.",
    color: "#8B5CF6",
    tier: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: "Engine X Vision",
    desc: "Experimental AI-powered scanner. Uses Google Cloud Vision for OCR text detection, web-based product matching, and object localization — with TensorFlow.js real-time object detection on-device.",
    color: "#22D3EE",
    tier: null,
    badge: "Experimental",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/><path d="m18.7 8-5.1 5.2-2.8-2.7L7 14.3"/>
      </svg>
    ),
    title: "Keepa Lookups",
    desc: "Every scan fires a Keepa lookup. Get sales rank, pricing history, sold-per-month data, and product images in under a second.",
    color: "#22D3EE",
    tier: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00ff80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "Profit Calculator",
    desc: "Real-time profit with FBA/FBM fees, referral fees, weight-based shipping, and customizable cost settings. Know your margin before you buy.",
    color: "#00ff80",
    tier: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
      </svg>
    ),
    title: "Smart Triggers",
    desc: "Up to 20 trigger parameters with color alerts, sound effects, and auto-keep rules. Starter includes 3 — Pro and above unlocks all 20.",
    color: "#FDE047",
    tier: "Pro+",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
        <path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
      </svg>
    ),
    title: "Batch Management",
    desc: "Create FBA or FBM batches, assign scanned items, set shipping locations, and manage your entire workflow from one screen.",
    color: "#C4B5FD",
    tier: "Pro+",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 14.14 14.14"/>
      </svg>
    ),
    title: "Gating Checks",
    desc: "Instantly know if you're ungated or gated on any ASIN. One-tap approval requests directly to Seller Central.",
    color: "#f87171",
    tier: "Pro+",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
    ),
    title: "SP-API Integration",
    desc: "Connect your Seller Central account for real-time inventory sync, competitive pricing data, and sales analytics.",
    color: "#22D3EE",
    tier: "Pro+",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00ff80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "PWA — No App Store",
    desc: "Install directly from your browser. Works offline, syncs across devices, and updates instantly — no app store listing needed.",
    color: "#00ff80",
    tier: null,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
      </svg>
    ),
    title: "Personal Records",
    desc: "Track your best finds, rank milestones, and scanning history. Cloud-synced so your stats follow you everywhere.",
    color: "#FDE047",
    tier: null,
  },
];

export default function Features() {
  return (
    <section id="features" className="parallax-section py-16 sm:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <div className="font-pixel text-[9px] text-[#22D3EE] glow-cyan tracking-widest mb-4">FEATURES</div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F1F0FF] mb-4">
            Everything You Need to <span className="text-[#8B5CF6]">Flip Faster</span>
          </h2>
          <p className="max-w-lg mx-auto text-[rgba(241,240,255,0.55)] text-lg">
            Built for speed. Designed for profit. Every tool a reseller needs in one app.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-animate
              className="opacity-0 glass-card p-6 hover:border-[rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${f.color}10`, border: `1px solid ${f.color}25` }}
              >
                {f.icon}
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-pixel text-[10px]" style={{ color: f.color }}>
                  {f.title.toUpperCase()}
                </h3>
                {f.tier && (
                  <span className="font-pixel text-[7px] px-2 py-0.5 rounded-full" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.35)", color: "#C4B5FD" }}>
                    {f.tier}
                  </span>
                )}
                {(f as typeof f & { badge?: string }).badge && (
                  <span className="font-pixel text-[7px] px-2 py-0.5 rounded-full" style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.3)", color: "#22D3EE" }}>
                    {(f as typeof f & { badge?: string }).badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-[rgba(241,240,255,0.55)] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
