"use client";

import { useState, useEffect, useMemo } from "react";

const APP_LOGIN_URL = "https://app.flipenginex.com/login?returnTo=%2Fplans%3Fplan%3Dstarter%26billing%3Dmonthly";

type Platform = "ios" | "android" | "mac" | "windows" | "other";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "other";
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  if (/Android/.test(ua)) return "android";
  if (/Macintosh|Mac OS/.test(ua)) return "mac";
  if (/Windows/.test(ua)) return "windows";
  return "other";
}

const PLAN_OPTIONS = [
  { value: "starter", label: "Starter — $19.99/mo" },
  { value: "pro", label: "Pro — $49.99/mo" },
  { value: "elite", label: "Elite — $99.99/mo" },
  { value: "enterprise", label: "Enterprise — $199.99/mo" },
  { value: "undecided", label: "Not sure yet" },
];

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export default function WaitlistModal({ open, onClose, initialPlan = "undecided" }: WaitlistModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState(initialPlan);
  const [emailOptIn, setEmailOptIn] = useState(true);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "duplicate" | "error">("idle");
  const platform = useMemo(() => detectPlatform(), []);

  useEffect(() => {
    if (open) {
      setPlan(initialPlan);
      setStatus("idle");
      setName("");
      setEmail("");
    }
  }, [open, initialPlan]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), plan, emailOptIn }),
      });

      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setStatus(data.duplicate ? "duplicate" : "sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative glass-card laser-border rounded-2xl p-8 w-full max-w-md fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[rgba(241,240,255,0.3)] hover:text-[rgba(241,240,255,0.7)] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {status === "duplicate" ? (
          <div className="text-center py-6">
            <div className="text-4xl mb-4">👾</div>
            <div className="font-pixel text-[10px] text-[#22D3EE] glow-cyan tracking-widest mb-3">
              ALREADY REGISTERED
            </div>
            <h3 className="text-xl font-black text-[#F1F0FF] mb-2">
              You&apos;re Already on the List
            </h3>
            <p className="text-sm text-[rgba(241,240,255,0.55)] mb-6">
              This email is already signed up for early access.
              We&apos;ll notify you when it&apos;s time to flip.
            </p>

            <TrialCTAs platform={platform} />
          </div>
        ) : status === "sent" ? (
          <div className="text-center py-6">
            <div className="text-4xl mb-4">🎮</div>
            <div className="font-pixel text-[10px] text-[#00ff80] glow-green tracking-widest mb-3">
              YOU&apos;RE IN!
            </div>
            <h3 className="text-xl font-black text-[#F1F0FF] mb-2">
              Spot Reserved
            </h3>
            <p className="text-sm text-[rgba(241,240,255,0.55)] mb-4">
              We&apos;ll notify you when early access drops in April.
              Founders get an exclusive achievement badge.
            </p>
            <div className="inline-block mb-6">
              <FoundersBadgePreview />
            </div>

            <TrialCTAs platform={platform} />
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="font-pixel text-[9px] text-[#FDE047] glow-yellow tracking-widest mb-3">
                EARLY ACCESS
              </div>
              <h3 className="text-2xl font-black text-[#F1F0FF] mb-2">
                Reserve Your Spot
              </h3>
              <p className="text-sm text-[rgba(241,240,255,0.55)] leading-relaxed">
                Join the waitlist for exclusive early access in April.
                Founders get a permanent achievement badge on their account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[rgba(241,240,255,0.5)] mb-1.5 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl text-sm text-[#F1F0FF] placeholder:text-[rgba(241,240,255,0.25)] outline-none transition-all focus:ring-2 focus:ring-[#8B5CF6]"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(139,92,246,0.2)",
                  }}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[rgba(241,240,255,0.5)] mb-1.5 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm text-[#F1F0FF] placeholder:text-[rgba(241,240,255,0.25)] outline-none transition-all focus:ring-2 focus:ring-[#8B5CF6]"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(139,92,246,0.2)",
                  }}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[rgba(241,240,255,0.5)] mb-1.5 uppercase tracking-wider">
                  Interested Plan
                </label>
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm text-[#F1F0FF] outline-none transition-all focus:ring-2 focus:ring-[#8B5CF6] appearance-none"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(139,92,246,0.2)",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='rgba(241,240,255,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  {PLAN_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} style={{ background: "#0C0A1A", color: "#F1F0FF" }}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailOptIn}
                  onChange={(e) => setEmailOptIn(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded accent-[#8B5CF6] shrink-0"
                />
                <span className="text-xs text-[rgba(241,240,255,0.45)] leading-relaxed">
                  I agree to receive email updates about Flip Engine X, including launch announcements, feature updates, and exclusive offers. You can unsubscribe at any time.
                </span>
              </label>

              {status === "error" && (
                <p className="text-xs text-[#ef4444] text-center">
                  Something went wrong. Try again or email us at{" "}
                  <a href="mailto:info@flipenginex.com" className="underline">info@flipenginex.com</a>
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="cta-btn cta-btn-green w-full justify-center"
                style={{ opacity: status === "sending" ? 0.6 : 1 }}
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2v4m0 12v4m-7.07-3.93 2.83-2.83m8.48-8.48 2.83-2.83M2 12h4m12 0h4m-3.93 7.07-2.83-2.83M7.76 7.76 4.93 4.93" />
                    </svg>
                    Reserving...
                  </>
                ) : (
                  <>
                    Reserve My Spot
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            <p className="text-[10px] text-[rgba(241,240,255,0.25)] text-center mt-4">
              Start your free 3-day Starter trial after signing up.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

/* Platform-aware trial CTAs */
function TrialCTAs({ platform }: { platform: Platform }) {
  const isMobile = platform === "ios" || platform === "android";

  const installLabel = platform === "ios"
    ? "Install App — Add to Home Screen"
    : platform === "android"
      ? "Install App — Add to Home Screen"
      : platform === "mac"
        ? "Install App — Mac (Chrome)"
        : platform === "windows"
          ? "Install App — Windows (Chrome/Edge)"
          : "Install App (PWA)";

  const installHint = platform === "ios"
    ? "Open in Safari, tap the share button ↑ then \"Add to Home Screen\""
    : platform === "android"
      ? "Open in Chrome, tap ⋮ menu → \"Install app\" or \"Add to Home Screen\""
      : platform === "mac"
        ? "Open in Chrome, click the install icon in the address bar"
        : platform === "windows"
          ? "Open in Chrome or Edge, click the install icon in the address bar"
          : "Open in Chrome and install from the address bar";

  return (
    <>
      <div className="font-pixel text-[8px] text-[rgba(241,240,255,0.4)] tracking-widest mb-3">
        START YOUR FREE TRIAL NOW
      </div>
      <div className="flex flex-col gap-3">
        <a
          href={APP_LOGIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn-green w-full justify-center"
        >
          {isMobile ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          )}
          {installLabel}
        </a>
        <a
          href={APP_LOGIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn-primary w-full justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {isMobile ? (
              <><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></>
            ) : (
              <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>
            )}
          </svg>
          Use in Browser
        </a>
      </div>
      <p className="text-[10px] text-[rgba(241,240,255,0.25)] mt-3 leading-relaxed">
        {installHint}
      </p>
    </>
  );
}

/* Small inline preview of the Founders badge */
function FoundersBadgePreview() {
  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-xl mt-2" style={{ background: "rgba(253,224,71,0.08)", border: "1px solid rgba(253,224,71,0.25)" }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield base */}
        <path d="M16 2L4 8v8c0 7.18 5.12 13.4 12 14.93C22.88 29.4 28 23.18 28 16V8L16 2z" fill="rgba(253,224,71,0.15)" stroke="#FDE047" strokeWidth="1.5"/>
        {/* Star */}
        <path d="M16 8l2.35 4.76 5.25.77-3.8 3.7.9 5.23L16 19.98l-4.7 2.48.9-5.23-3.8-3.7 5.25-.77L16 8z" fill="#FDE047" stroke="#FDE047" strokeWidth="0.5"/>
        {/* Pixel corners */}
        <rect x="6" y="6" width="2" height="2" fill="#FDE047" opacity="0.6"/>
        <rect x="24" y="6" width="2" height="2" fill="#FDE047" opacity="0.6"/>
        <rect x="6" y="22" width="2" height="2" fill="#FDE047" opacity="0.4"/>
        <rect x="24" y="22" width="2" height="2" fill="#FDE047" opacity="0.4"/>
      </svg>
      <div className="text-left">
        <div className="font-pixel text-[7px] text-[#FDE047] glow-yellow tracking-wider">FOUNDER</div>
        <div className="text-[10px] text-[rgba(241,240,255,0.5)]">Early Access Badge</div>
      </div>
    </div>
  );
}
