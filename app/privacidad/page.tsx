import NoLoader from "@/components/NoLoader";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Santamaría Collection",
  description: "Política de privacidad y protección de datos de Santamaría Collection. RGPD/GDPR.",
  alternates: { canonical: "https://www.santamaria-collection.com/privacidad" },
};

export default function Privacidad() {
  return (
    <NoLoader />
      <div style={{ background: "#FDFCFB", color: "#121210", minHeight: "100vh" }}>
      <nav style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(253,252,251,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid #E8E3DC", padding: "0 3rem", height: "64px", display: "flex", alignItems: "center" }}>
        <Link href="/" className="font-serif text-base tracking-wide">← Santamaría Collection</Link>
      </nav>
      <main className="max-w-3xl mx-auto px-6 md:px-0 py-16 md:py-24">
        <div className="text-[11px] font-medium tracking-[0.28em] uppercase text-rose mb-4">Documentos legales</div>
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Política de Privacidad</h1>
        <p className="text-sm text-charcoal-400 mb-12">Última actualización: agosto de 2026</p>

        <div className="prose prose-lg font-light leading-loose text-charcoal-700 space-y-8">

          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">1. Responsable del tratamiento</h2>
            <p><strong>Santamaría Collection</strong><br />
            Contacto: <a href="mailto:info@santamaria-collection.com" className="text-rose underline">info@santamaria-collection.com</a><br />
            Marbella, España · Miami, Florida, EE.UU.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">2. Datos que recogemos</h2>
            <p>A través del formulario de solicitud de dossier recogemos los siguientes datos personales:</p>
            <ul className="list-none space-y-2 pl-4">
              {["Nombre y apellidos", "Dirección de correo electrónico", "Número de teléfono / WhatsApp", "Proyecto de interés seleccionado"].map(item => (
                <li key={item} className="pl-4 relative before:absolute before:left-0 before:content-['—'] before:text-rose">{item}</li>
              ))}
            </ul>
            <p>No recogemos datos especialmente sensibles, datos de menores, ni realizamos perfilado automatizado.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">3. Finalidad y base legal del tratamiento</h2>
            <p>Sus datos se tratan con las siguientes finalidades:</p>
            <ul className="list-none space-y-2 pl-4">
              <li className="pl-4 relative before:absolute before:left-0 before:content-['—'] before:text-rose"><strong>Gestión de la solicitud de información</strong> — atender su solicitud de dossier y contactarle en relación con los desarrollos de su interés. Base legal: ejecución de una relación precontractual (Art. 6.1.b RGPD).</li>
              <li className="pl-4 relative before:absolute before:left-0 before:content-['—'] before:text-rose"><strong>Comunicaciones comerciales</strong> — enviarle información sobre otros desarrollos de interés, solo si nos lo autoriza expresamente. Base legal: consentimiento (Art. 6.1.a RGPD).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">4. Destinatarios de los datos</h2>
            <p>Sus datos pueden ser compartidos con:</p>
            <ul className="list-none space-y-2 pl-4">
              <li className="pl-4 relative before:absolute before:left-0 before:content-['—'] before:text-rose"><strong>Supabase Inc.</strong> — plataforma de base de datos donde almacenamos las solicitudes (servidores en EE.UU., con garantías adecuadas de protección de datos).</li>
              <li className="pl-4 relative before:absolute before:left-0 before:content-['—'] before:text-rose"><strong>Meta Platforms (WhatsApp)</strong> — cuando usted decide completar su solicitud a través de WhatsApp, sus datos se transmiten a través de la plataforma de Meta, sujeta a sus propias políticas de privacidad.</li>
              <li className="pl-4 relative before:absolute before:left-0 before:content-['—'] before:text-rose"><strong>Promotores de los desarrollos</strong> — en caso de que solicite información específica de un desarrollo, sus datos podrán ser compartidos con el promotor correspondiente (Mast Capital/Fortune, Vertical Developments, North Development), con su conocimiento.</li>
            </ul>
            <p>No vendemos, cedemos ni compartimos sus datos con terceros para fines publicitarios.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">5. Conservación de los datos</h2>
            <p>Conservamos sus datos durante el tiempo necesario para gestionar su solicitud y, en su caso, la relación comercial derivada, con un máximo de 3 años desde el último contacto. Transcurrido ese plazo, los datos serán eliminados o anonimizados.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">6. Sus derechos</h2>
            <p>En virtud del RGPD, tiene derecho a:</p>
            <ul className="list-none space-y-1 pl-4">
              {["Acceder a sus datos personales","Rectificar datos inexactos","Solicitar la supresión de sus datos","Oponerse al tratamiento","Solicitar la limitación del tratamiento","Portabilidad de sus datos"].map(right => (
                <li key={right} className="pl-4 relative before:absolute before:left-0 before:content-['—'] before:text-rose">{right}</li>
              ))}
            </ul>
            <p>Para ejercer cualquiera de estos derechos, escríbanos a <a href="mailto:info@santamaria-collection.com" className="text-rose underline">info@santamaria-collection.com</a>. Responderemos en un plazo máximo de 30 días. También puede presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">7. Cookies</h2>
            <p>Este sitio web utiliza únicamente una cookie técnica de preferencia de idioma (<code>locale</code>), necesaria para recordar su selección de idioma entre visitas. No utilizamos cookies de seguimiento, analíticas ni publicitarias de terceros.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-light text-charcoal-950 mb-4">8. Seguridad</h2>
            <p>Sus datos se transmiten mediante conexiones cifradas (HTTPS/TLS) y se almacenan en bases de datos protegidas con control de acceso por fila (Row Level Security), que impide cualquier acceso no autorizado a sus datos desde el navegador.</p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-charcoal-100 flex gap-6 text-sm text-charcoal-400">
          <Link href="/legal" className="hover:text-charcoal-950 transition-colors">Aviso Legal →</Link>
          <Link href="/" className="hover:text-charcoal-950 transition-colors">Volver al inicio</Link>
        </div>
      </main>
    </div>
  );
}
