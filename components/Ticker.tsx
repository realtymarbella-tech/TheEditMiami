"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  locale: string;
}

const ITEMS_ES = [
  { type: "stat", value: "950 ft", label: "La torre más alta de Florida" },
  { type: "logo", name: "cipriani" },
  { type: "stat", value: "3", label: "Desarrollos curados" },
  { type: "logo", name: "elle" },
  { type: "stat", value: "1.156", label: "Residencias" },
  { type: "logo", name: "domus" },
  { type: "stat", value: "$500K", label: "Precio de entrada" },
];

const ITEMS_EN = [
  { type: "stat", value: "950 ft", label: "Florida's tallest tower" },
  { type: "logo", name: "cipriani" },
  { type: "stat", value: "3", label: "Curated developments" },
  { type: "logo", name: "elle" },
  { type: "stat", value: "1,156", label: "Residences" },
  { type: "logo", name: "domus" },
  { type: "stat", value: "$500K", label: "Starting price" },
];

const LOGO_HEIGHT: Record<string, number> = { cipriani: 130, elle: 160, domus: 80 };
const LOGO_WIDTH: Record<string, number> = { cipriani: 146, elle: 200, domus: 200 };

function Track({ items }: { items: typeof ITEMS_ES }) {
  return (
    <>
      {items.map((item, i) => (
        <div key={i} className="flex items-center shrink-0 px-10">
          {item.type === "stat" ? (
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-3xl font-light text-aqua-lt whitespace-nowrap">{item.value}</span>
              <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-charcoal-200 whitespace-nowrap">{item.label}</span>
            </div>
          ) : (
            <img
              src={`/logos/${item.name}.svg`}
              alt={item.name ?? ""}
              style={{
                height: `${LOGO_HEIGHT[item.name ?? "cipriani"]}px`,
                width: `${LOGO_WIDTH[item.name ?? "cipriani"]}px`,
                opacity: 0.9,
                flexShrink: 0,
                display: "block",
              }}
            />
          )}
          <span className="ml-10 text-charcoal-700 text-lg shrink-0">·</span>
        </div>
      ))}
    </>
  );
}

export default function Ticker({ locale }: Props) {
  const items = locale === "en" ? ITEMS_EN : ITEMS_ES;
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.scrollWidth);
      }
    };
    // Medir tras el render y tras cargar todas las imágenes
    measure();
    const images = trackRef.current?.querySelectorAll("img") ?? [];
    let loaded = 0;
    images.forEach((img) => {
      if (img.complete) { loaded++; if (loaded === images.length) measure(); }
      else img.addEventListener("load", () => { loaded++; if (loaded === images.length) measure(); });
    });
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [locale]);

  const reduced = typeof window !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const duration = trackWidth > 0 ? trackWidth / 40 : 30; // ~40px/s

  return (
    <div className="bg-ocean text-cream border-y border-white/10 relative overflow-hidden" style={{ height: "240px" }}>
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg,#0C2430,transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(270deg,#0C2430,transparent)" }} />

      <div className="absolute inset-0 flex items-center" style={{ width: "max-content" }}>
        <div
          ref={trackRef}
          className="flex items-center shrink-0"
          style={{
            animation: trackWidth > 0 && !reduced ? `ticker-move ${duration}s linear infinite` : "none",
            ["--track-w" as string]: `-${trackWidth}px`,
          }}
        >
          <Track items={items} />
        </div>
        {trackWidth > 0 && (
          <div className="flex items-center shrink-0" style={{ animation: !reduced ? `ticker-move ${duration}s linear infinite` : "none", ["--track-w" as string]: `-${trackWidth}px` }}>
            <Track items={items} />
          </div>
        )}
      </div>

      <style>{`
        @keyframes ticker-move {
          from { transform: translateX(0); }
          to   { transform: translateX(var(--track-w)); }
        }
      `}</style>
    </div>
  );
}
