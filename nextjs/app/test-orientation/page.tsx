import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuizContainer from "@/components/quiz/QuizContainer";

export const metadata: Metadata = {
  title: "Test d'orientation — Fabrique Numérique Paloise",
  description:
    "Réponds à 11 questions pour découvrir la formation de la Fabrique Numérique Paloise la plus adaptée à ton profil : Développeur Web, CDA spécialisé IA ou EISI.",
};

export default function TestOrientation() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="section pb-6">
          <div className="container">
            <div className="bg-indigo rounded-lg py-10 px-6 md:px-10">
              <h1 className="text-white mb-0">
                Test <span className="block text-cyan">D&apos;ORIENTATION</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container">
            <QuizContainer />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}