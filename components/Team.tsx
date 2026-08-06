import Image from "next/image";

const MEMBERS = [
  { name: "Enrique Cortés", location: "Marbella", img: "/images/team/enrique.webp" },
  { name: "Maribel Santamaría", location: "Miami", img: "/images/team/maribel.webp" },
];

export default function Team() {
  return (
    <section className="py-24 md:py-40 px-6 md:px-16 bg-charcoal-950 text-cream">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-20">
          <div className="text-[10.5px] font-medium tracking-[0.28em] uppercase text-rose-lt mb-5">Quiénes somos</div>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8">
            La diferencia entre<br /><em className="italic font-light">comprar y acertar.</em>
          </h2>
          <p className="text-[15.5px] font-light leading-loose text-charcoal-200 mb-5">
            Llevamos más de una década en los mercados de lujo de Marbella, Miami y Nueva York — suficiente tiempo para saber que el error más costoso no es pagar de más por una propiedad, sino elegir la equivocada.
          </p>
          <p className="text-[15.5px] font-light leading-loose text-charcoal-200">
            Santamaría Collection nació de una convicción: el comprador internacional merece un criterio, no un catálogo. Por eso no presentamos todo lo que se construye en Miami.{" "}
            <span className="text-cream font-normal">Solo lo que nosotros mismos compraríamos.</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:gap-12 max-w-lg">
          {MEMBERS.map((m) => (
            <div key={m.name} className="flex flex-col gap-4">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={m.img} alt={m.name} fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width:768px) 45vw, 220px"
                />
              </div>
              <div>
                <div className="font-serif text-lg font-light text-cream">{m.name}</div>
                <div className="text-[10.5px] tracking-[0.18em] uppercase text-rose-lt mt-0.5">{m.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
