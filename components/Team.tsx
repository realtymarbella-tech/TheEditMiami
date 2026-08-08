import Image from "next/image";

interface TeamT {
  overline: string; h2_1: string; h2_em: string;
  p1: string; p2: string; p2_em: string;
  enrique_title: string; maribel_title: string;
}
interface Props { locale: string; t: TeamT; }

const MEMBERS = [
  { name: "Maribel Santamaría", titleKey: "maribel_title", location: "Miami", img: "/images/team/maribel.webp" },
  { name: "Enrique Cortés", titleKey: "enrique_title", location: "Marbella", img: "/images/team/enrique.webp" },
];

export default function Team({ locale, t }: Props) {
  return (
    <section className="py-24 md:py-40 px-6 md:px-16 bg-charcoal-950 text-cream">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-20">
          <div className="text-[10.5px] font-medium tracking-[0.28em] uppercase text-rose-lt mb-5">{t.overline}</div>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8">
            {t.h2_1}<br /><em className="italic font-light">{t.h2_em}</em>
          </h2>
          <p className="text-[15.5px] font-light leading-loose text-charcoal-200 mb-5">{t.p1}</p>
          <p className="text-[15.5px] font-light leading-loose text-charcoal-200">
            {t.p2} <span className="text-cream font-normal">{t.p2_em}</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:gap-12 max-w-lg">
          {MEMBERS.map((m) => (
            <div key={m.name} className="flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={m.img} alt={m.name} fill className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700" sizes="(max-width:768px) 45vw, 220px" />
              </div>
              <div>
                <div className="font-serif text-lg font-light text-cream">{m.name}</div>
                <div className="text-[10.5px] tracking-[0.14em] uppercase text-charcoal-400 mt-0.5">{t[m.titleKey as keyof TeamT]}</div>
                <div className="text-[10.5px] tracking-[0.18em] uppercase text-rose-lt mt-0.5">{m.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
