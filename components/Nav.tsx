"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import LocaleSwitcher from "@/components/LocaleSwitcher";

interface Props {
  locale: string;
  t: Record<string, string>;
}

export default function Nav({ locale, t }: Props) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const isTouch = matchMedia("(pointer: coarse)").matches;
    if (isTouch || !btnRef.current) return;
    const btn = btnRef.current;
    const onMove = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.28, y: (e.clientY - r.top - r.height / 2) * 0.4, duration: 0.4, ease: "power3" });
    };
    const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.65, ease: "elastic.out(1,0.35)" });
    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    return () => { btn.removeEventListener("mousemove", onMove); btn.removeEventListener("mouseleave", onLeave); };
  }, []);

  const prefix = locale === "en" ? "/en" : "";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center gap-8 px-6 md:px-16 bg-charcoal-950/55 backdrop-blur-md border-b border-white/10">
      <Link href={`${prefix}/`} className="flex flex-col items-start leading-none shrink-0">
        <span className="font-serif text-lg md:text-xl tracking-wide text-cream">SANTAMARIA</span>
        <span className="flex items-center gap-2 self-stretch mt-1">
          <span className="flex-1 h-px bg-rose" />
          <span className="font-sans text-[8px] tracking-[0.4em] text-rose">COLLECTION</span>
          <span className="flex-1 h-px bg-rose" />
        </span>
      </Link>
      <div className="hidden md:flex gap-8 flex-1 justify-end items-center">
        <Link href={`${prefix}/cipriani-residences`} className="text-xs tracking-wide text-charcoal-200 hover:text-cream transition-colors">{t.cipriani}</Link>
        <Link href={`${prefix}/elle-residences-miami`} className="text-xs tracking-wide text-charcoal-200 hover:text-cream transition-colors">{t.elle}</Link>
        <Link href={`${prefix}/domus-brickell`} className="text-xs tracking-wide text-charcoal-200 hover:text-cream transition-colors">{t.domus}</Link>
        <Link href={`${prefix}/#comparar`} className="text-xs tracking-wide text-charcoal-200 hover:text-cream transition-colors">{t.compare}</Link>
        <span className="w-px h-5 bg-white/20" />
        <LocaleSwitcher currentLocale={locale} label={t.lang} />
        <a ref={btnRef} href={`${prefix}/#contacto`} className="text-xs font-medium tracking-wide bg-rose-lt text-ocean px-6 py-3 hover:bg-rose-dk transition-colors magnetic">{t.access}</a>
      </div>
    </nav>
  );
}
