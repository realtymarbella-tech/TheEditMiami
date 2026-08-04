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
    <>
      <SchemaOrg
        name="Cipriani Residences Miami"
        description="La primera residencia Cipriani construida desde cero en América. 85 plantas, 950 pies, 397 residencias diseñadas por Arquitectonica con interiores de 1508 London."
        url="https://santamaria-collection.vercel.app/cipriani"
        image="https://santamaria-collection.vercel.app/images/og/og-cipriani.jpg"
        price="1800000"
        address="1420 S Miami Ave"
        numberOfRooms="1"
      />
      <ProjectFicha
      slug="cipriani"
      accent="#F5A95C"
      accentDk="#D98B3F"
      themeColor="#D98B3F"
      num="N.º 01"
      name="Cipriani\nResidences Miami"
      tag="Cuatro generaciones de hospitalidad veneciana, 950 pies sobre Brickell"
      price="Desde $1.8M USD · Penthouses Canaletto hasta $30M+"
      vision="En 1931, Giuseppe Cipriani abrió Harry's Bar en Venecia. Casi un siglo después, la cuarta generación de la familia firma su primera residencia construida desde cero en América: 85 plantas que convierten la hospitalidad veneciana en una forma de vivir. No es una torre con un restaurante — es el servicio Cipriani como arquitectura, con la estructura ya completada y cerca del 80% de sus residencias vendidas a compradores de más de 30 países."
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
    </>
  );
}
