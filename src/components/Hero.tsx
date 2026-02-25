export default function Hero() {
  return (
    <section className="parallax-section min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <div data-animate className="opacity-0">
        <div className="font-pixel text-[10px] sm:text-xs text-[#22D3EE] glow-cyan tracking-widest mb-6 breathe">
          SCAN. FLIP. STACK.
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
          <span className="text-[#F1F0FF]">The Fastest</span>
          <br />
          <span className="text-[#8B5CF6] glow-violet">FBA Scanner</span>
          <br />
          <span className="text-[#F1F0FF]">Ever Built</span>
        </h1>

        <p className="max-w-xl mx-auto text-lg sm:text-xl text-[rgba(241,240,255,0.55)] mb-10 leading-relaxed">
          Camera barcode scanning, instant Keepa lookups, real-time profit calculations,
          and smart batch management — all in one lightning-fast PWA.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#pricing" className="cta-btn cta-btn-green">
            Start Flipping
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a href="#features" className="cta-btn cta-btn-primary">
            See Features
          </a>
        </div>
      </div>

      {/* Floating mockup hint */}
      <div className="mt-16 float" data-animate style={{ animationDelay: "0.3s" }}>
        <div className="glass-card p-6 max-w-sm mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-[#00ff80]" style={{ boxShadow: "0 0 8px rgba(0,255,128,0.6)" }} />
            <span className="font-pixel text-[8px] text-[#FDE047]">SCAN RESULT</span>
          </div>
          <div className="text-sm text-[rgba(241,240,255,0.55)] mb-1">ISBN 978-0-13-468599-1</div>
          <div className="text-lg font-black text-[#F1F0FF]">The Pragmatic Programmer</div>
          <div className="flex gap-4 mt-3">
            <div>
              <div className="text-[10px] text-[rgba(241,240,255,0.4)] font-bold">BUY</div>
              <div className="text-[#22D3EE] font-black">$3.50</div>
            </div>
            <div>
              <div className="text-[10px] text-[rgba(241,240,255,0.4)] font-bold">SELL</div>
              <div className="text-[#C4B5FD] font-black">$24.99</div>
            </div>
            <div>
              <div className="text-[10px] text-[rgba(241,240,255,0.4)] font-bold">PROFIT</div>
              <div className="text-[#00ff80] font-black glow-green">$14.27</div>
            </div>
          </div>
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
