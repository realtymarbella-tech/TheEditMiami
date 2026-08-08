"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

interface Props {
  text: string;
  className?: string;
  accentColor?: string; // color del texto iluminado, default #FDFCFB
  dimColor?: string;    // color del texto apagado, default rgba(253,252,251,0.18)
}

export default function ScrollText({ text, className = "", accentColor = "#FDFCFB", dimColor = "rgba(253,252,251,0.18)" }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words = text.split(" ");
    el.innerHTML = words
      .map((w) => `<span class="sw" style="color:${dimColor};display:inline">${w} </span>`)
      .join("");

    const spans = el.querySelectorAll<HTMLSpanElement>(".sw");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "bottom 35%",
        scrub: 0.8,
      },
    });

    spans.forEach((span, i) => {
      tl.to(span, { color: accentColor, duration: 0.3, ease: "none" }, i * 0.03);
    });

    return () => { tl.kill(); };
  }, [text, accentColor, dimColor]);

  return <p ref={ref} className={className}>{text}</p>;
}
