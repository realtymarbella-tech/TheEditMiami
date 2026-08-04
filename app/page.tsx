import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <section className="bg-ocean text-cream py-8 px-6 md:px-16 flex flex-wrap gap-6">
        <div className="flex-1 min-w-[45%] md:min-w-0"><div className="font-serif text-4xl font-light text-aqua-lt">3</div><div className="text-[10.5px] tracking-wide uppercase text-charcoal-200">Desarrollos curados</div></div>
        <div className="flex-1 min-w-[45%] md:min-w-0"><div className="font-serif text-4xl font-light text-aqua-lt">1.156</div><div className="text-[10.5px] tracking-wide uppercase text-charcoal-200">Residencias</div></div>
        <div className="flex-1 min-w-[45%] md:min-w-0"><div className="font-serif text-4xl font-light text-aqua-lt">950 ft</div><div className="text-[10.5px] tracking-wide uppercase text-charcoal-200">La torre más alta de Florida</div></div>
        <div className="flex-1 min-w-[45%] md:min-w-0"><div className="font-serif text-4xl font-light text-aqua-lt">$500K</div><div className="text-[10.5px] tracking-wide uppercase text-charcoal-200">Precio de entrada</div></div>
      </section>
      <section className="min-h-screen flex items-center justify-center bg-cream text-charcoal-950">
        <p className="font-serif italic text-2xl text-charcoal-500">— Secciones de proyecto: Fase 3 paso 2 —</p>
      </section>
    </>
  );
}
