import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Candidater à la Fabrique — Fabrique Numérique Paloise",
  description: "Découvrez les étapes pour rejoindre nos formations : de l'information à l'inscription officielle à la Fabrique Numérique Paloise.",
};

export default function Candidater() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="section">
          <div className="container max-w-3xl">
            <span className="badge badge-cyan mb-4">Admissions</span>
            <h1 className="text-3xl md:text-4xl">Candidater à <span className="text-cyan">la Fabrique</span></h1>
            
            <p className="text-lg text-ink-700 mt-6 italic">
              Vous souhaitez rejoindre la Fabrique Numérique Paloise et participer à l’une de nos formations ? Rien de plus simple : suivez le guide !
            </p>

            <div className="flex flex-col gap-10 mt-8">
              <article>
                <h2>I. Je m’informe sur les formations <span className="text-cyan">et l’organisme</span></h2>
                <p>
                  Nos actions sont affichées en ligne sur différents sites institutionnels tels que Cmaformation Nouvelle-Aquitaine, 
                  La bonne alternance ainsi que sur notre catalogue en ligne. Vous y trouverez des informations importantes 
                  telles que les prérequis, les objectifs, la durée, les modalités et les délais d’accès, les tarifs, 
                  les méthodes d’enseignement mobilisées ainsi que les modalités d’évaluation.
                </p>
                <p className="mb-0">
                  Nous vous recommandons également de participer à nos webinaires et parcourir notre site web pour compléter 
                  ces informations, découvrir l’environnement d’apprentissage et bien évidemment rencontrer nos équipes : 
                  les formateurs référents ainsi que (en fonction de votre situation) notre référente handicap, 
                  sont disponibles et prêts à répondre à vos questions.
                </p>
              </article>

              <article>
                <h2>II. Je fais (officiellement) <span className="text-cyan">acte de candidature</span></h2>
                <p>
                  Que vous nous ayez rencontrés sur un forum, via un webinaire, par téléphone ou en nous rendant tout simplement 
                  visite dans nos locaux, le processus d’inscription est le même : vous devez candidater via notre catalogue 
                  de formation en ligne, rubrique "se préinscrire". 
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-ink-700 mb-0">
                  <li>Rendez-vous sur notre catalogue de formation.</li>
                  <li>Choisissez la formation qui vous convient.</li>
                  <li>Cliquez sur la rubrique <strong>"se préinscrire"</strong>.</li>
                  <li>Indiquez simplement votre nom, prénom, email et téléphone, puis envoyez votre demande.</li>
                </ul>
              </article>

              <article>
                <h2>III. Je complète <span className="text-cyan">ma candidature</span></h2>
                <p>
                  Notre service administratif enregistre votre candidature. Nous vous envoyons dans les 48 heures par mail 
                  une demande de complément d’information, comprenant :
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-ink-700 mb-0">
                  <li>Votre CV actualisé.</li>
                  <li>Un formulaire en ligne détaillé (renseignements administratifs, parcours, projet professionnel, état des lieux des connaissances).</li>
                </ul>
                <p className="mt-4 text-ink-600">
                  <em>Ces informations servent à nos équipes pour préparer notre future rencontre et restent confidentielles.</em>
                </p>
              </article>

              <article>
                <h2>IV. Je rencontre <span className="text-cyan">l’équipe pédagogique</span></h2>
                <p>
                  Après réception de votre dossier complet, vous recevez une proposition de rendez-vous. Vous êtes reçu 
                  individuellement par le formateur référent et un autre membre de l’équipe pédagogique pour un entretien 
                  d'environ 45 minutes.
                </p>
                <p>Lors de cette rencontre, nous évaluons :</p>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-ink-700 mb-4">
                  <li>Vos motivations et la pertinence de votre projet.</li>
                  <li>Vos connaissances et votre capacité à vous adapter au rythme de la formation.</li>
                  <li>Votre capacité à vous intégrer dans un collectif.</li>
                </ul>
                <p className="mb-0">
                  Des compléments peuvent être demandés : liens vers un portfolio, dépôt GitHub, travaux ou exercices 
                  à réaliser avant l'entrée en formation.
                </p>
              </article>

              <article>
                <h2>V. Je reçois une notification <span className="text-cyan">de décision</span></h2>
                <p>
                  Vous recevez rapidement (48 à 72 heures) une notification précisant la décision de l’équipe pédagogique :
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-2 text-ink-700 mb-0">
                  <li>
                    <strong>Candidature non retenue :</strong> Nous vous expliquons les motifs et vous orientons vers vos 
                    référents de parcours (France Travail, Mission Locale, etc.).
                  </li>
                  <li>
                    <strong>Candidature en attente :</strong> Des pièces ou exercices complémentaires sont nécessaires pour finaliser notre avis.
                  </li>
                  <li>
                    <strong>Candidature retenue :</strong> Nous vous envoyons une notification d’inscription pour faire valoir 
                    vos droits et vous transmettons votre dossier à l'équipe en charge de l'accompagnement à la recherche d'alternance.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}