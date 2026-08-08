"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

interface CompareT {
  overline: string; h2: string; h2_em: string; sub: string;
  elle_info: string; cip_info: string; dom_info: string;
}
interface Props { locale: string; t: CompareT; }

export default function TowerCompare({ locale, t }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const [activeTower, setActiveTower] = useState<number | null>(null);

  const TOWERS = [
    { key: "elle", name: "Elle Residences", label: "Elle", ft: "300 ft", info: t.elle_info.split("\n"), w: 84, h: 150, d: "M22 150 V22 H38 V12 H62 V150 Z" },
    { key: "cipriani", name: "Cipriani Residences", label: "Cipriani", ft: "950 ft", info: t.cip_info.split("\n"), w: 110, h: 440, d: "M30 440 C22 300 24 160 38 10 H72 C86 160 88 300 80 440 Z" },
    { key: "domus", name: "Domus Brickell", label: "Domus", ft: "400 ft", info: t.dom_info.split("\n"), w: 92, h: 190, d: "M18 190 V30 H44 V16 H74 V190 Z" },
  ];

  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !containerRef.current) return;
    const paths = pathRefs.current.filter(Boolean) as SVGPathElement[];
    paths.forEach((path) => {
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(path, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: containerRef.current, start: "top 90%", end: "bottom 60%", scrub: 0.5 } });
    });
    return () => { ScrollTrigger.getAll().forEach((t) => { if (t.trigger === containerRef.current) t.kill(); }); };
  }, []);

  useEffect(() => {
    const close = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-tower]")) setActiveTower(null);
    };
    document.addEventListener("click", close);
    document.addEventListener("scroll", () => setActiveTower(null), { passive: true });
    return () => { document.removeEventListener("click", close); };
  }, []);

  return (
    <section id="comparar" className="py-24 md:py-40 px-6 md:px-16 bg-cream text-center">
      <div className="text-[10.5px] font-medium tracking-[0.26em] uppercase text-aqua-dk mb-3.5">{t.overline}</div>
      <h2 className="font-serif text-3xl md:text-5xl font-light text-charcoal-950 mb-2.5">{t.h2} <em className="italic">{t.h2_em}</em></h2>
      <p className="text-sm font-light text-charcoal-500 max-w-lg mx-auto mb-14">{t.sub}</p>
      <div ref={containerRef} className="flex items-end justify-center gap-7 md:gap-20 h-[340px] md:h-[480px] border-b border-charcoal-400 px-4">
        {TOWERS.map((tower, i) => (
          <div key={tower.key} data-tower onClick={(e) => { e.stopPropagation(); setActiveTower(activeTower === i ? null : i); }} className="group relative flex flex-col items-center justify-end h-full cursor-pointer">
            <div className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 transition-all duration-300 bg-charcoal-950 text-cream px-5 py-3.5 min-w-[210px] text-left z-10 ${activeTower === i ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0"}`}>
              <b className="block text-xs tracking-wide uppercase mb-1">{tower.name}</b>
              {tower.info.map((line, j) => <span key={j} className="block text-[11.5px] font-light text-charcoal-200 leading-relaxed">{line}</span>)}
            </div>
            <svg width={tower.w} height={tower.h} viewBox={`0 0 ${tower.w} ${tower.h}`} className="scale-[0.72] md:scale-100 origin-bottom transition-transform duration-400 group-hover:-translate-y-1.5">
              <path ref={(el) => { pathRefs.current[i] = el; }} d={tower.d} className="fill-charcoal-100 stroke-charcoal-500" style={{ strokeWidth: 1.5, fillOpacity: 0.35 }} />
            </svg>
            <div className="font-serif text-xl font-light text-charcoal-500 mt-4">{tower.ft}</div>
            <div className="text-[11px] font-medium tracking-wide uppercase text-charcoal-700 mt-1">{tower.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
