import { getTranslations } from "next-intl/server";
import ClientOnlyShell from "@/components/ClientOnlyShell";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSectionWrapper";
import TowerCompare from "@/components/TowerCompare";
import Team from "@/components/Team";
import Dossier from "@/components/Dossier";
import Footer from "@/components/Footer";
import ScrollRefresh from "@/components/ScrollRefresh";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Santamaría Collection — Curated Luxury Residences in Miami",
  description: "Cipriani Residences, Elle Residences and Domus Brickell. Three curated new construction developments for international buyers. From $500K.",
  alternates: { canonical: "https://www.santamaria-collection.com/en" },
  openGraph: {
    title: "Santamaría Collection — Curated Luxury Residences in Miami",
    description: "Three curated new construction developments in Brickell and Edgewater. Only the exceptional.",
    images: [{ url: "https://www.santamaria-collection.com/images/og/og-home.jpg", width: 1200, height: 630 }],
  },
};

export default async function HomeEn() {
  // Forzar locale inglés para esta ruta
  const locale = "en";
  const prefix = "/en";

  const navT = { cipriani: "Cipriani", elle: "Elle Residences", domus: "Domus Brickell", compare: "Compare", access: "Private Access", lang: "ES" };
  const footerT = {
    tagline: "An editorial selection of new construction residences in Miami. Curated for those who know the difference.",
    collection: "Collection", contact: "Contact", compare: "Compare towers",
    legal: "© 2026 Santamaría Collection. All rights reserved. Images are artistic representations for illustrative purposes only. Prices, timelines, and specifications subject to change without notice. This is not an offer to sell where prohibited by law. Equal housing opportunity.",
  };

  return (
    <>
      <ClientOnlyShell />
      <div id="spotOverlay" aria-hidden="true" />
      <Nav locale={locale} t={navT} />
      <Hero locale={locale} prefix={prefix} t={{
        eyebrow: "Curated ultra-luxury residences",
        h1_1: "The new", h1_2: "standard", h1_3: "of", h1_4: "high design", h1_5: "in Miami.",
        sub: "Three developments selected from everything being built today in Brickell and Edgewater. Only the exceptional.",
        cta_primary: "Request dossier", cta_secondary: "View the collection",
        card_cipriani_meta: "Brickell · Italian Legacy",
        card_elle_meta: "Edgewater · Haute Couture",
        card_domus_meta: "Brickell · Flexible Investment",
      }} />
      <section className="bg-ocean text-cream py-8 px-6 md:px-16 flex flex-wrap gap-6">
        <div className="flex-1 min-w-[45%] md:min-w-0"><div className="font-serif text-4xl font-light text-aqua-lt">3</div><div className="text-[10.5px] tracking-wide uppercase text-charcoal-200">Curated developments</div></div>
        <div className="flex-1 min-w-[45%] md:min-w-0"><div className="font-serif text-4xl font-light text-aqua-lt">1,156</div><div className="text-[10.5px] tracking-wide uppercase text-charcoal-200">Residences</div></div>
        <div className="flex-1 min-w-[45%] md:min-w-0"><div className="font-serif text-4xl font-light text-aqua-lt">950 ft</div><div className="text-[10.5px] tracking-wide uppercase text-charcoal-200">Florida's tallest residential tower</div></div>
        <div className="flex-1 min-w-[45%] md:min-w-0"><div className="font-serif text-4xl font-light text-aqua-lt">$500K</div><div className="text-[10.5px] tracking-wide uppercase text-charcoal-200">Starting price</div></div>
      </section>
      <ProjectSection
        id="cipriani" bgClass="bg-cream" num="No. 01 — The Legacy"
        title={<>Four generations<br /><em className="italic font-light">above Brickell</em></>}
        tag="The first Cipriani residence built from scratch in America"
        body="Florida's tallest residential tower: Venice over Biscayne Bay, by Arquitectonica and 1508 London."
        quote='"True style is singular and timeless. It can be felt, but not described." — Arrigo Cipriani'
        stats={[["397", "residences"], ["85", "floors"], ["Brickell", ""], ["Summer 2027", ""]]}
        linkLabel="View full profile →" linkHref="/en/cipriani-residences"
        linkColor="text-sunset-dk" accentBorder="border-sunset"
        img="/images/cipriani/home_cip.webp" focus={[0.5, 0.45]}
        glow={[0.96, 0.66, 0.36]} base={[0.992, 0.988, 0.984]}
        count={950} countLabel="ft"
      />
      <ProjectSection
        id="elle" bgClass="bg-[#FBF4F2]" flip num="No. 02 — The Editorial"
        title={<><em className="italic font-light">Prêt-à-Vivre.</em><br />The new home of high style</>}
        tag="The world's first ELLE Residences"
        body="The world's first ELLE Residences: contemporary French chic, delivered furnished and move-in ready."
        stats={[["180", "residences"], ["26", "floors"], ["Edgewater", ""], ["Delivery 2026", ""]]}
        linkLabel="View full profile →" linkHref="/en/elle-residences-miami"
        linkColor="text-flamingo-dk" accentBorder="border-flamingo"
        img="/images/elle/home_elle.webp" focus={[0.5, 0.5]}
        glow={[0.91, 0.42, 0.55]} base={[0.984, 0.957, 0.949]}
        count={180} countLabel="residences"
      />
      <ProjectSection
        id="domus" bgClass="bg-[#F2F7F6]" num="No. 03 — The Investment"
        title={<>For those who refuse<br /><em className="italic font-light">to choose</em></>}
        tag="Hotel-style living in the heart of Brickell"
        body="579 furnished flats with hotel management and unrestricted short-term rental. Turnkey investment in Brickell."
        stats={[["579", "units"], ["35", "floors"], ["Brickell", ""], ["Delivery 2028", ""]]}
        linkLabel="View full profile →" linkHref="/en/domus-brickell"
        linkColor="text-aqua-dk" accentBorder="border-aqua"
        img="/images/domus/home_domus.webp" focus={[0.5, 0.5]}
        glow={[0.16, 0.71, 0.68]} base={[0.949, 0.969, 0.965]}
        count={579} countLabel="flats"
      />
      <TowerCompare locale={locale} t={{
        overline: "The collection, to scale", h2: "Three towers.", h2_em: "One city.",
        sub: "Silhouettes proportionally scaled to each development's actual height. Hover over each tower.",
        elle_info: "26 floors · ~300 ft\nEdgewater · From $600K\nDelivery 2026",
        cip_info: "85 floors · 950 ft\nFlorida's tallest residential tower\nBrickell · From $1.8M",
        dom_info: "35 floors · ~400 ft\nBrickell · From $500K\nDelivery 2028",
      }} />
      <Team locale={locale} t={{
        overline: "Who we are",
        h2_1: "The difference between",
        h2_em: "buying and getting it right.",
        p1: "We have spent over a decade in the luxury markets of Marbella, Miami, and New York — long enough to know that the most expensive mistake is not overpaying for a property, but choosing the wrong one.",
        p2: "Santamaría Collection was born from a conviction: the international buyer deserves a curator, not a catalog. That is why we do not present everything being built in Miami.",
        p2_em: "Only what we would buy ourselves.",
        enrique_title: "Chief Executive", maribel_title: "Chief Executive",
      }} />
      <Dossier locale={locale} t={{
        overline: "Private access", h2: "Request your", h2_em: "private", h2_rest: "dossier",
        sub: "Pricing, floor plans, and updated availability for all three developments, directly from the developer's inventory.",
        nombre: "First name", apellidos: "Last name", email: "Email", telefono: "Phone / WhatsApp",
        proyecto_placeholder: "Development of interest",
        opt_cip: "Cipriani Residences Miami", opt_elle: "Elle Residences Miami",
        opt_domus: "Domus Brickell", opt_all: "All three — complete dossier",
        cta: "Request via WhatsApp", reply: "Response within 24h · Also by email:",
        thanks: "Thank you. Complete the message in WhatsApp — we will respond within 24 hours.",
        wa_msg: "Hello, I would like to request the private dossier for Santamaría Collection.\nName: {nombre} {apellidos}\nEmail: {email}\nPhone: {telefono}\nDevelopment: {proyecto}",
      }} />
      <Footer locale={locale} t={footerT} />
      <ScrollRefresh />
    </>
  );
}
