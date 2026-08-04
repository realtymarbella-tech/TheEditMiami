"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// El primer slide es el LCP — se preloaded en layout.tsx
const SLIDES = [
  { img: "/images/cipriani/home_cip.webp", kb: "kb-panr" },
  { img: "/images/elle/home_elle.webp", kb: "kb-zoomout" },
  { img: "/images/domus/home_domus.webp", kb: "kb-panl" },
  { img: "/images/cipriani/exterior2.webp", kb: "kb-diag" },
];

const CARDS = [
  { href: "#cipriani", name: "Cipriani Residences Miami", meta: "Brickell · Legado Italiano", price: "Desde $1.8M USD", img: "/images/cipriani/home_cip.webp", accent: "text-sunset" },
  { href: "#elle", name: "Elle Residences", meta: "Edgewater · Alta Costura", price: "Desde $600K USD", img: "/images/elle/home_elle.webp", accent: "text-flamingo" },
  { href: "#domus", name: "Domus Brickell", meta: "Brickell · Inversión Flexible", price: "Desde $500K USD", img: "/images/domus/home_domus.webp", accent: "text-aqua-lt" },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const btnSolidRef = useRef<HTMLAnchorElement>(null);
  const btnGhostRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const t = setInterval(() => setActive((c) => (c + 1) % SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const isTouch = matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    [btnSolidRef.current, btnGhostRef.current].forEach((btn) => {
      if (!btn) return;
      const onMove = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.28, y: (e.clientY - r.top - r.height / 2) * 0.4, duration: 0.4, ease: "power3" });
      };
      const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.65, ease: "elastic.out(1,0.35)" });
      btn.addEventListener("mousemove", onMove);
      btn.addEventListener("mouseleave", onLeave);
    });
  }, []);

  return (
    <header id="top" className="grid md:grid-cols-[55fr_45fr] pt-[72px] gap-0.5 bg-charcoal-950">
      <div className="relative overflow-hidden flex items-center min-h-[74vh] md:min-h-screen">
        {SLIDES.map((s, i) => (
          <div key={i} className={`hero-slide ${s.kb} ${i === active ? "active" : ""}`} style={{ backgroundImage: `url(${s.img})` }} />
        ))}
        <div className="absolute inset-0 z-[2]" style={{ background: "linear-gradient(92deg,rgba(18,18,16,.94) 0%,rgba(18,18,16,.86) 55%,rgba(18,18,16,.15) 100%),linear-gradient(to top,rgba(18,18,16,.6) 0%,transparent 30%)" }} />
        <div className="relative z-[3] px-6 md:px-16 flex flex-col gap-6 max-w-xl">
          <div className="text-[11px] font-medium tracking-[0.3em] uppercase text-charcoal-200">Residencias ultra-luxury curadas</div>
          <h1 className="font-serif text-5xl md:text-7xl font-normal leading-tight text-cream" style={{ textShadow: "0 1px 12px rgba(0,0,0,.55)" }}>
            El nuevo <em className="italic font-light">estándar</em><br />del <em className="italic font-light">alto diseño</em><br />en Miami.
          </h1>
          <p className="text-[15px] font-light leading-relaxed text-cream max-w-md" style={{ textShadow: "0 1px 12px rgba(0,0,0,.55)" }}>
            Tres desarrollos escogidos entre todo lo que se construye hoy en Brickell y Edgewater. Solo lo excepcional.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <a ref={btnSolidRef} href="#contacto" className="text-[11.5px] font-medium tracking-wide uppercase px-8 py-4 bg-rose-lt text-ocean hover:bg-rose-dk transition-colors">Solicitar dossier</a>
            <a ref={btnGhostRef} href="#cipriani" className="text-[11.5px] font-medium tracking-wide uppercase px-8 py-4 border border-cream/45 text-cream hover:bg-cream hover:text-charcoal-950 transition-colors">Ver la colección</a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-[59fr_41fr] gap-0.5 min-h-[64vh] md:min-h-screen">
        {CARDS.map((c, i) => (
          <a key={c.href} href={c.href} className={`relative overflow-hidden flex items-end bg-charcoal-900 group ${i === 0 ? "col-span-2" : ""}`}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${c.img})`, backgroundPosition: i === 0 ? "center 30%" : "center" }} />
            <div className="absolute inset-0 z-[2]" style={{ background: "linear-gradient(to top,rgba(12,15,18,.92) 0%,rgba(12,15,18,.32) 42%,transparent 70%)" }} />
            <div className="relative z-[3] p-5 flex flex-col gap-1">
              <div className={`font-medium tracking-wide uppercase text-cream ${i === 0 ? "text-xl" : "text-[15px]"}`}>{c.name}</div>
              <div className={`text-[10.5px] tracking-widest uppercase ${c.accent}`}>{c.meta}</div>
              <div className="text-xs font-light text-charcoal-200 mt-0.5">{c.price}</div>
            </div>
          </a>
        ))}
      </div>
    </header>
  );
}
