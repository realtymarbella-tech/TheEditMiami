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

const EXTRA = [
  {
    overline: "La herencia ELLE",
    title: "La autoridad mundial de la moda, por más de 80 años",
    body: "Antes que los influencers, antes del street style, estuvo ELLE. Desde nuestra primera portada en 1945, hemos definido, desafiado y celebrado qué significa vivir con estilo. No seguimos tendencias. Las creamos. No comentamos sobre la cultura. La moldeamos. ELLE ha dado voz a diseñadores visionarios y ayudado a millones de personas a encontrar su propio lenguaje de estilo. Ahora, por primera vez, ELLE lleva su inigualable criterio para la belleza y el diseño al mundo del real estate de lujo. ELLE Residences Miami no es un edificio de marca. Es un legado arquitectónico.",
    bg: "bg-[#1a0f0a]",
  },
  {
    overline: "La visión del diseño",
    title: "Couture Living. Diseñado por quienes crean el estilo.",
    body: "En ELLE Residences, la curaduría lo es todo. Cada elemento — desde los acabados elegidos a mano hasta las líneas arquitectónicas — ha sido seleccionado por los árbitros del gusto de ELLE. No empezamos con el edificio. Empezamos con la pregunta: ¿Cómo se sentiría vivir dentro de la portada de una revista ELLE? ¿Cómo entraría la luz? ¿Cómo te sentirías cada mañana? El resultado: mármol italiano, molduras personalizadas, pisos de madera en chevron francés. Esto no es decoración. Es arquitectura editada.",
    bg: "bg-charcoal-900",
  },
  {
    overline: "Un día en ELLE",
    title: "La experiencia de vivir aquí",
    body: "7:30 AM — Tu terraza: El sol sale sobre Biscayne Bay. La brisa salada. El silencio de tener la ciudad debajo de ti. Tu espresso en mano, la Riviera francesa reconstruida en Edgewater. · 1 PM — ELLE Lounge: Un amigo de Nueva York llama. No es un lobby. No es un café. Es el lugar donde ves a quien importa, donde te ves a ti misma. · 7 PM — Preparándose para la noche: Te preparas. No es vanidad. Es ritual. El acto de convertirte en la versión más refinada de ti misma. Miami te espera. Y llevas ELLE contigo.",
    bg: "bg-charcoal-950",
  },
];

export default function Page() {
  return (
    <>
      <SchemaOrg
        name="Elle Residences Miami"
        description="Las primeras residencias ELLE del mundo. 180 unidades totalmente amuebladas en Edgewater, Miami. Desde $600K."
        url="https://www.santamaria-collection.com/elle-residences-miami"
        image="https://www.santamaria-collection.com/images/og/og-elle.jpg"
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
        name={"Elle Residences\nMiami"}
        tag="Prêt-à-Vivre — la dirección de la moda ha llegado a Miami"
        price="Desde $600K USD · Sin restricciones de alquiler"
        vision="80 años de editorial de moda y diseño convertidos en un edificio. ELLE debuta en el mundo residencial en Edgewater, Miami: 180 residencias completamente amuebladas donde el chic francés contemporáneo se encuentra con la energía tropical. Cada residencia se entrega terminada, vestida y lista para vivir desde el primer día."
        quote=""
        stats={[["180","Residencias"],["26","Plantas"],["Edgewater","Ubicación"],["2026","Entrega"]]}
        design="Arquitectura de Behar Font & Partners — 65 años de experiencia combinada — con interiores de The One Atelier (Reino Unido), editados por ELLE DECOR. Desarrollo de Vertical Developments: 25+ años, 30 edificios y $1.5B en el sur de Florida. Modernismo de mediados de siglo con chic contemporáneo francés y un toque de lujo tropical."
        units="Residencias de 1 y 2 dormitorios (41.80 m² a 78.50 m²), entregadas totalmente amuebladas: mobiliario, iluminación y textiles incluidos. Pisos de madera en chevron francés, cocinas con electrodomésticos Miele, carpintería italiana Italkraft, encimeras de cuarzo. Opción de alquiler flexible desde el primer día — sin restricciones de plataformas."
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
        location="Edgewater es la pasarela de Miami — frente a Biscayne Bay y a minutos del Design District, Wynwood y el Arts District. Galería de ventas: 600 NE 36th Street, Suite C1."
        process={[
          ["01","Dossier privado","Precios por tipología, planos, especificaciones de acabados y unidades disponibles."],
          ["02","Reserva","Depósito inicial y contrato del desarrollador con Vertical Developments."],
          ["03","Hitos de construcción","Calendario de pagos oficial durante la obra — sin necesidad de pisar EE.UU."],
          ["04","Entrega — 2026","Residencia amueblada, llave en mano, lista para vivir o rentar desde el primer día."],
        ]}
        video="/videos/elle.mp4"
        poster="/images/elle/poster_elle.webp"
        gallery={["/images/elle/living.webp","/images/elle/dining.webp","/images/elle/pool.webp","/images/elle/view25.webp"]}
        extraSections={EXTRA}
        other={[{slug:"cipriani-residences",name:"Cipriani Residences"},{slug:"domus-brickell",name:"Domus Brickell"}]}
      />
    </>
  );
}
