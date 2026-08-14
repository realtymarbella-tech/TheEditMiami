import type { Metadata } from "next";
import ProjectFicha from "@/components/ProjectFicha";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "One Twenty Brickell | Residences with Private Office Suite | From $650K",
  description: "240 fully furnished residences in Brickell with a private office suite included in every unit. 50,000 sq ft wellness amenities. From $650K. Delivery 2028.",
  alternates: { canonical: "https://www.santamaria-collection.com/en/one-twenty-brickell" },
  openGraph: {
    title: "One Twenty Brickell | Life Perfectly Balanced | From $650K",
    description: "240 furnished residences in Brickell with a private office suite in every unit. From $650K.",
    images: [{ url: "https://www.santamaria-collection.com/images/onetwenty/og_onetwenty.jpg", width: 1200, height: 630 }],
  },
};

const EXTRA = [
  {
    overline: "The unique proposition",
    title: "The first residence where your office is already included",
    body: "One Twenty Brickell Signature Residences redefines the concept of urban balance with a proposition that exists nowhere else in Miami: every residence includes a private office suite, designed with its own elevator, conference room access, and receptionist. This is not working from home — it is living in a building where your company also has an address. The result: the freedom to be the professional you are and the resident you want to be, in the same place.",
    bg: "bg-ocean",
  },
  {
    overline: "Design philosophy",
    title: "Vesica Piscis — the balance between the spiritual and the physical",
    body: "The symbol guiding One Twenty is the Vesica Piscis — the intersection of two worlds: doing and resting, work and home, the city and the sanctuary. This principle of balance permeates every design decision — from Cotofana Designs interiors to the wellness amenities, through the selection of materials and the layout of spaces. Not just another luxury building. A declaration of how you want to live.",
    bg: "bg-charcoal-900",
  },
];

export default function Page() {
  return (
    <>
      <SchemaOrg
        name="One Twenty Brickell Signature Residences"
        description="240 fully furnished residences in Brickell, Miami, with a private office suite included in every unit. From $650K."
        url="https://www.santamaria-collection.com/en/one-twenty-brickell"
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
        num="No. 04"
        name={"One Twenty\nBrickell"}
        tag="Life perfectly balanced — with your office suite included"
        price="From $650K USD · Studios, 1, 2 & 3 bedrooms"
        vision="One Twenty Brickell Signature Residences marks the next chapter of a pioneering vision: a building that integrates productivity, wellness, and home in perfect harmony. 240 fully furnished residences in the heart of Brickell, each with its own private office suite. Because balance is not a luxury — it is a necessity."
        quote=""
        stats={[["240","Residences"],["50,000 ft²","Amenities"],["Brickell","Location"],["2028","Delivery"]]}
        design="Interiors by Cotofana Designs — intentionally designed spaces that blend sophistication and cutting-edge technology. Designer polywood flooring, Italian Italkraft kitchens with Miele appliances, fully built-out closets, high-speed pre-wiring. Developed by PMG (Property Markets Group), one of South Florida's most active real estate groups."
        units="Studios, 1, 2, and 3-bedroom residences, fully furnished and equipped. Every residence includes a private office suite with independent access, conference rooms, and receptionist — a unique proposition in the Miami market. Integrated Miele kitchens (induction cooktop, oven, microwave, dishwasher, refrigerator), WaterWorks bathroom fixtures, built-in washer and dryer."
        amenities={[
          "Private office suite with independent elevator in every residence",
          "Conference rooms with shared receptionist",
          "One Twenty Signature Club — private owners' lounge",
          "Resort-style pool with lounge areas and skyline views",
          "Wellness Spa: therapeutic sauna, cold plunge, treatment rooms",
          "State-of-the-art Fitness Studio",
          "Movement and meditation studio",
          "Café & Juice Bar",
          "Over 50,000 sq ft of amenities total",
        ]}
        location="In the heart of Brickell, Miami's most dynamic financial and cultural district. Steps from Brickell City Centre, The Underline, and the city's finest restaurants. Sales Gallery at 450 Biscayne Blvd, Miami, FL 33132."
        process={[
          ["01","Private Dossier","Per-typology pricing, floor plans, and available units — including office suite specifications."],
          ["02","Reservation","Initial deposit and developer contract with PMG — 100% remote process."],
          ["03","Construction Milestones","Official payment schedule during construction."],
          ["04","Delivery — 2028","Furnished residence with fully operational office suite from day one."],
        ]}
        video="/videos/onetwenty.mp4"
        poster="/images/onetwenty/hero_onetwenty.webp"
        gallery={[
          "/images/onetwenty/gallery1.webp",
          "/images/onetwenty/gallery2.webp",
          "/images/onetwenty/gallery3.webp",
          "/images/onetwenty/gallery4.webp",
        ]}
        extraSections={EXTRA}
        other={[
          {slug:"/en/cipriani-residences",name:"Cipriani Residences"},
          {slug:"/en/elle-residences-miami",name:"Elle Residences"},
          {slug:"/en/domus-brickell",name:"Domus Brickell"},
        ]}
      />
    </>
  );
}
