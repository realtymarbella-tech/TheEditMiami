"use client";

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

const LOGO_DETAIL: Record<string, string> = {
  cipriani: "Brickell · From $1.8M",
  elle: "Edgewater · From $600K",
  domus: "Brickell · From $500K",
};

const LOGO_HEIGHT: Record<string, string> = {
  cipriani: "80px",
  elle: "160px",
  domus: "80px",
};

const LOGO_WIDTH: Record<string, string> = {
  cipriani: "160px",
  elle: "200px",
  domus: "200px",
};

export default function Ticker({ locale }: Props) {
  const items = locale === "en" ? ITEMS_EN : ITEMS_ES;

  return (
    <div
      className="bg-ocean text-cream border-y border-white/10 relative overflow-hidden"
      style={{ height: "240px" }}
    >
      {/* Gradientes laterales */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg,#0C2430,transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg,#0C2430,transparent)" }} />

      {/* Pista 1 */}
      <div className="absolute inset-0 flex items-center" style={{ animation: "ticker1 40s linear infinite" }}>
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center shrink-0 px-10">
            {item.type === "stat" ? (
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl font-light text-aqua-lt whitespace-nowrap">{item.value}</span>
                <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-charcoal-200 whitespace-nowrap">{item.label}</span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1">
                <img
                  src={`/logos/${item.name}.svg`}
                  alt={item.name ?? ""}
                  style={{
                    height: LOGO_HEIGHT[item.name ?? "cipriani"] ?? "80px",
                    width: LOGO_WIDTH[item.name ?? "cipriani"] ?? "160px",
                    opacity: 0.9,
                    flexShrink: 0,
                  }}
                />
              </div>
            )}
            <span className="ml-10 text-charcoal-700 text-lg shrink-0">·</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ticker1 {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
