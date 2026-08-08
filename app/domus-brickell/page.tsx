import type { Metadata } from "next";
import ProjectFicha from "@/components/ProjectFicha";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Domus Brickell Miami | Tu Santuario en el Corazón de la Ciudad | Desde $500K",
  description: "579 FLATS amueblados en Brickell. Diseño zen, renta corta sin restricciones, gestión hotelera profesional. Retorno desde el primer día. Desde $500K. Entrega 2028.",
  openGraph: {
    title: "Domus Brickell | Santuario Urbano en Miami | Desde $500K",
    description: "579 FLATS amueblados. Filosofía zen, gestión hotelera, renta corta sin restricciones en Brickell.",
    images: [{ url: "/images/og/og-domus.jpg", width: 1200, height: 630 }],
  },
};

const EXTRA = [
  {
    overline: "La filosofía Domus",
    title: "En Domus, menos es más",
    body: "En un mundo de ruido constante y estimulación sin fin, encontrar un verdadero santuario se ha vuelto un lujo. Un espacio para respirar. Para pensar. Para simplemente ser. Domus Brickell nace de esta necesidad. Su filosofía de diseño se inspira en los principios zen de la simplicidad, la naturalidad y la tranquilidad. Líneas arquitectónicas limpias y minimalistas. Materiales naturales. Amplios espacios abiertos que fluyen de interior a exterior. Jardines contemplativos que invitan a la meditación. Cada elemento editado a su esencia — porque al eliminar lo superfluo, hacemos espacio para lo que realmente importa.",
    bg: "bg-ocean",
  },
  {
    overline: "La ubicación",
    title: "En el corazón de la acción, un mundo aparte",
    body: "Domus se encuentra en Brickell, el vibrante corazón financiero, gastronómico y cultural de Miami. A pasos de los mejores restaurantes, parques, galerías de arte y la animada vida nocturna. Pero entrar en Domus es como descubrir un oasis secreto en medio del ajetreo urbano. El martes por la noche sales a cenar en uno de los restaurantes de Brickell. Conversación viva, energía, movimiento. Al llegar de noche, te espera tu santuario. Las puertas se cierran. El ruido se desvanece. El miércoles por la mañana, antes de una jornada intensa, practicas yoga con vista a Biscayne Bay. Respiras. Te centras. Esta es la promesa de Domus: la libertad de elegir cuándo sumergirte en la acción y cuándo escapar.",
    bg: "bg-charcoal-900",
  },
];

export default function Page() {
  return (
    <>
      <SchemaOrg
        name="Domus Brickell"
        description="579 FLATS amueblados en Brickell, Miami. Renta corta sin restricciones, gestión hotelera profesional. Desde $500K."
        url="https://santamaria-collection.vercel.app/domus-brickell"
        image="https://santamaria-collection.vercel.app/images/og/og-domus.jpg"
        price="500000"
        address="185 SW 7th St, Brickell"
        numberOfRooms="1"
      />
      <ProjectFicha
        slug="domus"
        accent="#2AB5AE"
        accentDk="#1F9993"
        themeColor="#1F9993"
        num="N.º 03"
        name={"Domus\nBrickell"}
        tag="Tu santuario en el corazón de la ciudad"
        price="Desde $500K USD · Retorno desde el primer día"
        vision="Domus Brickell reinventa la propiedad urbana con el modelo FLATS — Flexible Apartments for Temporary Stays: 579 residencias amuebladas operadas con estándar hotelero, pensadas para el inversor internacional y el nómada global. Filosofía zen aplicada a la vida urbana: un santuario de diseño minimalista en el corazón de Brickell. Renta corta sin restricciones ni mínimos de estancia, gestión profesional integrada y retorno desde el primer día."
        quote=""
        stats={[["35","Plantas"],["579","Flats"],["Brickell","Ubicación"],["2028","Entrega"]]}
        design="Desarrollo de North Development (Oak Capital + Edifica), con interiores de inspiración zen: líneas limpias, materiales naturales, amplios espacios que fluyen de interior a exterior. Unidades entregadas completas: cocina equipada, lavadora/secadora, cerraduras inteligentes, balcón y acabados contemporáneos. Diseñado desde el origen para operar — no adaptado después."
        units="Estudios y residencias de una y dos habitaciones, amuebladas y llave en mano. Cada unidad entra directamente al programa de gestión hotelera: check-in digital, limpieza, mantenimiento y comercialización profesional, con liquidación transparente al propietario. Airbnb-friendly desde el primer día."
        amenities={[
          "Rooftop pool y rooftop bar con vistas panorámicas",
          "Spa con sauna, baño de vapor y tratamientos zen",
          "Estudio de yoga con vista a Biscayne Bay",
          "Jardín meditativo y espacios contemplativos",
          "Coworking y salas de reunión equipadas",
          "Concierge 24 horas y gestión hotelera integrada",
          "Gimnasio equipado",
          "Restaurante y retail en planta baja",
          "Gestión de renta corta integrada (Airbnb-friendly)",
        ]}
        location="El corazón de Brickell: el distrito financiero con mayor demanda de estancias corporativas y turísticas de Miami. Conectividad total — Metromover, Brickell City Centre y la bahía a pie. A minutos del Design District, Wynwood y los mejores restaurantes de la ciudad."
        process={[
          ["01","Dossier privado","Precios, proyección de operación, planos y unidades disponibles."],
          ["02","Reserva","Depósito inicial y contrato del desarrollador — proceso 100% remoto."],
          ["03","Hitos de construcción","Calendario de pagos oficial durante la obra."],
          ["04","Entrega — 2028","Unidad amueblada incorporada al programa de gestión desde el día uno."],
        ]}
        video="/videos/domus.mp4"
        poster="/images/domus/home_domus.webp"
        gallery={["/images/domus/rooftop.webp","/images/domus/interior.webp","/images/domus/winebar.webp","/images/domus/peacock.webp"]}
        extraSections={EXTRA}
        other={[{slug:"cipriani-residences",name:"Cipriani Residences"},{slug:"elle-residences-miami",name:"Elle Residences"}]}
      />
    </>
  );
}
