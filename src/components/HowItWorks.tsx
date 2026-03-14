const steps = [
  {
    num: "01",
    title: "Scan",
    desc: "Point your camera at any barcode, type a UPC, or connect a Bluetooth scanner. Flip Engine X detects it instantly.",
    color: "#8B5CF6",
    tier: null,
  },
  {
    num: "02",
    title: "Analyze",
    desc: "Keepa data loads in under a second. See sales rank, pricing history, FBA/FBM offers, and your estimated profit in real time.",
    color: "#22D3EE",
    tier: null,
  },
  {
    num: "03",
    title: "Decide",
    desc: "Set up to 20 trigger parameters with color-coded alerts and sound effects. Starter includes 3 triggers — Pro and above unlocks all 20.",
    color: "#FDE047",
    tier: "Pro+",
  },
  {
    num: "04",
    title: "Batch",
    desc: "Organize kept items into FBA or FBM batches, set pricing rules and shipping locations, and manage your entire workflow. Available on Pro and above.",
    color: "#00ff80",
    tier: "Pro+",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="parallax-section py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <div className="font-pixel text-[9px] text-[#FDE047] glow-yellow tracking-widest mb-4">HOW IT WORKS</div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F1F0FF]">
            Four Steps to <span className="text-[#00ff80]">Profit</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {steps.map((s, i) => (
            <div
              key={s.num}
              data-animate
              className="opacity-0 flex gap-5"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div
                className="font-pixel text-2xl font-black shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  color: s.color,
                  background: `${s.color}10`,
                  border: `1px solid ${s.color}30`,
                  textShadow: `0 0 16px ${s.color}60`,
                }}
              >
                {s.num}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-pixel text-[11px]" style={{ color: s.color }}>
                    {s.title.toUpperCase()}
                  </h3>
                  {s.tier && (
                    <span className="font-pixel text-[7px] px-2 py-0.5 rounded-full" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.35)", color: "#C4B5FD" }}>
                      {s.tier}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[rgba(241,240,255,0.55)] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Speed callout */}
        <div data-animate className="opacity-0 mt-16 text-center">
          <div className="glass-card laser-border inline-block px-10 py-6 rounded-2xl">
            <div className="font-pixel text-[9px] text-[rgba(241,240,255,0.4)] mb-2 tracking-widest">AVERAGE SCAN TIME</div>
            <div className="font-pixel text-3xl text-[#00ff80] glow-green">&lt; 1 SEC</div>
          </div>
        </div>
      </div>
    </section>
  );
}
