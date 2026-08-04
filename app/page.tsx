import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Cursor from "@/components/Cursor";
import ProjectSection from "@/components/ProjectSection";
import TowerCompare from "@/components/TowerCompare";
import Dossier from "@/components/Dossier";
import Footer from "@/components/Footer";
import ScrollRefresh from "@/components/ScrollRefresh";

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollRefresh />
      <div id="spotOverlay" aria-hidden="true" />
      <Nav />
      <Hero />

      <section className="bg-ocean text-cream py-8 px-6 md:px-16 flex flex-wrap gap-6">
        <div className="flex-1 min-w-[45%] md:min-w-0"><div className="font-serif text-4xl font-light text-aqua-lt">3</div><div className="text-[10.5px] tracking-wide uppercase text-charcoal-200">Desarrollos curados</div></div>
        <div className="flex-1 min-w-[45%] md:min-w-0"><div className="font-serif text-4xl font-light text-aqua-lt">1.156</div><div className="text-[10.5px] tracking-wide uppercase text-charcoal-200">Residencias</div></div>
        <div className="flex-1 min-w-[45%] md:min-w-0"><div className="font-serif text-4xl font-light text-aqua-lt">950 ft</div><div className="text-[10.5px] tracking-wide uppercase text-charcoal-200">La torre más alta de Florida</div></div>
        <div className="flex-1 min-w-[45%] md:min-w-0"><div className="font-serif text-4xl font-light text-aqua-lt">$500K</div><div className="text-[10.5px] tracking-wide uppercase text-charcoal-200">Precio de entrada</div></div>
      </section>

      <ProjectSection
        id="cipriani"
        bgClass="bg-cream"
        num="N.º 01 — El Legado"
        title={<>Cuatro generaciones<br /><em className="italic font-light">sobre Brickell</em></>}
        tag="La primera residencia Cipriani construida desde cero en América"
        body="La torre residencial más alta de Florida: Venecia sobre Biscayne Bay, firmada por Arquitectonica y 1508 London."
        quote={'"El verdadero estilo es singular y atemporal. Puede sentirse, pero no describirse." — Arrigo Cipriani'}
        stats={[["397", "residencias"], ["85", "plantas"], ["Brickell", ""], ["Verano 2027", ""]]}
        linkLabel="Descubrir Cipriani"
        linkColor="text-sunset-dk"
        accentBorder="border-sunset"
        img="/images/cipriani/home_cip.webp"
        focus={[0.5, 0.45]}
        glow={[0.96, 0.66, 0.36]}
        base={[0.992, 0.988, 0.984]}
        count={950}
        countLabel="ft de altura"
      />

      <ProjectSection
        id="elle"
        bgClass="bg-[#FBF4F2]"
        flip
        num="N.º 02 — La Editorial"
        title={<><em className="italic font-light">Prêt-à-Vivre.</em><br />El nuevo hogar del alto estilo</>}
        tag="La primera ELLE Residences del mundo"
        body="La primera ELLE Residences del mundo: chic francés contemporáneo, entregada amueblada y lista para vivir."
        stats={[["180 unidades", ""], ["26 plantas", ""], ["Edgewater", ""], ["Entrega 2026", ""]]}
        linkLabel="Experimentar Elle"
        linkColor="text-flamingo-dk"
        accentBorder="border-flamingo"
        img="/images/elle/home_elle.webp"
        focus={[0.5, 0.5]}
        glow={[0.91, 0.42, 0.55]}
        base={[0.984, 0.957, 0.949]}
        count={180}
        countLabel="residencias"
      />

      <ProjectSection
        id="domus"
        bgClass="bg-[#F2F7F6]"
        num="N.º 03 — La Inversión"
        title={<>Para quienes se niegan<br /><em className="italic font-light">a elegir</em></>}
        tag="Estilo de vida hotelero en el corazón de Brickell"
        body="579 flats amueblados con gestión hotelera y renta corta sin restricciones. Inversión llave en mano en Brickell."
        stats={[["579 unidades", ""], ["35 plantas", ""], ["Brickell", ""], ["Entrega 2028", ""]]}
        linkLabel="Explorar Domus"
        linkColor="text-aqua-dk"
        accentBorder="border-aqua"
        img="/images/domus/home_domus.webp"
        focus={[0.5, 0.5]}
        glow={[0.16, 0.71, 0.68]}
        base={[0.949, 0.969, 0.965]}
        count={579}
        countLabel="flats"
      />

      <TowerCompare />
      <Dossier />
      <Footer />
    </>
  );
}
