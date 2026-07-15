import type { Metadata } from "next";
import { Montserrat, Kodchasan } from "next/font/google";
import "./globals.css";

// Typographie de marque (charte graphique FNP) :
// - Montserrat -> titres, logo, boutons, éléments d'accroche
// - Kodchasan  -> texte courant, corps, paragraphes
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const kodchasan = Kodchasan({
  variable: "--font-kodchasan",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fabrique Numérique Paloise",
  description:
    "Former, innover, accompagner : centre de formation au numérique à Pau, accessible à tous.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${kodchasan.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}