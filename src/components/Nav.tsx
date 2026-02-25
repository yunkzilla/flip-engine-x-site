"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(6,5,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(139,92,246,0.12)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-pixel text-[10px] text-[#FDE047] glow-yellow tracking-wider">
          FLIP ENGINE X
        </a>
        <div className="hidden sm:flex items-center gap-8 text-sm font-semibold">
          <a href="#features" className="text-[rgba(241,240,255,0.55)] hover:text-[#C4B5FD] transition-colors">Features</a>
          <a href="#how-it-works" className="text-[rgba(241,240,255,0.55)] hover:text-[#C4B5FD] transition-colors">How It Works</a>
          <a href="#pricing" className="text-[rgba(241,240,255,0.55)] hover:text-[#C4B5FD] transition-colors">Pricing</a>
        </div>
        <a href="#pricing" className="cta-btn cta-btn-primary !py-2 !px-5 !text-xs">
          Get Started
        </a>
      </div>
    </nav>
  );
}
