import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactMap from "@/components/contact/ContactMap";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactHours from "@/components/contact/ContactHours";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Fabrique Numérique Paloise",
  description:
    "Une question sur nos formations, une envie de collaborer ou besoin de renseignements ? Contacte la Fabrique Numérique Paloise à Pau.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ContactHero />
        <ContactMap />
        <ContactInfoCards />
        <ContactHours />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}