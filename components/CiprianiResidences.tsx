"use client";
import { useEffect, useRef, useState } from "react";
import ScrollText from "@/components/ScrollText";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const SPECS: [string, string, string][] = [
  ["Altura", "950 pies (289 m)", "La residencial más alta de Florida al sur de NYC"],
  ["Plantas", "85", "Curadas según la visión de Arquitectonica"],
  ["Residencias", "397 unidades", "1–4 habitaciones + Colección Penthouse"],
  ["Ubicación", "1420 S Miami Ave, Brickell", "Corazón del distrito financiero"],
  ["Diseño interior", "1508 London", "Interiores de visionarios contemporáneos"],
  ["Arquitectura", "Arquitectonica", "Principales: Fort-Brescia"],
  ["Entrega", "2027", "Construcción avanzando, cimientos completados"],
  ["Precio de entrada", "Desde $1.8M", "Colección Canaletto desde $4.1M"],
  ["Ocupación máxima", "180 residentes", "Comunidad curada, no una multitud"],
];

const PILLARS = [
  { label: "La Cumbre", title: "La declaración arquitectónica de Miami",
    body: "El skyline está lleno de edificios altos. Cipriani Residences es más alta. A 950 pies, se convierte en la silueta definitoria — la que se ve desde la calzada, desde la bahía, desde la autopista. Su dirección se convierte en LA dirección. Arquitectonica no diseñó un edificio alto. Diseñaron un hito. La diferencia es la permanencia.",
    img: "/images/cipriani/exterior2.webp" },
  { label: "El Legado", title: "Una marca diseñada para vivir entre generaciones",
    body: "Cipriani no es una marca hotelera. Es una forma de ser que ha sobrevivido 95 años. Tradiciones de hospitalidad de la era del Grand Tour. Un speakeasy en la planta 37 donde sus nietos reconocerán los detalles hechos a mano. Una filosofía de dining privado que asume que usted sabe lo que es el buen gusto — y lo respeta. Vivir aquí no es comprar una propiedad. Es heredar un código.",
    img: "/images/cipriani/gallery1.webp" },
  { label: "La Experiencia", title: "Vivir en Cipriani es no tener que explicar nada",
    body: "El único restaurante Cipriani exclusivo para residentes en Norteamérica. Catering 24 horas por la propia cocina de Cipriani. Un Director de Residencias que sabe su nombre antes de que se mude. El speakeasy de la planta 37. El santuario de bienestar de 4 niveles. La piscina orientada al este para no perderse nunca el amanecer sobre Biscayne. Esto no son amenidades. Son la infraestructura de su vida.",
    img: "/images/cipriani/gallery2.webp" },
];

const MOMENTS = [
  { time: "Amanecer", text: "Está en su terraza. La bahía de Biscayne es cristal, plana, capturando la primera luz. Su concierge llama — su espresso está listo en el lounge, preparado por manos que han servido a huéspedes de Cipriani durante décadas. Baja 85 plantas y los saluda por su nombre." },
  { time: "Tarde", text: `Un colega le escribe: "¿Speakeasy esta noche?" La planta 37. Barra de caoba. El bartender recuerda su receta de Negroni porque está anotada en un cuaderno de cuero que sobrevivió a la Venecia de 1931. La vista enmarca tres condados. Esto no es un rooftop bar. Es su salón, elevado.` },
  { time: "Noche", text: `El Director de Residencias llama a su móvil. "Buenas noches. Su cena Cipriani en casa está lista. El chef sugiere la lubina esta noche — llegó esta mañana desde—" Usted ya está en casa. La mesa está puesta. La luz de Biscayne Bay ilumina la cubertería. Algunas direcciones cambian su vida. Esta pasa a formar parte de ella.` },
];


const COLLECTIONS = [
  { name: "Residencia Estándar", sub: "1–4 habitaciones · Desde $1.8M USD",
    features: ["Ventanales del suelo al techo", "Carpintería italiana de Poltrona Frau", "Electrodomésticos Sub-Zero + Wolf", "Baños principales tipo spa", "Terraza privada frente a la bahía", "Acceso a todas las amenidades Cipriani"],
    cta: "Explorar disponibilidad", note: "" },
  { name: "Penthouse Collection", sub: "Plantas más altas · Piscinas privadas · Desde $3.2M USD",
    features: ["Piscina privada en azotea", "Acceso directo al lounge de dining privado", "Ascensor de servicio independiente", "Vistas de 360° sin obstrucciones"],
    cta: "Acceso restringido — Solicitar presentación", note: "52 residencias de este nivel existen en todo Cipriani a nivel global." },
  { name: "Canaletto Collection", sub: "La vivienda más alta · Desde $4.1M USD",
    features: ["La corona de la torre — 6 residencias", "Configuraciones a medida", "Piscina privada en cada una", "Director de Residencias a un mensaje de distancia"],
    cta: "Contactar por WhatsApp privado", note: "Solo existen 6. 3 ya reservadas." },
];

const AMENITIES = [
  { title: "Dining Experiences", sub: "Restaurante Cipriani privado + catering 24h", quote: "Donde su cocina sabe su nombre", img: "/images/cipriani/gallery1.webp" },
  { title: "Speakeasy, Planta 37", sub: "Elevado. Caoba. Histórico.", quote: "Tres condados a la altura de los ojos", img: "/images/cipriani/gallery2.webp" },
  { title: "Santuario de Bienestar", sub: "Centro de 4 niveles + spa + sauna", quote: "Recuperación diseñada como arquitectura", img: "/images/cipriani/gallery3.webp" },
  { title: "Resort Deck", sub: "2 piscinas + spa exterior + cabañas", quote: "Vistas a Biscayne. Atardecer perpetuo.", img: "/images/cipriani/exterior2.webp" },
];

export default function CiprianiResidences() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.body.classList.add("no-loader");
    const v = videoRef.current;
    if (v) {
      v.addEventListener("canplay", () => { v.play().catch(() => {}); v.style.opacity = "1"; }, { once: true });
      v.load();
    }
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    gsap.utils.toArray<HTMLElement>(".cip-panel").forEach((el) => {
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
      body: JSON.stringify({ nombre: d.nombre, apellidos: d.apellidos, email: d.email, telefono: d.telefono, proyecto: "Cipriani Residences Miami", origen: "cipriani-residences" }),
    }).catch(() => {});
    const msg = encodeURIComponent(`Hola, solicito el dossier ejecutivo de Cipriani Residences Miami.\nNombre: ${d.nombre} ${d.apellidos}\nEmail: ${d.email}\nTeléfono: ${d.telefono}`);
    window.open(`https://wa.me/34610589716?text=${msg}`, "_blank");
    setSent(true);
  };

  const inputCls = "bg-transparent border border-charcoal-700 text-cream px-4 py-3.5 text-sm font-light placeholder:text-charcoal-400 focus:outline-none focus:border-sunset transition-colors";

  return (
    <div className="bg-charcoal-950 text-cream">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-[100] h-[68px] flex items-center gap-5 px-6 md:px-16 bg-charcoal-950/50 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="text-xs tracking-wide text-charcoal-200 hover:text-cream transition-colors flex-1">← Santamaría Collection</Link>
        <div className="flex flex-col items-center leading-none">
          <span className="font-serif text-base text-cream tracking-wide">SANTAMARIA</span>
          <span className="flex items-center gap-1.5 self-stretch mt-0.5">
            <span className="flex-1 h-px bg-sunset" /><span className="text-[7px] tracking-[0.4em] text-sunset">COLLECTION</span><span className="flex-1 h-px bg-sunset" />
          </span>
        </div>
        <a href="#dossier" className="text-xs font-medium tracking-wide px-5 py-2.5 flex-1 text-right bg-sunset text-ocean">Dossier</a>
      </nav>

      {/* SEC 1 — HERO */}
      <header className="relative min-h-screen flex items-end overflow-hidden pt-[68px]">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: "url(/images/cipriani/poster_cip.webp)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <video ref={videoRef} muted loop playsInline preload="metadata" src="/videos/cipriani.mp4"
          className="absolute z-0 object-cover opacity-0 transition-opacity duration-700" style={{ inset: "-5%", width: "110%", height: "110%" }} />
        <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(180deg,rgba(8,8,7,.35) 0%,rgba(8,8,7,.55) 55%,rgba(8,8,7,.92) 100%)" }} />
        <div className="relative z-[2] px-6 md:px-16 pb-20 max-w-3xl">
          <div className="text-[11px] font-medium tracking-[0.28em] uppercase text-sunset mb-5">Cipriani Residences Miami</div>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-[1.08] mb-6">
            La torre residencial más alta<br />al sur de Nueva York <em className="italic">se alza en Miami</em>
          </h1>
          <p className="text-[15.5px] font-light leading-loose text-charcoal-200 max-w-xl mb-9">
            A 950 pies, Cipriani Residences Miami no solo le ofrece un hogar — establece su lugar en el skyline más exclusivo de América.
          </p>
          <a href="#dossier" className="inline-block text-[11.5px] font-medium tracking-wide uppercase px-8 py-4 bg-sunset text-ocean hover:bg-sunset-dk transition-colors">Explorar la colección exclusiva</a>
        </div>
      </header>

      <main>
        {/* SEC 2 — IDENTIDAD */}
        <section className="px-6 md:px-16 py-24 md:py-32 bg-cream text-charcoal-950">
          <div className="max-w-2xl mx-auto cip-panel text-center">
            <div className="text-[11px] font-medium tracking-[0.28em] uppercase text-sunset-dk mb-5">Por qué Cipriani</div>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight mb-8">Cuatro generaciones de elegancia italiana,<br /><em className="italic">una dirección excepcional</em></h2>
            <p className="text-[15.5px] font-light leading-loose text-charcoal-500">
              Cuando Giuseppe Cipriani abrió Harry&apos;s Bar en Venecia en 1931, no pretendía crear un imperio hotelero. Simplemente entendió que la elegancia no se fuerza, la hospitalidad surge de forma natural, y los lugares atemporales trascienden generaciones.
            </p>
            <p className="text-[15.5px] font-light leading-loose text-charcoal-500 mt-4">
              Cipriani Residences Miami es la primera expresión residencial de esta filosofía en América.{" "}
              <span className="text-charcoal-950 font-normal">No es una torre de marca. Es un hito de estilo de vida.</span>
            </p>
          </div>
        </section>

        {/* SEC 3 — 3 PILARES */}
        {PILLARS.map((p, i) => (
          <section key={p.label} className={`px-6 md:px-16 py-24 ${i % 2 === 0 ? "bg-charcoal-950" : "bg-ocean"}`}>
            <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center cip-panel ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${p.img})` }} />
              </div>
              <div>
                <div className="text-[10.5px] font-medium tracking-[0.26em] uppercase text-sunset mb-4">{p.label}</div>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-5">{p.title}</h3>
                <ScrollText text={p.body} className="text-[14.5px] font-light leading-loose" accentColor="#FDFCFB" dimColor="rgba(253,252,251,0.18)" />
              </div>
            </div>
          </section>
        ))}

        {/* SEC 4 — SPECS */}
        <section className="px-6 md:px-16 py-24 bg-charcoal-950">
          <div className="max-w-3xl mx-auto cip-panel">
            <div className="text-[10.5px] font-medium tracking-[0.26em] uppercase text-sunset mb-5 text-center">Especificaciones</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-12 text-center">La torre, en cifras</h2>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {SPECS.map(([k, v, note]) => (
                <div key={k} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4">
                  <span className="text-[10.5px] tracking-widest uppercase text-charcoal-400 sm:w-40 shrink-0">{k}</span>
                  <span className="font-serif text-lg font-light text-sunset sm:w-52 shrink-0">{v}</span>
                  <span className="text-[13px] font-light text-charcoal-200">{note}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-charcoal-500 mt-6 text-center">Precios, términos y plazos sujetos a cambios. Consulte el inventario actualizado.</p>
          </div>
        </section>

        {/* SEC 5 — MOMENTOS DEL DÍA */}
        <section className="px-6 md:px-16 py-24 bg-ocean">
          <div className="max-w-2xl mx-auto cip-panel">
            <div className="text-[10.5px] font-medium tracking-[0.26em] uppercase text-sunset mb-5 text-center">Un día en Cipriani</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-14 text-center">La experiencia de vivir aquí</h2>
            <div className="flex flex-col gap-14">
              {MOMENTS.map((m) => (
                <div key={m.time}>
                  <div className="font-serif italic text-xl text-sunset mb-3">{m.time}</div>
                  <p className="text-[15px] font-light leading-loose text-charcoal-200">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEC 7 — COLECCIONES */}
        <section className="px-6 md:px-16 py-24 bg-cream text-charcoal-950">
          <div className="max-w-5xl mx-auto cip-panel">
            <div className="text-[10.5px] font-medium tracking-[0.26em] uppercase text-sunset-dk mb-5 text-center">Las colecciones</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-14 text-center">Elija su nivel</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {COLLECTIONS.map((c) => (
                <div key={c.name} className="border border-charcoal-100 p-7 flex flex-col">
                  <h3 className="font-serif text-xl font-light mb-1">{c.name}</h3>
                  <div className="text-[12px] text-sunset-dk mb-6">{c.sub}</div>
                  <ul className="flex flex-col gap-2 mb-6 flex-1">
                    {c.features.map((f) => (
                      <li key={f} className="text-[13px] font-light text-charcoal-500 pl-4 relative">
                        <span className="absolute left-0 text-sunset-dk">—</span>{f}
                      </li>
                    ))}
                  </ul>
                  {c.note && <p className="text-[11px] italic text-charcoal-400 mb-5">{c.note}</p>}
                  <a href="#dossier" className="text-[11px] font-medium tracking-wide uppercase border-b border-sunset-dk text-sunset-dk pb-1 self-start hover:opacity-60 transition-opacity">{c.cta}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEC 8 — AMENITIES */}
        <section className="px-6 md:px-16 py-24 bg-charcoal-950">
          <div className="max-w-5xl mx-auto cip-panel">
            <div className="text-[10.5px] font-medium tracking-[0.26em] uppercase text-sunset mb-5 text-center">Amenidades</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-12 text-center">La infraestructura de su vida</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {AMENITIES.map((a) => (
                <div key={a.title} className="relative aspect-[4/3] overflow-hidden group">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${a.img})` }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(8,8,7,.92) 0%,rgba(8,8,7,.2) 55%,transparent 80%)" }} />
                  <div className="absolute bottom-0 p-5">
                    <div className="font-serif text-lg font-light text-cream">{a.title}</div>
                    <div className="text-[11px] text-charcoal-200 mt-0.5">{a.sub}</div>
                    <div className="font-serif italic text-sunset text-sm mt-1.5">{a.quote}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-charcoal-500 mt-4 text-center">Imágenes ilustrativas — galería completa disponible en el dossier privado</p>
          </div>
        </section>



        {/* SEC 10 — DOSSIER FINAL */}
        <section id="dossier" className="px-6 md:px-16 py-24 bg-charcoal-950">
          <div className="max-w-xl mx-auto cip-panel text-center">
            <div className="text-[11px] font-medium tracking-[0.28em] uppercase text-sunset mb-4">Listo para explorar</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">Cipriani Residences Miami no es para todos.<br /><em className="italic">Ni pretende serlo.</em></h2>
            <p className="text-sm font-light text-charcoal-200 mb-2">Si esto resuena con usted, el siguiente paso es privado.</p>
            <p className="text-[13px] font-light text-charcoal-400 mb-10">Disponibilidad por nivel · Planos y renders 3D · Estructura de precios · Sesión privada con Santamaría Collection</p>
            {sent ? (
              <p className="font-serif italic text-lg py-8">Gracias. Complete el envío en WhatsApp — responderemos en menos de 24h.</p>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
                <input name="nombre" placeholder="Nombre" required className={inputCls} />
                <input name="apellidos" placeholder="Apellidos" required className={inputCls} />
                <input name="email" type="email" placeholder="Email" required className={`sm:col-span-2 ${inputCls}`} />
                <input name="telefono" type="tel" placeholder="Teléfono / WhatsApp" required className={`sm:col-span-2 ${inputCls}`} />
                <button type="submit" className="sm:col-span-2 mt-2 text-[11.5px] font-medium tracking-wide uppercase py-4 bg-sunset text-ocean hover:bg-sunset-dk transition-colors">Solicitar dossier ejecutivo</button>
                <div className="sm:col-span-2 text-center text-[10.5px] tracking-wide text-charcoal-500 mt-1">info@santamaria-collection.com · +34 610 589 716 (WhatsApp directo)</div>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="px-6 md:px-16 py-8 text-center text-[10.5px] font-light text-charcoal-400 bg-ocean-dk">
        © 2026 Santamaría Collection. Imágenes con fines ilustrativos. Precios y disponibilidad sujetos a cambios.
      </footer>
    </div>
  );
}
