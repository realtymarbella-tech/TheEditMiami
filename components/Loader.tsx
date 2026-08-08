"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const rule1Ref = useRef<HTMLSpanElement>(null);
  const rule2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { loaderRef.current?.remove(); document.body.classList.add('loaded'); return; }

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          yPercent: -100, duration: 0.6, ease: "power4.inOut",
          onComplete: () => {
            loaderRef.current?.remove();
            document.body.classList.add("loaded");
          },
        });
      },
    });

    // Reglas arrancan colapsadas
    gsap.set([rule1Ref.current, rule2Ref.current], { scaleX: 0 });
    gsap.set(rule1Ref.current, { transformOrigin: "right" });
    gsap.set(rule2Ref.current, { transformOrigin: "left" });
    gsap.set(subRef.current, { opacity: 0 });

    tl.fromTo(logoRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
      .to([rule1Ref.current, rule2Ref.current], { scaleX: 1, duration: 1.0, ease: "power2.inOut" }, "-=0.3")
      .to(subRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.4");
  }, []);

  return (
    <div ref={loaderRef} className="fixed inset-0 z-[999] bg-charcoal-950 flex flex-col items-center justify-center gap-5">
      <div ref={logoRef} className="flex flex-col items-center leading-none opacity-0">
        <span className="font-serif text-cream tracking-wide uppercase" style={{ fontSize: "clamp(26px, 8.5vw, 64px)" }}>SANTAMARIA</span>
        <span className="flex items-center gap-2 self-stretch mt-2">
          <span ref={rule1Ref} className="flex-1 h-px bg-rose-lt" />
          <span ref={subRef} className="text-[8px] tracking-[0.4em] text-rose-lt uppercase opacity-0">Collection</span>
          <span ref={rule2Ref} className="flex-1 h-px bg-rose-lt" />
        </span>
      </div>
    </div>
  );
}
