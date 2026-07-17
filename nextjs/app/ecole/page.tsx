import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EcoleHero from "@/components/ecole/EcoleHero";
import EcoleTabs from "@/components/ecole/EcoleTabs";
import EcoleCentre from "@/components/ecole/EcoleCentre";
import EcoleEquipe from "@/components/ecole/EcoleEquipe";
import EcolePedagogie from "@/components/ecole/EcolePedagogie";
import EcoleLabels from "@/components/ecole/EcoleLabels";
import EcoleAccess from "@/components/ecole/EcoleAccess";

export const metadata: Metadata = {
  title: "Notre École — Fabrique Numérique Paloise",
  description:
    "Un écosystème innovant au cœur de Pau : le campus, l'équipe pédagogique, notre approche socio-constructiviste et nos labels & certifications.",
};

export default function Ecole() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <EcoleHero />
        <EcoleTabs />
        <EcoleCentre />
        <EcoleEquipe />
        <EcolePedagogie />
        <EcoleLabels />
        <EcoleAccess />
      </main>
      <Footer />
    </>
  );
}