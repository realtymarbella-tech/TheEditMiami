import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Notice | Santamaría Collection",
  description: "Legal notice, terms of use and disclaimer for Santamaría Collection.",
  alternates: { canonical: "https://www.santamaria-collection.com/en/legal" },
};

export default function Legal() {
  return (
    <script dangerouslySetInnerHTML={{ __html: "document.body.classList.add('no-loader','loaded')" }} />
      <div style={{ background: "#FDFCFB", color: "#121210", minHeight: "100vh" }}>
      <nav style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(253,252,251,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid #E8E3DC", padding: "0 3rem", height: "64px", display: "flex", alignItems: "center" }}>
        <Link href="/en" className="font-serif text-base tracking-wide">← Santamaría Collection</Link>
      </nav>
      <main className="max-w-3xl mx-auto px-6 md:px-0 py-16 md:py-24">
        <div className="text-[11px] font-medium tracking-[0.28em] uppercase text-rose mb-4">Legal documents</div>
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-12">Legal Notice</h1>
        <div className="prose prose-lg font-light leading-loose text-charcoal-700 space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">1. Company Information</h2>
            <p>Santamaría Collection is a real estate advisory platform specializing in curated new construction residential developments in Miami, Florida. We are not developers, builders, or direct sellers of the properties presented. We act as intermediaries and advisors for international buyers.</p>
            <p>Contact: <a href="mailto:info@santamaria-collection.com" className="text-rose underline">info@santamaria-collection.com</a></p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">2. Disclaimer on Pricing and Availability</h2>
            <p>All information on this website regarding pricing, unit types, sizes, delivery dates, availability, and development features is <strong>for illustrative purposes only</strong>. Prices, terms, and conditions are subject to change without notice and are set exclusively by each development's promoter. Santamaría Collection does not guarantee the accuracy, completeness, or currency of any published data.</p>
            <p>Images, renderings, videos, and artistic representations are <strong>for illustrative purposes only</strong> and may not correspond exactly to the final delivered product.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">3. Not an Offer to Sell</h2>
            <p>This website and its content do not constitute, under any circumstances, an offer, promise of sale, purchase agreement, or binding contractual documentation. No information published on this site should be interpreted as such. Any real estate transaction must be formalized through the official documents of the corresponding developer, reviewed by independent legal counsel.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">4. Intellectual Property</h2>
            <p>All content on this website — text, images, videos, design, and code — is the property of Santamaría Collection or its legitimate owners, and is protected by applicable intellectual property law. Reproduction in whole or in part without express authorization is prohibited.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">5. Equal Housing Opportunity</h2>
            <p>Santamaría Collection operates under equal housing opportunity principles. We do not discriminate on the basis of race, color, religion, sex, disability, familial status, or national origin, in compliance with the Fair Housing Act of the United States.</p>
          </section>
        </div>
        <div className="mt-16 pt-8 border-t border-charcoal-100 flex gap-6 text-sm text-charcoal-400">
          <Link href="/en/privacy" className="hover:text-charcoal-950 transition-colors">Privacy Policy →</Link>
          <Link href="/en" className="hover:text-charcoal-950 transition-colors">Back to home</Link>
        </div>
      </main>
    </div>
  );
}
