import type { Metadata } from "next";
import Link from "next/link";
import NoLoader from "@/components/NoLoader";

export const metadata: Metadata = {
  title: "Aviso Legal | Santamaría Collection",
  description: "Aviso legal, términos de uso y descargo de responsabilidad de Santamaría Collection.",
  alternates: { canonical: "https://www.santamaria-collection.com/legal" },
};

export default function Legal() {
  return (
    <div style={{ background: "#FDFCFB", color: "#121210", minHeight: "100vh" }}>
      <NoLoader />
      <nav style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(253,252,251,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid #E8E3DC", padding: "0 3rem", height: "64px", display: "flex", alignItems: "center" }}>
        <Link href="/" className="font-serif text-base tracking-wide">← Santamaría Collection</Link>
      </nav>
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24" style={{ color: "#3D3C38" }}>
        <div className="text-[11px] font-medium tracking-[0.28em] uppercase text-rose mb-4">Documentos legales</div>
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-12" style={{ color: "#121210" }}>Aviso Legal</h1>
        <div className="space-y-10 font-light leading-loose">
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>1. Identificación</h2>
            <p>Santamaría Collection es una plataforma de consultoría inmobiliaria especializada en la presentación y curación de desarrollos residenciales de nueva construcción en Miami, Florida. No somos promotores ni vendedores directos. Actuamos como intermediarios y asesores para compradores internacionales.</p>
            <p className="mt-3">Contacto: <a href="mailto:info@santamaria-collection.com" className="text-rose underline">info@santamaria-collection.com</a></p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>2. Descargo sobre precios y disponibilidad</h2>
            <p>Toda la información relativa a precios, tipologías, superficies, fechas de entrega y disponibilidad es <strong>meramente orientativa e ilustrativa</strong>. Los precios están sujetos a cambios sin previo aviso y son establecidos exclusivamente por los promotores. Las imágenes y renders son representaciones artísticas con fines ilustrativos.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>3. No constituye oferta de venta</h2>
            <p>Este sitio web no constituye una oferta, promesa de venta ni contrato vinculante. Cualquier transacción deberá formalizarse mediante documentos oficiales del promotor, revisados por asesores legales independientes.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>4. Propiedad intelectual</h2>
            <p>Todos los contenidos — textos, imágenes, vídeos, diseño y código — son propiedad de Santamaría Collection o sus legítimos titulares. Queda prohibida su reproducción sin autorización expresa.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>5. Igualdad de oportunidades en vivienda</h2>
            <p>Santamaría Collection opera bajo los principios de igualdad de oportunidades. No discriminamos por motivos de raza, color, religión, sexo, discapacidad, situación familiar u origen nacional, en cumplimiento de la Fair Housing Act de los Estados Unidos.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>6. Ley aplicable</h2>
            <p>Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados de Marbella (Málaga), España.</p>
          </section>
        </div>
        <div className="mt-16 pt-8 flex gap-6 text-sm" style={{ borderTop: "1px solid #E8E3DC", color: "#8A8278" }}>
          <Link href="/privacidad" className="hover:text-charcoal-950 transition-colors">Política de Privacidad →</Link>
          <Link href="/" className="hover:text-charcoal-950 transition-colors">Volver al inicio</Link>
        </div>
      </main>
    </div>
  );
}
