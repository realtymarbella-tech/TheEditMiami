import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Santamaría Collection",
  description: "Privacy policy and data protection for Santamaría Collection. GDPR compliant.",
  alternates: { canonical: "https://www.santamaria-collection.com/en/privacy" },
};

export default function Privacy() {
  return (
    <div className="bg-cream text-charcoal-950 min-h-screen">
      <nav className="sticky top-0 z-10 bg-cream/90 backdrop-blur-sm border-b border-charcoal-100 px-6 md:px-16 h-16 flex items-center">
        <Link href="/en" className="font-serif text-base tracking-wide">← Santamaría Collection</Link>
      </nav>
      <main className="max-w-3xl mx-auto px-6 md:px-0 py-16 md:py-24">
        <div className="text-[11px] font-medium tracking-[0.28em] uppercase text-rose mb-4">Legal documents</div>
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Privacy Policy</h1>
        <p className="text-sm text-charcoal-400 mb-12">Last updated: August 2026</p>
        <div className="prose prose-lg font-light leading-loose text-charcoal-700 space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">1. Data Controller</h2>
            <p><strong>Santamaría Collection</strong><br />
            Contact: <a href="mailto:info@santamaria-collection.com" className="text-rose underline">info@santamaria-collection.com</a><br />
            Marbella, Spain · Miami, Florida, USA</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">2. Data We Collect</h2>
            <p>Through the dossier request form, we collect the following personal data: first and last name, email address, phone number / WhatsApp, and development of interest. We do not collect sensitive data, data from minors, or perform automated profiling.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">3. Purpose and Legal Basis</h2>
            <p><strong>Processing your request</strong> — to respond to your dossier request and contact you regarding developments of interest. Legal basis: pre-contractual relationship (Art. 6.1.b GDPR).</p>
            <p><strong>Commercial communications</strong> — to send you information about other developments, only with your express authorization. Legal basis: consent (Art. 6.1.a GDPR).</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">4. Data Recipients</h2>
            <p>Your data may be shared with: <strong>Supabase Inc.</strong> (database platform, US servers with adequate data protection guarantees); <strong>Meta Platforms (WhatsApp)</strong> when you choose to complete your request via WhatsApp; and <strong>development promoters</strong> (Mast Capital/Fortune, Vertical Developments, North Development) when you request information on a specific development. We do not sell or share your data for advertising purposes.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">5. Data Retention</h2>
            <p>We retain your data for as long as necessary to manage your request and any resulting commercial relationship, with a maximum of 3 years from last contact, after which data will be deleted or anonymized.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">6. Your Rights</h2>
            <p>Under GDPR, you have the right to access, rectify, erase, object to, restrict, or port your personal data. To exercise any of these rights, contact us at <a href="mailto:info@santamaria-collection.com" className="text-rose underline">info@santamaria-collection.com</a>. You may also lodge a complaint with your local data protection authority.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">7. Cookies</h2>
            <p>This website uses only one technical cookie (<code>locale</code>) to remember your language preference. We do not use tracking, analytics, or third-party advertising cookies.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">8. Security</h2>
            <p>Your data is transmitted via encrypted connections (HTTPS/TLS) and stored in databases protected with Row Level Security, preventing unauthorized browser access to your data.</p>
          </section>
        </div>
        <div className="mt-16 pt-8 border-t border-charcoal-100 flex gap-6 text-sm text-charcoal-400">
          <Link href="/en/legal" className="hover:text-charcoal-950 transition-colors">Legal Notice →</Link>
          <Link href="/en" className="hover:text-charcoal-950 transition-colors">Back to home</Link>
        </div>
      </main>
    </div>
  );
}
