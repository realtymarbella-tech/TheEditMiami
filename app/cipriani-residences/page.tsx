import type { Metadata } from "next";
import CiprianiResidences from "@/components/CiprianiResidences";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.santamaria-collection.com/cipriani-residences" },
  title: "Cipriani Residences Miami | La Torre Más Alta al Sur de NYC | Desde $1.8M",
  description: "950 pies. 85 plantas. 397 residencias. La primera Cipriani residencial en América, diseñada por Arquitectonica con interiores de 1508 London. Desde $1.8M, Canaletto desde $4.1M.",
  openGraph: {
    title: "Cipriani Residences Miami | La Torre Más Alta al Sur de NYC",
    description: "950 pies sobre Brickell. La primera Cipriani residencial en América.",
    images: [{ url: "/images/og/og-cipriani.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <SchemaOrg
        name="Cipriani Residences Miami"
        description="La primera residencia Cipriani construida desde cero en América. 85 plantas, 950 pies, 397 residencias diseñadas por Arquitectonica con interiores de 1508 London."
        url="https://www.santamaria-collection.com/cipriani-residences"
        image="https://www.santamaria-collection.com/images/og/og-cipriani.jpg"
        price="1800000"
        address="1420 S Miami Ave"
        numberOfRooms="1"
      />
      <CiprianiResidences />
    </>
  );
}
