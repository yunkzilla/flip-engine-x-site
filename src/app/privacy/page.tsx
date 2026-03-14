import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — Flip Engine X",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="aurora" />
      <div className="pixel-grid" />
      <Nav />
      <main className="relative z-10 pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto prose-custom">
          <div className="font-pixel text-[9px] text-[#22D3EE] glow-cyan tracking-widest mb-4">LEGAL</div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#F1F0FF] mb-2">Privacy Policy</h1>
          <p className="text-sm text-[rgba(241,240,255,0.35)] mb-10">Last updated: March 14, 2026</p>

          <Section title="1. Introduction">
            Flip Engine X ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, store, and protect your personal information when you use our progressive web
            application and website at flipenginex.com.
          </Section>

          <Section title="2. Information We Collect">
            <p className="font-semibold text-[rgba(241,240,255,0.7)] mb-2">Account Information</p>
            <ul>
              <li>Email address (required for account creation)</li>
              <li>Name (if provided)</li>
              <li>Authentication data (hashed passwords, OAuth tokens for Google sign-in)</li>
            </ul>

            <p className="font-semibold text-[rgba(241,240,255,0.7)] mb-2 mt-4">Subscription & Payment Data</p>
            <ul>
              <li>Subscription tier and billing cycle</li>
              <li>Payment information is processed securely by Square — we never store your full credit card number, CVV, or other sensitive payment details on our servers.</li>
              <li>Square customer ID and subscription ID for managing your account</li>
            </ul>

            <p className="font-semibold text-[rgba(241,240,255,0.7)] mb-2 mt-4">Usage Data</p>
            <ul>
              <li>Scan history and scan logs (barcodes scanned, timestamps)</li>
              <li>Product lookup results and saved records</li>
              <li>Trigger configurations and batch data</li>
              <li>App settings and preferences</li>
            </ul>

            <p className="font-semibold text-[rgba(241,240,255,0.7)] mb-2 mt-4">Amazon Seller Data (SP-API)</p>
            <ul>
              <li>If you connect your Amazon Seller Central account, we access inventory, pricing, and gating data through Amazon&apos;s SP-API. This data is used solely to provide Service functionality and is not shared with third parties.</li>
            </ul>

            <p className="font-semibold text-[rgba(241,240,255,0.7)] mb-2 mt-4">Device & Technical Data</p>
            <ul>
              <li>Browser type and version</li>
              <li>Device type (mobile, desktop)</li>
              <li>IP address (for security and abuse prevention)</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <ul>
              <li>Provide, maintain, and improve the Service</li>
              <li>Process subscriptions and payments</li>
              <li>Sync your data across devices (scan history, triggers, batches, settings)</li>
              <li>Enforce scan limits and subscription tier restrictions</li>
              <li>Send transactional emails (account verification, password resets, billing receipts)</li>
              <li>Respond to support requests</li>
              <li>Detect and prevent fraud or abuse</li>
            </ul>
          </Section>

          <Section title="4. Data Storage & Security">
            <p>Your data is stored securely using industry-standard practices:</p>
            <ul>
              <li><strong className="text-[rgba(241,240,255,0.7)]">Database:</strong> All user data is stored in Supabase (hosted on AWS) with row-level security (RLS) policies ensuring users can only access their own data.</li>
              <li><strong className="text-[rgba(241,240,255,0.7)]">Authentication:</strong> Passwords are hashed using bcrypt. We support OAuth (Google) and magic link authentication through Supabase Auth.</li>
              <li><strong className="text-[rgba(241,240,255,0.7)]">Payments:</strong> All payment processing is handled by Square. Card data is tokenized client-side using Square&apos;s Web Payments SDK — sensitive payment information never touches our servers.</li>
              <li><strong className="text-[rgba(241,240,255,0.7)]">Encryption:</strong> All data in transit is encrypted via TLS/HTTPS. Data at rest is encrypted by our infrastructure providers.</li>
              <li><strong className="text-[rgba(241,240,255,0.7)]">Access Control:</strong> API endpoints are protected by authentication middleware. Database access is restricted by row-level security policies.</li>
            </ul>
          </Section>

          <Section title="5. Data Sharing">
            <p>We do not sell, rent, or trade your personal information. We share data only with:</p>
            <ul>
              <li><strong className="text-[rgba(241,240,255,0.7)]">Supabase:</strong> Database hosting and authentication (data processor)</li>
              <li><strong className="text-[rgba(241,240,255,0.7)]">Square:</strong> Payment processing</li>
              <li><strong className="text-[rgba(241,240,255,0.7)]">Keepa:</strong> Product data lookups (only barcode/ASIN data is sent — no personal information)</li>
              <li><strong className="text-[rgba(241,240,255,0.7)]">Amazon SP-API:</strong> Only when you explicitly connect your Seller Central account</li>
              <li><strong className="text-[rgba(241,240,255,0.7)]">Vercel:</strong> Application hosting</li>
            </ul>
            <p className="mt-3">We may disclose information if required by law, court order, or to protect the rights, property, or safety of our users or the public.</p>
          </Section>

          <Section title="6. Data Retention">
            <ul>
              <li>Account data is retained for as long as your account is active.</li>
              <li>Scan logs and usage data are retained for up to 12 months after your last activity.</li>
              <li>Upon account deletion, all personal data is permanently removed within 30 days.</li>
              <li>Payment records may be retained as required by financial regulations.</li>
            </ul>
          </Section>

          <Section title="7. Your Rights">
            <p>You have the right to:</p>
            <ul>
              <li><strong className="text-[rgba(241,240,255,0.7)]">Access</strong> your personal data stored by the Service</li>
              <li><strong className="text-[rgba(241,240,255,0.7)]">Correct</strong> inaccurate or incomplete data</li>
              <li><strong className="text-[rgba(241,240,255,0.7)]">Delete</strong> your account and all associated data</li>
              <li><strong className="text-[rgba(241,240,255,0.7)]">Export</strong> your data in a portable format</li>
              <li><strong className="text-[rgba(241,240,255,0.7)]">Disconnect</strong> third-party integrations (Amazon SP-API) at any time</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at{" "}
              <a href="mailto:info@flipenginex.com" className="text-[#8B5CF6] hover:text-[#C4B5FD] transition-colors">
                info@flipenginex.com
              </a>.
            </p>
          </Section>

          <Section title="8. Cookies & Local Storage">
            The Service uses browser local storage and cookies for authentication tokens, user preferences, and offline
            functionality (PWA). We do not use third-party tracking cookies or advertising trackers.
          </Section>

          <Section title="9. Children&apos;s Privacy">
            The Service is not intended for users under the age of 18. We do not knowingly collect personal information
            from minors. If we learn that we have collected data from a user under 18, we will promptly delete that
            information.
          </Section>

          <Section title="10. Changes to This Policy">
            We may update this Privacy Policy from time to time. We will notify you of material changes via email or
            through the Service. The &quot;Last updated&quot; date at the top of this page reflects the most recent revision.
          </Section>

          <Section title="11. Contact Us">
            If you have questions or concerns about this Privacy Policy or how your data is handled, contact us at{" "}
            <a href="mailto:info@flipenginex.com" className="text-[#8B5CF6] hover:text-[#C4B5FD] transition-colors">
              info@flipenginex.com
            </a>.
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-[#C4B5FD] mb-3">{title}</h2>
      <div className="text-sm text-[rgba(241,240,255,0.55)] leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-[rgba(241,240,255,0.55)]">
        {children}
      </div>
    </div>
  );
}
