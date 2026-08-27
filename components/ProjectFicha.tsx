"use client";
import ScrollText from "@/components/ScrollText";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { track } from "@/components/useTracker";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

interface ExtraSection {
  id?: string;
  overline: string;
  title: string;
  body: string;
  bg?: string;
}

interface Props {
  slug: string; accent: string; accentDk: string; themeColor: string;
  num: string; name: string; tag: string; price: string;
  vision: string; quote: string;
  stats: [string, string][];
  design: string; units: string; amenities: string[];
  location: string; process: [string, string, string][];
  video: string; poster: string; gallery: string[];
  other: { slug: string; name: string }[];
  extraSections?: ExtraSection[];
}

const PROPERTY_IDS: Record<string, string> = {
  "cipriani-residences":    "SCR-001",
  "elle-residences-miami":  "SCR-002",
  "domus-brickell":         "SCR-003",
  "one-twenty-brickell":    "SCR-004",
};

export default function ProjectFicha(p: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.body.classList.add("no-loader");
    document.body.classList.add("loaded");
    const meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
    if (meta) meta.setAttribute("content", p.themeColor);

    const v = videoRef.current;
    if (!v) return;
    v.addEventListener("canplay", () => { v.play().catch(() => {}); v.style.opacity = "1"; }, { once: true });
    v.load();

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    gsap.utils.toArray<HTMLElement>(".panel").forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 78%" },
      });
    });

    // ── TRACK: view_property ──────────────────────────────────
    track({
      event_name:    "view_property",
      property_id:   PROPERTY_IDS[p.slug] || p.slug,
      property_name: p.name.replace("\n", " "),
      page_title:    document.title,
      page_category: "ficha_desarrollo",
    });
  }, [p.themeColor, p.slug, p.name]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const d = Object.fromEntries(fd) as Record<string, string>;

    // ── TRACK: contact_property ───────────────────────────────
    track({
      event_name:    "contact_property",
      property_id:   PROPERTY_IDS[p.slug] || p.slug,
      property_name: p.name.replace("\n", " "),
      value:         3000,
      form_id:       `dossier-${p.slug}`,
      user_data: {
        em: d.email,
        ph: d.telefono,
      },
    });

    fetch("https://sqdvkfcghdjxtyuybxpy.supabase.co/rest/v1/leads", {
      method: "POST", keepalive: true,
      headers: { "Content-Type": "application/json", "Content-Profile": "santamaria",
        "apikey": "sb_publishable_LIaG8wb4ciGYSVkUAI8UeQ_wj3BVR4j",
        "Authorization": "Bearer sb_publishable_LIaG8wb4ciGYSVkUAI8UeQ_wj3BVR4j",
        "Prefer": "return=minimal" },
      body: JSON.stringify({ nombre: d.nombre, apellidos: d.apellidos, email: d.email, telefono: d.telefono, proyecto: p.name.replace("\n"," "), origen: p.slug }),
    }).catch(() => {});

    const msg = encodeURIComponent(`Hola, solicito el dossier de ${p.name.replace("\n"," ")}.\nNombre: ${d.nombre} ${d.apellidos}\nEmail: ${d.email}\nTeléfono: ${d.telefono}`);
    window.open(`https://wa.me/34610589716?text=${msg}`, "_blank");
    setSent(true);
  };

  const inputCls = "bg-transparent border px-4 py-3.5 text-sm font-light placeholder:text-charcoal-400 focus:outline-none transition-colors";

  return (
    <div className="bg-charcoal-950 text-cream min-h-screen">
      {/* BG VIDEO */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-charcoal-950">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${p.poster})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <video ref={videoRef} muted loop playsInline preload="metadata" src={p.video}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700" style={{ inset: "-5%", width: "110%", height: "110%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,rgba(8,8,7,.45) 0%,rgba(8,8,7,.68) 45%,rgba(8,8,7,.93) 100%)" }} />
      </div>

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-[100] h-[68px] flex items-center gap-5 px-6 md:px-16 bg-charcoal-950/50 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="text-xs tracking-wide text-charcoal-200 hover:text-cream transition-colors flex-1">← Santamaría Collection</Link>
        <div className="flex flex-col items-center leading-none">
          <span className="font-serif text-base text-cream tracking-wide">SANTAMARIA</span>
          <span className="flex items-center gap-1.5 self-stretch mt-0.5">
            <span className="flex-1 h-px bg-rose-lt" />
            <span className="text-[7px] tracking-[0.4em] text-rose-lt">COLLECTION</span>
            <span className="flex-1 h-px bg-rose-lt" />
          </span>
        </div>
        <a href="#dossier" className="text-xs font-medium tracking-wide px-5 py-2.5 flex-1 text-right" style={{ background: p.accent, color: "#071A23" }}>Dossier</a>
      </nav>

      {/* CONTENT */}
      <main className="relative z-10 pt-[68px]">
        <section className="min-h-screen flex items-center px-6 md:px-16 py-20 panel">
          <div className="max-w-2xl">
            <div className="text-[11px] font-medium tracking-[0.28em] uppercase mb-4" style={{ color: p.accent }}>{p.num} — La ficha</div>
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight mb-5">{p.name.split("\n").map((l,i) => <span key={i}>{l}<br /></span>)}</h1>
            <div className="font-serif italic text-lg text-charcoal-200 mb-5">{p.tag}</div>
            <div className="font-serif text-2xl font-light" style={{ color: p.accent }}>{p.price}</div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-20">
          <div className="max-w-2xl mx-auto panel">
            <div className="text-[11px] font-medium tracking-[0.28em] uppercase mb-4" style={{ color: p.accent }}>La visión</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">Por qué existe</h2>
            <p className="text-[15px] font-light leading-loose text-charcoal-200"><ScrollText text={p.vision} accentColor="#FDFCFB" dimColor="rgba(253,252,251,0.18)" /></p>
            {p.quote && <blockquote className="font-serif italic text-xl font-light text-cream border-l-2 pl-5 mt-8 leading-snug" style={{ borderColor: p.accent }}>{p.quote}</blockquote>}
          </div>
        </section>

        {p.extraSections?.map((sec, i) => (
          <section key={i} id={sec.id} className={`px-6 md:px-16 py-20 ${sec.bg ?? "bg-charcoal-950"}`}>
            <div className="max-w-2xl mx-auto panel">
              <div className="text-[11px] font-medium tracking-[0.28em] uppercase mb-4" style={{ color: p.accent }}>{sec.overline}</div>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">{sec.title}</h2>
              <p className="text-[15px] font-light leading-loose text-charcoal-200"><ScrollText text={sec.body} accentColor="#FDFCFB" dimColor="rgba(253,252,251,0.18)" /></p>
            </div>
          </section>
        ))}

        <section className="px-6 md:px-16 py-20">
          <div className="max-w-2xl mx-auto panel">
            <div className="text-[11px] font-medium tracking-[0.28em] uppercase mb-4" style={{ color: p.accent }}>El edificio</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">Cifras y firma</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
              {p.stats.map(([v, l]) => (
                <div key={l}><b className="block font-serif text-3xl font-light" style={{ color: p.accent }}>{v}</b><span className="text-[10px] tracking-wide uppercase text-charcoal-400">{l}</span></div>
              ))}
            </div>
            <p className="text-[15px] font-light leading-loose text-charcoal-200" dangerouslySetInnerHTML={{ __html: p.design.replace(/\*\*(.*?)\*\*/g, '<b class="text-cream font-medium">$1</b>') }} />
          </div>
        </section>

        <section className="px-6 md:px-16 py-20">
          <div className="max-w-2xl mx-auto panel">
            <div className="text-[11px] font-medium tracking-[0.28em] uppercase mb-4" style={{ color: p.accent }}>Las residencias</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">Cómo se entregan</h2>
            <p className="text-[15px] font-light leading-loose text-charcoal-200 mb-8"><ScrollText text={p.units} accentColor="#FDFCFB" dimColor="rgba(253,252,251,0.18)" /></p>
            <div className="grid grid-cols-2 gap-2.5">
              {p.gallery.map((img, i) => (
                <div key={i} className="relative aspect-[3/4] overflow-hidden">
                  <Image src={img} alt={`${p.name.replace("\n"," ")} — imagen ${i + 1}`} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" loading="lazy" />
                </div>
              ))}
              <div className="col-span-2 text-[10px] tracking-wide uppercase text-charcoal-400 mt-1">Galería completa disponible en el dossier privado</div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 py-20">
          <div className="max-w-2xl mx-auto panel">
            <div className="text-[11px] font-medium tracking-[0.28em] uppercase mb-4" style={{ color: p.accent }}>Amenidades</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-8">Lo que incluye</h2>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {p.amenities.map((a) => (
                <li key={a} className="text-[14.5px] font-light text-charcoal-200 pl-5 relative before:absolute before:left-0 before:content-['—']" style={{ ['--tw-before-color' as string]: p.accent }}>
                  <span style={{ color: p.accent }} className="absolute left-0">—</span>{a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 md:px-16 py-20">
          <div className="max-w-2xl mx-auto panel">
            <div className="text-[11px] font-medium tracking-[0.28em] uppercase mb-4" style={{ color: p.accent }}>La ubicación</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">El barrio</h2>
            <p className="text-[15px] font-light leading-loose text-charcoal-200"><ScrollText text={p.location} accentColor="#FDFCFB" dimColor="rgba(253,252,251,0.18)" /></p>
          </div>
        </section>

        <section className="px-6 md:px-16 py-20">
          <div className="max-w-2xl mx-auto panel">
            <div className="text-[11px] font-medium tracking-[0.28em] uppercase mb-4" style={{ color: p.accent }}>El proceso</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-10">Comprar desde cualquier país</h2>
            <div className="flex flex-col gap-6">
              {p.process.map(([n, t, d]) => (
                <div key={n} className="flex gap-5 items-start">
                  <b className="font-serif text-2xl font-light shrink-0" style={{ color: p.accent }}>{n}</b>
                  <div><h3 className="text-sm font-medium tracking-wide uppercase mb-1">{t}</h3><p className="text-[13.5px] font-light text-charcoal-200 leading-relaxed">{d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="dossier" className="px-6 md:px-16 py-20">
          <div className="max-w-xl mx-auto panel text-center">
            <div className="text-[11px] font-medium tracking-[0.28em] uppercase mb-4" style={{ color: p.accent }}>Acceso privado</div>
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">Dossier privado</h2>
            <p className="text-sm font-light text-charcoal-200 mb-10">Precios por unidad, planos técnicos y disponibilidad actualizada — directo del inventario del desarrollador.</p>
            {sent ? (
              <p className="font-serif italic text-lg py-8">Gracias. Complete el envío en WhatsApp — responderemos en menos de 24h.</p>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-left">
                <input name="nombre" placeholder="Nombre" required className={`${inputCls} border-charcoal-700 text-cream`} />
                <input name="apellidos" placeholder="Apellidos" required className={`${inputCls} border-charcoal-700 text-cream`} />
                <input name="email" type="email" placeholder="Email" required className={`sm:col-span-2 ${inputCls} border-charcoal-700 text-cream`} />
                <input name="telefono" type="tel" placeholder="Teléfono / WhatsApp" required className={`sm:col-span-2 ${inputCls} border-charcoal-700 text-cream`} />
                <button type="submit" className="sm:col-span-2 mt-2 text-[11.5px] font-medium tracking-wide uppercase py-4 transition-colors text-charcoal-950" style={{ background: p.accent }}>Solicitar por WhatsApp</button>
                <div className="sm:col-span-2 text-center text-[10.5px] tracking-wide text-charcoal-500 mt-1">Respuesta en menos de 24h · info@santamaria-collection.com</div>
              </form>
            )}
            <div className="grid grid-cols-2 gap-3 mt-10">
              {p.other.map((o) => (
                <Link key={o.slug} href={`/${o.slug}`} className="border border-white/15 px-4 py-4 text-xs tracking-wide uppercase hover:border-white/40 transition-colors">{o.name} →</Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 px-6 md:px-16 py-8 text-center text-[10.5px] font-light text-charcoal-400" style={{ background: "rgba(7,26,35,.7)", backdropFilter: "blur(10px)" }}>
        © 2026 Santamaría Collection. Imágenes con fines ilustrativos. Precios y disponibilidad sujetos a cambios.
      </footer>
    </div>
  );
}
