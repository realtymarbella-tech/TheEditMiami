import { getLocale, getTranslations } from "next-intl/server";
import ClientOnlyShell from "@/components/ClientOnlyShell";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSectionWrapper";
import TowerCompare from "@/components/TowerCompare";
import Team from "@/components/Team";
import Dossier from "@/components/Dossier";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";
import ScrollRefresh from "@/components/ScrollRefresh";

export default async function Home() {
  const locale = await getLocale();
  const tNav = await getTranslations("nav");
  const tHero = await getTranslations("hero");
  const tStats = await getTranslations("stats");
  const tCompare = await getTranslations("compare");
  const tTeam = await getTranslations("team");
  const tDossier = await getTranslations("dossier");
  const tFooter = await getTranslations("footer");
  const tProjects = await getTranslations("projects");

  const navT = { cipriani: tNav("cipriani"), elle: tNav("elle"), domus: tNav("domus"), compare: tNav("compare"), access: tNav("access"), lang: tNav("lang") };
  const footerT = { tagline: tFooter("tagline"), collection: tFooter("collection"), contact: tFooter("contact"), compare: tFooter("compare"), legal: tFooter("legal"), legalLink: tFooter("legalLink"), privacyLink: tFooter("privacyLink") };

  const isEn = locale === "en";
  const prefix = isEn ? "/en" : "";

  return (
    <>
      <ClientOnlyShell />
      <div id="spotOverlay" aria-hidden="true" />
      <Nav locale={locale} t={navT} />
      <Hero locale={locale} t={{
        eyebrow: tHero("eyebrow"),
        h1_1: tHero("h1_1"), h1_2: tHero("h1_2"), h1_3: tHero("h1_3"), h1_4: tHero("h1_4"), h1_5: tHero("h1_5"),
        sub: tHero("sub"), cta_primary: tHero("cta_primary"), cta_secondary: tHero("cta_secondary"),
        card_cipriani_meta: tHero("card_cipriani_meta"),
        card_elle_meta: tHero("card_elle_meta"),
        card_domus_meta: tHero("card_domus_meta"),
      }} prefix={prefix} />
      <Ticker locale="es" />

      <ProjectSection
        id="cipriani" bgClass="bg-cream" num="N.º 01 — El Legado"
        title={<>Cuatro generaciones<br /><em className="italic font-light">sobre Brickell</em></>}
        tag={isEn ? "The first Cipriani residence built from scratch in America" : "La primera residencia Cipriani construida desde cero en América"}
        body={isEn ? "Florida's tallest residential tower: Venice over Biscayne Bay, by Arquitectonica and 1508 London." : "La torre residencial más alta de Florida: Venecia sobre Biscayne Bay, firmada por Arquitectonica y 1508 London."}
        quote={isEn ? '"True style is singular and timeless. It can be felt, but not described." — Arrigo Cipriani' : '"El verdadero estilo es singular y atemporal. Puede sentirse, pero no describirse." — Arrigo Cipriani'}
        stats={[["397", isEn ? "residences" : "residencias"], ["85", isEn ? "floors" : "plantas"], ["Brickell", ""], [isEn ? "Summer 2027" : "Verano 2027", ""]]}
        linkLabel={tProjects("view")} linkHref={`${prefix}/cipriani-residences`}
        linkColor="text-sunset-dk" accentBorder="border-sunset"
        img="/images/cipriani/home_cip.webp" focus={[0.5, 0.45]}
        glow={[0.96, 0.66, 0.36]} base={[0.992, 0.988, 0.984]}
        count={950} countLabel="ft"
      />

      <ProjectSection
        id="elle" bgClass="bg-[#FBF4F2]" flip num="N.º 02 — La Editorial"
        title={<><em className="italic font-light">Prêt-à-Vivre.</em><br />{isEn ? "The new home of high style" : "El nuevo hogar del alto estilo"}</>}
        tag={isEn ? "The world's first ELLE Residences" : "La primera ELLE Residences del mundo"}
        body={isEn ? "The world's first ELLE Residences: contemporary French chic, delivered furnished and move-in ready." : "La primera ELLE Residences del mundo: chic francés contemporáneo, entregada amueblada y lista para vivir."}
        stats={[["180", isEn ? "residences" : "unidades"], ["26", isEn ? "floors" : "plantas"], ["Edgewater", ""], [isEn ? "Delivery 2026" : "Entrega 2026", ""]]}
        linkLabel={tProjects("view")} linkHref={`${prefix}/elle-residences-miami`}
        linkColor="text-flamingo-dk" accentBorder="border-flamingo"
        img="/images/elle/home_elle.webp" focus={[0.5, 0.5]}
        glow={[0.91, 0.42, 0.55]} base={[0.984, 0.957, 0.949]}
        count={180} countLabel={isEn ? "residences" : "residencias"}
      />

      <ProjectSection
        id="domus" bgClass="bg-[#F2F7F6]" num="N.º 03 — La Inversión"
        title={<>{isEn ? "For those who refuse" : "Para quienes se niegan"}<br /><em className="italic font-light">{isEn ? "to choose" : "a elegir"}</em></>}
        tag={isEn ? "Hotel-style living in the heart of Brickell" : "Estilo de vida hotelero en el corazón de Brickell"}
        body={isEn ? "579 furnished flats with hotel management and unrestricted short-term rental. Turnkey investment in Brickell." : "579 flats amueblados con gestión hotelera y renta corta sin restricciones. Inversión llave en mano en Brickell."}
        stats={[["579", isEn ? "units" : "unidades"], ["35", isEn ? "floors" : "plantas"], ["Brickell", ""], [isEn ? "Delivery 2028" : "Entrega 2028", ""]]}
        linkLabel={tProjects("view")} linkHref={`${prefix}/domus-brickell`}
        linkColor="text-aqua-dk" accentBorder="border-aqua"
        img="/images/domus/home_domus.webp" focus={[0.5, 0.5]}
        glow={[0.16, 0.71, 0.68]} base={[0.949, 0.969, 0.965]}
        count={579} countLabel={isEn ? "flats" : "flats"}
      />

      <ProjectSection
        id="onetwenty" bgClass="bg-[#F5F0E8]" flip num="N.º 04 — El Equilibrio"
        title={<>La vida<br /><em className="italic font-light">perfectamente equilibrada</em></>}
        tag={isEn ? "The first residence where your office is already included" : "La primera residencia donde tu oficina ya está incluida"}
        body={isEn ? "240 fully furnished residences in Brickell. Private office suite included in every unit. The only building in Miami where work and life share the same address." : "240 residencias amuebladas en Brickell. Suite de oficina privada incluida en cada unidad. El único edificio en Miami donde trabajo y vida comparten la misma dirección."}
        stats={[["240", isEn ? "residences" : "residencias"], ["50K ft²", isEn ? "amenities" : "amenidades"], ["Brickell", ""], [isEn ? "Delivery 2028" : "Entrega 2028", ""]]}
        linkLabel={tProjects("view")} linkHref={`${prefix}/one-twenty-brickell`}
        linkColor="text-[#A88A5C]" accentBorder="border-[#C9A876]"
        img="/images/onetwenty/home_onetwenty.webp" focus={[0.5, 0.4]}
        glow={[0.788, 0.659, 0.463]} base={[0.961, 0.941, 0.91]}
        count={240} countLabel={isEn ? "residences" : "residencias"}
      />

            <TowerCompare locale={locale} t={{
        overline: tCompare("overline"), h2: tCompare("h2"), h2_em: tCompare("h2_em"),
        sub: tCompare("sub"), elle_info: tCompare("elle_info"),
        cip_info: tCompare("cip_info"), dom_info: tCompare("dom_info"),
      }} />
      <Team locale={locale} t={{
        overline: tTeam("overline"), h2_1: tTeam("h2_1"), h2_em: tTeam("h2_em"),
        p1: tTeam("p1"), p2: tTeam("p2"), p2_em: tTeam("p2_em"),
        enrique_title: tTeam("enrique_title"), maribel_title: tTeam("maribel_title"),
      }} />
      <Dossier locale={locale} t={{
        overline: tDossier("overline"), h2: tDossier("h2"), h2_em: tDossier("h2_em"),
        h2_rest: tDossier("h2_rest"), sub: tDossier("sub"),
        nombre: tDossier("nombre"), apellidos: tDossier("apellidos"),
        email: tDossier("email"), telefono: tDossier("telefono"),
        proyecto_placeholder: tDossier("proyecto_placeholder"),
        opt_cip: tDossier("opt_cip"), opt_elle: tDossier("opt_elle"),
        opt_domus: tDossier("opt_domus"), opt_all: tDossier("opt_all"),
        cta: tDossier("cta"), reply: tDossier("reply"), thanks: tDossier("thanks"),
        wa_msg: tDossier("wa_msg"),
      }} />
      <Footer locale={locale} t={footerT} />
      <ScrollRefresh />
    </>
  );
}
