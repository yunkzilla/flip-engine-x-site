"use client";

import { useEffect, useRef, useState } from "react";

const apps = [
  { name: "Flip Engine X", time: 1.0, color: "#00ff80", glow: "rgba(0,255,128,0.4)", highlight: true },
  { name: "ScoutIQ", time: 2.8, color: "#8B5CF6", glow: "rgba(139,92,246,0.3)", highlight: false },
  { name: "ScoutLY", time: 3.5, color: "#22D3EE", glow: "rgba(34,211,238,0.3)", highlight: false },
];

const maxTime = 4;

export default function SpeedCompare() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="parallax-section py-16 sm:py-24 px-6">
      <div className="max-w-3xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-12" data-animate>
          <div className="font-pixel text-[9px] text-[#00ff80] glow-green tracking-widest mb-4">SPEED</div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F1F0FF] mb-4">
            Average Scan <span className="text-[#00ff80]">Time</span>
          </h2>
          <p className="max-w-lg mx-auto text-[rgba(241,240,255,0.55)] text-lg">
            From barcode to full product data — Flip Engine X delivers results faster.
          </p>
        </div>

        <div className="glass-card p-8 sm:p-10 rounded-2xl" data-animate>
          <div className="space-y-6">
            {apps.map((app) => {
              const pct = (app.time / maxTime) * 100;
              return (
                <div key={app.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-bold ${app.highlight ? "text-[#F1F0FF]" : "text-[rgba(241,240,255,0.5)]"}`}>
                      {app.name}
                      {app.highlight && (
                        <span className="ml-2 font-pixel text-[7px] px-2 py-0.5 rounded-full"
                          style={{ background: "rgba(0,255,128,0.12)", border: "1px solid rgba(0,255,128,0.3)", color: "#00ff80" }}
                        >
                          FASTEST
                        </span>
                      )}
                    </span>
                    <span className="font-pixel text-[10px]" style={{ color: app.color }}>
                      {app.time.toFixed(1)}s
                    </span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: visible ? `${pct}%` : "0%",
                        background: `linear-gradient(90deg, ${app.color}40, ${app.color})`,
                        boxShadow: `0 0 12px ${app.glow}`,
                        transition: "width 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                        transitionDelay: app.highlight ? "0s" : "0.3s",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Disclaimer */}
          <p className="mt-8 text-[10px] text-[rgba(241,240,255,0.25)] leading-relaxed text-center">
            * Average scan times based on typical usage conditions. Actual performance may vary depending on
            cellular signal strength, Wi-Fi connection quality, device hardware, and server response times.
            Comparison data is approximate and based on internal testing.
          </p>
        </div>
      </div>
    </section>
  );
}
