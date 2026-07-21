import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogExplorer from "@/components/blog/BlogExplorer";
import EvenementsAgenda from "@/components/blog/EvenementsAgenda";
import TemoignagesSection from "@/components/blog/TemoignagesSection";
import { getArticles, getEvenements, getTemoignages } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "Blog & Actualités — Fabrique Numérique Paloise",
  description:
    "Actualités, événements, guides pratiques, ressources pédagogiques et témoignages d'alumni de la Fabrique Numérique Paloise à Pau.",
};

// Revalidation toutes les 60s : le contenu vient de Strapi et peut être mis à
// jour à tout moment par l'équipe FNP (article, événement, témoignage).
export const revalidate = 60;

export default async function Blog() {
  const [articles, evenements, temoignages] = await Promise.all([
    getArticles(),
    getEvenements(),
    getTemoignages(),
  ]);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <BlogHero />
        <BlogExplorer articles={articles} />
        <EvenementsAgenda evenements={evenements} />
        <TemoignagesSection temoignages={temoignages} />
      </main>
      <Footer />
    </>
  );
}