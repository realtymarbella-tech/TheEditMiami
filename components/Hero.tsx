"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const SLIDES = [
  { img: "/images/cipriani/home_cip.webp", kb: "kb-zoomin" },
  { img: "/images/onetwenty/exterior.webp", kb: "kb-panr" },
  { img: "/images/elle/home_elle.webp", kb: "kb-zoomout" },
  { img: "/images/domus/home_domus.webp", kb: "kb-panl" },
  { img: "/images/cipriani/exterior2.webp", kb: "kb-diag" },
];

interface HeroT {
  eyebrow: string; h1_1: string; h1_2: string; h1_3: string; h1_4: string; h1_5: string;
  sub: string; cta_primary: string; cta_secondary: string;
  card_cipriani_meta: string; card_elle_meta: string; card_domus_meta: string;
}

interface Props { locale: string; t: HeroT; prefix: string; }

export default function Hero({ locale, t, prefix }: Props) {
  const [active, setActive] = useState(0);
  const btnSolidRef = useRef<HTMLAnchorElement>(null);
  const btnGhostRef = useRef<HTMLAnchorElement>(null);

  const CARDS = [
    { href: `${prefix}/cipriani-residences`, name: "Cipriani Residences Miami", meta: t.card_cipriani_meta, price: "From $1.8M USD", img: "/images/cipriani/home_cip.webp", accent: "text-sunset" },
    { href: `${prefix}/elle-residences-miami`, name: "Elle Residences", meta: t.card_elle_meta, price: "From $600K USD", img: "/images/elle/home_elle.webp", accent: "text-flamingo" },
    { href: `${prefix}/domus-brickell`, name: "Domus Brickell", meta: t.card_domus_meta, price: "From $500K USD", img: "/images/domus/home_domus.webp", accent: "text-aqua-lt" },
    { href: `${prefix}/one-twenty-brickell`, name: "One Twenty Brickell", meta: locale === "en" ? "Brickell · Office Included" : "Brickell · Oficina Incluida", price: "From $650K USD", img: "/images/onetwenty/exterior.webp", accent: "text-[#C9A876]" },
  ];

  useEffect(() => {
    const timer = setInterval(() => setActive((c) => (c + 1) % SLIDES.length), 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const isTouch = matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    import("gsap").then(({ default: gsap }) => {
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
    });
  }, []);

  return (
    <header id="top" className="grid md:grid-cols-[55fr_45fr] pt-[72px] gap-0.5 bg-charcoal-950">
      <div className="relative overflow-hidden flex items-center min-h-[74vh] md:min-h-screen">
        {SLIDES.map((s, i) => (
          <div key={i} className={`hero-slide ${s.kb} ${i === active ? "active" : ""}`}>
            {i === 0 ? (
              <Image src={s.img} alt="Santamaría Collection Miami" fill className="object-cover object-center" priority fetchPriority="high" sizes="(max-width:960px) 100vw, 55vw" />
            ) : (
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${s.img})` }} />
            )}
          </div>
        ))}
        <div className="absolute inset-0 z-[2]" style={{ background: "linear-gradient(92deg,rgba(18,18,16,.94) 0%,rgba(18,18,16,.86) 55%,rgba(18,18,16,.15) 100%),linear-gradient(to top,rgba(18,18,16,.6) 0%,transparent 30%)" }} />
        <div className="relative z-[3] px-6 md:px-16 flex flex-col gap-6 max-w-xl">
          <div className="text-[11px] font-medium tracking-[0.3em] uppercase text-charcoal-200">{t.eyebrow}</div>
          <h1 className="font-serif text-5xl md:text-7xl font-normal leading-tight text-cream" style={{ textShadow: "0 1px 12px rgba(0,0,0,.55)" }}>
            {t.h1_1} <em className="italic font-light">{t.h1_2}</em><br />
            {t.h1_3} <em className="italic font-light">{t.h1_4}</em><br />
            {t.h1_5}
          </h1>
          <p className="text-[15px] font-light leading-relaxed text-cream max-w-md" style={{ textShadow: "0 1px 12px rgba(0,0,0,.55)" }}>{t.sub}</p>
          <div className="flex gap-3.5 flex-wrap">
            <a ref={btnSolidRef} href={`${prefix}/#contacto`} className="text-[11.5px] font-medium tracking-wide uppercase px-8 py-4 bg-rose-lt text-ocean hover:bg-rose-dk transition-colors magnetic">{t.cta_primary}</a>
            <a ref={btnGhostRef} href={`${prefix}/#cipriani`} className="text-[11.5px] font-medium tracking-wide uppercase px-8 py-4 border border-cream/45 text-cream hover:bg-cream hover:text-charcoal-950 transition-colors magnetic">{t.cta_secondary}</a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-0.5 min-h-[64vh] md:min-h-screen">
        {CARDS.map((c, i) => (
          <Link key={c.href} href={c.href} className="relative overflow-hidden flex items-end bg-charcoal-900 group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${c.img})`, backgroundPosition: "center 30%" }} />
            <div className="absolute inset-0 z-[2]" style={{ background: "linear-gradient(to top,rgba(12,15,18,.92) 0%,rgba(12,15,18,.32) 42%,transparent 70%)" }} />
            <div className="relative z-[3] p-4 flex flex-col gap-1">
              <div className="text-[13px] font-medium tracking-wide uppercase text-cream leading-tight">{c.name}</div>
              <div className={`text-[9.5px] tracking-widest uppercase ${c.accent}`}>{c.meta}</div>
              <div className="text-[11px] font-light text-charcoal-200 mt-0.5">{c.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
}
