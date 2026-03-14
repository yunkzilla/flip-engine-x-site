import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service — Flip Engine X",
};

export default function TermsPage() {
  return (
    <>
      <div className="aurora" />
      <div className="pixel-grid" />
      <Nav />
      <main className="relative z-10 pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto prose-custom">
          <div className="font-pixel text-[9px] text-[#22D3EE] glow-cyan tracking-widest mb-4">LEGAL</div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#F1F0FF] mb-2">Terms of Service</h1>
          <p className="text-sm text-[rgba(241,240,255,0.35)] mb-10">Last updated: March 14, 2026</p>

          <Section title="1. Acceptance of Terms">
            By accessing or using Flip Engine X ("the Service"), including our website at flipenginex.com and our
            progressive web application, you agree to be bound by these Terms of Service. If you do not agree, do not
            use the Service.
          </Section>

          <Section title="2. Description of Service">
            Flip Engine X is a subscription-based progressive web application (PWA) that provides Amazon FBA resellers
            with barcode scanning, product lookup (via Keepa), profit calculation, inventory management, batch
            management, gating checks, and repricing tools. The Service is accessed through a web browser and can be
            installed on your device without an app store.
          </Section>

          <Section title="3. Account Registration">
            You must create an account to use the Service. You agree to provide accurate, current, and complete
            information during registration and to keep your account information updated. You are responsible for
            maintaining the confidentiality of your login credentials and for all activity under your account.
          </Section>

          <Section title="4. Subscription Plans & Billing">
            <p>The Service is offered through tiered subscription plans (Starter, Pro, Elite, Enterprise) with monthly
            and annual billing options. All plans include a 3-day free trial with Pro-level access.</p>
            <ul>
              <li>Subscriptions automatically renew at the end of each billing cycle unless cancelled.</li>
              <li>You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period.</li>
              <li>Refunds are not provided for partial billing periods.</li>
              <li>We reserve the right to change pricing with 30 days&apos; notice to existing subscribers.</li>
              <li>Add-on services (Repricer, Team Accounts) are billed separately and follow the same renewal terms.</li>
            </ul>
          </Section>

          <Section title="5. Acceptable Use">
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any unlawful purpose or in violation of Amazon&apos;s Terms of Service.</li>
              <li>Attempt to reverse-engineer, decompile, or disassemble the Service.</li>
              <li>Share your account credentials or allow others to access your account (except through authorized Team Accounts).</li>
              <li>Use automated scripts, bots, or scrapers to interact with the Service beyond its intended interface.</li>
              <li>Circumvent scan limits, cooldown periods, or other usage restrictions imposed by your subscription tier.</li>
              <li>Resell, redistribute, or sublicense access to the Service.</li>
            </ul>
          </Section>

          <Section title="6. Scan Limits & Fair Use">
            Each subscription tier includes specific scan allocations and cooldown periods. These limits exist to ensure
            fair usage and system stability. Attempts to circumvent these limits may result in account suspension or
            termination.
          </Section>

          <Section title="7. Third-Party Services">
            The Service integrates with third-party platforms including Amazon Seller Central (SP-API), Keepa, and
            Square for payment processing. Your use of these integrations is subject to the respective third-party
            terms. We are not responsible for the availability, accuracy, or policies of third-party services.
          </Section>

          <Section title="8. Data Accuracy Disclaimer">
            Product data, pricing information, sales rank, and profit calculations provided by the Service are based on
            third-party data sources and are provided for informational purposes only. We do not guarantee the accuracy,
            completeness, or timeliness of this data. You are solely responsible for your purchasing and selling
            decisions.
          </Section>

          <Section title="9. Intellectual Property">
            All content, features, and functionality of the Service — including but not limited to text, graphics,
            logos, icons, and software — are the exclusive property of Flip Engine X and are protected by copyright,
            trademark, and other intellectual property laws.
          </Section>

          <Section title="10. Account Termination">
            We reserve the right to suspend or terminate your account at any time for violation of these Terms or for
            any conduct that we determine, in our sole discretion, to be harmful to other users, the Service, or our
            business interests. Upon termination, your right to use the Service ceases immediately.
          </Section>

          <Section title="11. Limitation of Liability">
            To the maximum extent permitted by law, Flip Engine X and its operators shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
            whether incurred directly or indirectly, arising from your use of the Service. Our total liability shall not
            exceed the amount you paid for the Service in the 12 months preceding the claim.
          </Section>

          <Section title="12. Disclaimer of Warranties">
            The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or
            implied, including but not limited to implied warranties of merchantability, fitness for a particular
            purpose, and non-infringement.
          </Section>

          <Section title="13. Changes to Terms">
            We may update these Terms from time to time. We will notify you of material changes via email or through
            the Service. Your continued use of the Service after changes take effect constitutes acceptance of the
            revised Terms.
          </Section>

          <Section title="14. Contact">
            Questions about these Terms? Contact us at{" "}
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
