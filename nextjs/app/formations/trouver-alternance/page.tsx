import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Trouver son alternance — Fabrique Numérique Paloise",
  description: "Tout savoir sur les contrats d'alternance (apprentissage et professionnalisation) et les ressources pour réussir votre recherche.",
};

export default function TrouverAlternance() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="section">
          <div className="container max-w-3xl">
            <span className="badge badge-cyan mb-4">Guide pratique</span>
            <h1 className="text-3xl md:text-4xl">Trouver son <span className="text-cyan">alternance</span></h1>

            <div className="flex flex-col gap-10 mt-8">
              <article>
                <p>
                  L’alternance est un mode d’enseignement qui combine des périodes de formation théorique en établissement avec des périodes de pratique en entreprise. Ce système permet d’acquérir simultanément des connaissances académiques et une expérience professionnelle concrète, constituant un levier majeur d'insertion sur le marché du travail.
                </p>
              </article>

              <article>
                <h2>I. Types de contrats en <span className="text-cyan">alternance</span></h2>
                
                <h3 className="font-semibold text-lg mt-4 mb-2">Contrat d’Apprentissage</h3>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-ink-700 mb-4">
                  <li><strong>Public :</strong> Principalement destiné aux jeunes de 16 à 29 ans.</li>
                  <li><strong>Objectif :</strong> Préparer un diplôme (CAP, BAC PRO, BTS, Master, etc.).</li>
                  <li><strong>Durée :</strong> Généralement de 1 à 3 ans.</li>
                  <li><strong>Rémunération :</strong> En pourcentage du SMIC selon l'âge et l'année de formation.</li>
                </ul>

                <h3 className="font-semibold text-lg mt-4 mb-2">Contrat de Professionnalisation</h3>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-ink-700">
                  <li><strong>Public :</strong> Jeunes de 16 à 25 ans, demandeurs d'emploi de 26 ans et plus, bénéficiaires de minima sociaux.</li>
                  <li><strong>Objectif :</strong> Obtenir une qualification professionnelle reconnue (CQP, Titre professionnel).</li>
                  <li><strong>Durée :</strong> 6 mois à 2 ans.</li>
                  <li><strong>Rémunération :</strong> Selon l'âge et le niveau de qualification.</li>
                </ul>
              </article>

              <article>
                <h2>II. Les avantages <span className="text-cyan">de l'alternance</span></h2>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="font-semibold text-ink-900">Pour les alternants</h4>
                    <ul className="list-disc pl-5 text-sm text-ink-700">
                      <li>Insertion professionnelle facilitée</li>
                      <li>Formation rémunérée</li>
                      <li>Mise en pratique concrète</li>
                      <li>Développement d'un réseau</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink-900">Pour les entreprises</h4>
                    <ul className="list-disc pl-5 text-sm text-ink-700">
                      <li>Formation sur mesure</li>
                      <li>Aides financières</li>
                      <li>Pré-recrutement efficace</li>
                    </ul>
                  </div>
                </div>
              </article>

              <article>
                <h2>III. Ressources et <span className="text-cyan">outils</span></h2>
                <p>Pour vous accompagner dans vos démarches, voici les sites incontournables :</p>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-ink-700">
                  <li><a href="https://www.portail-alternance.fr" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">Portail de l’alternance</a></li>
                  <li><a href="https://labonnealternance.apprentissage.beta.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">La bonne alternance</a></li>
                  <li><a href="https://www.1jeune1solution.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">1jeune1solution</a></li>
                  <li><a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">Service-Public.fr</a></li>
                  <li><a href="https://www.francetravail.fr" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">France Travail</a></li>
                </ul>
              </article>

              <article className="bg-ink-100 p-6 rounded-lg">
                <h2>IV. Aides financières</h2>
                <p>Vous souhaitez simuler vos droits aux aides financières pour votre formation ?</p>
                <a href="https://www.jeunes.gouv.fr/le-simulateur-mes-aides-649" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-4 py-2 bg-cyan text-white rounded font-semibold hover:bg-cyan-dark transition-colors">
                  Accéder au simulateur
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}