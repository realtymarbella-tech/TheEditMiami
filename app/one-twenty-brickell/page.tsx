import type { Metadata } from "next";
import ProjectFicha from "@/components/ProjectFicha";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "One Twenty Brickell | Residencias con Oficina Privada | Desde $650K | Santamaría Collection",
  description: "240 residencias completamente amuebladas en Brickell con suite de oficina privada incluida. Wellness center de 50.000 sq ft. Desde $650K. Entrega 2028.",
  alternates: { canonical: "https://www.santamaria-collection.com/one-twenty-brickell" },
  openGraph: {
    title: "One Twenty Brickell | La vida perfectamente equilibrada | Desde $650K",
    description: "240 residencias amuebladas en Brickell con oficina privada incluida en cada unidad. Desde $650K.",
    images: [{ url: "https://www.santamaria-collection.com/images/onetwenty/og_onetwenty.jpg", width: 1200, height: 630 }],
  },
};

const EXTRA = [
  {
    overline: "La propuesta única",
    title: "La primera residencia donde tu oficina ya está incluida",
    body: "One Twenty Brickell Signature Residences redefine el concepto de equilibrio urbano con una propuesta que no existe en ningún otro lugar de Miami: cada residencia incluye una suite de oficina privada, diseñada con ascensor independiente, sala de reuniones y recepcionista. No es trabajar desde casa — es vivir en un edificio donde tu empresa también tiene dirección. El resultado: la libertad de ser el profesional que eres y el residente que quieres ser, en el mismo lugar.",
    bg: "bg-ocean",
  },
  {
    overline: "Filosofía de diseño",
    title: "Vesica Piscis — el equilibrio entre lo espiritual y lo físico",
    body: "El símbolo que guía One Twenty es la Vesica Piscis, la intersección entre dos mundos: el hacer y el descansar, el trabajo y el hogar, la ciudad y el santuario. Este principio de equilibrio impregna cada decisión de diseño — desde los interiores de Cotofana Designs hasta las amenidades de bienestar, pasando por la selección de materiales y la distribución de los espacios. No es un edificio de lujo más. Es una declaración de cómo quieres vivir.",
    bg: "bg-charcoal-900",
  },
];

export default function Page() {
  return (
    <>
      <SchemaOrg
        name="One Twenty Brickell Signature Residences"
        description="240 residencias completamente amuebladas en Brickell, Miami, con suite de oficina privada incluida. Desde $650K."
        url="https://www.santamaria-collection.com/one-twenty-brickell"
        image="https://www.santamaria-collection.com/images/onetwenty/og_onetwenty.jpg"
        price="650000"
        address="120 SW 8th St, Brickell, Miami"
        numberOfRooms="1"
      />
      <ProjectFicha
        slug="onetwenty"
        accent="#C9A876"
        accentDk="#A88A5C"
        themeColor="#A88A5C"
        num="N.º 04"
        name={"One Twenty\nBrickell"}
        tag="La vida perfectamente equilibrada — con tu oficina incluida"
        price="Desde $650K USD · Estudios, 1, 2 y 3 habitaciones"
        vision="One Twenty Brickell Signature Residences marca el próximo capítulo de una visión pionera: un edificio que integra productividad, bienestar y hogar en perfecta armonía. 240 residencias completamente amuebladas en el corazón de Brickell, cada una con su propia suite de oficina privada. Porque el equilibrio no es un lujo — es una necesidad."
        quote=""
        stats={[["240","Residencias"],["50.000 ft²","Amenidades"],["Brickell","Ubicación"],["2028","Entrega"]]}
        design="Interiores por Cotofana Designs — espacios intencionalmente diseñados que fusionan sofisticación y tecnología de vanguardia. Suelos de polywood de diseñador, cocinas italianas Italkraft con electrodomésticos Miele, armarios completamente equipados, instalaciones de alta velocidad. Desarrollado por PMG (Property Markets Group), uno de los grupos inmobiliarios más activos del sur de Florida."
        units="Estudios, 1, 2 y 3 habitaciones completamente amueblados y equipados. Cada residencia incluye una suite de oficina privada con acceso independiente, salas de reuniones y recepcionista — una propuesta única en el mercado de Miami. Cocinas integradas con Miele (vitrocerámica de inducción, horno, microondas, lavavajillas, frigorífico), baños WaterWorks, lavadora y secadora integradas."
        amenities={[
          "Suite de oficina privada con ascensor independiente en cada residencia",
          "Sala de reuniones con recepcionista compartida",
          "One Twenty Signature Club — lounge privado de propietarios",
          "Piscina resort con zonas de descanso y vistas al skyline",
          "Wellness Spa: sauna terapéutica, cold plunge y salas de tratamiento",
          "Fitness Studio con equipamiento de última generación",
          "Estudio de movimiento y meditación",
          "Café & Juice Bar",
          "Más de 50.000 sq ft de amenidades en total",
        ]}
        location="En el corazón de Brickell, el distrito financiero y cultural más dinámico de Miami. A pasos de Brickell City Centre, The Underline y los mejores restaurantes de la ciudad. Sales Gallery en 450 Biscayne Blvd, Miami, FL 33132."
        process={[
          ["01","Dossier privado","Precios por tipología, planos y unidades disponibles — con proyección de la suite de oficina incluida."],
          ["02","Reserva","Depósito inicial y contrato del desarrollador PMG — proceso 100% remoto."],
          ["03","Hitos de construcción","Calendario de pagos oficial durante la obra."],
          ["04","Entrega — 2028","Residencia amueblada con suite de oficina operativa desde el primer día."],
        ]}
        video=""
        poster="/images/onetwenty/hero_onetwenty.webp"
        gallery={[
          "/images/onetwenty/gallery1.webp",
          "/images/onetwenty/gallery2.webp",
          "/images/onetwenty/gallery3.webp",
          "/images/onetwenty/gallery4.webp",
        ]}
        extraSections={EXTRA}
        other={[
          {slug:"cipriani-residences",name:"Cipriani Residences"},
          {slug:"elle-residences-miami",name:"Elle Residences"},
          {slug:"domus-brickell",name:"Domus Brickell"},
        ]}
      />
    </>
  );
}
