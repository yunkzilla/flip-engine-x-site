"use client";

/* eslint-disable @next/next/no-img-element */

import { useState, useEffect, useCallback } from "react";

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

/* ── Book data for cycling ── */
const books = [
  { isbn10: "0135957052", barcode: "978-0134685991", title: "The Pragmatic Programmer: Your Journey to Mastery", letter: "P", rank: 4231, sold: 47, buyCost: "$3.50", salePrice: "$24.99", profit: "+$14.27", fees: "$7.22", roi: "408%" },
  { isbn10: "0735211299", barcode: "978-0735211292", title: "Atomic Habits: An Easy & Proven Way to Build Good Habits", letter: "A", rank: 1892, sold: 83, buyCost: "$2.00", salePrice: "$16.50", profit: "+$8.70", fees: "$5.80", roi: "435%" },
  { isbn10: "0441013597", barcode: "978-0441013593", title: "Dune", letter: "D", rank: 3104, sold: 62, buyCost: "$1.50", salePrice: "$12.99", profit: "+$5.69", fees: "$5.80", roi: "379%" },
  { isbn10: "0132350882", barcode: "978-0132350884", title: "Clean Code: A Handbook of Agile Software Craftsmanship", letter: "C", rank: 2847, sold: 55, buyCost: "$2.50", salePrice: "$19.50", profit: "+$11.20", fees: "$5.80", roi: "448%" },
  { isbn10: "0201633612", barcode: "978-0201633610", title: "Design Patterns: Elements of Reusable Object-Oriented Software", letter: "D", rank: 8102, sold: 28, buyCost: "$4.25", salePrice: "$31.00", profit: "+$18.65", fees: "$8.10", roi: "439%" },
];

/* ── Shared phone chrome ── */
function PhoneFrame({ children, glow, buyFlash }: { children: React.ReactNode; glow?: string; buyFlash?: boolean }) {
  return (
    <div className="w-full max-w-[340px] mx-auto">
      <div
        className="rounded-[32px] border bg-[#06050F] p-3 shadow-2xl overflow-hidden relative"
        style={{
          boxShadow: buyFlash
            ? "0 0 80px rgba(0,255,128,0.4), 0 0 160px rgba(0,255,128,0.15), 0 25px 50px rgba(0,0,0,0.5)"
            : glow || "0 0 60px rgba(139,92,246,0.15), 0 25px 50px rgba(0,0,0,0.5)",
          height: PHONE_HEIGHT,
          borderColor: buyFlash ? "rgba(0,255,128,0.5)" : "rgba(139,92,246,0.25)",
          transition: "box-shadow 0.4s ease, border-color 0.4s ease",
        }}
      >
        {/* Green flash overlay */}
        {buyFlash && (
          <div style={{
            position: "absolute", inset: 0, zIndex: 20, pointerEvents: "none",
            borderRadius: 32, animation: "buyFlashPulse 1.2s ease-out forwards",
            background: "radial-gradient(ellipse at center, rgba(0,255,128,0.12) 0%, transparent 70%)",
          }} />
        )}
        <div className="flex items-center justify-between px-4 py-2 text-[10px] text-[rgba(241,240,255,0.4)] font-semibold">
          <span>9:41</span>
          <div className="w-20 h-5 rounded-full bg-[#111] mx-auto" />
          <span>100%</span>
        </div>
        <div className="rounded-[20px] overflow-hidden relative" style={{ background: t.bgMid }}>
          {children}
          {/* Green tint wash over content */}
          {buyFlash && (
            <div style={{
              position: "absolute", inset: 0, zIndex: 15, pointerEvents: "none",
              background: "rgba(0,255,128,0.06)",
              animation: "buyFlashFade 1.2s ease-out forwards",
              borderRadius: 20,
            }} />
          )}
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

/* ── Animated number counter ── */
function AnimatedNum({ value, prefix = "", suffix = "", color }: { value: string; prefix?: string; suffix?: string; color: string }) {
  const [display, setDisplay] = useState(value);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    setFading(true);
    const timer = setTimeout(() => {
      setDisplay(value);
      setFading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <span style={{ color, transition: "opacity 0.2s", opacity: fading ? 0.3 : 1 }}>
      {prefix}{display}{suffix}
    </span>
  );
}

/* ════════════════════════════════════════
   1. ANIMATED SCANNER MOCK
   ════════════════════════════════════════ */
function ScannerMock({ bookIndex }: { bookIndex: number }) {
  const book = books[bookIndex];
  const [scanPhase, setScanPhase] = useState<"scanning" | "found" | "buy">("found");

  useEffect(() => {
    setScanPhase("scanning");
    const t1 = setTimeout(() => setScanPhase("found"), 800);
    const t2 = setTimeout(() => setScanPhase("buy"), 2400);
    const t3 = setTimeout(() => setScanPhase("found"), 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [bookIndex]);

  return (
    <PhoneFrame glow="0 0 60px rgba(139,92,246,0.2), 0 25px 50px rgba(0,0,0,0.5)" buyFlash={scanPhase === "buy"}>
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

      {/* Camera card with animated scan line */}
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span className="font-pixel" style={{ fontSize: 9, color: t.cyberBright }}>SCAN</span>
            <span className="breathe" style={{ fontSize: 9, color: "rgba(74,222,128,0.85)", fontWeight: 700 }}>● Live</span>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            <span style={{ padding: "5px 8px", borderRadius: t.rPill, border: `1px solid ${t.primaryBorder}`, background: t.primarySoft, color: "#7C3AED", fontWeight: 900, fontSize: 8 }}>Barcode</span>
            <span style={{ padding: "5px 8px", borderRadius: t.rPill, border: `1px solid ${t.cardBorder}`, background: t.card, color: t.textSoft, fontWeight: 900, fontSize: 8 }}>ISBN</span>
          </div>
        </div>
        <div className="relative mt-2 overflow-hidden" style={{ borderRadius: t.rLg, background: "#0B0F1A", border: `1px solid ${scanPhase === "found" ? "rgba(0,255,128,0.3)" : t.cardBorder}`, height: 120, transition: "border-color 0.3s" }}>
          {/* Animated scan line */}
          <div className="scan-line-anim" style={{ position: "absolute", inset: 0 }}>
            <div style={{ position: "absolute", left: 0, right: 0, height: 2, background: scanPhase === "found" ? "linear-gradient(90deg, transparent, #00ff80, transparent)" : "linear-gradient(90deg, transparent, #8B5CF6, transparent)", boxShadow: scanPhase === "found" ? "0 0 12px rgba(0,255,128,0.8)" : "0 0 12px rgba(139,92,246,0.8)", animation: "scanLine 2s ease-in-out infinite" }} />
          </div>
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#8B5CF6] rounded-tl-sm opacity-60" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#8B5CF6] rounded-tr-sm opacity-60" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#8B5CF6] rounded-bl-sm opacity-60" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#8B5CF6] rounded-br-sm opacity-60" />
          {/* Barcode visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex gap-[2px] opacity-25">
              {[3,1,2,1,3,2,1,3,1,2,3,1,2,1,3,2,1,1,3,2,1,3,1,2].map((w, i) => (
                <div key={i} className="bg-white rounded-sm" style={{ width: w, height: 32 }} />
              ))}
            </div>
          </div>
          {/* Flash overlay on scan */}
          {scanPhase === "scanning" && (
            <div style={{ position: "absolute", inset: 0, background: "rgba(139,92,246,0.08)", animation: "flashScan 0.8s ease-out" }} />
          )}
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
          {["Flash Off", "Close"].map(label => (
            <button key={label} style={{ flex: 1, padding: "8px 10px", borderRadius: t.rPill, border: `1px solid ${t.cardBorder}`, background: t.softSurface, fontWeight: 900, fontSize: 9, color: t.text }}>{label}</button>
          ))}
        </div>
      </Card>

      {/* Product info - animated book change */}
      <Card>
        <div style={{ display: "flex", gap: 10, transition: "opacity 0.3s", opacity: scanPhase === "scanning" ? 0.3 : 1 }}>
          <BookCover isbn10={book.isbn10} letter={book.letter} w={38} h={52} />
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontSize: 9, color: t.textFaint, fontWeight: 700 }}>{book.barcode}</div>
            <div style={{ fontSize: 10, fontWeight: 900, color: t.text, lineHeight: 1.35, marginTop: 2 }}>{book.title}</div>
            <div style={{ display: "flex", gap: 6, marginTop: 4, alignItems: "center" }}>
              <span style={{ fontSize: 8, color: t.textFaint, fontWeight: 800 }}>Rank #<AnimatedNum value={book.rank.toLocaleString()} color={t.textFaint} /></span>
              <span style={{ fontSize: 8, color: t.textFaint, fontWeight: 800 }}><AnimatedNum value={String(book.sold)} color={t.textFaint} /> sold/mo</span>
              {bookIndex === 1 && scanPhase !== "scanning" && (
                <span style={{
                  fontSize: 7, fontWeight: 1000, color: "#FDE047",
                  background: "rgba(253,224,71,0.12)", border: "1px solid rgba(253,224,71,0.35)",
                  borderRadius: t.rPill, padding: "2px 6px",
                  textShadow: "0 0 8px rgba(253,224,71,0.6)",
                  animation: "fadeInUp 0.4s ease forwards",
                }}>🏆 PB — BEST SELLER</span>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Details + KEEP */}
      <Card>
        <span className="font-pixel" style={{ fontSize: 9, color: t.cyberBright }}>DETAILS</span>
        <div style={{ marginTop: 8, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, transition: "opacity 0.3s", opacity: scanPhase === "scanning" ? 0.3 : 1 }}>
          <div style={{ display: "grid", gap: 4 }}>
            <div style={{ fontSize: 9, color: t.textSoft, fontWeight: 900 }}>Buy Cost</div>
            <div style={{ padding: "8px 10px", borderRadius: t.rMd, border: `1px solid ${t.cardBorder}`, background: t.card, fontSize: 12, fontWeight: 900, color: "#22D3EE" }}><AnimatedNum value={book.buyCost} color="#22D3EE" /></div>
          </div>
          <div style={{ display: "grid", gap: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 9, color: t.textSoft, fontWeight: 900 }}>Sale Price</span>
              <span style={{ fontSize: 8, fontWeight: 900, color: t.goodText, background: t.goodBg, border: `1px solid ${t.goodBorder}`, borderRadius: t.rPill, padding: "1px 5px" }}><AnimatedNum value={book.profit} color={t.goodText} /></span>
            </div>
            <div style={{ padding: "8px 10px", borderRadius: t.rMd, border: `1px solid ${t.cardBorder}`, background: t.card, fontSize: 12, fontWeight: 900, color: "#C4B5FD" }}><AnimatedNum value={book.salePrice} color="#C4B5FD" /></div>
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
          {[["Fees", book.fees], ["ROI", book.roi]].map(([k, v]) => (
            <div key={k} style={{ padding: "6px 10px", borderRadius: t.rPill, border: `1px solid ${t.cardBorder}`, background: t.softSurface, display: "flex", gap: 6, alignItems: "center", fontWeight: 900 }}>
              <span style={{ color: t.textSoft, fontSize: 9 }}>{k}</span>
              <span style={{ fontSize: 9 }}><AnimatedNum value={v} color={t.text} /></span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 10, display: "flex", gap: 8, alignItems: "center" }}>
          <button style={{
            width: 100, padding: "10px 12px", borderRadius: t.rPill,
            border: scanPhase === "buy" ? "1px solid rgba(0,255,128,1)" : "1px solid rgba(0,255,128,0.70)",
            background: scanPhase === "buy" ? "linear-gradient(135deg, rgba(0,255,128,0.35) 0%, rgba(0,200,100,0.25) 100%)" : "linear-gradient(135deg, rgba(0,255,128,0.18) 0%, rgba(0,200,100,0.12) 100%)",
            color: "#00ff80", fontWeight: 1000, fontSize: 11,
            boxShadow: scanPhase === "buy" ? "0 0 30px rgba(0,255,128,0.7), 0 0 60px rgba(0,255,128,0.3), inset 0 0 20px rgba(0,255,128,0.15)" : "0 0 20px rgba(0,255,128,0.50), 0 0 6px rgba(0,255,128,0.30), inset 0 0 14px rgba(0,255,128,0.08)",
            textShadow: "0 0 14px rgba(0,255,128,0.95)",
            transform: scanPhase === "buy" ? "scale(1.08)" : "scale(1)",
            transition: "all 0.3s ease",
          }}>KEEP</button>
          <button style={{ padding: "6px 10px", borderRadius: t.rPill, fontWeight: 900, fontSize: 9, border: "1px solid rgba(52,211,153,0.50)", background: "rgba(16,185,129,0.14)", color: t.goodText, whiteSpace: "nowrap" as const }}>AutoKeep ON</button>
          <div style={{
            flex: 1, padding: "6px 8px", borderRadius: t.rMd,
            background: scanPhase === "buy" ? "rgba(0,255,128,0.12)" : t.primarySoft,
            border: scanPhase === "buy" ? "1px solid rgba(0,255,128,0.3)" : `1px solid ${t.primaryBorder}`,
            color: scanPhase === "buy" ? "#00ff80" : "#7C3AED",
            fontWeight: 900, fontSize: 8, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const,
            transition: "all 0.3s ease",
          }}>{scanPhase === "buy" ? "✓ Kept → Batch 1" : "Kept → Batch 1"}</div>
        </div>
      </Card>
      <div style={{ height: 12 }} />
    </PhoneFrame>
  );
}

/* ════════════════════════════════════════
   2. BATCH MOCK (with animated item count)
   ════════════════════════════════════════ */
function BatchMock({ bookIndex }: { bookIndex: number }) {
  const visibleBooks = books.slice(0, Math.min(bookIndex + 2, books.length));
  const totalProfit = visibleBooks.reduce((sum, b) => sum + parseFloat(b.profit.replace("+$", "")), 0);

  return (
    <PhoneFrame glow="0 0 60px rgba(0,255,128,0.12), 0 25px 50px rgba(0,0,0,0.5)">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 14, color: t.textSoft }}>‹</span>
          <span style={{ fontSize: 12, fontWeight: 800, color: t.textSoft }}>Home</span>
        </div>
        <span style={{ fontSize: 12, fontWeight: 800, color: t.textSoft }}>Batch</span>
      </div>

      <div style={{ padding: "0 14px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 8 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 900, color: t.text }}>Batch</div>
          <div style={{ fontSize: 10, color: t.textSoft, fontWeight: 700, marginTop: 2 }}>Saved items ready to list.</div>
        </div>
        <span style={{ padding: "7px 12px", borderRadius: t.rPill, border: `1px solid ${t.primaryBorder}`, background: t.primarySoft, color: t.primary, fontWeight: 900, fontSize: 10, whiteSpace: "nowrap" as const, flexShrink: 0 }}>+ Create Batch</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, padding: "0 10px", marginTop: 10 }}>
        <div style={{ background: t.card, borderRadius: t.rLg, padding: 12, border: `1px solid ${t.cardBorder}`, borderBottom: `2px solid ${t.cyberBorder}`, boxShadow: t.shadowSoft }}>
          <div style={{ fontSize: 9, color: t.textSoft, fontWeight: 900 }}>Items</div>
          <div style={{ marginTop: 4, fontSize: 13, fontWeight: 900 }}><AnimatedNum value={String(visibleBooks.length)} color={t.text} /></div>
        </div>
        <div style={{ background: t.card, borderRadius: t.rLg, padding: 12, border: `1px solid ${t.cardBorder}`, borderBottom: `2px solid ${t.cyberBorder}`, boxShadow: t.shadowSoft }}>
          <div style={{ fontSize: 9, color: t.textSoft, fontWeight: 900 }}>Total Profit</div>
          <div style={{ marginTop: 4, fontSize: 13, fontWeight: 900 }}><AnimatedNum value={`$${totalProfit.toFixed(2)}`} color="#00ff80" /></div>
        </div>
      </div>

      <div style={{ padding: "8px 8px 12px", display: "flex", flexDirection: "column" as const, gap: 8, marginTop: 2 }}>
        {visibleBooks.map((book, i) => {
          const profit = parseFloat(book.profit.replace("+$", ""));
          return (
            <div key={book.isbn10} style={{ background: t.card, borderRadius: t.rLg, padding: 14, boxShadow: t.shadowCard, border: `1px solid ${t.cardBorder}`, animation: i === visibleBooks.length - 1 && bookIndex > 0 ? "slideInItem 0.4s ease-out" : undefined }}>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <BookCover isbn10={book.isbn10} letter={book.letter} w={32} h={44} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 1000, fontSize: 11, color: t.text, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const }}>{book.title}</div>
                  <div style={{ marginTop: 3, color: t.textSoft, fontSize: 9, fontWeight: 800 }}>Very Good · Qty 1</div>
                </div>
                <div style={{ padding: "5px 9px", borderRadius: t.rPill, fontWeight: 900, fontSize: 10, border: `1px solid ${profit >= 5 ? t.goodBorder : t.cardBorder}`, background: profit >= 5 ? t.goodBg : t.softSurface, color: profit >= 5 ? t.goodText : t.textSoft, whiteSpace: "nowrap" as const, flexShrink: 0 }}>${profit.toFixed(2)}</div>
              </div>
              <div style={{ marginTop: 8, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
                {[["Buy", book.buyCost], ["Sale", book.salePrice], ["ROI", book.roi]].map(([k, v]) => (
                  <div key={k} style={{ padding: 8, borderRadius: t.rMd, border: `1px solid ${t.cardBorder}`, background: t.softSurface }}>
                    <div style={{ fontSize: 8, color: t.textSoft, fontWeight: 900 }}>{k}</div>
                    <div style={{ marginTop: 3, fontSize: 10, fontWeight: 900, color: t.text }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 8 }}>
                <span style={{ padding: "5px 10px", borderRadius: t.rPill, border: `1px solid ${t.cardBorder}`, background: t.softSurface, fontWeight: 900, fontSize: 9, color: t.text }}>Remove</span>
              </div>
            </div>
          );
        })}
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
    <PhoneFrame glow="0 0 60px rgba(34,211,238,0.12), 0 25px 50px rgba(0,0,0,0.5)">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 14, color: t.textSoft }}>‹</span>
          <span style={{ fontSize: 12, fontWeight: 800, color: t.textSoft }}>Home</span>
        </div>
        <span style={{ fontSize: 12, fontWeight: 800, color: t.textSoft }}>Inventory</span>
      </div>

      <div className="px-4">
        <h2 style={{ fontSize: 18, fontWeight: 900, color: t.text, margin: 0 }}>Inventory</h2>
        <div style={{ fontSize: 10, color: t.textFaint, fontWeight: 700, marginTop: 2 }}>Synced from Amazon · 7 items</div>
      </div>

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

      <div style={{ margin: "10px 12px 0", background: t.softSurface, borderRadius: t.rPill, padding: 4, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 3, border: `1px solid ${t.cyberBorder}`, boxShadow: t.shadowSoft }}>
        {["All", "In Stock", "Zero", "Sold"].map((label, i) => (
          <div key={label} style={{ padding: "6px 4px", borderRadius: t.rPill, fontWeight: 900, fontSize: 9, textAlign: "center", background: i === 0 ? t.card : "transparent", boxShadow: i === 0 ? t.shadowSoft : "none", color: i === 0 ? t.text : t.textSoft }}>{label}</div>
        ))}
      </div>

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
   4. SETTINGS MOCK
   ════════════════════════════════════════ */
function SettingsMock() {
  return (
    <PhoneFrame glow="0 0 60px rgba(253,224,71,0.1), 0 25px 50px rgba(0,0,0,0.5)">
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
   5. RANKED / RECORDS MOCK
   ════════════════════════════════════════ */
const records = [
  { category: "Best Seller", icon: "🏆", value: "#1,892", title: "Atomic Habits", isbn10: "0735211299", letter: "A", color: "#FDE047" },
  { category: "Biggest Win", icon: "💰", value: "+$18.65", title: "Design Patterns", isbn10: "0201633612", letter: "D", color: "#00ff80" },
  { category: "Best ROI", icon: "📈", value: "448%", title: "Clean Code", isbn10: "0132350882", letter: "C", color: "#22D3EE" },
  { category: "Priciest Find", icon: "💎", value: "$31.00", title: "Design Patterns", isbn10: "0201633612", letter: "D", color: "#C4B5FD" },
  { category: "Best Bargain", icon: "🔥", value: "$1.50", title: "Dune", isbn10: "0441013597", letter: "D", color: "#f87171" },
  { category: "Hottest Seller", icon: "⚡", value: "83/mo", title: "Atomic Habits", isbn10: "0735211299", letter: "A", color: "#8B5CF6" },
];

function RankedMock() {
  const [period, setPeriod] = useState(0);
  const periods = ["Week", "Month", "Year"];
  const stats = [
    { label: "Scanned", value: "142", color: t.text },
    { label: "Profit", value: "$487", color: "#00ff80" },
    { label: "Avg Profit", value: "$8.12", color: "#22D3EE" },
    { label: "Avg ROI", value: "312%", color: "#FDE047" },
  ];

  return (
    <PhoneFrame glow="0 0 60px rgba(253,224,71,0.12), 0 25px 50px rgba(0,0,0,0.5)">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: 14, color: t.primary, fontWeight: 900 }}>‹</span>
          <span style={{ fontSize: 12, fontWeight: 900, color: t.primary }}>Home</span>
        </div>
        <span style={{ fontSize: 12, fontWeight: 800, color: t.textSoft }}>Records</span>
      </div>

      <div className="px-4">
        <div style={{ fontSize: 18, fontWeight: 900, color: t.text }}>Personal Records</div>
        <div style={{ fontSize: 10, color: t.textSoft, fontWeight: 700, marginTop: 2 }}>Your best finds across all sessions.</div>
      </div>

      {/* Period toggle */}
      <div style={{ margin: "10px 12px 0", background: t.softSurface, borderRadius: t.rPill, padding: 4, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 3, border: `1px solid ${t.cyberBorder}`, boxShadow: t.shadowSoft }}>
        {periods.map((label, i) => (
          <button key={label} onClick={() => setPeriod(i)} style={{ padding: "6px 4px", borderRadius: t.rPill, fontWeight: 900, fontSize: 9, textAlign: "center", background: period === i ? t.card : "transparent", boxShadow: period === i ? t.shadowSoft : "none", color: period === i ? t.text : t.textSoft, border: "none", cursor: "pointer" }}>{label}</button>
        ))}
      </div>

      {/* Aggregate stats */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 6, padding: "10px 12px 0" }}>
        {stats.map(s => (
          <div key={s.label} style={{ borderRadius: t.rLg, background: t.card, border: `1px solid ${t.cardBorder}`, boxShadow: t.shadowSoft, padding: "8px 4px", textAlign: "center" }}>
            <div style={{ fontSize: 14, fontWeight: 1000, color: s.color, letterSpacing: -0.4 }}>{s.value}</div>
            <div style={{ marginTop: 2, fontSize: 7, fontWeight: 800, color: t.textFaint, textTransform: "uppercase" as const, letterSpacing: 0.5 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Record cards */}
      <div style={{ padding: "8px 8px 12px", display: "flex", flexDirection: "column" as const, gap: 8 }}>
        {records.map(r => (
          <div key={r.category} style={{ background: t.card, borderRadius: t.rLg, padding: 12, boxShadow: t.shadowCard, border: `1px solid ${t.cardBorder}`, borderLeft: `3px solid ${r.color}` }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <BookCover isbn10={r.isbn10} letter={r.letter} w={28} h={38} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 11 }}>{r.icon}</span>
                  <span className="font-pixel" style={{ fontSize: 8, color: r.color }}>{r.category.toUpperCase()}</span>
                </div>
                <div style={{ fontWeight: 900, fontSize: 10, color: t.text, marginTop: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }}>{r.title}</div>
              </div>
              <div style={{ padding: "5px 10px", borderRadius: t.rPill, fontWeight: 1000, fontSize: 11, background: `${r.color}15`, border: `1px solid ${r.color}40`, color: r.color, flexShrink: 0 }}>{r.value}</div>
            </div>
          </div>
        ))}
      </div>
    </PhoneFrame>
  );
}

/* ════════════════════════════════════════
   MAIN DEMO SECTION
   ════════════════════════════════════════ */
export default function AppDemo() {
  const [bookIndex, setBookIndex] = useState(0);
  const [rightScreen, setRightScreen] = useState(0);

  const rightScreens = [
    { key: "batch", label: "Batches", color: "#00ff80", tier: "Pro+" },
    { key: "inventory", label: "Inventory", color: "#22D3EE", tier: "Pro+" },
    { key: "ranked", label: "Records", color: "#FDE047" },
    { key: "settings", label: "Settings", color: "#C4B5FD" },
  ];

  // Auto-cycle books every 4 seconds
  const cycleBook = useCallback(() => {
    setBookIndex(prev => (prev + 1) % books.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(cycleBook, 4000);
    return () => clearInterval(interval);
  }, [cycleBook]);

  const renderRight = () => {
    switch (rightScreen) {
      case 0: return <BatchMock bookIndex={bookIndex} />;
      case 1: return <InventoryMock />;
      case 2: return <RankedMock />;
      case 3: return <SettingsMock />;
      default: return <BatchMock bookIndex={bookIndex} />;
    }
  };

  return (
    <section id="demo" className="parallax-section py-16 sm:py-24 px-6">
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

        {/* Right screen tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-10" data-animate>
          <div className="font-pixel text-[8px] px-3 sm:px-5 py-2 rounded-full flex items-center gap-1.5"
            style={{
              background: "rgba(139,92,246,0.20)",
              border: "1px solid rgba(139,92,246,0.60)",
              color: "#8B5CF6",
              boxShadow: "0 0 16px rgba(139,92,246,0.25)",
            }}
          >
            SCANNER
          </div>
          <div className="text-[rgba(241,240,255,0.2)] flex items-center font-pixel text-[8px]">+</div>
          {rightScreens.map((s, i) => (
            <button
              key={s.key}
              onClick={() => setRightScreen(i)}
              className="font-pixel text-[8px] sm:text-[9px] px-3 sm:px-5 py-2 rounded-full transition-all flex items-center gap-1.5"
              style={{
                background: rightScreen === i ? `${s.color}20` : "rgba(255,255,255,0.04)",
                border: `1px solid ${rightScreen === i ? `${s.color}60` : "rgba(255,255,255,0.08)"}`,
                color: rightScreen === i ? s.color : "rgba(241,240,255,0.4)",
                boxShadow: rightScreen === i ? `0 0 16px ${s.color}25` : "none",
              }}
            >
              {s.label.toUpperCase()}
              {s.tier && (
                <span className="text-[6px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.35)", color: "#C4B5FD" }}>
                  {s.tier}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Two phones side by side */}
        <div className="flex justify-center items-start gap-6 lg:gap-10" data-animate>
          {/* Scanner - always visible, hidden on small screens */}
          <div className="hidden md:block flex-shrink-0">
            <ScannerMock bookIndex={bookIndex} />
          </div>
          {/* Right screen */}
          <div className="flex-shrink-0">
            {/* Show scanner on mobile when no right screen context */}
            <div className="md:hidden">
              <ScannerMock bookIndex={bookIndex} />
            </div>
            <div className="hidden md:block">
              {renderRight()}
            </div>
          </div>
        </div>

        {/* Mobile: show right screen below */}
        <div className="md:hidden mt-8 flex justify-center" data-animate>
          {renderRight()}
        </div>
      </div>
    </section>
  );
}
