import Link from "next/link";

interface Props {
  locale: string;
  t: Record<string, string>;
}

export default function Footer({ locale, t }: Props) {
  const prefix = locale === "en" ? "/en" : "";
  return (
    <footer className="bg-ocean-dk text-charcoal-200 pt-14 px-6 md:px-16 pb-8 border-t border-rose-lt">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-12 mb-10">
        <div>
          <div className="flex flex-col items-start leading-none mb-3.5 w-max">
            <span className="font-serif text-lg text-cream">SANTAMARIA</span>
            <span className="flex items-center gap-2 self-stretch mt-1">
              <span className="flex-1 h-px bg-rose-lt" />
              <span className="text-[8px] tracking-[0.4em] text-rose-lt">COLLECTION</span>
              <span className="flex-1 h-px bg-rose-lt" />
            </span>
          </div>
          <p className="text-[13px] font-light leading-relaxed">{t.tagline}</p>
        </div>
        <div>
          <h5 className="text-[10.5px] font-medium tracking-[0.2em] uppercase text-rose-lt mb-3.5">{t.collection}</h5>
          <Link href={`${prefix}/cipriani-residences`} className="block text-[13px] font-light leading-8 hover:text-cream transition-colors">Cipriani Residences</Link>
          <Link href={`${prefix}/elle-residences-miami`} className="block text-[13px] font-light leading-8 hover:text-cream transition-colors">Elle Residences</Link>
          <Link href={`${prefix}/domus-brickell`} className="block text-[13px] font-light leading-8 hover:text-cream transition-colors">Domus Brickell</Link>
          <Link href={`${prefix}/#comparar`} className="block text-[13px] font-light leading-8 hover:text-cream transition-colors">{t.compare}</Link>
        </div>
        <div>
          <h5 className="text-[10.5px] font-medium tracking-[0.2em] uppercase text-rose-lt mb-3.5">{t.contact}</h5>
          <a href="mailto:info@santamaria-collection.com" className="block text-[13px] font-light leading-8 hover:text-cream transition-colors">info@santamaria-collection.com</a>
          <a href="https://wa.me/34610589716" className="block text-[13px] font-light leading-8 hover:text-cream transition-colors">WhatsApp +34 610 589 716</a>
          <p className="text-[13px] font-light leading-8">Marbella · Miami</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 md:gap-8 items-start md:items-center">
        <p className="text-[10.5px] font-light text-charcoal-500 leading-relaxed flex-1">{t.legal}</p>
        <div className="flex gap-5 shrink-0">
          <a href={`${prefix}/legal`} className="text-[10.5px] text-charcoal-400 hover:text-cream transition-colors whitespace-nowrap">{t.legalLink}</a>
          <a href={`${prefix}/${locale === "en" ? "privacy" : "privacidad"}`} className="text-[10.5px] text-charcoal-400 hover:text-cream transition-colors whitespace-nowrap">{t.privacyLink}</a>
        </div>
      </div>
    </footer>
  );
}
