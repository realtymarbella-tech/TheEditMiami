import type { Metadata } from "next";
import Link from "next/link";
import NoLoader from "@/components/NoLoader";

export const metadata: Metadata = {
  title: "Política de Privacidad | Santamaría Collection",
  description: "Política de privacidad y protección de datos de Santamaría Collection. RGPD/GDPR.",
  alternates: { canonical: "https://www.santamaria-collection.com/privacidad" },
};

export default function Privacidad() {
  return (
    <div style={{ background: "#FDFCFB", color: "#121210", minHeight: "100vh" }}>
      <NoLoader />
      <nav style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(253,252,251,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid #E8E3DC", padding: "0 3rem", height: "64px", display: "flex", alignItems: "center" }}>
        <Link href="/" className="font-serif text-base tracking-wide">← Santamaría Collection</Link>
      </nav>
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24" style={{ color: "#3D3C38" }}>
        <div className="text-[11px] font-medium tracking-[0.28em] uppercase text-rose mb-4">Documentos legales</div>
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-4" style={{ color: "#121210" }}>Política de Privacidad</h1>
        <p className="text-sm mb-12" style={{ color: "#8A8278" }}>Última actualización: agosto de 2026</p>
        <div className="space-y-10 font-light leading-loose">
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>1. Responsable del tratamiento</h2>
            <p><strong>Santamaría Collection</strong> — <a href="mailto:info@santamaria-collection.com" className="text-rose underline">info@santamaria-collection.com</a> — Marbella, España · Miami, Florida, EE.UU.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>2. Datos que recogemos</h2>
            <p>A través del formulario de solicitud recogemos: nombre y apellidos, correo electrónico, teléfono/WhatsApp y proyecto de interés. No recogemos datos sensibles ni de menores.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>3. Finalidad y base legal</h2>
            <p><strong>Gestión de la solicitud</strong> — atender su consulta y contactarle sobre los desarrollos de interés. Base legal: ejecución de relación precontractual (Art. 6.1.b RGPD).</p>
            <p className="mt-3"><strong>Comunicaciones comerciales</strong> — solo con su autorización expresa. Base legal: consentimiento (Art. 6.1.a RGPD).</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>4. Destinatarios</h2>
            <p>Sus datos pueden compartirse con: <strong>Supabase Inc.</strong> (base de datos, EE.UU., con garantías adecuadas); <strong>Meta/WhatsApp</strong> cuando completa su solicitud por ese canal; y <strong>promotores de los desarrollos</strong> bajo su conocimiento. No vendemos sus datos.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>5. Conservación</h2>
            <p>Conservamos sus datos un máximo de 3 años desde el último contacto, tras lo cual serán eliminados o anonimizados.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>6. Sus derechos</h2>
            <p>Puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a <a href="mailto:info@santamaria-collection.com" className="text-rose underline">info@santamaria-collection.com</a>. También puede reclamar ante la AEPD (aepd.es).</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>7. Cookies</h2>
            <p>Solo utilizamos una cookie técnica de preferencia de idioma. No usamos cookies de seguimiento ni publicitarias.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-light mb-4" style={{ color: "#121210" }}>8. Seguridad</h2>
            <p>Sus datos se transmiten mediante HTTPS/TLS y se almacenan con Row Level Security que impide accesos no autorizados.</p>
          </section>
        </div>
        <div className="mt-16 pt-8 flex gap-6 text-sm" style={{ borderTop: "1px solid #E8E3DC", color: "#8A8278" }}>
          <Link href="/legal" className="hover:text-charcoal-950 transition-colors">Aviso Legal →</Link>
          <Link href="/" className="hover:text-charcoal-950 transition-colors">Volver al inicio</Link>
        </div>
      </main>
    </div>
  );
}
