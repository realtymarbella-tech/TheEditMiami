import type { Metadata } from "next";
import Link from "next/link";
import NoLoader from "@/components/NoLoader";

export const metadata: Metadata = {
  title: "Legal Notice | Santamaría Collection",
  description: "Legal notice, terms of use and disclaimer for Santamaría Collection.",
  alternates: { canonical: "https://www.santamaria-collection.com/en/legal" },
};

export default function Legal() {
  return (
    <div style={{ background: "#FDFCFB", color: "#121210", minHeight: "100vh" }}>
      <NoLoader />
      <nav style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(253,252,251,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid #E8E3DC", padding: "0 3rem", height: "64px", display: "flex", alignItems: "center" }}>
        <Link href="/en" className="font-serif text-base tracking-wide">← Santamaría Collection</Link>
      </nav>
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24" style={{ color: "#3D3C38" }}>
        <div className="text-[11px] font-medium tracking-[0.28em] uppercase text-rose mb-4">Legal documents</div>
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-12" style={{ color: "#121210" }}>Legal Notice</h1>
        <div className="space-y-10 font-light leading-loose">
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>1. Company Information</h2>
            <p>Santamaría Collection is a real estate advisory platform specializing in curated new construction residential developments in Miami, Florida. We are not developers or direct sellers. We act as intermediaries and advisors for international buyers.</p>
            <p className="mt-3">Contact: <a href="mailto:info@santamaria-collection.com" className="text-rose underline">info@santamaria-collection.com</a></p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>2. Disclaimer on Pricing and Availability</h2>
            <p>All information regarding pricing, unit types, sizes, delivery dates, and availability is <strong>for illustrative purposes only</strong>. Prices are subject to change without notice and are set exclusively by each development's promoter. Images and renderings are artistic representations.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>3. Not an Offer to Sell</h2>
            <p>This website does not constitute an offer, promise of sale, or binding contract. Any transaction must be formalized through official developer documents, reviewed by independent legal counsel.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>4. Intellectual Property</h2>
            <p>All content — text, images, videos, design and code — is the property of Santamaría Collection or its legitimate owners. Reproduction without express authorization is prohibited.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>5. Equal Housing Opportunity</h2>
            <p>Santamaría Collection operates under equal housing opportunity principles. We do not discriminate on the basis of race, color, religion, sex, disability, familial status, or national origin, in compliance with the Fair Housing Act.</p>
          </section>
        </div>
        <div className="mt-16 pt-8 flex gap-6 text-sm" style={{ borderTop: "1px solid #E8E3DC", color: "#8A8278" }}>
          <Link href="/en/privacy" className="hover:text-charcoal-950 transition-colors">Privacy Policy →</Link>
          <Link href="/en" className="hover:text-charcoal-950 transition-colors">Back to home</Link>
        </div>
      </main>
    </div>
  );
}
