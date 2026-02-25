/* ── Flip Engine X – App Demo Section ──
   Phone mockups skinned with the real app's exact theme tokens & styling */

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

/* ── Scanner Mock ── */
function ScannerMock() {
  return (
    <div className="w-full max-w-[340px] mx-auto">
      {/* Phone frame */}
      <div
        className="rounded-[32px] border border-[rgba(139,92,246,0.25)] bg-[#06050F] p-3 shadow-2xl overflow-hidden"
        style={{ boxShadow: "0 0 60px rgba(139,92,246,0.15), 0 25px 50px rgba(0,0,0,0.5)", height: PHONE_HEIGHT }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-2 text-[10px] text-[rgba(241,240,255,0.4)] font-semibold">
          <span>9:41</span>
          <div className="w-20 h-5 rounded-full bg-[#111] mx-auto" />
          <span>100%</span>
        </div>

        {/* App content */}
        <div className="rounded-[20px] overflow-hidden" style={{ background: t.bgMid }}>
          {/* ── Header block (real: ui.headerBlock) ── */}
          <div
            className="mx-2.5 mt-2.5"
            style={{
              background: t.card,
              borderRadius: t.rLg,
              padding: 12,
              boxShadow: t.shadowCard,
              border: `1px solid ${t.cardBorder}`,
            }}
          >
            {/* Status badges (real: ui.badge) */}
            <div style={{ display: "flex", gap: 6 }}>
              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "6px 16px",
                  borderRadius: t.rPill,
                  fontWeight: 1000,
                  fontSize: 11,
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${t.cardBorder}`,
                  color: t.textSoft,
                }}
              >
                Scanned
              </div>
              <div
                className="ungated-laser"
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "6px 16px",
                  borderRadius: t.rPill,
                  fontWeight: 1000,
                  fontSize: 11,
                  background: t.goodBg,
                  border: `1px solid ${t.goodBorder}`,
                  color: t.goodText,
                }}
              >
                BUY
              </div>
            </div>

            {/* Segment tabs (real: ui.segmentWrap + ui.segmentBtn) */}
            <div
              style={{
                marginTop: 10,
                background: t.softSurface,
                borderRadius: t.rPill,
                padding: 4,
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 4,
                border: `1px solid ${t.cyberBorder}`,
                boxShadow: t.shadowSoft,
              }}
            >
              <div
                style={{
                  padding: "8px 8px",
                  borderRadius: t.rPill,
                  fontWeight: 900,
                  fontSize: 10,
                  textAlign: "center",
                  background: t.card,
                  boxShadow: t.shadowSoft,
                  color: t.text,
                }}
              >
                Camera
              </div>
              <div
                style={{
                  padding: "8px 8px",
                  borderRadius: t.rPill,
                  fontWeight: 900,
                  fontSize: 10,
                  textAlign: "center",
                  background: "transparent",
                  color: t.textSoft,
                }}
              >
                Scanner
              </div>
              <div
                style={{
                  padding: "8px 8px",
                  borderRadius: t.rPill,
                  fontWeight: 900,
                  fontSize: 10,
                  textAlign: "center",
                  background: "transparent",
                  color: t.textSoft,
                }}
              >
                Title Search
              </div>
            </div>
          </div>

          {/* ── Camera card (real: ui.card + ui.cardTitle + ui.videoWrap) ── */}
          <div
            className="mx-2.5 mt-2"
            style={{
              background: t.card,
              borderRadius: t.rLg,
              padding: 14,
              boxShadow: t.shadowCard,
              border: `1px solid ${t.cardBorder}`,
            }}
          >
            {/* Title row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span
                  className="font-pixel"
                  style={{ fontSize: 9, color: t.cyberBright }}
                >
                  SCAN
                </span>
                <span style={{ fontSize: 9, color: "rgba(74,222,128,0.85)", fontWeight: 700 }}>● Live</span>
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                {/* Pills (real: ui.pill) */}
                <span
                  style={{
                    padding: "5px 8px",
                    borderRadius: t.rPill,
                    border: `1px solid ${t.primaryBorder}`,
                    background: t.primarySoft,
                    color: "#7C3AED",
                    fontWeight: 900,
                    fontSize: 8,
                  }}
                >
                  Barcode
                </span>
                <span
                  style={{
                    padding: "5px 8px",
                    borderRadius: t.rPill,
                    border: `1px solid ${t.cardBorder}`,
                    background: t.card,
                    color: t.textSoft,
                    fontWeight: 900,
                    fontSize: 8,
                  }}
                >
                  ISBN
                </span>
              </div>
            </div>

            {/* Video viewport (real: ui.videoWrap) */}
            <div
              className="relative mt-2 overflow-hidden"
              style={{
                borderRadius: t.rLg,
                background: "#0B0F1A",
                border: `1px solid ${t.cardBorder}`,
                height: 120,
              }}
            >
              {/* Scan line */}
              <div
                className="absolute inset-x-0 h-[2px] top-1/2 opacity-70"
                style={{
                  background: "linear-gradient(90deg, transparent, #8B5CF6, transparent)",
                  boxShadow: "0 0 12px rgba(139,92,246,0.8)",
                }}
              />
              {/* Corner markers */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#8B5CF6] rounded-tl-sm opacity-60" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#8B5CF6] rounded-tr-sm opacity-60" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#8B5CF6] rounded-bl-sm opacity-60" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#8B5CF6] rounded-br-sm opacity-60" />
              {/* Barcode overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-[2px] opacity-25">
                  {[3, 1, 2, 1, 3, 2, 1, 3, 1, 2, 3, 1, 2, 1, 3, 2, 1, 1, 3, 2, 1, 3, 1, 2].map((w, i) => (
                    <div key={i} className="bg-white rounded-sm" style={{ width: w, height: 32 }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Camera buttons */}
            <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
              <button
                style={{
                  flex: 1,
                  padding: "8px 10px",
                  borderRadius: t.rPill,
                  border: `1px solid ${t.cardBorder}`,
                  background: t.softSurface,
                  fontWeight: 900,
                  fontSize: 9,
                  color: t.text,
                }}
              >
                Flash Off
              </button>
              <button
                style={{
                  flex: 1,
                  padding: "8px 10px",
                  borderRadius: t.rPill,
                  border: `1px solid ${t.cardBorder}`,
                  background: t.softSurface,
                  fontWeight: 900,
                  fontSize: 9,
                  color: t.text,
                }}
              >
                Close
              </button>
            </div>
          </div>

          {/* ── Product info card ── */}
          <div
            className="mx-2.5 mt-2"
            style={{
              background: t.card,
              borderRadius: t.rLg,
              padding: 14,
              boxShadow: t.shadowCard,
              border: `1px solid ${t.cardBorder}`,
            }}
          >
            <div style={{ display: "flex", gap: 10 }}>
              {/* Book cover thumbnail (real inventory style) */}
              <div
                style={{
                  width: 38,
                  height: 52,
                  flexShrink: 0,
                  borderRadius: 5,
                  background: t.softSurface,
                  border: `1px solid ${t.primaryBorder}`,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "3px 4px 14px rgba(0,0,0,0.5), inset -2px 0 6px rgba(0,0,0,0.3)",
                }}
              >
                <span style={{ fontSize: 14, color: t.textFaint, fontWeight: 900 }}>P</span>
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: 9, color: t.textFaint, fontWeight: 700 }}>978-0134685991</div>
                <div style={{ fontSize: 10, fontWeight: 900, color: t.text, lineHeight: 1.35, marginTop: 2 }}>
                  The Pragmatic Programmer: Your Journey to Mastery
                </div>
                <div style={{ display: "flex", gap: 6, marginTop: 4, alignItems: "center" }}>
                  <span style={{ fontSize: 8, color: t.textFaint, fontWeight: 800 }}>Rank #4,231</span>
                  <span style={{ fontSize: 8, color: t.textFaint, fontWeight: 800 }}>47 sold/mo</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Details + KEEP card (real: ui.card + ui.formGrid + ui.actionRow) ── */}
          <div
            className="mx-2.5 mt-2"
            style={{
              background: t.card,
              borderRadius: t.rLg,
              padding: 14,
              boxShadow: t.shadowCard,
              border: `1px solid ${t.cardBorder}`,
            }}
          >
            <span className="font-pixel" style={{ fontSize: 9, color: t.cyberBright }}>
              DETAILS
            </span>

            {/* Form grid (real: ui.formGrid) */}
            <div style={{ marginTop: 8, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {/* Buy Cost */}
              <div style={{ display: "grid", gap: 4 }}>
                <div style={{ fontSize: 9, color: t.textSoft, fontWeight: 900 }}>Buy Cost</div>
                <div
                  style={{
                    padding: "8px 10px",
                    borderRadius: t.rMd,
                    border: `1px solid ${t.cardBorder}`,
                    background: t.card,
                    fontSize: 12,
                    fontWeight: 900,
                    color: "#22D3EE",
                  }}
                >
                  $3.50
                </div>
              </div>
              {/* Sale Price */}
              <div style={{ display: "grid", gap: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 9, color: t.textSoft, fontWeight: 900 }}>Sale Price</span>
                  <span
                    style={{
                      fontSize: 8,
                      fontWeight: 900,
                      color: t.goodText,
                      background: t.goodBg,
                      border: `1px solid ${t.goodBorder}`,
                      borderRadius: t.rPill,
                      padding: "1px 5px",
                    }}
                  >
                    +$14.27
                  </span>
                </div>
                <div
                  style={{
                    padding: "8px 10px",
                    borderRadius: t.rMd,
                    border: `1px solid ${t.cardBorder}`,
                    background: t.card,
                    fontSize: 12,
                    fontWeight: 900,
                    color: "#C4B5FD",
                  }}
                >
                  $24.99
                </div>
              </div>
              {/* Condition */}
              <div style={{ display: "grid", gap: 4 }}>
                <div style={{ fontSize: 9, color: t.textSoft, fontWeight: 900 }}>Condition</div>
                <div style={{ display: "flex", gap: 3 }}>
                  {["N", "L", "V", "G", "A"].map((c) => (
                    <div
                      key={c}
                      style={{
                        flex: 1,
                        padding: "6px 0",
                        borderRadius: 8,
                        textAlign: "center",
                        border: c === "V" ? "none" : `1px solid ${t.cardBorder}`,
                        background: c === "V" ? t.primary : t.card,
                        color: c === "V" ? "#fff" : t.textFaint,
                        fontWeight: 900,
                        fontSize: 10,
                      }}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
              {/* Qty */}
              <div style={{ display: "grid", gap: 4 }}>
                <div style={{ fontSize: 9, color: t.textSoft, fontWeight: 900 }}>Qty</div>
                <div
                  style={{
                    padding: "8px 10px",
                    borderRadius: t.rMd,
                    border: `1px solid ${t.cardBorder}`,
                    background: t.card,
                    fontSize: 12,
                    fontWeight: 900,
                    color: t.text,
                  }}
                >
                  1
                </div>
              </div>
            </div>

            {/* Pill row (real: ui.pillRow + ui.metaPill) */}
            <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" as const }}>
              <div
                style={{
                  padding: "6px 10px",
                  borderRadius: t.rPill,
                  border: `1px solid ${t.cardBorder}`,
                  background: t.softSurface,
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                  fontWeight: 900,
                }}
              >
                <span style={{ color: t.textSoft, fontSize: 9 }}>Fees</span>
                <span style={{ color: t.text, fontSize: 9 }}>$7.22</span>
              </div>
              <div
                style={{
                  padding: "6px 10px",
                  borderRadius: t.rPill,
                  border: `1px solid ${t.cardBorder}`,
                  background: t.softSurface,
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                  fontWeight: 900,
                }}
              >
                <span style={{ color: t.textSoft, fontSize: 9 }}>ROI</span>
                <span style={{ color: t.text, fontSize: 9 }}>408%</span>
              </div>
            </div>

            {/* Action row (real: ui.actionRow + KEEP button) */}
            <div style={{ marginTop: 10, display: "flex", gap: 8, alignItems: "center" }}>
              <button
                style={{
                  width: 100,
                  padding: "10px 12px",
                  borderRadius: t.rPill,
                  border: "1px solid rgba(0,255,128,0.70)",
                  background: "linear-gradient(135deg, rgba(0,255,128,0.18) 0%, rgba(0,200,100,0.12) 100%)",
                  color: "#00ff80",
                  fontWeight: 1000,
                  fontSize: 11,
                  boxShadow: "0 0 20px rgba(0,255,128,0.50), 0 0 6px rgba(0,255,128,0.30), inset 0 0 14px rgba(0,255,128,0.08)",
                  textShadow: "0 0 14px rgba(0,255,128,0.95)",
                }}
              >
                KEEP
              </button>
              <button
                style={{
                  padding: "6px 10px",
                  borderRadius: t.rPill,
                  fontWeight: 900,
                  fontSize: 9,
                  border: "1px solid rgba(52,211,153,0.50)",
                  background: "rgba(16,185,129,0.14)",
                  color: t.goodText,
                  whiteSpace: "nowrap" as const,
                }}
              >
                AutoKeep ON
              </button>
              <div
                style={{
                  flex: 1,
                  padding: "6px 8px",
                  borderRadius: t.rMd,
                  background: t.primarySoft,
                  border: `1px solid ${t.primaryBorder}`,
                  color: "#7C3AED",
                  fontWeight: 900,
                  fontSize: 8,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap" as const,
                }}
              >
                Kept → Batch 1
              </div>
            </div>
          </div>

          {/* Bottom spacer */}
          <div style={{ height: 12 }} />
        </div>
      </div>
    </div>
  );
}

/* ── Inventory Mock ── */
const inventoryItems = [
  { title: "The Pragmatic Programmer", asin: "B07VRS84D1", sku: "FEX-001", stock: 3, price: 24.99, cost: 3.50, fees: 7.22, rank: 4231, letter: "P" },
  { title: "Clean Code: A Handbook of Agile Software...", asin: "B001GSTOAM", sku: "FEX-002", stock: 1, price: 19.50, cost: 2.00, fees: 5.80, rank: 2847, letter: "C" },
  { title: "Design Patterns: Elements of Reusable...", asin: "B000SEIBB8", sku: "FEX-003", stock: 2, price: 31.00, cost: 4.25, fees: 8.10, rank: 8102, letter: "D" },
  { title: "Refactoring: Improving the Design of...", asin: "B07LCM8RG2", sku: "FEX-004", stock: 0, price: 22.75, cost: 1.50, fees: 6.40, rank: 5480, letter: "R", sold: true },
  { title: "Introduction to Algorithms", asin: "B08FH8N996", sku: "FEX-005", stock: 1, price: 42.00, cost: 5.00, fees: 10.30, rank: 1203, letter: "I" },
];

function InventoryMock() {
  return (
    <div className="w-full max-w-[340px] mx-auto">
      <div
        className="rounded-[32px] border border-[rgba(139,92,246,0.25)] bg-[#06050F] p-3 shadow-2xl overflow-hidden"
        style={{ boxShadow: "0 0 60px rgba(139,92,246,0.15), 0 25px 50px rgba(0,0,0,0.5)", height: PHONE_HEIGHT }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-2 text-[10px] text-[rgba(241,240,255,0.4)] font-semibold">
          <span>9:41</span>
          <div className="w-20 h-5 rounded-full bg-[#111] mx-auto" />
          <span>100%</span>
        </div>

        <div className="rounded-[20px] overflow-hidden" style={{ background: t.bgMid }}>
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <span style={{ fontSize: 14, color: t.textSoft }}>‹</span>
              <span style={{ fontSize: 12, fontWeight: 800, color: t.textSoft }}>Home</span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 800, color: t.textSoft }}>Inventory</span>
          </div>

          {/* Title */}
          <div className="px-4">
            <h2 style={{ fontSize: 18, fontWeight: 900, color: t.text, margin: 0 }}>Inventory</h2>
            <div style={{ fontSize: 10, color: t.textFaint, fontWeight: 700, marginTop: 2 }}>Synced from Amazon &middot; 7 items</div>
          </div>

          {/* Stats row (real: ui.statCard style) */}
          <div style={{ display: "flex", gap: 6, padding: "0 12px", marginTop: 10 }}>
            <div
              style={{
                flex: 1,
                borderRadius: t.rLg,
                background: t.card,
                border: `1px solid ${t.cardBorder}`,
                boxShadow: t.shadowCard,
                padding: "8px 6px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 1000, color: t.text, letterSpacing: -0.4 }}>7</div>
              <div style={{ marginTop: 2, fontSize: 8, fontWeight: 800, color: t.textFaint, textTransform: "uppercase" as const, letterSpacing: 0.5 }}>Items</div>
            </div>
            <div
              style={{
                flex: 1,
                borderRadius: t.rLg,
                background: t.card,
                border: `1px solid ${t.cardBorder}`,
                boxShadow: t.shadowCard,
                padding: "8px 6px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 1000, color: "#22D3EE", letterSpacing: -0.4 }}>$183</div>
              <div style={{ marginTop: 2, fontSize: 8, fontWeight: 800, color: t.textFaint, textTransform: "uppercase" as const, letterSpacing: 0.5 }}>Value</div>
            </div>
            <div
              style={{
                flex: 1,
                borderRadius: t.rLg,
                background: t.card,
                border: `1px solid ${t.cardBorder}`,
                boxShadow: t.shadowCard,
                padding: "8px 6px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 1000, color: "#00ff80", letterSpacing: -0.4 }}>$89</div>
              <div style={{ marginTop: 2, fontSize: 8, fontWeight: 800, color: t.textFaint, textTransform: "uppercase" as const, letterSpacing: 0.5 }}>Profit</div>
            </div>
          </div>

          {/* Filter segment (real: ui.segmentWrap style) */}
          <div
            style={{
              margin: "10px 12px 0",
              background: t.softSurface,
              borderRadius: t.rPill,
              padding: 4,
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: 3,
              border: `1px solid ${t.cyberBorder}`,
              boxShadow: t.shadowSoft,
            }}
          >
            {["All", "In Stock", "Zero", "Sold"].map((label, i) => (
              <div
                key={label}
                style={{
                  padding: "6px 4px",
                  borderRadius: t.rPill,
                  fontWeight: 900,
                  fontSize: 9,
                  textAlign: "center",
                  background: i === 0 ? t.card : "transparent",
                  boxShadow: i === 0 ? t.shadowSoft : "none",
                  color: i === 0 ? t.text : t.textSoft,
                }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Item list (real: ui.card + ui.itemHeader + ui.profitGrid) */}
          <div style={{ padding: "8px 8px 12px", display: "flex", flexDirection: "column" as const, gap: 8 }}>
            {inventoryItems.map((item) => {
              const isSold = item.sold === true;
              const net = item.price - item.cost - item.fees;
              return (
                <div
                  key={item.sku}
                  style={{
                    background: t.card,
                    borderRadius: t.rLg,
                    padding: 12,
                    boxShadow: t.shadowCard,
                    border: `1px solid ${t.cardBorder}`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* SOLD stamp overlay */}
                  {isSold && (
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                        zIndex: 2,
                      }}
                    >
                      <span
                        className="font-pixel"
                        style={{
                          display: "block",
                          fontSize: 14,
                          letterSpacing: 4,
                          color: "rgba(0,255,65,0.7)",
                          border: "2px solid rgba(0,255,65,0.5)",
                          borderRadius: 2,
                          padding: "5px 12px",
                          textTransform: "uppercase" as const,
                          whiteSpace: "nowrap" as const,
                          textShadow: "0 0 6px rgba(0,255,65,0.4)",
                          boxShadow: "0 0 8px rgba(0,255,65,0.2), inset 0 0 8px rgba(0,255,65,0.04)",
                          opacity: 0.7,
                        }}
                      >
                        SOLD
                      </span>
                    </div>
                  )}

                  <div style={isSold ? { opacity: 0.28 } : undefined}>
                    {/* Item header (real: ui.itemHeader) */}
                    <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      {/* Book cover */}
                      <div
                        style={{
                          width: 32,
                          height: 44,
                          flexShrink: 0,
                          borderRadius: 4,
                          background: t.softSurface,
                          border: `1px solid ${t.primaryBorder}`,
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "3px 4px 14px rgba(0,0,0,0.5), inset -2px 0 6px rgba(0,0,0,0.3)",
                        }}
                      >
                        <span style={{ fontSize: 14, color: t.textFaint, fontWeight: 900 }}>{item.letter}</span>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontWeight: 900,
                            fontSize: 11,
                            lineHeight: 1.35,
                            color: t.text,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical" as const,
                          }}
                        >
                          {item.title}
                        </div>
                        <div style={{ marginTop: 2, fontSize: 9, color: t.textFaint, fontWeight: 700 }}>
                          ASIN: {item.asin}
                        </div>
                      </div>
                      <span
                        style={{
                          padding: "3px 7px",
                          borderRadius: t.rPill,
                          fontSize: 9,
                          fontWeight: 900,
                          background: t.cyberBg,
                          border: `1px solid ${t.cyberBorder}`,
                          color: t.cyberBright,
                          whiteSpace: "nowrap" as const,
                          flexShrink: 0,
                        }}
                      >
                        {item.stock} units
                      </span>
                    </div>

                    {/* Rank row (real: ui.rankRow) */}
                    <div style={{ display: "flex", gap: 6, alignItems: "center", marginTop: 6 }}>
                      <span style={{ fontSize: 9, color: t.textFaint, fontWeight: 800 }}>BSR Rank</span>
                      <span style={{ fontSize: 10, color: t.cyberText, fontWeight: 900 }}>#{item.rank.toLocaleString()}</span>
                    </div>

                    {/* Profit grid (real: ui.profitGrid) */}
                    <div
                      style={{
                        marginTop: 8,
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: 6,
                        padding: 8,
                        borderRadius: t.rMd,
                        background: t.softSurface,
                        border: `1px solid ${t.cardBorder}`,
                      }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 8, color: t.textFaint, fontWeight: 900, textTransform: "uppercase" as const, letterSpacing: 0.3 }}>Cost</div>
                        <div style={{ fontSize: 10, fontWeight: 900, color: "#C4B5FD", marginTop: 2 }}>
                          -${item.cost.toFixed(2)}
                        </div>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 8, color: t.textFaint, fontWeight: 900, textTransform: "uppercase" as const, letterSpacing: 0.3 }}>Fees</div>
                        <div style={{ fontSize: 10, fontWeight: 900, color: t.textSoft, marginTop: 2 }}>
                          -${item.fees.toFixed(2)}
                        </div>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 8, color: t.textFaint, fontWeight: 900, textTransform: "uppercase" as const, letterSpacing: 0.3 }}>Net</div>
                        <div
                          style={{
                            fontSize: 10,
                            fontWeight: 900,
                            marginTop: 2,
                            color: net >= 5 ? t.goodText : net >= 0 ? t.cyberBright : t.dangerText,
                          }}
                        >
                          ${net.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Demo Section ── */
export default function AppDemo() {
  return (
    <section id="demo" className="parallax-section py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-animate>
          <div className="font-pixel text-[9px] text-[#8B5CF6] glow-violet tracking-widest mb-4">SEE IT IN ACTION</div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F1F0FF] mb-4">
            Built for the <span className="text-[#FDE047]">Source</span>
          </h2>
          <p className="max-w-lg mx-auto text-[rgba(241,240,255,0.55)] text-lg">
            From scanning at the thrift store to managing your FBA inventory — every screen is designed for speed.
          </p>
        </div>

        {/* Both phones side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div data-animate className="opacity-0">
            <div className="text-center mb-5">
              <span className="font-pixel text-[9px] text-[#22D3EE] glow-cyan tracking-widest">SCANNER</span>
            </div>
            <ScannerMock />
          </div>
          <div data-animate className="opacity-0" style={{ animationDelay: "0.2s" }}>
            <div className="text-center mb-5">
              <span className="font-pixel text-[9px] text-[#C4B5FD] glow-violet tracking-widest">INVENTORY</span>
            </div>
            <InventoryMock />
          </div>
        </div>
      </div>
    </section>
  );
}
