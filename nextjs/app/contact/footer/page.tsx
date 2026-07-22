import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/accueil/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Fabrique Numérique Paloise",
  description:
    "Une question ? Contacte la Fabrique Numérique Paloise à Pau.",
};

export default function Contactsection() {
  return (
    <>
      <Navbar />
      <main className="flex-1">   
      <section className="section pb-6">
      <div className="container">
        <div className="bg-indigo rounded-lg py-10 px-6 md:px-10">
          <h1 className="text-white mb-2">
            Nous &amp; <span className="block text-cyan">CONTACTER</span>
          </h1>         
        </div>
      </div>
    </section> 
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}