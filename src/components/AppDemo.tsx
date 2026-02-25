/* ── Shared phone frame height ── */
const PHONE_HEIGHT = 720;

/* ── Scanner Mock ── */
function ScannerMock() {
  return (
    <div className="w-full max-w-[340px] mx-auto">
      {/* Phone frame */}
      <div className="rounded-[32px] border border-[rgba(139,92,246,0.25)] bg-[#06050F] p-3 shadow-2xl overflow-hidden" style={{ boxShadow: "0 0 60px rgba(139,92,246,0.15), 0 25px 50px rgba(0,0,0,0.5)", height: PHONE_HEIGHT }}>
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-2 text-[10px] text-[rgba(241,240,255,0.4)] font-semibold">
          <span>9:41</span>
          <div className="w-20 h-5 rounded-full bg-[#111] mx-auto" />
          <span>100%</span>
        </div>

        {/* App content */}
        <div className="rounded-[20px] overflow-hidden bg-[#0C0A1A]">
          {/* Header card — status + tabs */}
          <div className="mx-3 mt-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(139,92,246,0.12)] p-3">
            <div className="flex gap-2 mb-3">
              <div className="flex-1 text-center py-1.5 rounded-full text-[9px] font-bold bg-[rgba(255,255,255,0.04)] border border-[rgba(139,92,246,0.12)] text-[rgba(241,240,255,0.5)]">
                Scanned
              </div>
              <div className="flex-1 text-center py-1.5 rounded-full text-[9px] font-bold border border-[rgba(0,255,128,0.5)] text-[#00ff80]" style={{ background: "rgba(0,255,128,0.08)", boxShadow: "0 0 12px rgba(0,255,128,0.2)" }}>
                BUY
              </div>
            </div>
            <div className="flex gap-1">
              <div className="flex-1 text-center py-1.5 rounded-lg text-[9px] font-bold bg-[rgba(139,92,246,0.15)] border border-[rgba(139,92,246,0.3)] text-[#C4B5FD]">Camera</div>
              <div className="flex-1 text-center py-1.5 rounded-lg text-[9px] font-bold bg-[rgba(255,255,255,0.03)] border border-[rgba(139,92,246,0.08)] text-[rgba(241,240,255,0.35)]">Scanner</div>
              <div className="flex-1 text-center py-1.5 rounded-lg text-[9px] font-bold bg-[rgba(255,255,255,0.03)] border border-[rgba(139,92,246,0.08)] text-[rgba(241,240,255,0.35)]">Title</div>
            </div>
          </div>

          {/* Camera card */}
          <div className="mx-3 mt-2 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(139,92,246,0.12)] p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-pixel text-[8px] text-[#FDE047]">SCAN</span>
                <span className="text-[9px] text-[#4ade80] font-bold">● Live</span>
              </div>
              <div className="flex gap-1">
                <span className="px-2 py-0.5 rounded-full text-[8px] font-bold bg-[rgba(139,92,246,0.15)] border border-[rgba(139,92,246,0.3)] text-[#C4B5FD]">Barcode</span>
                <span className="px-2 py-0.5 rounded-full text-[8px] font-bold bg-[rgba(255,255,255,0.03)] border border-[rgba(139,92,246,0.08)] text-[rgba(241,240,255,0.35)]">ISBN</span>
              </div>
            </div>
            {/* Camera viewport */}
            <div className="relative rounded-lg overflow-hidden h-28 bg-gradient-to-br from-[#1a1028] to-[#0a0814]">
              {/* Scan line animation */}
              <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent top-1/2 opacity-70" style={{ boxShadow: "0 0 12px rgba(139,92,246,0.8)" }} />
              {/* Corner markers */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#8B5CF6] rounded-tl-sm opacity-60" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#8B5CF6] rounded-tr-sm opacity-60" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#8B5CF6] rounded-bl-sm opacity-60" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#8B5CF6] rounded-br-sm opacity-60" />
              {/* Barcode overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-[2px] opacity-30">
                  {[3,1,2,1,3,2,1,3,1,2,3,1,2,1,3,2,1,1,3,2,1,3,1,2].map((w, i) => (
                    <div key={i} className="bg-white rounded-sm" style={{ width: w, height: 36 }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="flex-1 text-[9px] font-bold py-1.5 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(139,92,246,0.12)] text-[rgba(241,240,255,0.5)]">Flash On</button>
              <button className="flex-1 text-[9px] font-bold py-1.5 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(139,92,246,0.12)] text-[rgba(241,240,255,0.5)]">Close</button>
            </div>
          </div>

          {/* Ungated bar */}
          <div className="mx-3 mt-2 rounded-lg py-1.5 text-center border" style={{ background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.3)" }}>
            <span className="font-pixel text-[7px] text-[#4ade80] tracking-wider">UNGATED</span>
          </div>

          {/* Product info */}
          <div className="mx-3 mt-2 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(139,92,246,0.12)] p-3">
            <div className="flex gap-3">
              <div className="w-14 h-18 rounded-lg bg-[rgba(139,92,246,0.08)] border border-[rgba(139,92,246,0.12)] flex items-center justify-center shrink-0">
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5">
                  <rect x="2" y="1" width="16" height="22" rx="2" />
                  <line x1="5" y1="6" x2="15" y2="6" /><line x1="5" y1="9" x2="13" y2="9" /><line x1="5" y1="12" x2="11" y2="12" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-[rgba(241,240,255,0.4)] font-bold mb-0.5">978-0134685991</div>
                <div className="text-[11px] font-black text-[#F1F0FF] leading-tight">The Pragmatic Programmer: Your Journey to Mastery</div>
                <div className="text-[9px] text-[rgba(241,240,255,0.35)] mt-1">Rank #4,231 &middot; 47 sold/mo</div>
              </div>
            </div>
          </div>

          {/* Profit card */}
          <div className="mx-3 mt-2 rounded-xl p-3 border" style={{ background: "rgba(0,255,128,0.06)", borderColor: "rgba(0,255,128,0.25)", boxShadow: "0 0 20px rgba(0,255,128,0.1)" }}>
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div>
                <div className="text-[8px] text-[rgba(241,240,255,0.4)] font-bold mb-0.5">BUY COST</div>
                <div className="text-sm font-black text-[#22D3EE]">$3.50</div>
              </div>
              <div>
                <div className="text-[8px] text-[rgba(241,240,255,0.4)] font-bold mb-0.5">SALE PRICE</div>
                <div className="text-sm font-black text-[#C4B5FD]">$24.99</div>
              </div>
              <div>
                <div className="text-[8px] text-[rgba(241,240,255,0.4)] font-bold mb-0.5">PROFIT</div>
                <div className="text-sm font-black text-[#00ff80] glow-green">$14.27</div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 text-center py-1 rounded-full text-[8px] font-bold bg-[rgba(255,255,255,0.04)] border border-[rgba(139,92,246,0.12)] text-[rgba(241,240,255,0.4)]">Fees $7.22</div>
              <div className="flex-1 text-center py-1 rounded-full text-[8px] font-bold bg-[rgba(255,255,255,0.04)] border border-[rgba(139,92,246,0.12)] text-[rgba(241,240,255,0.4)]">ROI 408%</div>
            </div>
          </div>

          {/* KEEP / AutoKeep row */}
          <div className="mx-3 mt-2 mb-3 flex gap-2">
            <button className="flex-1 py-2.5 rounded-full text-[11px] font-black border" style={{ background: "linear-gradient(135deg, rgba(0,255,128,0.18), rgba(0,200,100,0.12))", borderColor: "rgba(0,255,128,0.7)", color: "#00ff80", boxShadow: "0 0 20px rgba(0,255,128,0.4), 0 0 6px rgba(0,255,128,0.2)", textShadow: "0 0 14px rgba(0,255,128,0.95)" }}>
              KEEP
            </button>
            <button className="px-4 py-2.5 rounded-full text-[9px] font-bold border border-[rgba(52,211,153,0.5)] bg-[rgba(52,211,153,0.08)] text-[#34d399]">
              AutoKeep ON
            </button>
          </div>

          {/* Bottom bar */}
          <div className="flex justify-center pb-3 pt-1">
            <div className="px-6 py-2 rounded-full text-[10px] font-black border" style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.08))", borderColor: "rgba(139,92,246,0.4)", color: "#C4B5FD" }}>
              SCAN
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Inventory Mock ── */
const inventoryItems = [
  { title: "The Pragmatic Programmer", asin: "B07VRS84D1", sku: "FEX-001", qty: 3, price: "$24.99", status: "active", rank: "#4,231" },
  { title: "Clean Code: A Handbook", asin: "B001GSTOAM", sku: "FEX-002", qty: 1, price: "$19.50", status: "active", rank: "#2,847" },
  { title: "Design Patterns: Elements of...", asin: "B000SEIBB8", sku: "FEX-003", qty: 2, price: "$31.00", status: "active", rank: "#8,102" },
  { title: "Refactoring: Improving the...", asin: "B07LCM8RG2", sku: "FEX-004", qty: 0, price: "$22.75", status: "sold", rank: "#5,480" },
  { title: "Introduction to Algorithms", asin: "B08FH8N996", sku: "FEX-005", qty: 1, price: "$42.00", status: "active", rank: "#1,203" },
];

function InventoryMock() {
  return (
    <div className="w-full max-w-[340px] mx-auto">
      <div className="rounded-[32px] border border-[rgba(139,92,246,0.25)] bg-[#06050F] p-3 shadow-2xl overflow-hidden" style={{ boxShadow: "0 0 60px rgba(139,92,246,0.15), 0 25px 50px rgba(0,0,0,0.5)", height: PHONE_HEIGHT }}>
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-2 text-[10px] text-[rgba(241,240,255,0.4)] font-semibold">
          <span>9:41</span>
          <div className="w-20 h-5 rounded-full bg-[#111] mx-auto" />
          <span>100%</span>
        </div>

        <div className="rounded-[20px] overflow-hidden bg-[#0C0A1A]">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="text-[14px] text-[rgba(241,240,255,0.5)]">‹</span>
              <span className="text-xs font-bold text-[rgba(241,240,255,0.5)]">Home</span>
            </div>
            <span className="text-xs font-bold text-[rgba(241,240,255,0.5)]">Inventory</span>
          </div>

          {/* Title */}
          <div className="px-4">
            <h2 className="text-lg font-black text-[#F1F0FF]">Inventory</h2>
            <div className="text-[10px] text-[rgba(241,240,255,0.4)] mt-0.5">Synced from Amazon &middot; 5 items</div>
          </div>

          {/* Stats row */}
          <div className="flex gap-2 px-4 mt-3">
            <div className="flex-1 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(139,92,246,0.12)] p-2.5 text-center">
              <div className="text-[8px] text-[rgba(241,240,255,0.4)] font-bold">TOTAL ITEMS</div>
              <div className="text-sm font-black text-[#C4B5FD]">7</div>
            </div>
            <div className="flex-1 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(139,92,246,0.12)] p-2.5 text-center">
              <div className="text-[8px] text-[rgba(241,240,255,0.4)] font-bold">LISTED VALUE</div>
              <div className="text-sm font-black text-[#22D3EE]">$183.24</div>
            </div>
            <div className="flex-1 rounded-xl bg-[rgba(0,255,128,0.06)] border border-[rgba(0,255,128,0.15)] p-2.5 text-center">
              <div className="text-[8px] text-[rgba(241,240,255,0.4)] font-bold">EST. PROFIT</div>
              <div className="text-sm font-black text-[#00ff80]">$89.52</div>
            </div>
          </div>

          {/* Filter pills */}
          <div className="flex gap-1.5 px-4 mt-3">
            <span className="px-3 py-1 rounded-full text-[9px] font-bold bg-[rgba(139,92,246,0.15)] border border-[rgba(139,92,246,0.3)] text-[#C4B5FD]">All</span>
            <span className="px-3 py-1 rounded-full text-[9px] font-bold bg-[rgba(255,255,255,0.03)] border border-[rgba(139,92,246,0.08)] text-[rgba(241,240,255,0.35)]">FBA</span>
            <span className="px-3 py-1 rounded-full text-[9px] font-bold bg-[rgba(255,255,255,0.03)] border border-[rgba(139,92,246,0.08)] text-[rgba(241,240,255,0.35)]">FBM</span>
            <span className="px-3 py-1 rounded-full text-[9px] font-bold bg-[rgba(255,255,255,0.03)] border border-[rgba(139,92,246,0.08)] text-[rgba(241,240,255,0.35)]">Sold</span>
          </div>

          {/* Item list */}
          <div className="px-3 mt-3 space-y-2 pb-4">
            {inventoryItems.map((item) => (
              <div key={item.sku} className="rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(139,92,246,0.12)] p-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-black text-[#F1F0FF] leading-tight truncate">{item.title}</div>
                    <div className="text-[8px] text-[rgba(241,240,255,0.35)] mt-0.5">
                      {item.sku} &middot; Rank {item.rank}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[11px] font-black text-[#C4B5FD]">{item.price}</div>
                    <div className="flex items-center gap-1 justify-end mt-0.5">
                      {item.status === "sold" ? (
                        <span className="font-pixel text-[6px] px-1.5 py-0.5 rounded bg-[rgba(239,68,68,0.15)] border border-[rgba(239,68,68,0.3)] text-[#f87171]">SOLD</span>
                      ) : (
                        <span className="text-[8px] font-bold text-[rgba(241,240,255,0.35)]">Qty {item.qty}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

