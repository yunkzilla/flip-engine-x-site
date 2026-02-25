/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

/* ── Real theme tokens (from lib/uiTheme.ts) ── */
const t = {
  bgTop: "#06050F",
  bgMid: "#0C0A1A",
  card: "#1E1B2E",
  cardBorder: "rgba(255,255,255,0.12)",
  softSurface: "rgba(139,92,246,0.16)",
  primary: "#8B5CF6",
  primarySoft: "rgba(139,92,246,0.15)",
  primaryBorder: "rgba(139,92,246,0.30)",
  text: "#F1F0FF",
  textSoft: "rgba(241,240,255,0.60)",
  textFaint: "rgba(241,240,255,0.38)",
  goodBg: "rgba(16,185,129,0.12)",
  goodBorder: "rgba(16,185,129,0.30)",
  goodText: "rgba(52,211,153,0.95)",
  dangerBg: "rgba(239,68,68,0.12)",
  dangerBorder: "rgba(239,68,68,0.28)",
  dangerText: "rgba(252,165,165,0.95)",
  cyberBg: "rgba(234,179,8,0.07)",
  cyberBorder: "rgba(234,179,8,0.30)",
  cyberText: "#ca8a04",
  cyberBright: "#fde047",
  rLg: 26,
  rMd: 18,
  rPill: 999,
  shadowCard: "0 8px 32px rgba(0,0,0,0.22)",
  shadowSoft: "0 4px 16px rgba(0,0,0,0.14)",
};

const PHONE_HEIGHT = 720;

/* ── Shared phone chrome ── */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[340px] mx-auto">
      <div
        className="rounded-[32px] border border-[rgba(139,92,246,0.25)] bg-[#06050F] p-3 shadow-2xl overflow-hidden"
        style={{ boxShadow: "0 0 60px rgba(139,92,246,0.15), 0 25px 50px rgba(0,0,0,0.5)", height: PHONE_HEIGHT }}
      >
        <div className="flex items-center justify-between px-4 py-2 text-[10px] text-[rgba(241,240,255,0.4)] font-semibold">
          <span>9:41</span>
          <div className="w-20 h-5 rounded-full bg-[#111] mx-auto" />
          <span>100%</span>
        </div>
        <div className="rounded-[20px] overflow-hidden" style={{ background: t.bgMid }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ── Shared book cover thumbnail ── */
function BookCover({ isbn10, letter, w = 32, h = 44 }: { isbn10: string; letter: string; w?: number; h?: number }) {
  return (
    <div
      style={{
        width: w, height: h, flexShrink: 0, borderRadius: 4,
        background: t.softSurface, border: `1px solid ${t.primaryBorder}`,
        overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "3px 4px 14px rgba(0,0,0,0.5), inset -2px 0 6px rgba(0,0,0,0.3)",
        position: "relative",
      }}
    >
      <span style={{ fontSize: Math.round(h * 0.32), color: t.textFaint, fontWeight: 900, position: "absolute", userSelect: "none" }}>{letter}</span>
      <img
        src={`https://images-na.ssl-images-amazon.com/images/P/${isbn10}.01._SL160_.jpg`}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative", zIndex: 1 }}
        onError={e => { e.currentTarget.style.display = "none"; }}
      />
    </div>
  );
}

/* ── Shared card wrapper ── */
function Card({ children, className = "mx-2.5 mt-2" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={className}
      style={{
        background: t.card, borderRadius: t.rLg, padding: 14,
        boxShadow: t.shadowCard, border: `1px solid ${t.cardBorder}`,
      }}
    >
      {children}
    </div>
  );
}

/* ════════════════════════════════════════
   1. SCANNER MOCK
   ════════════════════════════════════════ */
function ScannerMock() {
  return (
    <PhoneFrame>
      {/* Header block */}
      <Card className="mx-2.5 mt-2.5">
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ flex: 1, textAlign: "center", padding: "6px 16px", borderRadius: t.rPill, fontWeight: 1000, fontSize: 11, background: "rgba(255,255,255,0.04)", border: `1px solid ${t.cardBorder}`, color: t.textSoft }}>
            Scanned
          </div>
          <div className="ungated-laser" style={{ flex: 1, textAlign: "center", padding: "6px 16px", borderRadius: t.rPill, fontWeight: 1000, fontSize: 11, background: t.goodBg, border: `1px solid ${t.goodBorder}`, color: t.goodText }}>
            BUY
          </div>
        </div>
        <div style={{ marginTop: 10, background: t.softSurface, borderRadius: t.rPill, padding: 4, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 4, border: `1px solid ${t.cyberBorder}`, boxShadow: t.shadowSoft }}>
          {["Camera", "Scanner", "Title Search"].map((label, i) => (
            <div key={label} style={{ padding: "8px 8px", borderRadius: t.rPill, fontWeight: 900, fontSize: 10, textAlign: "center", background: i === 0 ? t.card : "transparent", boxShadow: i === 0 ? t.shadowSoft : "none", color: i === 0 ? t.text : t.textSoft }}>{label}</div>
          ))}
        </div>
      </Card>

      {/* Camera card */}
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span className="font-pixel" style={{ fontSize: 9, color: t.cyberBright }}>SCAN</span>
            <span style={{ fontSize: 9, color: "rgba(74,222,128,0.85)", fontWeight: 700 }}>● Live</span>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            <span style={{ padding: "5px 8px", borderRadius: t.rPill, border: `1px solid ${t.primaryBorder}`, background: t.primarySoft, color: "#7C3AED", fontWeight: 900, fontSize: 8 }}>Barcode</span>
            <span style={{ padding: "5px 8px", borderRadius: t.rPill, border: `1px solid ${t.cardBorder}`, background: t.card, color: t.textSoft, fontWeight: 900, fontSize: 8 }}>ISBN</span>
          </div>
        </div>
        <div className="relative mt-2 overflow-hidden" style={{ borderRadius: t.rLg, background: "#0B0F1A", border: `1px solid ${t.cardBorder}`, height: 120 }}>
          <div className="absolute inset-x-0 h-[2px] top-1/2 opacity-70" style={{ background: "linear-gradient(90deg, transparent, #8B5CF6, transparent)", boxShadow: "0 0 12px rgba(139,92,246,0.8)" }} />
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#8B5CF6] rounded-tl-sm opacity-60" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#8B5CF6] rounded-tr-sm opacity-60" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#8B5CF6] rounded-bl-sm opacity-60" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#8B5CF6] rounded-br-sm opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex gap-[2px] opacity-25">
              {[3,1,2,1,3,2,1,3,1,2,3,1,2,1,3,2,1,1,3,2,1,3,1,2].map((w, i) => (
                <div key={i} className="bg-white rounded-sm" style={{ width: w, height: 32 }} />
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          {["Flash Off", "Close"].map(label => (
            <button key={label} style={{ flex: 1, padding: "8px 10px", borderRadius: t.rPill, border: `1px solid ${t.cardBorder}`, background: t.softSurface, fontWeight: 900, fontSize: 9, color: t.text }}>{label}</button>
          ))}
        </div>
      </Card>

      {/* Product info */}
      <Card>
        <div style={{ display: "flex", gap: 10 }}>
          <BookCover isbn10="0135957052" letter="P" w={38} h={52} />
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontSize: 9, color: t.textFaint, fontWeight: 700 }}>978-0134685991</div>
            <div style={{ fontSize: 10, fontWeight: 900, color: t.text, lineHeight: 1.35, marginTop: 2 }}>The Pragmatic Programmer: Your Journey to Mastery</div>
            <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
              <span style={{ fontSize: 8, color: t.textFaint, fontWeight: 800 }}>Rank #4,231</span>
              <span style={{ fontSize: 8, color: t.textFaint, fontWeight: 800 }}>47 sold/mo</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Details + KEEP */}
      <Card>
        <span className="font-pixel" style={{ fontSize: 9, color: t.cyberBright }}>DETAILS</span>
        <div style={{ marginTop: 8, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          <div style={{ display: "grid", gap: 4 }}>
            <div style={{ fontSize: 9, color: t.textSoft, fontWeight: 900 }}>Buy Cost</div>
            <div style={{ padding: "8px 10px", borderRadius: t.rMd, border: `1px solid ${t.cardBorder}`, background: t.card, fontSize: 12, fontWeight: 900, color: "#22D3EE" }}>$3.50</div>
          </div>
          <div style={{ display: "grid", gap: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 9, color: t.textSoft, fontWeight: 900 }}>Sale Price</span>
              <span style={{ fontSize: 8, fontWeight: 900, color: t.goodText, background: t.goodBg, border: `1px solid ${t.goodBorder}`, borderRadius: t.rPill, padding: "1px 5px" }}>+$14.27</span>
            </div>
            <div style={{ padding: "8px 10px", borderRadius: t.rMd, border: `1px solid ${t.cardBorder}`, background: t.card, fontSize: 12, fontWeight: 900, color: "#C4B5FD" }}>$24.99</div>
          </div>
          <div style={{ display: "grid", gap: 4 }}>
            <div style={{ fontSize: 9, color: t.textSoft, fontWeight: 900 }}>Condition</div>
            <div style={{ display: "flex", gap: 3 }}>
              {["N","L","V","G","A"].map(c => (
                <div key={c} style={{ flex: 1, padding: "6px 0", borderRadius: 8, textAlign: "center", border: c === "V" ? "none" : `1px solid ${t.cardBorder}`, background: c === "V" ? t.primary : t.card, color: c === "V" ? "#fff" : t.textFaint, fontWeight: 900, fontSize: 10 }}>{c}</div>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gap: 4 }}>
            <div style={{ fontSize: 9, color: t.textSoft, fontWeight: 900 }}>Qty</div>
            <div style={{ padding: "8px 10px", borderRadius: t.rMd, border: `1px solid ${t.cardBorder}`, background: t.card, fontSize: 12, fontWeight: 900, color: t.text }}>1</div>
          </div>
        </div>
        <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" as const }}>
          {[["Fees", "$7.22"], ["ROI", "408%"]].map(([k, v]) => (
            <div key={k} style={{ padding: "6px 10px", borderRadius: t.rPill, border: `1px solid ${t.cardBorder}`, background: t.softSurface, display: "flex", gap: 6, alignItems: "center", fontWeight: 900 }}>
              <span style={{ color: t.textSoft, fontSize: 9 }}>{k}</span>
              <span style={{ color: t.text, fontSize: 9 }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 10, display: "flex", gap: 8, alignItems: "center" }}>
          <button style={{ width: 100, padding: "10px 12px", borderRadius: t.rPill, border: "1px solid rgba(0,255,128,0.70)", background: "linear-gradient(135deg, rgba(0,255,128,0.18) 0%, rgba(0,200,100,0.12) 100%)", color: "#00ff80", fontWeight: 1000, fontSize: 11, boxShadow: "0 0 20px rgba(0,255,128,0.50), 0 0 6px rgba(0,255,128,0.30), inset 0 0 14px rgba(0,255,128,0.08)", textShadow: "0 0 14px rgba(0,255,128,0.95)" }}>KEEP</button>
          <button style={{ padding: "6px 10px", borderRadius: t.rPill, fontWeight: 900, fontSize: 9, border: "1px solid rgba(52,211,153,0.50)", background: "rgba(16,185,129,0.14)", color: t.goodText, whiteSpace: "nowrap" as const }}>AutoKeep ON</button>
          <div style={{ flex: 1, padding: "6px 8px", borderRadius: t.rMd, background: t.primarySoft, border: `1px solid ${t.primaryBorder}`, color: "#7C3AED", fontWeight: 900, fontSize: 8, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>Kept → Batch 1</div>
        </div>
      </Card>
      <div style={{ height: 12 }} />
    </PhoneFrame>
  );
}

/* ════════════════════════════════════════
   2. BATCH MOCK
   ════════════════════════════════════════ */
const batchItems = [
  { id: "1", barcode: "978-0135957059", title: "The Pragmatic Programmer", isbn10: "0135957052", letter: "P", condition: "Very Good", qty: 1, buyCost: 3.50, salePrice: 24.99, profit: 14.27, roi: 408 },
  { id: "2", barcode: "978-0735211292", title: "Atomic Habits", isbn10: "0735211299", letter: "A", condition: "Good", qty: 2, buyCost: 2.00, salePrice: 16.50, profit: 8.70, roi: 435 },
  { id: "3", barcode: "978-0441013593", title: "Dune", isbn10: "0441013597", letter: "D", condition: "Like New", qty: 1, buyCost: 1.50, salePrice: 12.99, profit: 5.69, roi: 379 },
];

function BatchMock() {
  return (
    <PhoneFrame>
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 14, color: t.textSoft }}>‹</span>
          <span style={{ fontSize: 12, fontWeight: 800, color: t.textSoft }}>Home</span>
        </div>
        <span style={{ fontSize: 12, fontWeight: 800, color: t.textSoft }}>Batch</span>
      </div>

      {/* Title row */}
      <div style={{ padding: "0 14px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 8 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 900, color: t.text }}>Batch</div>
          <div style={{ fontSize: 10, color: t.textSoft, fontWeight: 700, marginTop: 2 }}>Saved items ready to list.</div>
        </div>
        <span style={{ padding: "7px 12px", borderRadius: t.rPill, border: `1px solid ${t.primaryBorder}`, background: t.primarySoft, color: t.primary, fontWeight: 900, fontSize: 10, whiteSpace: "nowrap" as const, flexShrink: 0 }}>+ Create Batch</span>
      </div>

      {/* Summary cards (real: ui.grid2 + ui.infoCard) */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, padding: "0 10px", marginTop: 10 }}>
        <div style={{ background: t.card, borderRadius: t.rLg, padding: 12, border: `1px solid ${t.cardBorder}`, borderBottom: `2px solid ${t.cyberBorder}`, boxShadow: t.shadowSoft }}>
          <div style={{ fontSize: 9, color: t.textSoft, fontWeight: 900 }}>Items</div>
          <div style={{ marginTop: 4, fontSize: 13, fontWeight: 900, color: t.text }}>4</div>
        </div>
        <div style={{ background: t.card, borderRadius: t.rLg, padding: 12, border: `1px solid ${t.cardBorder}`, borderBottom: `2px solid ${t.cyberBorder}`, boxShadow: t.shadowSoft }}>
          <div style={{ fontSize: 9, color: t.textSoft, fontWeight: 900 }}>Total Profit</div>
          <div style={{ marginTop: 4, fontSize: 13, fontWeight: 900, color: "#00ff80" }}>$28.66</div>
        </div>
      </div>

      {/* Batch items */}
      <div style={{ padding: "8px 8px 12px", display: "flex", flexDirection: "column" as const, gap: 8, marginTop: 2 }}>
        {batchItems.map(it => (
          <Card key={it.id} className="">
            {/* Header: book cover + title + profit pill */}
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <BookCover isbn10={it.isbn10} letter={it.letter} w={32} h={44} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 1000, fontSize: 11, color: t.text, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const }}>{it.title}</div>
                <div style={{ marginTop: 3, color: t.textSoft, fontSize: 9, fontWeight: 800 }}>{it.condition} &middot; Qty {it.qty}</div>
              </div>
              <div style={{ padding: "5px 9px", borderRadius: t.rPill, fontWeight: 900, fontSize: 10, border: `1px solid ${it.profit >= 5 ? t.goodBorder : t.cardBorder}`, background: it.profit >= 5 ? t.goodBg : t.softSurface, color: it.profit >= 5 ? t.goodText : t.textSoft, whiteSpace: "nowrap" as const, flexShrink: 0 }}>${it.profit.toFixed(2)}</div>
            </div>

            {/* KV grid (real: ui.kvGrid + ui.kv) */}
            <div style={{ marginTop: 8, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
              {[["Buy", `$${it.buyCost.toFixed(2)}`], ["Sale", `$${it.salePrice.toFixed(2)}`], ["ROI", `${it.roi}%`]].map(([k, v]) => (
                <div key={k} style={{ padding: 8, borderRadius: t.rMd, border: `1px solid ${t.cardBorder}`, background: t.softSurface }}>
                  <div style={{ fontSize: 8, color: t.textSoft, fontWeight: 900 }}>{k}</div>
                  <div style={{ marginTop: 3, fontSize: 10, fontWeight: 900, color: t.text }}>{v}</div>
                </div>
              ))}
            </div>

            {/* Remove button */}
            <div style={{ marginTop: 8 }}>
              <span style={{ padding: "5px 10px", borderRadius: t.rPill, border: `1px solid ${t.cardBorder}`, background: t.softSurface, fontWeight: 900, fontSize: 9, color: t.text }}>Remove</span>
            </div>
          </Card>
        ))}
      </div>
    </PhoneFrame>
  );
}

/* ════════════════════════════════════════
   3. INVENTORY MOCK
   ════════════════════════════════════════ */
const inventoryItems = [
  { title: "The Pragmatic Programmer", asin: "B07VRS84D1", isbn10: "0135957052", sku: "FEX-001", stock: 3, price: 24.99, cost: 3.50, fees: 7.22, rank: 4231, letter: "P" },
  { title: "Clean Code: A Handbook of Agile Software...", asin: "B001GSTOAM", isbn10: "0132350882", sku: "FEX-002", stock: 1, price: 19.50, cost: 2.00, fees: 5.80, rank: 2847, letter: "C" },
  { title: "Design Patterns: Elements of Reusable...", asin: "B000SEIBB8", isbn10: "0201633612", sku: "FEX-003", stock: 2, price: 31.00, cost: 4.25, fees: 8.10, rank: 8102, letter: "D" },
  { title: "Refactoring: Improving the Design of...", asin: "B07LCM8RG2", isbn10: "0134757599", sku: "FEX-004", stock: 0, price: 22.75, cost: 1.50, fees: 6.40, rank: 5480, letter: "R", sold: true },
  { title: "Introduction to Algorithms", asin: "B08FH8N996", isbn10: "026204630X", sku: "FEX-005", stock: 1, price: 42.00, cost: 5.00, fees: 10.30, rank: 1203, letter: "I" },
];

function InventoryMock() {
  return (
    <PhoneFrame>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 14, color: t.textSoft }}>‹</span>
          <span style={{ fontSize: 12, fontWeight: 800, color: t.textSoft }}>Home</span>
        </div>
        <span style={{ fontSize: 12, fontWeight: 800, color: t.textSoft }}>Inventory</span>
      </div>

      <div className="px-4">
        <h2 style={{ fontSize: 18, fontWeight: 900, color: t.text, margin: 0 }}>Inventory</h2>
        <div style={{ fontSize: 10, color: t.textFaint, fontWeight: 700, marginTop: 2 }}>Synced from Amazon &middot; 7 items</div>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 6, padding: "0 12px", marginTop: 10 }}>
        {[
          { val: "7", label: "Items", color: t.text },
          { val: "$183", label: "Value", color: "#22D3EE" },
          { val: "$89", label: "Profit", color: "#00ff80" },
        ].map(s => (
          <div key={s.label} style={{ flex: 1, borderRadius: t.rLg, background: t.card, border: `1px solid ${t.cardBorder}`, boxShadow: t.shadowCard, padding: "8px 6px", textAlign: "center" }}>
            <div style={{ fontSize: 18, fontWeight: 1000, color: s.color, letterSpacing: -0.4 }}>{s.val}</div>
            <div style={{ marginTop: 2, fontSize: 8, fontWeight: 800, color: t.textFaint, textTransform: "uppercase" as const, letterSpacing: 0.5 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div style={{ margin: "10px 12px 0", background: t.softSurface, borderRadius: t.rPill, padding: 4, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 3, border: `1px solid ${t.cyberBorder}`, boxShadow: t.shadowSoft }}>
        {["All", "In Stock", "Zero", "Sold"].map((label, i) => (
          <div key={label} style={{ padding: "6px 4px", borderRadius: t.rPill, fontWeight: 900, fontSize: 9, textAlign: "center", background: i === 0 ? t.card : "transparent", boxShadow: i === 0 ? t.shadowSoft : "none", color: i === 0 ? t.text : t.textSoft }}>{label}</div>
        ))}
      </div>

      {/* Items */}
      <div style={{ padding: "8px 8px 12px", display: "flex", flexDirection: "column" as const, gap: 8 }}>
        {inventoryItems.map(item => {
          const isSold = (item as typeof item & { sold?: boolean }).sold === true;
          const net = item.price - item.cost - item.fees;
          return (
            <div key={item.sku} style={{ background: t.card, borderRadius: t.rLg, padding: 12, boxShadow: t.shadowCard, border: `1px solid ${t.cardBorder}`, position: "relative", overflow: "hidden" }}>
              {isSold && (
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none", zIndex: 2 }}>
                  <span className="font-pixel" style={{ display: "block", fontSize: 14, letterSpacing: 4, color: "rgba(0,255,65,0.7)", border: "2px solid rgba(0,255,65,0.5)", borderRadius: 2, padding: "5px 12px", whiteSpace: "nowrap" as const, textShadow: "0 0 6px rgba(0,255,65,0.4)", boxShadow: "0 0 8px rgba(0,255,65,0.2), inset 0 0 8px rgba(0,255,65,0.04)", opacity: 0.7 }}>SOLD</span>
                </div>
              )}
              <div style={isSold ? { opacity: 0.28 } : undefined}>
                <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <BookCover isbn10={item.isbn10} letter={item.letter} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 900, fontSize: 11, lineHeight: 1.35, color: t.text, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const }}>{item.title}</div>
                    <div style={{ marginTop: 2, fontSize: 9, color: t.textFaint, fontWeight: 700 }}>ASIN: {item.asin}</div>
                  </div>
                  <span style={{ padding: "3px 7px", borderRadius: t.rPill, fontSize: 9, fontWeight: 900, background: t.cyberBg, border: `1px solid ${t.cyberBorder}`, color: t.cyberBright, whiteSpace: "nowrap" as const, flexShrink: 0 }}>{item.stock} units</span>
                </div>
                <div style={{ display: "flex", gap: 6, alignItems: "center", marginTop: 6 }}>
                  <span style={{ fontSize: 9, color: t.textFaint, fontWeight: 800 }}>BSR Rank</span>
                  <span style={{ fontSize: 10, color: t.cyberText, fontWeight: 900 }}>#{item.rank.toLocaleString()}</span>
                </div>
                <div style={{ marginTop: 8, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, padding: 8, borderRadius: t.rMd, background: t.softSurface, border: `1px solid ${t.cardBorder}` }}>
                  {[
                    { label: "Cost", value: `-$${item.cost.toFixed(2)}`, color: "#C4B5FD" },
                    { label: "Fees", value: `-$${item.fees.toFixed(2)}`, color: t.textSoft },
                    { label: "Net", value: `$${net.toFixed(2)}`, color: net >= 5 ? t.goodText : net >= 0 ? t.cyberBright : t.dangerText },
                  ].map(c => (
                    <div key={c.label} style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 8, color: t.textFaint, fontWeight: 900, textTransform: "uppercase" as const, letterSpacing: 0.3 }}>{c.label}</div>
                      <div style={{ fontSize: 10, fontWeight: 900, color: c.color, marginTop: 2 }}>{c.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </PhoneFrame>
  );
}

/* ════════════════════════════════════════
   4. SETTINGS/PARAMETERS MOCK
   ════════════════════════════════════════ */
function SettingsMock() {
  return (
    <PhoneFrame>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 14, color: t.primary, fontWeight: 900 }}>‹</span>
          <span style={{ fontSize: 12, fontWeight: 900, color: t.primary }}>Home</span>
        </div>
        <span style={{ fontSize: 12, fontWeight: 800, color: t.textSoft }}>Settings</span>
      </div>

      <div className="px-4">
        <div style={{ fontSize: 18, fontWeight: 900, color: t.text }}>Settings</div>
        <div style={{ fontSize: 10, color: t.textSoft, fontWeight: 700, marginTop: 2 }}>Tune profit rules, fees, and audio.</div>
      </div>

      {/* AutoKeep card */}
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <span className="font-pixel" style={{ fontSize: 9, color: t.cyberBright }}>AUTOKEEP</span>
          <span style={{ padding: "5px 9px", borderRadius: t.rPill, border: `1px solid ${t.cardBorder}`, background: t.softSurface, color: t.textSoft, fontWeight: 900, fontSize: 9 }}>ON</span>
        </div>
        <div style={{ marginTop: 8, display: "flex", gap: 6 }}>
          <div style={{ padding: "7px 10px", borderRadius: t.rPill, border: `1px solid ${t.primaryBorder}`, background: t.primarySoft, color: "#C4B5FD", fontWeight: 900, fontSize: 10 }}>On</div>
          <div style={{ padding: "7px 10px", borderRadius: t.rPill, border: `1px solid ${t.cardBorder}`, background: t.card, color: t.textSoft, fontWeight: 900, fontSize: 10 }}>Off</div>
        </div>
        <div style={{ marginTop: 6, color: t.textSoft, fontSize: 9, fontWeight: 700 }}>If ON, profitable scans are saved automatically.</div>
      </Card>

      {/* Fees card */}
      <Card>
        <span className="font-pixel" style={{ fontSize: 9, color: t.cyberBright }}>FEES</span>
        <div style={{ marginTop: 8, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            { label: "Amazon Fee (%)", value: "15" },
            { label: "Closing ($)", value: "1.80" },
            { label: "FBA ($)", value: "3.68" },
            { label: "Storage 6 mo ($)", value: "0.31" },
            { label: "Inbound Ship ($)", value: "0.35" },
          ].map(f => (
            <div key={f.label} style={{ display: "grid", gap: 4 }}>
              <div style={{ fontSize: 9, color: t.textSoft, fontWeight: 900 }}>{f.label}</div>
              <div style={{ padding: "8px 10px", borderRadius: t.rMd, border: `1px solid ${t.cardBorder}`, background: t.card, fontSize: 12, fontWeight: 900, color: "#C4B5FD" }}>{f.value}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Sale Price Mode card */}
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <span className="font-pixel" style={{ fontSize: 9, color: t.cyberBright }}>SALE PRICE</span>
          <span style={{ padding: "5px 9px", borderRadius: t.rPill, border: `1px solid ${t.cardBorder}`, background: t.softSurface, color: t.textSoft, fontWeight: 900, fontSize: 9 }}>ENGINE X</span>
        </div>
        <div style={{ marginTop: 8, display: "flex", gap: 6 }}>
          <div style={{ padding: "7px 10px", borderRadius: t.rPill, border: `1px solid ${t.primaryBorder}`, background: t.primarySoft, color: "#C4B5FD", fontWeight: 900, fontSize: 10 }}>Engine X</div>
          <div style={{ padding: "7px 10px", borderRadius: t.rPill, border: `1px solid ${t.cardBorder}`, background: t.card, color: t.textSoft, fontWeight: 900, fontSize: 10 }}>Match Buy Box</div>
        </div>
        <div style={{ marginTop: 6, color: t.textSoft, fontSize: 9, fontWeight: 700, lineHeight: 1.4 }}>Engine X analyzes real-time market competition and sales velocity to automatically set the most profitable price.</div>
      </Card>

      {/* Engine X Parameters card */}
      <Card>
        <span className="font-pixel" style={{ fontSize: 9, color: t.cyberBright }}>ENGINE X PARAMETERS</span>
        <div style={{ marginTop: 6, color: t.textSoft, fontSize: 9, fontWeight: 700 }}>Control how aggressively Engine X prices each item.</div>
        <div style={{ marginTop: 8, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            { label: "Fast Rank Ceiling", value: "125,000" },
            { label: "Slow Rank Floor", value: "900,000" },
            { label: "Min Price ($)", value: "0" },
            { label: "Max Price ($)", value: "0" },
            { label: "No-FBA Markup (%)", value: "20" },
          ].map(f => (
            <div key={f.label} style={{ display: "grid", gap: 4 }}>
              <div style={{ fontSize: 9, color: t.textSoft, fontWeight: 900 }}>{f.label}</div>
              <div style={{ padding: "8px 10px", borderRadius: t.rMd, border: `1px solid ${t.cardBorder}`, background: t.card, fontSize: 12, fontWeight: 900, color: "#C4B5FD" }}>{f.value}</div>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ height: 12 }} />
    </PhoneFrame>
  );
}

/* ════════════════════════════════════════
   SCREEN DEFINITIONS
   ════════════════════════════════════════ */
type ScreenKey = "scanner" | "batch" | "inventory" | "settings";

const screens: { key: ScreenKey; label: string; color: string; glow: string }[] = [
  { key: "scanner", label: "Scanner", color: "#22D3EE", glow: "glow-cyan" },
  { key: "batch", label: "Batch", color: "#00ff80", glow: "glow-green" },
  { key: "inventory", label: "Inventory", color: "#C4B5FD", glow: "glow-violet" },
  { key: "settings", label: "Settings", color: "#FDE047", glow: "glow-yellow" },
];

const screenComponents: Record<ScreenKey, () => React.JSX.Element> = {
  scanner: ScannerMock,
  batch: BatchMock,
  inventory: InventoryMock,
  settings: SettingsMock,
};

/* ════════════════════════════════════════
   MAIN DEMO SECTION
   ════════════════════════════════════════ */
export default function AppDemo() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-cycle every 5 seconds
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveIdx(i => (i + 1) % screens.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const leftIdx = activeIdx;
  const rightIdx = (activeIdx + 1) % screens.length;
  const LeftComponent = screenComponents[screens[leftIdx].key];
  const RightComponent = screenComponents[screens[rightIdx].key];

  return (
    <section id="demo" className="parallax-section py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12" data-animate>
          <div className="font-pixel text-[9px] text-[#8B5CF6] glow-violet tracking-widest mb-4">SEE IT IN ACTION</div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F1F0FF] mb-4">
            Built for the <span className="text-[#FDE047]">Source</span>
          </h2>
          <p className="max-w-lg mx-auto text-[rgba(241,240,255,0.55)] text-lg">
            From scanning at the thrift store to managing your FBA inventory — every screen is designed for speed.
          </p>
        </div>

        {/* Screen selector tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap" data-animate>
          {screens.map((s, i) => {
            const isActive = i === leftIdx || i === rightIdx;
            return (
              <button
                key={s.key}
                onClick={() => { setActiveIdx(i); setPaused(true); setTimeout(() => setPaused(false), 15000); }}
                className="font-pixel transition-all duration-300"
                style={{
                  fontSize: 9,
                  padding: "10px 18px",
                  borderRadius: t.rPill,
                  border: `1px solid ${isActive ? s.color : t.cardBorder}`,
                  background: isActive ? `${s.color}15` : "rgba(255,255,255,0.03)",
                  color: isActive ? s.color : t.textSoft,
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  boxShadow: isActive ? `0 0 16px ${s.color}30` : "none",
                }}
              >
                {s.label.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Phone pair */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div data-animate className="opacity-0" key={screens[leftIdx].key}>
            <div className="text-center mb-5">
              <span className="font-pixel text-[9px] tracking-widest" style={{ color: screens[leftIdx].color }}>{screens[leftIdx].label.toUpperCase()}</span>
            </div>
            <LeftComponent />
          </div>
          <div data-animate className="opacity-0" style={{ animationDelay: "0.2s" }} key={screens[rightIdx].key}>
            <div className="text-center mb-5">
              <span className="font-pixel text-[9px] tracking-widest" style={{ color: screens[rightIdx].color }}>{screens[rightIdx].label.toUpperCase()}</span>
            </div>
            <RightComponent />
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-10">
          {screens.map((s, i) => (
            <button
              key={s.key}
              onClick={() => { setActiveIdx(i); setPaused(true); setTimeout(() => setPaused(false), 15000); }}
              className="transition-all duration-300"
              style={{
                width: i === leftIdx ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === leftIdx ? s.color : i === rightIdx ? `${s.color}60` : "rgba(255,255,255,0.12)",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
