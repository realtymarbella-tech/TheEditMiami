"use client";
import Image from "next/image";

interface Props {
  locale: string;
}

const ITEMS_ES = [
  { type: "stat", value: "3", label: "Desarrollos curados" },
  { type: "logo", name: "Cipriani", detail: "Brickell · 950 ft · Desde $1.8M" },
  { type: "stat", value: "1.156", label: "Residencias" },
  { type: "logo", name: "Elle Residences", detail: "Edgewater · Desde $600K" },
  { type: "stat", value: "950 ft", label: "La torre más alta de Florida" },
  { type: "logo", name: "Domus Brickell", detail: "Brickell · Desde $500K" },
  { type: "stat", value: "$500K", label: "Precio de entrada" },
];

const ITEMS_EN = [
  { type: "stat", value: "3", label: "Curated developments" },
  { type: "logo", name: "Cipriani", detail: "Brickell · 950 ft · From $1.8M" },
  { type: "stat", value: "1,156", label: "Residences" },
  { type: "logo", name: "Elle Residences", detail: "Edgewater · From $600K" },
  { type: "stat", value: "950 ft", label: "Florida's tallest tower" },
  { type: "logo", name: "Domus Brickell", detail: "Brickell · From $500K" },
  { type: "stat", value: "$500K", label: "Starting price" },
];

const LOGOS: Record<string, { src: string; type: "png" | "svg" }> = {
  "Cipriani": { src: "/logos/cipriani.svg", type: "svg" },
  "Elle Residences": { src: "/logos/elle.svg", type: "svg" },
  "Domus Brickell": { src: "/logos/domus.svg", type: "svg" },
};

export default function Ticker({ locale }: Props) {
  const items = locale === "en" ? ITEMS_EN : ITEMS_ES;
  // Triplicamos para loop infinito sin saltos
  const repeated = [...items, ...items, ...items];

  return (
    <div className="bg-ocean text-cream overflow-hidden border-y border-white/10 relative" style={{ height: "192px" }}>
      {/* Gradientes en los bordes */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #0C2430 0%, transparent 100%)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(270deg, #0C2430 0%, transparent 100%)" }} />

      <div
        className="flex items-center h-full"
        style={{
          width: "max-content",
          animation: "ticker-scroll 45s linear infinite",
        }}
      >
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            {item.type === "stat" ? (
              <div className="flex items-baseline gap-2.5 px-10">
                <span className="font-serif text-2xl font-light text-aqua-lt">{item.value}</span>
                <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-charcoal-200 whitespace-nowrap">{item.label}</span>
              </div>
            ) : (
              <div className="flex items-center gap-3 px-10">
                <div className="flex items-center justify-center shrink-0" style={{ height: "56px" }}>
                  {(() => {
                  const logo = LOGOS[item.name ?? ""];
                  return logo ? (
                    <img src={logo.src} alt={item.name ?? ""} style={{ height: "144px", width: "auto", opacity: 0.95 }} />
                  ) : null;
                })()}
                </div>
                <div>
                  <div className="text-[11px] font-medium tracking-wide text-cream whitespace-nowrap">{item.name}</div>
                  <div className="text-[9.5px] tracking-wide text-charcoal-400 whitespace-nowrap">{item.detail}</div>
                </div>
              </div>
            )}
            {/* Separador */}
            <span className="text-charcoal-700 text-lg shrink-0">·</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="ticker-scroll"] { animation: none; }
        }
      `}</style>
    </div>
  );
}
