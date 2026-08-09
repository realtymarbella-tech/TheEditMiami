import NoLoader from "@/components/NoLoader";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal | Santamaría Collection",
  description: "Aviso legal, términos de uso y descargo de responsabilidad de Santamaría Collection.",
  alternates: { canonical: "https://www.santamaria-collection.com/legal" },
};

export default function Legal() {
  return (
    <NoLoader />
      <div style={{ background: "#FDFCFB", color: "#121210", minHeight: "100vh" }}>
      <nav style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(253,252,251,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid #E8E3DC", padding: "0 3rem", height: "64px", display: "flex", alignItems: "center" }}>
        <Link href="/" className="font-serif text-base tracking-wide">← Santamaría Collection</Link>
      </nav>
      <main className="max-w-3xl mx-auto px-6 md:px-0 py-16 md:py-24">
        <div className="text-[11px] font-medium tracking-[0.28em] uppercase text-rose mb-4">Documentos legales</div>
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-12">Aviso Legal</h1>

        <div className="prose prose-lg font-light leading-loose text-charcoal-700 space-y-8">

          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">1. Identificación</h2>
            <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que este sitio web es titularidad de <strong>Santamaría Collection</strong>, con domicilio de contacto en Marbella, España, y oficina de representación en Miami, Florida, Estados Unidos.</p>
            <p>Correo electrónico de contacto: <a href="mailto:info@santamaria-collection.com" className="text-rose underline">info@santamaria-collection.com</a></p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">2. Objeto y actividad</h2>
            <p>Santamaría Collection es una plataforma editorial de consultoría inmobiliaria especializada en la presentación y curación de desarrollos residenciales de nueva construcción en Miami, Florida, EE.UU. No somos promotores, constructores ni vendedores directos de los inmuebles presentados. Actuamos como intermediarios y asesores para compradores internacionales.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">3. Descargo de responsabilidad sobre precios y disponibilidad</h2>
            <p>Toda la información relativa a precios, tipologías, superficies, fechas de entrega, disponibilidad de unidades y características de los desarrollos presentados en este sitio web tiene carácter <strong>meramente orientativo e ilustrativo</strong>.</p>
            <p>Los precios, términos y condiciones están sujetos a cambios sin previo aviso y son establecidos exclusivamente por los promotores de cada desarrollo. Santamaría Collection no garantiza la exactitud, completitud ni vigencia de los datos publicados en este sitio.</p>
            <p>Las imágenes, renders, vídeos y representaciones artísticas publicadas son <strong>únicamente con fines ilustrativos</strong> y pueden no corresponder exactamente al producto final entregado.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">4. No constituye oferta de venta</h2>
            <p>Este sitio web y su contenido no constituyen, en ningún caso, una oferta, promesa de venta, contrato de compraventa ni documentación contractual vinculante. Ninguna información publicada en este sitio debe interpretarse como tal.</p>
            <p>Cualquier transacción inmobiliaria deberá formalizarse mediante los documentos oficiales del promotor correspondiente, revisados por asesores legales independientes.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">5. Ley aplicable y jurisdicción</h2>
            <p>Este aviso legal se rige por la legislación española. Para cualquier controversia derivada del uso de este sitio web, las partes se someten a los juzgados y tribunales de Marbella (Málaga), España, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">6. Propiedad intelectual</h2>
            <p>Todos los contenidos de este sitio web — textos, imágenes, vídeos, diseño y código — son propiedad de Santamaría Collection o de sus legítimos titulares, y están protegidos por la legislación española e internacional sobre propiedad intelectual e industrial. Queda prohibida su reproducción total o parcial sin autorización expresa.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">7. Igualdad de oportunidades en vivienda</h2>
            <p>Santamaría Collection opera bajo los principios de igualdad de oportunidades en vivienda. No discriminamos por motivos de raza, color, religión, sexo, discapacidad, situación familiar u origen nacional, en cumplimiento de la Fair Housing Act de los Estados Unidos.</p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-charcoal-100 flex gap-6 text-sm text-charcoal-400">
          <Link href="/privacidad" className="hover:text-charcoal-950 transition-colors">Política de Privacidad →</Link>
          <Link href="/" className="hover:text-charcoal-950 transition-colors">Volver al inicio</Link>
        </div>
      </main>
    </div>
  );
}
