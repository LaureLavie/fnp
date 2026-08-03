import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormationsHero from "@/components/formations/FormationsHero";
import FormationsExplorer from "@/components/formations/FormationsExplorer";
import FormationsCta from "@/components/formations/FormationsCta";
import RejoindreHero from "@/components/formations/RejoindreHero";
import RejoindreSection from "@/components/formations/RejoindreSection";
import { getFormations, getStrapiMedia } from "@/lib/strapi";
import type { Formation } from "@/components/formations/FormationCard";

export const metadata: Metadata = {
  title: "Nos formations — Fabrique Numérique Paloise",
  description:
    "Découvre les formations certifiées de la Fabrique Numérique Paloise à Pau : DWFS (Bac +2), CDA spécialisé IA (Bac +3/4) et EISI (Bac +5).",
};

export const revalidate = 60;

export default async function Formations() {
  const strapiFormations = await getFormations();

  // Mappe le format Strapi vers le format attendu par FormationCard,
  // avec une image de secours si aucune n'est encore uploadée côté CMS.
  const formations: Formation[] = strapiFormations.map((f) => ({
    id: f.id,
    slug: f.slug,
    title: f.title,
    description: f.description,
    badge: f.badge,
    badgeColor: f.badgeColor,
    level: f.level,
    status: f.status,
    statusColor: f.statusColor,
    image:
      getStrapiMedia(f.image?.url) ||
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=60",
    imageAlt: f.imageAlt || f.title,
    link: f.link || "#",
  }));

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <FormationsHero />
        <FormationsExplorer formations={formations} />
        <FormationsCta />
        <RejoindreHero />
        <RejoindreSection />
      </main>
      <Footer />
    </>
  );
}