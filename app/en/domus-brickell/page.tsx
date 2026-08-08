import type { Metadata } from "next";
import ProjectFicha from "@/components/ProjectFicha";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Domus Brickell Miami | Your Urban Sanctuary | From $500K",
  description: "579 furnished FLATS in Brickell. Zen design, unrestricted short-term rental, professional hotel management. Return from day one. From $500K. Delivery 2028.",
  alternates: { canonical: "https://www.santamaria-collection.com/en/domus-brickell" },
  openGraph: {
    title: "Domus Brickell Miami | Urban Sanctuary | From $500K",
    description: "579 furnished FLATS. Zen philosophy, hotel management, unrestricted short-term rental in Brickell.",
    images: [{ url: "https://www.santamaria-collection.com/images/og/og-domus.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <SchemaOrg
        name="Domus Brickell"
        description="579 furnished FLATS in Brickell, Miami. Unrestricted short-term rental, professional hotel management. From $500K."
        url="https://www.santamaria-collection.com/en/domus-brickell"
        image="https://www.santamaria-collection.com/images/og/og-domus.jpg"
        price="500000" address="185 SW 7th St, Brickell" numberOfRooms="1"
      />
      <ProjectFicha
        slug="domus" accent="#2AB5AE" accentDk="#1F9993" themeColor="#1F9993"
        num="No. 03" name={"Domus\nBrickell"}
        tag="Your sanctuary in the heart of the city"
        price="From $500K USD · Return from day one"
        vision="Domus Brickell reinvents urban ownership with the FLATS model — Flexible Apartments for Temporary Stays: 579 furnished residences operated to hotel standards, designed for the international investor and the global nomad. Zen design philosophy applied to urban life — a minimalist sanctuary in the heart of Brickell. Unrestricted short-term rental with no minimum stay, integrated professional management, and a return from day one."
        quote=""
        stats={[["35","Floors"],["579","Flats"],["Brickell","Location"],["2028","Delivery"]]}
        design="Developed by North Development (Oak Capital + Edifica), with zen-inspired interiors: clean lines, natural materials, open spaces that flow from interior to exterior. Units delivered complete: equipped kitchen, washer/dryer, smart locks, balcony, and contemporary finishes. Designed from the ground up to operate — not adapted after the fact."
        units="Studios and one and two-bedroom residences, furnished and turnkey. Each unit enters the hotel management program directly: digital check-in, cleaning, maintenance, and professional marketing, with transparent owner disbursements. Airbnb-friendly from day one."
        amenities={["Rooftop pool and rooftop bar with panoramic views","Spa with sauna, steam room, and zen treatments","Yoga studio with Biscayne Bay views","Meditation garden and contemplative spaces","Co-working and equipped meeting rooms","24-hour concierge and integrated hotel management","Fully equipped gym","Ground-floor restaurant and retail","Integrated short-term rental management (Airbnb-friendly)"]}
        location="The heart of Brickell: Miami's financial district with the highest demand for corporate and tourist stays. Total connectivity — Metromover, Brickell City Centre, and the bay on foot. Minutes from the Design District, Wynwood, and the city's best dining."
        process={[["01","Private Dossier","Pricing, operational projections, floor plans, and available units."],["02","Reservation","Initial deposit and developer contract — 100% remote process."],["03","Construction Milestones","Official payment schedule during construction."],["04","Delivery — 2028","Furnished unit enrolled in the management program from day one."]]}
        video="/videos/domus.mp4"
        poster="/images/domus/home_domus.webp"
        gallery={["/images/domus/rooftop.webp","/images/domus/interior.webp","/images/domus/winebar.webp","/images/domus/peacock.webp"]}
        other={[{slug:"/en/cipriani-residences",name:"Cipriani Residences"},{slug:"/en/elle-residences-miami",name:"Elle Residences"}]}
      />
    </>
  );
}
