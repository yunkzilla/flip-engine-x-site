export default function Hero() {
  return (
    <section className="parallax-section min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <div data-animate className="opacity-0">
        <div className="font-pixel text-[10px] sm:text-xs text-[#22D3EE] glow-cyan tracking-widest mb-6 breathe">
          BUILT BY FLIPPERS. USED BY FLIPPERS.
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
          <span className="text-[#F1F0FF]">The Swiss Army Knife</span>
          <br />
          <span className="text-[#F1F0FF]">for </span>
          <span className="text-[#8B5CF6] glow-violet">FBA Book</span>
          <br />
          <span className="text-[#FDE047] glow-yellow">Flipping</span>
        </h1>

        <p className="max-w-xl mx-auto text-lg sm:text-xl text-[rgba(241,240,255,0.55)] mb-10 leading-relaxed">
          Scan barcodes, pull Keepa data, calculate profit, check gating,
          and batch your inventory — all from one app built by resellers who actually flip books.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#pricing" className="cta-btn cta-btn-green">
            Start Flipping
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a href="#demo" className="cta-btn cta-btn-primary">
            See It In Action
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 breathe">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(139,92,246,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
