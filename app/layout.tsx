import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.santamaria-collection.com"),
  title: "Santamaría Collection — Residencias de Lujo en Miami",
  description:
    "Cipriani Residences, Elle Residences y Domus Brickell. Tres desarrollos de nueva construcción curados para compradores internacionales. Desde $500K.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${jost.variable} font-sans bg-charcoal-950 text-cream antialiased`}>
        {children}
      </body>
    </html>
  );
}
