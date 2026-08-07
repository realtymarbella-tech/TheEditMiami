import type { Metadata } from "next";
import ProjectFicha from "@/components/ProjectFicha";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Cipriani Residences Miami Precio | 950 ft Brickell | Desde $1.8M | Santamaría Collection",
  description: "La primera residencia Cipriani en América. 85 plantas, 397 residencias, interiores de 1508 London. Desde $1.8M. Colección Canaletto hasta $30M.",
  openGraph: {
    title: "Cipriani Residences Miami | 950 ft Brickell | Desde $1.8M",
    description: "La primera residencia Cipriani en América. 85 plantas, 397 residencias, interiores de 1508 London.",
    images: [{ url: "/images/og/og-cipriani.jpg", width: 1200, height: 630 }],
  },
};

export default function CiprianiPage() {
  return (
    <div className="bg-[#FAF9F6] text-stone-900 font-sans selection:bg-[#D98B3F] selection:text-white overflow-x-hidden">
      <SchemaOrg
        name="Cipriani Residences Miami"
        description="La primera residencia Cipriani construida desde cero en América. 85 plantas, 950 pies, 397 residencias diseñadas por Arquitectonica con interiores de 1508 London."
        url="https://santamaria-collection.vercel.app/cipriani"
        image="https://santamaria-collection.vercel.app/images/og/og-cipriani.jpg"
        price="1800000"
        address="1420 S Miami Ave"
        numberOfRooms="1-4"
      />
      
      {/* SECCIÓN 1 & 2: Absorbidas y optimizadas en el componente Ficha base */}
      <ProjectFicha
        slug="cipriani"
        accent="#F5A95C"
        accentDk="#D98B3F"
        themeColor="#D98B3F"
        num="N.º 01"
        name="Cipriani\nResidences Miami"
        tag="Four Generations of Italian Elegance, One Exceptional Address"
        price="At 950 feet, Cipriani Residences Miami doesn't just offer a home—it establishes your place in the most exclusive skyline in America."
        vision="When Giuseppe Cipriani opened Harry's Bar in Venice in 1931, he didn't intend to create a hotel empire. He simply understood that elegance isn't forced, and timeless places transcend generations. Cipriani Residences Miami is the first residential expression of this philosophy in America. Not a branded tower. A lifestyle landmark."
        quote='"El verdadero estilo es singular y atemporal. Puede sentirse, pero no describirse." — Arrigo Cipriani'
        stats={[["950 ft","Altura"],["85","Plantas"],["397","Residencias"],["Verano 2027","Entrega"]]}
        design="Arquitectura de Arquitectonica — el estudio detrás del skyline moderno de Miami — con una fachada curva de cristal que responde a la bahía. Interiores de 1508 London, cocinas italianas hechas a medida y una paleta de materiales que remite al mármol y al terrazo veneciano."
        units="Residencias de una a cuatro habitaciones con techos de 10 pies, terrazas profundas orientadas a Biscayne Bay. Coronando la torre, la Colección Canaletto: 68 residencias ultra-luxury en las últimas 18 plantas, con ascensor privado y, en las señoriales, piscina propia."
        amenities={["Dining privado Cipriani en residencia, 24/7","Concierge de guante blanco y servicios à la carte","Piscina estilo resort con cabañas","Spa, fitness center y salas de tratamiento","Salones privados, cava y espacios de trabajo","Llegada con valet y lobby atendido"]}
        location="Brickell es el distrito financiero y social de Miami — la milla donde conviven bancos de inversión, los restaurantes más reservados y el paseo de la bahía. La torre se alza sobre South Miami Avenue, a minutos a pie de Brickell City Centre."
        process={[["01","Dossier privado","Reciba precios por unidad, planos y disponibilidad actualizada del inventario del desarrollador."],["02","Selección y reserva","Bloqueo de la unidad elegida con depósito inicial y contrato de compraventa."],["03","Calendario por hitos","Pagos escalonados durante la construcción, según el calendario oficial."],["04","Entrega — Verano 2027","Cierre, escrituración y acceso a su residencia con el servicio Cipriani operativo."]]}
        video="/videos/cipriani.mp4"
        poster="/images/cipriani/poster_cip.webp"
        gallery={["/images/cipriani/exterior2.webp","/images/cipriani/gallery1.webp","/images/cipriani/gallery2.webp","/images/cipriani/gallery3.webp"]}
        other={[{slug:"elle",name:"Elle Residences"},{slug:"domus",name:"Domus Brickell"}]}
      />

      {/* SECCIÓN 3: LOS 3 PILARES */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-stone-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-[#D98B3F]">Miami's Architectural Declaration</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              The skyline is crowded with tall buildings. Cipriani Residences defines it. At 950 feet, it becomes the definitive silhouette—the one you see from the causeway, from the bay. Arquitectonica didn't design a tall building. They designed a landmark. The difference is permanence.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-[#D98B3F]">A Brand Designed for Generational Living</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Cipriani isn't a hotel brand. It's a way of being that survived 95 years. A speakeasy on the 37th floor where your grandchildren will recognize the hand-coded details. To live here is not to buy real estate. It's to inherit a code.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-4 text-[#D98B3F]">Living in Cipriani Means Never Explaining</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              The only resident-exclusive Cipriani restaurant in North America. 24-hour catering by Cipriani's own kitchen. A Director of Residences who knows your name before you move in. These aren't amenities. They're the infrastructure of your life.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: ESPECIFICACIONES TÉCNICAS */}
      <section className="py-16 bg-stone-900 text-stone-100">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl font-light mb-12 text-center uppercase tracking-widest">Building Specifications</h2>
          <div className="divide-y divide-stone-700 border-y border-stone-700 text-sm">
            {[
              ["Altura", "950 feet (289 m)", "The most prominent residential silhouette in FL"],
              ["Pisos", "85 stories", "Curated per Arquitectonica vision"],
              ["Residencias", "397 units", "1–4 bedrooms + Penthouse Collection"],
              ["Ubicación", "1420 S Miami Ave, Brickell", "Heart of financial district"],
              ["Diseño Interior", "1508 London", "Interiors by contemporary visionaries"],
              ["Arquitectura", "Arquitectonica", "Design Principals: Fort-Brescia"],
              ["Move-in", "2027", "Construction advancing, foundations set"],
              ["Precio de Entrada", "From $1.8M", "Canaletto Collection from $4.1M"],
              ["Ocupación Máxima", "180 residentes", "Curated community, not a crowd"]
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 py-4 gap-4">
                <div className="font-bold uppercase tracking-wider text-[#F5A95C]">{row[0]}</div>
                <div className="text-stone-300">{row[1]}</div>
                <div className="text-stone-500 italic">{row[2]}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-stone-500 mt-6 text-center">*Precios, términos y plazos sujetos a cambios. Consultar inventario actualizado.</p>
        </div>
      </section>

      {/* SECCIÓN 5: EXPERIENCIA DE VIDA */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-light mb-16 text-center uppercase tracking-widest text-[#D98B3F]">A Day in the Life</h2>
        <div className="space-y-16">
          <article className="border-l-2 border-[#F5A95C] pl-8">
            <h3 className="text-lg font-semibold tracking-widest uppercase mb-3">Amanecer</h3>
            <p className="text-stone-600 leading-relaxed">
              You're on your terrace. The Biscayne is glass, flat, catching the first light. Your concierge calls—your espresso is ready in the lounge, prepared by hands that have served Cipriani guests for decades. You descend 85 stories and greet them by name.
            </p>
          </article>
          <article className="border-l-2 border-[#F5A95C] pl-8">
            <h3 className="text-lg font-semibold tracking-widest uppercase mb-3">Tarde</h3>
            <p className="text-stone-600 leading-relaxed">
              A colleague texts: "Speakeasy tonight?" The 37th floor. Mahogany bar. A bartender who remembers your Negroni recipe because it's logged in a leather book that survived 1931 Venice. The view frames three counties. This isn't a rooftop bar. This is your living room elevated.
            </p>
          </article>
          <article className="border-l-2 border-[#F5A95C] pl-8">
            <h3 className="text-lg font-semibold tracking-widest uppercase mb-3">Noche</h3>
            <p className="text-stone-600 leading-relaxed">
              The Director of Residences calls your mobile. "Good evening. Your in-home Cipriani dinner is prepared." You're already home. The table is set. The light from Biscayne Bay catches the silverware. Some addresses change your life. This one becomes part of it.
            </p>
          </article>
        </div>
      </section>

      {/* SECCIÓN 6: POR QUÉ CIPRIANI (Corregida: Lujo silencioso vs Licencias genéricas) */}
      <section className="py-24 bg-stone-100 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-light mb-12 text-center uppercase tracking-widest">Market Positioning</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b-2 border-stone-300 text-sm tracking-widest uppercase text-[#D98B3F]">
                  <th className="py-4 font-normal">Criterio</th>
                  <th className="py-4 font-bold">Cipriani Residences</th>
                  <th className="py-4 font-normal text-stone-500">Marcas de Automoción</th>
                  <th className="py-4 font-normal text-stone-500">Licencias de Lujo Estándar</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-stone-200">
                <tr>
                  <td className="py-5 font-semibold text-stone-800">Brand Pedigree</td>
                  <td className="py-5 text-stone-900">95 años (Harry's Bar 1931)</td>
                  <td className="py-5 text-stone-500">Primera incursión residencial</td>
                  <td className="py-5 text-stone-500">Cesión de derechos (Licensing)</td>
                </tr>
                <tr>
                  <td className="py-5 font-semibold text-stone-800">Experiencia Residencial</td>
                  <td className="py-5 text-stone-900">Restaurante Cipriani in-house + Catering 24h</td>
                  <td className="py-5 text-stone-500">Concierge de marca (Sin F&B)</td>
                  <td className="py-5 text-stone-500">Estilo hotel corporativo</td>
                </tr>
                <tr>
                  <td className="py-5 font-semibold text-stone-800">Interiorismo</td>
                  <td className="py-5 text-stone-900">1508 London (Visión independiente)</td>
                  <td className="py-5 text-stone-500">Identidad estética externa impuesta</td>
                  <td className="py-5 text-stone-500">Lujo genérico replicable</td>
                </tr>
                <tr>
                  <td className="py-5 font-semibold text-stone-800">Para Quién</td>
                  <td className="py-5 text-stone-900">Coleccionista de experiencias culturales</td>
                  <td className="py-5 text-stone-500">Entusiasta que busca marca visual</td>
                  <td className="py-5 text-stone-500">Comprador guiado por el logotipo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7: LAS COLECCIONES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-light mb-16 text-center uppercase tracking-widest">The Collections</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="p-8 border border-stone-200 bg-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl tracking-widest uppercase mb-2">Residenza Classica</h3>
              <p className="text-[#D98B3F] font-semibold mb-6">From $1.8M USD</p>
              <ul className="text-stone-600 text-sm space-y-3 mb-8">
                <li>• 1–4 bedrooms</li>
                <li>• Floor-to-ceiling windows</li>
                <li>• Italian cabinetry by Poltrona Frau</li>
                <li>• Sub-Zero + Wolf appliances</li>
                <li>• Private terrace facing the bay</li>
                <li>• Access to all Cipriani amenities</li>
              </ul>
            </div>
            <button className="w-full py-3 border border-stone-900 hover:bg-stone-900 hover:text-white transition-colors text-sm uppercase tracking-widest">Explorar disponibilidad</button>
          </div>

          <div className="p-8 border border-stone-200 bg-stone-50 flex flex-col justify-between">
            <div>
              <h3 className="text-xl tracking-widest uppercase mb-2">Penthouse Collection</h3>
              <p className="text-[#D98B3F] font-semibold mb-6">From $3.2M USD</p>
              <ul className="text-stone-600 text-sm space-y-3 mb-8">
                <li>• Highest elevations</li>
                <li>• Private rooftop pool</li>
                <li>• Direct access to private dining lounge</li>
                <li>• Separate service elevator</li>
                <li>• 360° unobstructed views</li>
                <li>• Only 52 homes of this tier globally</li>
              </ul>
            </div>
            <button className="w-full py-3 border border-stone-900 hover:bg-stone-900 hover:text-white transition-colors text-sm uppercase tracking-widest">Solicitar presentación</button>
          </div>

          <div className="p-8 border border-stone-900 bg-stone-900 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#D98B3F] text-xs px-3 py-1 uppercase tracking-widest">Ultra-Rare</div>
            <div>
              <h3 className="text-xl tracking-widest uppercase mb-2">Canaletto Collection</h3>
              <p className="text-[#F5A95C] font-semibold mb-6">From $4.1M USD</p>
              <p className="text-stone-300 text-sm mb-4 leading-relaxed italic">
                The crown of the tower. 6 residences at elevations where the sky is closer than the city below.
              </p>
              <ul className="text-stone-300 text-sm space-y-3 mb-8">
                <li>• Custom configurations</li>
                <li>• Private pools</li>
                <li>• Director of Residences on speed dial</li>
                <li>• Only 6 exist. 3 spoken for.</li>
              </ul>
            </div>
            <button className="w-full py-3 bg-white text-stone-900 hover:bg-stone-200 transition-colors text-xs font-bold uppercase tracking-widest">Discreción Requerida - WhatsApp</button>
          </div>

        </div>
      </section>

      {/* SECCIÓN 9: TESTIMONIOS */}
      <section className="py-24 bg-stone-50 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <blockquote className="space-y-6">
            <p className="text-xl text-stone-700 italic font-serif leading-relaxed">
              "I've lived in Cipriani properties in Venice and New York. This is the first time I've felt that same care in a residential context. It's not just an address—it's a decision to live a certain way."
            </p>
            <footer className="text-sm tracking-widest uppercase text-[#D98B3F]">
              — Patricia Rossi <br/><span className="text-xs text-stone-500">Owner, Rossi Ventures | Milan, New York, Miami</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* SECCIÓN 10: CTA FINAL */}
      <section className="py-32 px-6 bg-white text-center border-t border-stone-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-6 text-stone-900">Listo para explorar.</h2>
          <p className="text-stone-600 mb-10 leading-relaxed">
            Cipriani Residences Miami no es para todos. Ni está pensado para serlo. Si esta visión resuena con su estilo de vida, el siguiente paso se maneja de forma estrictamente privada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@santamaria-collection.com" className="px-8 py-4 bg-stone-900 text-white uppercase tracking-widest text-xs hover:bg-stone-800 transition">
              Solicitar Dossier
            </a>
            <a href="https://wa.me/34610589716" className="px-8 py-4 border border-stone-300 text-stone-900 uppercase tracking-widest text-xs hover:bg-stone-50 transition flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Contacto Directo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
