import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormationsHero from "@/components/formations/FormationsHero";
import FormationsExplorer from "@/components/formations/FormationsExplorer";
import FormationsCta from "@/components/formations/FormationsCta";

export const metadata: Metadata = {
  title: "Nos formations — Fabrique Numérique Paloise",
  description:
    "Découvre les formations certifiées de la Fabrique Numérique Paloise à Pau : DWFS (Bac +2), CDA spécialisé IA (Bac +3/4) et EISI (Bac +5).",
};

export default function Formations() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <FormationsHero />
        <FormationsExplorer />
        <FormationsCta />
      </main>
      <Footer />
    </>
  );
}