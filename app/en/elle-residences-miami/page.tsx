import type { Metadata } from "next";
import ProjectFicha from "@/components/ProjectFicha";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Elle Residences Miami | The World's First ELLE Residences | From $600K",
  description: "180 fully furnished, move-in ready residences in Edgewater, Miami. Contemporary French chic, no rental restrictions. From $600K. Delivery 2026.",
  alternates: { canonical: "https://www.santamaria-collection.com/en/elle-residences-miami" },
  openGraph: {
    title: "Elle Residences Miami | Prêt-à-Vivre | From $600K",
    description: "The world's first ELLE Residences. 180 fully furnished units in Edgewater.",
    images: [{ url: "https://www.santamaria-collection.com/images/og/og-elle.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <SchemaOrg
        name="Elle Residences Miami"
        description="The world's first ELLE Residences. 180 fully furnished units in Edgewater, Miami. From $600K."
        url="https://www.santamaria-collection.com/en/elle-residences-miami"
        image="https://www.santamaria-collection.com/images/og/og-elle.jpg"
        price="600000" address="600 NE 36th Street, Edgewater" numberOfRooms="1"
      />
      <ProjectFicha
        slug="elle" accent="#E96A8D" accentDk="#C94C72" themeColor="#C94C72"
        num="No. 02" name={"Elle Residences\nMiami"}
        tag="Prêt-à-Vivre — the address of fashion has arrived in Miami"
        price="From $600K USD · No rental restrictions"
        vision="Eighty years of fashion and design authority turned into a building. ELLE makes its residential debut in Edgewater, Miami: 180 fully furnished residences where contemporary French chic meets tropical energy. Each residence is delivered finished, dressed, and ready to live in from day one. Not a branded building. An architectural legacy."
        quote=""
        stats={[["180","Residences"],["26","Floors"],["Edgewater","Location"],["2026","Delivery"]]}
        design="Architecture by Behar Font & Partners — 65 years of combined experience — with interiors by The One Atelier (UK), edited by the ELLE DECOR A-List. Development by Vertical Developments: 25+ years, 30 buildings, $1.5B in South Florida. Mid-century modernism, contemporary French chic, and a touch of tropical luxury."
        units="1 and 2 bedroom residences (450–845 sq ft), delivered fully furnished and equipped — furniture, lighting, textiles included. French chevron hardwood floors, Miele kitchen appliances, Italian Italkraft cabinetry, quartz countertops. Flexible rental allowed from day one — no platform restrictions."
        amenities={["French Riviera-style terrace with pool","Sommet Rooftop: Sky Pool with north, east, and west views","Maison Club with library, music room, and bar lounge","ELLE Spa: sauna, steam room, sensory shower, and private treatment room","State-of-the-art gym + outdoor yoga and fitness","Meditation garden and immersion spa","24-hour concierge, security, and maintenance","Ground-floor café, restaurant, and boutique retail","Valet parking and complimentary house bicycles"]}
        location="Edgewater is Miami's catwalk — on Biscayne Bay and minutes from the Design District, Wynwood, and the Arts District. Sales gallery: 600 NE 36th Street, Suite C1. The most creative neighborhood in the city, between the water and culture."
        process={[["01","Private Dossier","Per-typology pricing, floor plans, finish specifications, and available units."],["02","Reservation","Initial deposit and developer contract with Vertical Developments."],["03","Construction Milestones","Official payment schedule during construction — no need to set foot in the US."],["04","Delivery — 2026","Furnished residence, turnkey, ready to live in or rent from day one."]]}
        video="/videos/elle.mp4"
        poster="/images/elle/poster_elle.webp"
        gallery={["/images/elle/living.webp","/images/elle/dining.webp","/images/elle/pool.webp","/images/elle/view25.webp"]}
        other={[{slug:"/en/cipriani-residences",name:"Cipriani Residences"},{slug:"/en/domus-brickell",name:"Domus Brickell"}]}
      />
    </>
  );
}
