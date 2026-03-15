"use client";

import { useState } from "react";

const teamFeatures = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Shared Workspace",
    desc: "Team members share the same inventory, batches, and listings. Everyone works from one source of truth.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Plan Inheritance",
    desc: "Members automatically get the team owner's plan features. No separate subscriptions needed.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Token-Based Invites",
    desc: "Invite members via secure, time-limited links (7-day expiry). Members join with one click.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
    title: "Individual Scan Quotas",
    desc: "Each member has their own scan blocks and cooldowns. Scans are never pooled or shared.",
  },
];

const seatTable = [
  { plan: "Starter", included: "—", addon: "—", color: "rgba(241,240,255,0.4)" },
  { plan: "Pro", included: "—", addon: "—", color: "rgba(241,240,255,0.4)" },
  { plan: "Elite", included: "1", addon: "+1 each ($25/mo)", color: "#22D3EE" },
  { plan: "Enterprise", included: "5", addon: "+1 each ($25/mo)", color: "#C4B5FD" },
];

export default function TeamInfo() {
  const [open, setOpen] = useState(false);

  return (
    <section className="parallax-section py-8 sm:py-12 px-6">
      <div className="max-w-4xl mx-auto" data-animate>
        <button
          onClick={() => setOpen(!open)}
          className="w-full glass-card rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 hover:border-[rgba(139,92,246,0.35)] cursor-pointer"
          style={{ border: "1px solid rgba(139,92,246,0.15)" }}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(196,181,253,0.1)", border: "1px solid rgba(196,181,253,0.25)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <div className="font-pixel text-[10px] text-[#C4B5FD] tracking-wider">TEAM SYSTEM</div>
                <div className="text-sm text-[rgba(241,240,255,0.55)] font-semibold mt-1">How teams work in Flip Engine X</div>
              </div>
            </div>
            <svg
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(241,240,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease", flexShrink: 0 }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </button>

        {open && (
          <div className="glass-card rounded-2xl mt-2 p-6 sm:p-8 space-y-8" style={{ animation: "fadeInUp 0.4s ease forwards", border: "1px solid rgba(139,92,246,0.15)" }}>
            {/* Overview */}
            <div>
              <p className="text-sm text-[rgba(241,240,255,0.55)] leading-relaxed">
                The Team System lets you bring your sourcing crew under one account. The team owner purchases a plan and adds seats — members inherit the owner&apos;s plan features and share the same inventory, batches, and listings.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teamFeatures.map(f => (
                <div key={f.title} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,92,246,0.1)" }}>
                  <div className="flex items-center gap-3 mb-2">
                    {f.icon}
                    <span className="font-bold text-sm text-[#F1F0FF]">{f.title}</span>
                  </div>
                  <p className="text-xs text-[rgba(241,240,255,0.45)] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* How it works steps */}
            <div>
              <div className="font-pixel text-[9px] text-[#FDE047] tracking-wider mb-4">HOW IT WORKS</div>
              <div className="space-y-3">
                {[
                  { step: "1", text: "Owner purchases a plan with team seats (Elite or Enterprise) or adds the Team Account add-on ($25/mo per seat)." },
                  { step: "2", text: "Owner navigates to the Team page and sends an invite link to a member's email." },
                  { step: "3", text: "Member clicks the invite link, signs in, and joins the team — inheriting the owner's plan features instantly." },
                  { step: "4", text: "The team shares inventory, batches, and listings while each member keeps their own scan quotas." },
                ].map(s => (
                  <div key={s.step} className="flex gap-3 items-start">
                    <div className="font-pixel text-[10px] w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", color: "#C4B5FD" }}>{s.step}</div>
                    <p className="text-sm text-[rgba(241,240,255,0.55)] leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Seat table */}
            <div>
              <div className="font-pixel text-[9px] text-[#22D3EE] tracking-wider mb-4">SEATS BY PLAN</div>
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(139,92,246,0.12)" }}>
                <div className="grid grid-cols-3 gap-0 text-[10px] font-bold uppercase tracking-wider text-[rgba(241,240,255,0.35)] px-4 py-3" style={{ background: "rgba(139,92,246,0.08)" }}>
                  <span>Plan</span>
                  <span>Included Seats</span>
                  <span>Add-on Seats</span>
                </div>
                {seatTable.map(row => (
                  <div key={row.plan} className="grid grid-cols-3 gap-0 text-sm px-4 py-3" style={{ borderTop: "1px solid rgba(139,92,246,0.08)" }}>
                    <span className="font-bold" style={{ color: row.color }}>{row.plan}</span>
                    <span className="text-[rgba(241,240,255,0.5)] font-semibold">{row.included}</span>
                    <span className="text-[rgba(241,240,255,0.5)] font-semibold text-xs">{row.addon}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Roles */}
            <div>
              <div className="font-pixel text-[9px] text-[#00ff80] tracking-wider mb-4">ROLES & PERMISSIONS</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,92,246,0.1)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-pixel text-[8px] px-2 py-0.5 rounded-full" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.35)", color: "#C4B5FD" }}>OWNER</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[rgba(241,240,255,0.5)]">
                    <li>Invite & remove members</li>
                    <li>Manage team settings</li>
                    <li>Cancel pending invites</li>
                    <li>Full access to shared data</li>
                  </ul>
                </div>
                <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(139,92,246,0.1)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-pixel text-[8px] px-2 py-0.5 rounded-full" style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.3)", color: "#22D3EE" }}>MEMBER</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[rgba(241,240,255,0.5)]">
                    <li>Access shared inventory & batches</li>
                    <li>Use owner&apos;s plan features</li>
                    <li>Own individual scan quotas</li>
                    <li>Leave team at any time</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="rounded-xl p-4" style={{ background: "rgba(253,224,71,0.04)", border: "1px solid rgba(253,224,71,0.15)" }}>
              <p className="text-xs text-[rgba(241,240,255,0.45)] leading-relaxed">
                <span className="font-bold text-[#FDE047]">Note:</span> A user can only belong to one team at a time. Invite links expire after 7 days. Cancelling the team add-on stops new invites but existing members retain access until the billing period ends.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
