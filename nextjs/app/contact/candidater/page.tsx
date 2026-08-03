import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import CandidatForm from "@/components/contact/CandidatForm";

export const metadata: Metadata = {
  title: "Contact — Fabrique Numérique Paloise",
  description:
    "Une question sur nos formations, une envie de collaborer ou besoin de renseignements ? Contacte la Fabrique Numérique Paloise à Pau.",
};


export default function Candidater() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <CandidatForm />
      </main>
      <Footer />
    </>
  );
}
