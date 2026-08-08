import type { Metadata } from "next";
import ProjectFicha from "@/components/ProjectFicha";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Elle Residences Miami | La Primera ELLE del Mundo | Desde $600K | Santamaría Collection",
  description: "180 residencias completamente amuebladas y listas para vivir en Edgewater, Miami. Chic francés contemporáneo, sin restricciones de alquiler. Desde $600K. Entrega 2026.",
  openGraph: {
    title: "Elle Residences Miami | Prêt-à-Vivre | Desde $600K",
    description: "Las primeras residencias ELLE del mundo. 180 unidades totalmente amuebladas en Edgewater.",
    images: [{ url: "/images/og/og-elle.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <SchemaOrg
        name="Elle Residences Miami"
        description="Las primeras residencias ELLE del mundo. 180 unidades totalmente amuebladas en Edgewater, Miami. Desde $600K."
        url="https://santamaria-collection.vercel.app/elle-residences-miami"
        image="https://santamaria-collection.vercel.app/images/og/og-elle.jpg"
        price="600000"
        address="600 NE 36th Street, Edgewater"
        numberOfRooms="1"
      />
      <ProjectFicha
        slug="elle"
        accent="#E96A8D"
        accentDk="#C94C72"
        themeColor="#C94C72"
        num="N.º 02"
        name="Elle Residences\nMiami"
        tag="Prêt-à-Vivre — la dirección de la moda ha llegado a Miami"
        price="Desde $600K USD · Sin restricciones de alquiler"
        vision="Antes que los influencers, antes del street style, estuvo ELLE. Desde 1945, hemos definido qué significa vivir con estilo. ELLE Residences Miami es la primera expresión residencial de esta filosofía en el mundo: 180 residencias completamente amuebladas donde el chic francés contemporáneo se encuentra con la energía tropical de Edgewater. No es un edificio de marca. Es un legado arquitectónico. Una declaración de quién eres y cómo vives."
        quote=""
        stats={[["180","Residencias"],["26","Plantas"],["Edgewater","Ubicación"],["2026","Entrega"]]}
        design="Arquitectura de Behar Font & Partners — 65 años de experiencia combinada — con interiores de The One Atelier (Reino Unido), líderes en residencias de marca globales, editados por ELLE DECOR. Desarrollo de Vertical Developments: 25+ años, 30 edificios y $1.5B en el sur de Florida. Modernismo de mediados de siglo con chic contemporáneo francés y un toque de lujo tropical."
        units="Residencias de 1 y 2 dormitorios (41.80 m² a 78.50 m²), entregadas totalmente amuebladas y equipadas — mobiliario, iluminación, textiles incluidos. Pisos de madera en chevron francés, cocinas con electrodomésticos Miele, carpintería italiana Italkraft, encimeras de cuarzo y acabados metalizados. Opción de alquiler flexible desde el primer día — sin restricciones de plataformas."
        amenities={[
          "Terraza estilo Riviera francesa con piscina exposición norte-sur",
          "Sommet Rooftop: Sky Pool con vistas norte, este y oeste",
          "Maison Club con biblioteca, sala de música y salón con bar",
          "ELLE Spa: sauna, baño de vapor, ducha sensorial y sala de tratamientos",
          "Gimnasio de última generación + yoga y fitness al aire libre",
          "Jardín de meditación y spa de inmersión",
          "Concierge, seguridad y mantenimiento 24 horas",
          "Café, restaurante y tiendas boutique en planta baja",
          "Valet parking y bicicletas de la casa",
        ]}
        location="Edgewater es la pasarela de Miami — frente a Biscayne Bay y a minutos del Design District, Wynwood y el Arts District. La galería de ventas está en 600 NE 36th Street, Suite C1. El barrio con mayor energía creativa de la ciudad, entre el agua y la cultura."
        process={[
          ["01","Dossier privado","Precios por tipología, planos, especificaciones de acabados y unidades disponibles."],
          ["02","Reserva","Depósito inicial y contrato del desarrollador con Vertical Developments."],
          ["03","Hitos de construcción","Calendario de pagos oficial durante la obra — sin necesidad de pisar EE.UU."],
          ["04","Entrega — 2026","Residencia amueblada, llave en mano, lista para vivir o rentar desde el primer día."],
        ]}
        video="/videos/elle.mp4"
        poster="/images/elle/poster_elle.webp"
        gallery={["/images/elle/living.webp","/images/elle/dining.webp","/images/elle/pool.webp","/images/elle/view25.webp"]}
        other={[{slug:"cipriani-residences",name:"Cipriani Residences"},{slug:"domus",name:"Domus Brickell"}]}
      />
    </>
  );
}
