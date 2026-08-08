import type { Metadata } from "next";
import ProjectFicha from "@/components/ProjectFicha";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Domus Brickell Miami Precio | Inversión Airbnb Miami | Desde $500K | Santamaría Collection",
  description: "579 FLATS amueblados en Brickell. Renta corta sin restricciones, gestión hotelera, retorno desde el primer día. Desde $500K. Entrega 2028.",
  openGraph: {
    title: "Domus Brickell Miami | Inversión Flexible | Desde $500K",
    description: "579 FLATS amueblados en Brickell. Renta corta sin restricciones, gestión hotelera.",
    images: [{ url: "/images/og/og-domus.jpg", width: 1200, height: 630 }],
  },
};

export default function DomusPage() {
  return (
    <>
      <SchemaOrg
        name="Domus Brickell Center"
        description="579 FLATS amueblados en Brickell. Modelo de inversión flexible con renta corta sin restricciones y gestión hotelera profesional integrada."
        url="https://santamaria-collection.vercel.app/domus"
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
      name="Domus\nBrickell"
      tag="FLATS: la inversión que también es un estilo de vida"
      price="Desde $500K USD"
      vision="Domus Brickell reinventa la propiedad urbana con el modelo FLATS — Flexible Apartments for Temporary Stays: 579 residencias amuebladas operadas con estándar hotelero, pensadas para el inversor internacional y el nómada global. Renta corta sin restricciones ni mínimos de estancia, gestión profesional integrada y retorno desde el primer día."
      quote=""
      stats={[["35","Plantas"],["579","Flats"],["Brickell","Ubicación"],["2028","Entrega"]]}
      design="Desarrollo de North Development (Oak Capital + Edifica), con unidades entregadas completas: cocina equipada, lavadora/secadora, cerraduras inteligentes, balcón y acabados contemporáneos. Diseñado desde el origen para operar."
      units="Estudios y residencias de una y dos habitaciones, amuebladas y llave en mano. Cada unidad entra directamente al programa de gestión hotelera con comercialización profesional y liquidación transparente al propietario."
      amenities={["Rooftop pool y rooftop bar","Spa con sauna","Coworking y salas de reunión","Concierge 24 horas","Gimnasio equipado","Restaurante y retail en planta baja","Gestión de renta corta integrada (Airbnb-friendly)"]}
      location="El corazón de Brickell: el distrito financiero con mayor demanda de estancias corporativas y turísticas de Miami. Conectividad total — Metromover, Brickell City Centre y la bahía a pie."
      process={[["01","Dossier privado","Precios, proyección de operación y unidades disponibles."],["02","Reserva","Depósito inicial y contrato del desarrollador."],["03","Hitos de construcción","Calendario de pagos oficial durante la obra."],["04","Entrega — 2028","Unidad amueblada incorporada al programa de gestión desde el día uno."]]}
      video="/videos/domus.mp4"
      poster="/images/domus/home_domus.webp"
      gallery={["/images/domus/rooftop.webp","/images/domus/interior.webp","/images/domus/winebar.webp","/images/domus/peacock.webp"]}
      other={[{slug:"cipriani-residences",name:"Cipriani Residences"},{slug:"elle",name:"Elle Residences"}]}
    />
    </>
  );
}
