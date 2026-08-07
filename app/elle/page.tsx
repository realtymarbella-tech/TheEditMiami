import type { Metadata } from "next";
import ProjectFicha from "@/components/ProjectFicha";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Elle Residences Miami Precio | Apartamentos Edgewater | Desde $600K | Santamaría Collection",
  description: "La primera ELLE Residences del mundo. 180 residencias totalmente amuebladas en Edgewater. Desde $600K. Sin restricciones de alquiler.",
  openGraph: {
    title: "Elle Residences Miami | Prêt-à-Vivre en Edgewater | Desde $600K",
    description: "La primera ELLE Residences del mundo. 180 residencias totalmente amuebladas en Edgewater.",
    images: [{ url: "/images/og/og-elle.jpg", width: 1200, height: 630 }],
  },
};

export default function EllePage() {
  return (
    <>
      <SchemaOrg
        name="Elle Residences Miami"
        description="La primera ELLE Residences del mundo. 180 residencias totalmente amuebladas en Edgewater, Miami. Diseño editorial, chic francés, sin restricciones de alquiler."
        url="https://santamaria-collection.vercel.app/elle"
        image="https://santamaria-collection.vercel.app/images/og/og-elle.jpg"
        price="600000"
        address="2900 NE 7th Ave, Edgewater"
        numberOfRooms="1"
      />
      <ProjectFicha
      slug="elle"
      accent="#E96A8D"
      accentDk="#C94C72"
      themeColor="#C94C72"
      num="N.º 02"
      name="Elle Residences\nMiami"
      tag="Prêt-à-Vivre — la primera ELLE Residences del mundo"
      price="Desde $600K USD"
      vision="Ochenta años de editorial de moda y diseño convertidos en un edificio. ELLE debuta en el mundo residencial en Edgewater, Miami: 180 residencias completamente amuebladas donde el chic francés contemporáneo se encuentra con la energía tropical. Cada residencia se entrega terminada, vestida y lista para vivir desde el primer día."
      quote=""
      stats={[["26","Plantas"],["180","Residencias"],["Edgewater","Ubicación"],["2026","Entrega"]]}
      design="Arquitectura de Behar Font & Partners e interiores de The One Atelier con mobiliario y piezas seleccionadas por diseñadores de la Elle Décor A-List. Mid-century, chic parisino y color, editados con criterio de revista."
      units="Residencias de estudio a dos habitaciones, entregadas totalmente amuebladas y equipadas: mobiliario, iluminación, textiles y arte incluidos. Propiedad flexible sin restricciones de alquiler — vívala, aléjela por temporadas o combínelo."
      amenities={["Dos piscinas estilo resort","Mobiliario Elle Décor A-List incluido","Fitness center y espacios wellness","Lobby y zonas comunes de diseño editorial","Gestión de alquiler disponible"]}
      location="Edgewater es la pasarela de Miami: frente a la bahía y a minutos del Design District, Wynwood y el Arts District. El barrio con mayor energía creativa de la ciudad, entre el agua y la cultura."
      process={[["01","Dossier privado","Precios por tipología, planos y unidades disponibles."],["02","Reserva","Depósito inicial y contrato del desarrollador."],["03","Hitos de construcción","Calendario de pagos oficial durante la obra."],["04","Entrega — 2026","Residencia amueblada, llave en mano, lista para vivir o rentar."]]}
      video="/videos/elle.mp4"
      poster="/images/elle/poster_elle.webp"
      gallery={["/images/elle/living.webp","/images/elle/dining.webp","/images/elle/pool.webp","/images/elle/view25.webp"]}
      other={[{slug:"cipriani-residences",name:"Cipriani Residences"},{slug:"domus",name:"Domus Brickell"}]}
    />
    </>
  );
}
