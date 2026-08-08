import type { Metadata } from "next";
import ElleResidences from "@/components/ElleResidences";
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
      <ElleResidences />
    </>
  );
}
