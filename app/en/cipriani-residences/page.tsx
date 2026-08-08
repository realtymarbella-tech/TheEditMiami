import type { Metadata } from "next";
import ProjectFicha from "@/components/ProjectFicha";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Cipriani Residences Miami | Florida's Tallest Residential Tower | From $1.8M",
  description: "950 feet. 85 floors. 397 residences. The first Cipriani residence built from scratch in America, designed by Arquitectonica with interiors by 1508 London. From $1.8M.",
  alternates: { canonical: "https://www.santamaria-collection.com/en/cipriani-residences" },
  openGraph: {
    title: "Cipriani Residences Miami | Florida's Tallest Residential Tower",
    description: "950 feet above Brickell. The first Cipriani residence built from scratch in America.",
    images: [{ url: "https://www.santamaria-collection.com/images/og/og-cipriani.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <SchemaOrg
        name="Cipriani Residences Miami"
        description="The first Cipriani residence built from scratch in America. 85 floors, 950 feet, 397 residences designed by Arquitectonica with interiors by 1508 London."
        url="https://www.santamaria-collection.com/en/cipriani-residences"
        image="https://www.santamaria-collection.com/images/og/og-cipriani.jpg"
        price="1800000" address="1420 S Miami Ave" numberOfRooms="1"
      />
      <ProjectFicha
        slug="cipriani" accent="#F5A95C" accentDk="#D98B3F" themeColor="#D98B3F"
        num="No. 01" name={"Cipriani\nResidences Miami"}
        tag="Four generations of Venetian hospitality, 950 feet above Brickell"
        price="From $1.8M USD · Canaletto Penthouses from $4.1M"
        vision="In 1931, Giuseppe Cipriani opened Harry's Bar in Venice. Nearly a century later, the fourth generation of the family signs their first residence built from scratch in America: 85 floors that transform Venetian hospitality into a way of living. Not a tower with a restaurant — it is the Cipriani service as architecture, with the structure already topped off and nearly 80% of its residences sold to buyers from over 30 countries."
        quote='"True style is singular and timeless. It can be felt, but not described." — Arrigo Cipriani'
        stats={[["950 ft","Height"],["85","Floors"],["397","Residences"],["Summer 2027","Delivery"]]}
        design="Architecture by Arquitectonica — the studio behind Miami's modern skyline — with a curved glass façade responding to the bay. Interiors by 1508 London, custom Italian kitchens, and a palette of materials that evokes Venetian marble and terrazzo."
        units="Residences from one to four bedrooms with 10-foot ceilings and deep terraces facing Biscayne Bay, delivered turnkey. Crowning the tower, the Canaletto Collection: 68 ultra-luxury residences on the top 18 floors, with private elevator and, in the penthouse tier, a private pool."
        amenities={["Private Cipriani dining in-residence, 24/7","White-glove concierge and à la carte services","Resort-style pool with cabanas","Spa, fitness center, and treatment rooms","Private lounges, wine cellar, and workspaces","Valet arrival and attended lobby"]}
        location="Brickell is Miami's financial and social district — the mile where investment banks, the most sought-after restaurants, and the bayside promenade converge. The tower rises on South Miami Avenue, steps from Brickell City Centre and the city's finest dining."
        process={[["01","Private Dossier","Receive per-unit pricing, floor plans, and updated availability directly from the developer's inventory."],["02","Selection & Reservation","Reserve your chosen residence with an initial deposit and purchase agreement."],["03","Construction Milestones","Staggered payments throughout construction, per the official project schedule."],["04","Delivery — Summer 2027","Closing, title transfer, and access to your residence with Cipriani service operational from day one."]]}
        video="/videos/cipriani.mp4"
        poster="/images/cipriani/poster_cip.webp"
        gallery={["/images/cipriani/exterior2.webp","/images/cipriani/gallery1.webp","/images/cipriani/gallery2.webp","/images/cipriani/gallery3.webp"]}
        other={[{slug:"/en/elle-residences-miami",name:"Elle Residences"},{slug:"/en/domus-brickell",name:"Domus Brickell"}]}
      />
    </>
  );
}
