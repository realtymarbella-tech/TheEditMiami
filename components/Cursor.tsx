"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = matchMedia("(pointer: coarse)").matches;
    if (reduced || isTouch || !dotRef.current || !ringRef.current) return;

    const dx = gsap.quickTo(dotRef.current, "x", { duration: 0.12, ease: "power3" });
    const dy = gsap.quickTo(dotRef.current, "y", { duration: 0.12, ease: "power3" });
    const rx = gsap.quickTo(ringRef.current, "x", { duration: 0.45, ease: "power3" });
    const ry = gsap.quickTo(ringRef.current, "y", { duration: 0.45, ease: "power3" });

    const move = (e: MouseEvent) => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); };
    addEventListener("mousemove", move);

    const onEnter = () => document.body.classList.add("cur-big");
    const onLeave = () => document.body.classList.remove("cur-big");
    document.querySelectorAll("a,button").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cream pointer-events-none z-[998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block" />
      <div ref={ringRef} className="fixed top-0 left-0 w-9 h-9 rounded-full border border-cream/55 pointer-events-none z-[998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-[width,height] duration-300 hidden md:block [body.cur-big_&]:w-18 [body.cur-big_&]:h-18" />
    </>
  );
}
