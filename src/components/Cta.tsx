export default function Cta() {
  return (
    <section className="parallax-section py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center" data-animate>
        <div className="glass-card laser-border rounded-3xl p-10 sm:p-16">
          <div className="font-pixel text-[9px] text-[#22D3EE] glow-cyan tracking-widest mb-6 breathe">
            READY TO FLIP?
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#F1F0FF] mb-4">
            Stop Leaving Money on the Shelf
          </h2>

          <p className="text-[rgba(241,240,255,0.55)] text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Every second you spend manually checking prices is profit lost.
            Flip Engine X puts the data in your hands — instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="cta-btn cta-btn-green">
              Get Started Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[rgba(241,240,255,0.35)] font-semibold">
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00ff80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              No credit card
            </span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00ff80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Works on any phone
            </span>
            <span className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00ff80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              PWA — no app store
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
