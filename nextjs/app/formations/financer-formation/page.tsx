import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Financer votre formation — Fabrique Numérique Paloise",
  description: "Découvrez les dispositifs et aides disponibles pour financer votre formation à la Fabrique Numérique Paloise.",
};

export default function FinancerFormation() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="section">
          <div className="container max-w-3xl">
            <span className="badge badge-cyan mb-4">Informations pratiques</span>
            <h1 className="text-3xl md:text-4xl">Financez votre <span className="text-cyan">formation</span></h1>

            <div className="flex flex-col gap-10 mt-8">
              <article>
                <p>
                  Vous souhaitez intégrer l’une de nos formations mais vous vous interrogez sur les dispositifs de financement ? De nombreuses solutions existent pour vous accompagner dans votre projet professionnel.
                </p>
                <p className="mb-0">
                  Pour y voir plus clair, nous vous invitons à consulter le portail officiel du Gouvernement : ce simulateur vous permettra d'identifier rapidement les aides auxquelles vous pouvez prétendre selon votre situation personnelle et votre statut.
                </p>
              </article>

              <article className="bg-ink-100 p-8 rounded-lg border border-ink-200">
                <h2 className="mt-0">Simuler vos <span className="text-cyan">droits</span></h2>
                <p>
                  Accédez au simulateur en ligne pour découvrir les aides financières adaptées à votre profil :
                </p>
                <div className="mt-6">
                  <a 
                    href="https://www.jeunes.gouv.fr/le-simulateur-mes-aides-649" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-cyan text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-dark transition-colors"
                  >
                    Simuler mes droits
                  </a>
                </div>
              </article>

              <article>
                <h2>Nos équipes <span className="text-cyan">à votre écoute</span></h2>
                <p className="mb-0">
                  Chaque parcours est unique. Si vous rencontrez des difficultés dans vos démarches ou si vous souhaitez obtenir des précisions sur les financements liés à l'alternance (contrat d'apprentissage ou de professionnalisation), n'hésitez pas à contacter nos équipes de la Fabrique Numérique Paloise. Nous sommes là pour vous orienter.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}