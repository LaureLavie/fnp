import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import FormationsHero from "@/components/formations/FormationsHero";
import FormationsExplorer from "@/components/formations/FormationsExplorer";
import FormationsCta from "@/components/formations/FormationsCta";
import RejoindreHero from "@/components/formations/RejoindreHero";
import RejoindreSection from "@/components/formations/RejoindreSection";

import { getFormations } from "@/lib/digiforma";

import type { Formation } from "@/components/formations/FormationCard";


export const metadata: Metadata = {
  title: "Nos formations — Fabrique Numérique Paloise",
  description:
    "Découvre les formations certifiées de la Fabrique Numérique Paloise à Pau : DWFS (Bac +2), CDA spécialisé IA (Bac +3/4) et EISI (Bac +5).",
};


export const revalidate = 60;


export default async function Formations() {

  const digiformaFormations = await getFormations();


  const formations: Formation[] =
  digiformaFormations.map((f) => ({
    id: f.id,
    slug: f.slug,
    title: f.title,
    description: f.description,
    badge: f.badge,
    badgeColor: f.badgeColor,
    level: f.level,
    levelTags: f.levelTags,
    status: f.status,
    statusColor: f.statusColor,
    image: "/images/formations/default.webp",
    imageAlt: f.title,
    link: f.link || "#",
  }));


  return (
    <>
      <Navbar />

      <main className="flex-1">

        <FormationsHero />

        <FormationsExplorer
          formations={formations}
        />

        <FormationsCta />

        <RejoindreHero />

        <RejoindreSection />

      </main>

      <Footer />
    </>
  );
}