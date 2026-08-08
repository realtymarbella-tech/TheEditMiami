"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const SPECS: [string, string, string][] = [
  ["Residencias", "180 unidades", "Completamente amuebladas y listas para vivir"],
  ["Plantas", "26", "Edgewater, Miami"],
  ["Superficies", "41.80 m² a 78.50 m²", "1 y 2 dormitorios"],
  ["Piscinas", "2", "Riviera francesa + Sky Pool en Sommet Rooftop"],
  ["Ubicación", "600 NE 36th Street", "Edgewater — entre diseño, moda y cultura"],
  ["Arquitectura", "Behar Font & Partners", "65 años de experiencia combinada"],
  ["Interiores", "The One Atelier", "Reino Unido — líderes en residencias de marca"],
  ["Desarrollo", "Vertical Developments", "25+ años, $1.5B en el sur de Florida"],
  ["Entrega", "2026", "Prêt-à-vivre — llave en mano desde el primer día"],
  ["Precio de entrada", "Desde $600K", "Sin restricciones de alquiler"],
];

const MOMENTS = [
  { time: "7:30 AM · Tu terraza privada",
    text: "El sol sale sobre Biscayne Bay. La brisa salada. El silencio de tener la ciudad debajo de ti, completamente separada. Tu espresso en mano, la Riviera francesa reconstruida en el 26º piso de Edgewater. Esta es la promesa de Prêt-à-vivre: no prepararse para vivir. Vivir, sin más." },
  { time: "1 PM · ELLE Lounge",
    text: "Un amigo de Nueva York llama. \"¿Dónde te encuentro?\" \"El lounge. Piso 15.\" No es un lobby. No es un café. Es un refugio que no existe en ningún otro lugar — diseñado para ser exactamente lo que buscas: el lugar donde ves a quien importa, donde te ves a ti misma." },
  { time: "7 PM · Preparándose para la noche",
    text: "Te preparas. No es vanidad. Es ritual. Es el acto de convertirte en la versión más refinada de ti misma. Una hora después, sales. Desciendes 26 plantas. Cruzas el lobby. El portero te abre la puerta. Miami te espera. Y llevas ELLE contigo." },
];

const AMENITIES = [
  { title: "La Terraza", sub: "Riviera francesa en Edgewater", detail: "Amplia piscina con exposición norte-sur, cabañas privadas, cocina gourmet de verano con bar, cine al aire libre, pistas de shuffleboard y pétanque.", img: "/images/elle/pool.webp" },
  { title: "Sommet Rooftop", sub: "El punto más alto del estilo", detail: "Sky Pool con vistas despejadas al norte, este y oeste. Solárium con tumbonas. Maison Club con biblioteca, sala de música y salón con bar.", img: "/images/elle/view25.webp" },
  { title: "Wellness & Spa", sub: "Recuperación de diseñador", detail: "Gimnasio de última generación, yoga y fitness al aire libre, jardín de meditación, spa de inmersión, sauna, baño de vapor, ducha sensorial y sala privada de tratamientos.", img: "/images/elle/living.webp" },
  { title: "El Vestíbulo", sub: "Servicio sin interrupciones", detail: "Gran vestíbulo de doble altura, concierge 24h, seguridad y mantenimiento 24h, valet parking, café y restaurante, bicicletas de la casa y WiFi de alta velocidad.", img: "/images/elle/dining.webp" },
];

export default function ElleResidences() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.addEventListener("canplay", () => { v.play().catch(() => {}); v.style.opacity = "1"; }, { once: true });
      v.load();
    }
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    gsap.utils.toArray<HTMLElement>(".elle-panel").forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 82%" } });
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const d = Object.fromEntries(fd) as Record<string, string>;
    fetch("https://sqdvkfcghdjxtyuybxpy.supabase.co/rest/v1/leads", {
      method: "POST", keepalive: true,
      headers: { "Content-Type": "application/json", "Content-Profile": "santamaria",
        "apikey": "sb_publishable_LIaG8wb4ciGYSVkUAI8UeQ_wj3BVR4j",
        "Authorization": "Bearer sb_publishable_LIaG8wb4ciGYSVkUAI8UeQ_wj3BVR4j",
        "Prefer": "return=minimal" },
      body: JSON.stringify({ nombre: d.nombre, apellidos: d.apellidos, email: d.email, telefono: d.telefono, proyecto: "Elle Residences Miami", origen: "elle-residences-miami" }),
    }).catch(() => {});
    const msg = encodeURIComponent(`Hola, solicito el dossier de Elle Residences Miami.\nNombre: ${d.nombre} ${d.apellidos}\nEmail: ${d.email}\nTeléfono: ${d.telefono}`);
    window.open(`https://wa.me/34610589716?text=${msg}`, "_blank");
    setSent(true);
  };

  const inputCls = "bg-transparent border border-charcoal-700 text-cream px-4 py-3.5 text-sm font-light placeholder:text-charcoal-400 focus:outline-none focus:border-flamingo transition-colors";

  return (
    <div className="text-cream">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-[100] h-[68px] flex items-center gap-5 px-6 md:px-16 bg-charcoal-950/50 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="text-xs tracking-wide text-charcoal-200 hover:text-cream transition-colors flex-1">← Santamaría Collection</Link>
        <div className="flex flex-col items-center leading-none">
          <span className="font-serif text-base text-cream tracking-wide">SANTAMARIA</span>
          <span className="flex items-center gap-1.5 self-stretch mt-0.5">
            <span className="flex-1 h-px bg-rose-lt" /><span className="text-[7px] tracking-[0.4em] text-rose-lt">COLLECTION</span><span className="flex-1 h-px bg-rose-lt" />
          </span>
        </div>
        <a href="#dossier" className="text-xs font-medium tracking-wide px-5 py-2.5 flex-1 text-right bg-flamingo text-cream">Dossier</a>
      </nav>

      {/* SEC 1 — HERO */}
      <header className="relative min-h-screen flex items-end overflow-hidden pt-[68px]" style={{ backgroundImage: "url(/images/elle/poster_elle.webp)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 z-0" />
        <video ref={videoRef} muted loop playsInline preload="metadata" src="/videos/elle.mp4"
          className="absolute z-0 object-cover opacity-0 transition-opacity duration-700" style={{ inset: "-5%", width: "110%", height: "110%" }} />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(180deg,rgba(8,8,7,.35) 0%,rgba(8,8,7,.55) 55%,rgba(8,8,7,.92) 100%)" }} />
        <div className="relative z-[2] px-6 md:px-16 pb-20 max-w-3xl">
          <div className="text-[11px] font-medium tracking-[0.28em] uppercase text-flamingo mb-5">Elle Residences Miami</div>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-[1.08] mb-6">
            La dirección de la moda<br /><em className="italic">ha llegado a Miami</em>
          </h1>
          <p className="text-[15.5px] font-light leading-loose text-charcoal-200 max-w-xl mb-9">
            ELLE Residences Miami: 80 años de autoridad en moda y diseño, una forma de vida icónica. Las primeras residencias ELLE del mundo, completamente terminadas y listas para vivir.
          </p>
          <a href="#dossier" className="inline-block text-[11.5px] font-medium tracking-wide uppercase px-8 py-4 bg-flamingo text-cream hover:bg-flamingo-dk transition-colors">Descubrir el estilo de vida ELLE</a>
        </div>
      </header>

      <main>
        {/* SEC 2 — HERENCIA */}
        <section className="px-6 md:px-16 py-24 md:py-32 bg-cream text-charcoal-950">
          <div className="max-w-2xl mx-auto elle-panel text-center">
            <div className="text-[11px] font-medium tracking-[0.28em] uppercase text-flamingo-dk mb-5">La herencia ELLE</div>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-8">
              La autoridad mundial de la moda,<br /><em className="italic">durante más de 80 años</em>
            </h2>
            <p className="text-[15.5px] font-light leading-loose text-charcoal-500 mb-5">
              Antes que los influencers, antes del street style, estuvo ELLE. Desde nuestra primera portada en 1945, hemos definido, desafiado y celebrado qué significa vivir con estilo. Hemos sido el hogar donde se lanzan carreras, donde se descubren movimientos, donde el futuro del diseño se imagina primero.
            </p>
            <p className="text-[15.5px] font-light leading-loose text-charcoal-500 mb-5">
              ELLE ha dado voz a diseñadores visionarios y ayudado a millones de personas a encontrar su propio lenguaje de estilo. No seguimos tendencias. Las creamos. No comentamos sobre la cultura. La moldeamos.
            </p>
            <p className="text-[15.5px] font-light leading-loose text-charcoal-500">
              Ahora, por primera vez, ELLE lleva su inigualable criterio para la belleza y el diseño al mundo del real estate de lujo.{" "}
              <span className="text-charcoal-950 font-normal">ELLE Residences Miami no es un edificio de marca. Es un legado arquitectónico.</span>
            </p>
          </div>
        </section>

        {/* SEC 3 — VISIÓN DEL DISEÑO */}
        <section className="px-6 md:px-16 py-24 bg-charcoal-950">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center elle-panel">
            <div className="relative aspect-[3/4] overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/elle/living.webp)" }} />
            </div>
            <div>
              <div className="text-[10.5px] font-medium tracking-[0.26em] uppercase text-flamingo mb-5">La visión del diseño</div>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
                Couture Living.<br /><em className="italic">Diseñado por quienes crean el estilo.</em>
              </h2>
              <p className="text-[15px] font-light leading-loose text-charcoal-200 mb-5">
                En ELLE Residences, la curaduría lo es todo. Cada elemento — desde los acabados elegidos a mano hasta las líneas arquitectónicas — ha sido seleccionado y perfeccionado por los árbitros del gusto de ELLE.
              </p>
              <p className="text-[15px] font-light leading-loose text-charcoal-200 mb-5">
                No empezamos con el edificio. Empezamos con la pregunta: ¿Cómo se sentiría vivir dentro de la portada de una revista ELLE? ¿Cómo entraría la luz? ¿Cómo te sentirías cada mañana?
              </p>
              <p className="text-[15px] font-light leading-loose text-charcoal-200">
                El resultado: mármol italiano, molduras personalizadas, iluminación de diseñador, pisos de madera en chevron francés.{" "}
                <span className="text-cream font-normal">Esto no es decoración. Es arquitectura editada.</span>
              </p>
            </div>
          </div>
        </section>

        {/* SEC 4 — SPECS */}
        <section className="px-6 md:px-16 py-24 bg-cream text-charcoal-950">
          <div className="max-w-3xl mx-auto elle-panel">
            <div className="text-[10.5px] font-medium tracking-[0.26em] uppercase text-flamingo-dk mb-5 text-center">Las especificaciones</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-12 text-center">La colección, de un vistazo</h2>
            <div className="divide-y divide-charcoal-100 border-y border-charcoal-100">
              {SPECS.map(([k, v, note]) => (
                <div key={k} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4">
                  <span className="text-[10.5px] tracking-widest uppercase text-charcoal-400 sm:w-40 shrink-0">{k}</span>
                  <span className="font-serif text-lg font-light text-flamingo-dk sm:w-52 shrink-0">{v}</span>
                  <span className="text-[13px] font-light text-charcoal-500">{note}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-charcoal-400 mt-6 text-center">Precios, términos y plazos sujetos a cambios. Consulte disponibilidad actualizada con el equipo de Santamaría Collection.</p>
          </div>
        </section>

        {/* SEC 5 — MOMENTOS DEL DÍA */}
        <section className="px-6 md:px-16 py-24 bg-charcoal-950">
          <div className="max-w-2xl mx-auto elle-panel">
            <div className="text-[10.5px] font-medium tracking-[0.26em] uppercase text-flamingo mb-5 text-center">Un día en ELLE</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-14 text-center">La experiencia de vivir aquí</h2>
            <div className="flex flex-col gap-14">
              {MOMENTS.map((m) => (
                <div key={m.time}>
                  <div className="font-serif italic text-xl text-flamingo mb-3">{m.time}</div>
                  <p className="text-[15px] font-light leading-loose text-charcoal-200">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEC 6 — AMENITIES */}
        <section className="px-6 md:px-16 py-24 bg-[#FBF4F2]">
          <div className="max-w-5xl mx-auto elle-panel">
            <div className="text-[10.5px] font-medium tracking-[0.26em] uppercase text-flamingo-dk mb-5 text-center">Amenidades</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-3 text-center text-charcoal-950">Espacios diseñados por los árbitros del gusto</h2>
            <p className="text-[14px] font-light text-charcoal-500 text-center max-w-lg mx-auto mb-12">Inspiradas en ELLE DECOR, las amenidades combinan el modernismo de mediados de siglo con el chic contemporáneo francés.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {AMENITIES.map((a) => (
                <div key={a.title} className="relative aspect-[4/3] overflow-hidden group">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${a.img})` }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(8,8,7,.92) 0%,rgba(8,8,7,.2) 55%,transparent 80%)" }} />
                  <div className="absolute bottom-0 p-5">
                    <div className="font-serif text-lg font-light text-cream">{a.title}</div>
                    <div className="text-[11px] text-flamingo mt-0.5">{a.sub}</div>
                    <div className="text-[12.5px] font-light text-charcoal-200 mt-1.5 leading-relaxed">{a.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEC 7 — DOSSIER */}
        <section id="dossier" className="px-6 md:px-16 py-24 bg-charcoal-950">
          <div className="max-w-xl mx-auto elle-panel text-center">
            <div className="text-[11px] font-medium tracking-[0.28em] uppercase text-flamingo mb-4">Colección limitada</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">
              Solo 180 residencias llevarán<br /><em className="italic">el nombre ELLE.</em>
            </h2>
            <p className="text-sm font-light text-charcoal-200 mb-2">Completamente amuebladas, listas para vivir desde el primer día. Sin restricciones de alquiler.</p>
            <p className="text-[13px] font-light text-charcoal-400 mb-10">Disponibilidad actualizada · Planos y especificaciones · Sesión privada con Santamaría Collection</p>
            {sent ? (
              <p className="font-serif italic text-lg py-8">Gracias. Complete el envío en WhatsApp — responderemos en menos de 24h.</p>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
                <input name="nombre" placeholder="Nombre" required className={inputCls} />
                <input name="apellidos" placeholder="Apellidos" required className={inputCls} />
                <input name="email" type="email" placeholder="Email" required className={`sm:col-span-2 ${inputCls}`} />
                <input name="telefono" type="tel" placeholder="Teléfono / WhatsApp" required className={`sm:col-span-2 ${inputCls}`} />
                <button type="submit" className="sm:col-span-2 mt-2 text-[11.5px] font-medium tracking-wide uppercase py-4 bg-flamingo text-cream hover:bg-flamingo-dk transition-colors">Solicitar dossier privado</button>
                <div className="sm:col-span-2 text-center text-[10.5px] tracking-wide text-charcoal-500 mt-1">info@santamaria-collection.com · +34 610 589 716 (WhatsApp directo)</div>
              </form>
            )}
            <div className="grid grid-cols-2 gap-3 mt-10">
              <Link href="/cipriani-residences" className="border border-white/15 px-4 py-4 text-xs tracking-wide uppercase hover:border-white/40 transition-colors">Cipriani Residences →</Link>
              <Link href="/domus" className="border border-white/15 px-4 py-4 text-xs tracking-wide uppercase hover:border-white/40 transition-colors">Domus Brickell →</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 md:px-16 py-8 text-center text-[10.5px] font-light text-charcoal-400 bg-ocean-dk">
        © 2026 Santamaría Collection. ELLE is a trademark owned by Hachette Filipacchi Presse SA, France. Imágenes con fines ilustrativos. Precios y disponibilidad sujetos a cambios.
      </footer>
    </div>
  );
}
