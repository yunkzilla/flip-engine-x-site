"use client";

import { useState } from "react";

const teamFeatures = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Shared Workspace",
    desc: "Same inventory, batches, and listings for the whole crew.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00ff80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Plan Inheritance",
    desc: "Members automatically get the owner's plan features.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Secure Invites",
    desc: "Token-based links with 7-day expiry. One-click join.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
    title: "Individual Quotas",
    desc: "Each member has their own scan blocks. Never pooled.",
  },
];

const seatTable = [
  { plan: "Starter", included: "—", addon: "$10/mo each", color: "#00ff80", active: true },
  { plan: "Pro", included: "—", addon: "$25/mo each", color: "#8B5CF6", active: true },
  { plan: "Elite", included: "1", addon: "$35/mo each", color: "#22D3EE", active: true },
  { plan: "Enterprise", included: "5", addon: "$35/mo each", color: "#C4B5FD", active: true },
];

export default function TeamInfo() {
  const [activeTab, setActiveTab] = useState<"repricer" | "team">("repricer");
  const [teamExpanded, setTeamExpanded] = useState(false);

  return (
    <section className="parallax-section pt-0 pb-16 sm:pb-24 px-6">
      <div className="max-w-6xl mx-auto" data-animate>
        <div className="glass-card rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(139,92,246,0.15)" }}>
          {/* Header with tabs */}
          <div className="flex items-center justify-between p-5 sm:p-6" style={{ borderBottom: "1px solid rgba(139,92,246,0.1)" }}>
            <div className="font-pixel text-[9px] text-[#FDE047] glow-yellow tracking-widest">ADD-ONS & EXTRAS</div>
            <div className="flex gap-2">
              {([
                { key: "repricer" as const, label: "REPRICER", color: "#8B5CF6" },
                { key: "team" as const, label: "TEAMS", color: "#C4B5FD" },
              ]).map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="font-pixel text-[8px] px-3 sm:px-4 py-2 rounded-full transition-all"
                  style={{
                    background: activeTab === tab.key ? `${tab.color}20` : "rgba(255,255,255,0.04)",
                    border: `1px solid ${activeTab === tab.key ? `${tab.color}50` : "rgba(255,255,255,0.08)"}`,
                    color: activeTab === tab.key ? tab.color : "rgba(241,240,255,0.35)",
                    boxShadow: activeTab === tab.key ? `0 0 12px ${tab.color}15` : "none",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Repricer tab */}
          {activeTab === "repricer" && (
            <div className="p-5 sm:p-6" style={{ animation: "fadeInUp 0.3s ease forwards" }}>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.25)" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3v18h18" /><path d="m18.7 8-5.1 5.2-2.8-2.7L7 14.3" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-[#F1F0FF] text-base">Repricer</div>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-lg font-black text-[#8B5CF6]">$10</span>
                        <span className="text-xs text-[rgba(241,240,255,0.4)] font-semibold">/mo per 250 products</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[rgba(241,240,255,0.5)] leading-relaxed mb-4">
                    Automatically adjust your prices based on competition, sales rank, and buy box status. Set rules once and let the engine optimize your margins 24/7.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Pro+", "Buy Box Targeting", "Rule-Based", "Bulk Reprice"].map(tag => (
                      <span key={tag} className="font-pixel text-[7px] px-2.5 py-1 rounded-full" style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)", color: "#C4B5FD" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="sm:w-56 w-full rounded-xl p-4" style={{ background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.15)" }}>
                  <div className="font-pixel text-[8px] text-[rgba(241,240,255,0.35)] tracking-wider mb-3">INCLUDED WITH</div>
                  <div className="space-y-2">
                    {[
                      { plan: "Pro", desc: "Add-on ($10/mo)", color: "#00ff80" },
                      { plan: "Elite", desc: "1,000 products included", color: "#22D3EE" },
                      { plan: "Enterprise", desc: "2,500 products included", color: "#C4B5FD" },
                    ].map(p => (
                      <div key={p.plan} className="flex items-center justify-between">
                        <span className="font-bold text-xs" style={{ color: p.color }}>{p.plan}</span>
                        <span className="text-[10px] text-[rgba(241,240,255,0.4)] font-semibold">{p.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Team tab */}
          {activeTab === "team" && (
            <div className="p-5 sm:p-6" style={{ animation: "fadeInUp 0.3s ease forwards" }}>
              {/* Team header */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(196,181,253,0.1)", border: "1px solid rgba(196,181,253,0.25)" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-[#F1F0FF] text-base">Team Account</div>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-lg font-black text-[#C4B5FD]">From $10</span>
                        <span className="text-xs text-[rgba(241,240,255,0.4)] font-semibold">/mo per seat</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[rgba(241,240,255,0.5)] leading-relaxed mb-4">
                    Bring your sourcing crew under one account. Members inherit the owner&apos;s plan and share inventory, batches, and listings — each with their own scan quotas.
                  </p>
                </div>

                {/* Seat table compact */}
                <div className="sm:w-56 w-full rounded-xl overflow-hidden" style={{ border: "1px solid rgba(139,92,246,0.12)" }}>
                  <div className="grid grid-cols-3 gap-0 text-[8px] font-bold uppercase tracking-wider text-[rgba(241,240,255,0.3)] px-3 py-2" style={{ background: "rgba(139,92,246,0.08)" }}>
                    <span>Plan</span>
                    <span>Seats</span>
                    <span>Add-on</span>
                  </div>
                  {seatTable.map(row => (
                    <div key={row.plan} className="grid grid-cols-3 gap-0 text-xs px-3 py-2" style={{ borderTop: "1px solid rgba(139,92,246,0.06)", opacity: row.active ? 1 : 0.5 }}>
                      <span className="font-bold" style={{ color: row.color }}>{row.plan}</span>
                      <span className="text-[rgba(241,240,255,0.5)] font-semibold">{row.included}</span>
                      <span className="text-[rgba(241,240,255,0.45)] font-semibold text-[10px]">{row.addon}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 mt-4 mb-2">
                {teamFeatures.map(f => (
                  <div key={f.title} className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,92,246,0.12)" }}>
                    {f.icon}
                    <span className="text-xs font-bold text-[rgba(241,240,255,0.6)]">{f.title}</span>
                  </div>
                ))}
              </div>

              {/* Expand for details */}
              <button
                onClick={() => setTeamExpanded(!teamExpanded)}
                className="flex items-center gap-2 mt-4 text-xs font-bold transition-colors cursor-pointer"
                style={{ color: "rgba(196,181,253,0.7)" }}
              >
                <span>{teamExpanded ? "Hide details" : "How does this work?"}</span>
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ transform: teamExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Expanded details */}
              {teamExpanded && (
                <div className="mt-5 space-y-6" style={{ animation: "fadeInUp 0.3s ease forwards" }}>
                  {/* How it works */}
                  <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(139,92,246,0.08)" }}>
                    <div className="font-pixel text-[8px] text-[#FDE047] tracking-wider mb-3">HOW IT WORKS</div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                      {[
                        { step: "1", title: "Purchase", desc: "Get a plan with seats or add the Team add-on.", color: "#8B5CF6" },
                        { step: "2", title: "Invite", desc: "Send a secure invite link to your member's email.", color: "#22D3EE" },
                        { step: "3", title: "Join", desc: "Member clicks the link and joins instantly.", color: "#00ff80" },
                        { step: "4", title: "Source", desc: "Share everything. Keep individual scan quotas.", color: "#FDE047" },
                      ].map(s => (
                        <div key={s.step} className="text-center">
                          <div className="font-pixel text-sm mx-auto w-8 h-8 rounded-lg flex items-center justify-center mb-2" style={{ background: `${s.color}15`, border: `1px solid ${s.color}30`, color: s.color }}>{s.step}</div>
                          <div className="font-bold text-xs text-[#F1F0FF] mb-1">{s.title}</div>
                          <div className="text-[10px] text-[rgba(241,240,255,0.4)] leading-relaxed">{s.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features detail grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {teamFeatures.map(f => (
                      <div key={f.title} className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(139,92,246,0.08)" }}>
                        <div className="flex items-center gap-2.5 mb-1.5">
                          {f.icon}
                          <span className="font-bold text-xs text-[#F1F0FF]">{f.title}</span>
                        </div>
                        <p className="text-[11px] text-[rgba(241,240,255,0.4)] leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Roles */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(139,92,246,0.08)" }}>
                      <span className="font-pixel text-[7px] px-2 py-0.5 rounded-full" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.35)", color: "#C4B5FD" }}>OWNER</span>
                      <ul className="mt-2 space-y-1 text-[11px] text-[rgba(241,240,255,0.45)]">
                        <li>Invite & remove members</li>
                        <li>Manage team settings & invites</li>
                        <li>Full access to all shared data</li>
                      </ul>
                    </div>
                    <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(139,92,246,0.08)" }}>
                      <span className="font-pixel text-[7px] px-2 py-0.5 rounded-full" style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.3)", color: "#22D3EE" }}>MEMBER</span>
                      <ul className="mt-2 space-y-1 text-[11px] text-[rgba(241,240,255,0.45)]">
                        <li>Access shared inventory & batches</li>
                        <li>Owner&apos;s plan features included</li>
                        <li>Own scan quotas · leave anytime</li>
                      </ul>
                    </div>
                  </div>

                  {/* Note */}
                  <div className="rounded-xl p-3" style={{ background: "rgba(253,224,71,0.03)", border: "1px solid rgba(253,224,71,0.12)" }}>
                    <p className="text-[11px] text-[rgba(241,240,255,0.4)] leading-relaxed">
                      <span className="font-bold text-[#FDE047]">Note:</span> One team per user. Invites expire after 7 days. Cancelling the add-on stops new invites but members keep access through the billing period.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
