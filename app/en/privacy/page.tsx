import type { Metadata } from "next";
import Link from "next/link";
import NoLoader from "@/components/NoLoader";

export const metadata: Metadata = {
  title: "Privacy Policy | Santamaría Collection",
  description: "Privacy policy and data protection for Santamaría Collection. GDPR compliant.",
  alternates: { canonical: "https://www.santamaria-collection.com/en/privacy" },
};

export default function Privacy() {
  return (
    <div style={{ background: "#FDFCFB", color: "#121210", minHeight: "100vh" }}>
      <NoLoader />
      <nav style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(253,252,251,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid #E8E3DC", padding: "0 3rem", height: "64px", display: "flex", alignItems: "center" }}>
        <Link href="/en" className="font-serif text-base tracking-wide">← Santamaría Collection</Link>
      </nav>
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24" style={{ color: "#3D3C38" }}>
        <div className="text-[11px] font-medium tracking-[0.28em] uppercase text-rose mb-4">Legal documents</div>
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-4" style={{ color: "#121210" }}>Privacy Policy</h1>
        <p className="text-sm mb-12" style={{ color: "#8A8278" }}>Last updated: August 2026</p>
        <div className="space-y-10 font-light leading-loose">
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>1. Data Controller</h2>
            <p><strong>Santamaría Collection</strong> — <a href="mailto:info@santamaria-collection.com" className="text-rose underline">info@santamaria-collection.com</a> — Marbella, Spain · Miami, Florida, USA</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>2. Data We Collect</h2>
            <p>Through the request form we collect: first and last name, email address, phone/WhatsApp, and development of interest. We do not collect sensitive data or data from minors.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>3. Purpose and Legal Basis</h2>
            <p><strong>Processing your request</strong> — to respond to your inquiry. Legal basis: pre-contractual relationship (Art. 6.1.b GDPR).</p>
            <p className="mt-3"><strong>Commercial communications</strong> — only with your express consent. Legal basis: consent (Art. 6.1.a GDPR).</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>4. Data Recipients</h2>
            <p>Your data may be shared with: <strong>Supabase Inc.</strong> (database, US servers); <strong>Meta/WhatsApp</strong> when you complete your request via that channel; and <strong>development promoters</strong> with your knowledge. We do not sell your data.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>5. Data Retention</h2>
            <p>We retain your data for a maximum of 3 years from last contact, after which it will be deleted or anonymized.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>6. Your Rights</h2>
            <p>You may exercise your rights of access, rectification, erasure, objection, restriction, and portability by writing to <a href="mailto:info@santamaria-collection.com" className="text-rose underline">info@santamaria-collection.com</a>.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>7. Cookies</h2>
            <p>We use only one technical language preference cookie. No tracking or advertising cookies are used.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>8. Security</h2>
            <p>Data is transmitted via HTTPS/TLS and stored with Row Level Security preventing unauthorized access.</p>
          </section>
        </div>
        <div className="mt-16 pt-8 flex gap-6 text-sm" style={{ borderTop: "1px solid #E8E3DC", color: "#8A8278" }}>
          <Link href="/en/legal" className="hover:text-charcoal-950 transition-colors">Legal Notice →</Link>
          <Link href="/en" className="hover:text-charcoal-950 transition-colors">Back to home</Link>
        </div>
      </main>
    </div>
  );
}
