"use client";

import { useState, FormEvent } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <div className="aurora" />
      <div className="pixel-grid" />
      <Nav />
      <main className="relative z-10 pt-28 pb-20 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <div className="font-pixel text-[9px] text-[#22D3EE] glow-cyan tracking-widest mb-4">CONTACT</div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#F1F0FF] mb-4">Get In Touch</h1>
            <p className="text-[rgba(241,240,255,0.55)] text-lg">
              Have a question, need support, or want to talk enterprise? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            {status === "sent" ? (
              <div className="text-center py-10">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00ff80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <h2 className="text-xl font-bold text-[#F1F0FF] mb-2">Message Sent</h2>
                <p className="text-sm text-[rgba(241,240,255,0.55)]">
                  We&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-[#8B5CF6] hover:text-[#C4B5FD] font-semibold transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[rgba(241,240,255,0.5)] mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg px-4 py-3 text-sm text-[#F1F0FF] placeholder-[rgba(241,240,255,0.25)] outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all"
                    style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)" }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[rgba(241,240,255,0.5)] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg px-4 py-3 text-sm text-[#F1F0FF] placeholder-[rgba(241,240,255,0.25)] outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all"
                    style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)" }}
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-[rgba(241,240,255,0.5)] mb-1.5">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-lg px-4 py-3 text-sm text-[#F1F0FF] outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all appearance-none"
                    style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)" }}
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-[#0C0A1A]">Select a topic</option>
                    <option value="General Question" className="bg-[#0C0A1A]">General Question</option>
                    <option value="Support" className="bg-[#0C0A1A]">Support</option>
                    <option value="Billing" className="bg-[#0C0A1A]">Billing</option>
                    <option value="Enterprise Inquiry" className="bg-[#0C0A1A]">Enterprise Inquiry</option>
                    <option value="Bug Report" className="bg-[#0C0A1A]">Bug Report</option>
                    <option value="Feature Request" className="bg-[#0C0A1A]">Feature Request</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[rgba(241,240,255,0.5)] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-lg px-4 py-3 text-sm text-[#F1F0FF] placeholder-[rgba(241,240,255,0.25)] outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all resize-none"
                    style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)" }}
                    placeholder="How can we help?"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-[#f87171] font-semibold">
                    Something went wrong. Please try again or email us directly at info@flipenginex.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="cta-btn cta-btn-green w-full justify-center disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                  {status !== "sending" && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 text-center text-sm text-[rgba(241,240,255,0.35)] font-semibold">
            Or email us directly at{" "}
            <a href="mailto:info@flipenginex.com" className="text-[#8B5CF6] hover:text-[#C4B5FD] transition-colors">
              info@flipenginex.com
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
