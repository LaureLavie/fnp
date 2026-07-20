import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Fabrique Numérique Paloise",
  description:
    "Une question sur nos formations, une envie de collaborer ou besoin de renseignements ? Contacte la Fabrique Numérique Paloise à Pau.",
};

const subjects = [
  "Information sur les formations",
  "Candidater au Développement Web et Web Mobile",
  "Candidater au Concepteur Développeur d'Applications",
  "Candidater à Expert en Informatique et Systèmes d'Information",
];

export default function Contacter() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
