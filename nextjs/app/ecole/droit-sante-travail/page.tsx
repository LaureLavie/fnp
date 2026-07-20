import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Droits et santé au travail — Fabrique Numérique Paloise",
  description: "Informations sur les droits des alternants, rémunérations, protection sociale et santé au travail.",
};

export default function DroitsSanteTravail() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="section">
          <div className="container max-w-3xl">
            <span className="badge badge-cyan mb-4">Info +</span>
            <h1 className="text-3xl md:text-4xl">Droits et santé <span className="text-cyan">au travail</span></h1>

            <div className="flex flex-col gap-10 mt-8">
              
              <article>
                <h2>Apprentissage ou contrat pro, <span className="text-cyan">quels sont mes droits ?</span></h2>
                <p>
                  Les contrats en alternance, qu’il s’agisse du contrat d’apprentissage ou du contrat de professionnalisation, confèrent plusieurs droits aux alternants. Voici un résumé des points essentiels.
                </p>
              </article>

              <article>
                <h2>I. Droits des <span className="text-cyan">Alternants</span></h2>
                
                <h3 className="font-semibold text-lg mt-4 mb-2">Rémunération</h3>
                <p className="mb-2"><strong>Contrat d’Apprentissage :</strong> Calculée selon l'âge et l'année de formation en pourcentage du SMIC ou salaire conventionnel.</p>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-ink-700 mb-4">
                  <li>Moins de 18 ans : 27 % à 43 % du SMIC</li>
                  <li>18 à 20 ans : 43 % à 53 % du SMIC</li>
                  <li>21 à 25 ans : 53 % à 78 % du SMIC</li>
                  <li>26 ans et plus : Au moins le SMIC ou 100 % du salaire minimum conventionnel</li>
                </ul>
                
                <p className="mb-2"><strong>Contrat de Professionnalisation :</strong></p>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-ink-700 mb-4">
                  <li>Moins de 21 ans : 55 % à 65 % du SMIC</li>
                  <li>21 à 25 ans : 70 % à 80 % du SMIC</li>
                  <li>26 ans et plus : Au moins le SMIC ou 85 % de la rémunération minimale conventionnelle</li>
                </ul>

                <h3 className="font-semibold text-lg mt-4 mb-2">Autres droits fondamentaux</h3>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-ink-700 mb-0">
                  <li><strong>Congés payés :</strong> 2,5 jours par mois, soit 30 jours par an.</li>
                  <li><strong>Temps de travail :</strong> Identique aux autres salariés (généralement 35h).</li>
                  <li><strong>Protection sociale :</strong> Couverture maladie, maternité, accident du travail et retraite de base.</li>
                  <li><strong>Tutorat :</strong> Désignation obligatoire d'un maître d'apprentissage ou tuteur.</li>
                  <li><strong>Droits syndicaux :</strong> Accès aux mêmes droits que les autres salariés.</li>
                </ul>
              </article>

              <article>
                <h2>II. Santé et sécurité <span className="text-cyan">au travail</span></h2>
                <p>
                  La santé et la sécurité des alternants sont une priorité. L'employeur est tenu de garantir la sécurité physique et mentale de chaque salarié.
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-2 text-ink-700 mb-4">
                  <li><strong>Visite médicale :</strong> Obligatoire avant la fin de la période d'essai pour vérifier l'aptitude au poste.</li>
                  <li><strong>Formation sécurité :</strong> Dispensée dès l'arrivée dans l'entreprise, adaptée aux risques du poste.</li>
                  <li><strong>EPI :</strong> Fourniture gratuite des équipements de protection individuelle nécessaires.</li>
                  <li><strong>Jeunes de -18 ans :</strong> Règles strictes sur les travaux dangereux, horaires et repos hebdomadaire.</li>
                </ul>
              </article>

              <article>
                <h2>III. Prévenir les risques <span className="text-cyan">en milieu de bureau</span></h2>
                <p>
                  Le travail de bureau expose à des risques souvent sous-estimés (écrans, posture statique, stress).
                </p>
                <div className="bg-ink-100 p-4 rounded-lg mt-4">
                    <p className="text-sm font-semibold mb-2">Principaux risques identifiés :</p>
                    <ul className="list-disc pl-5 text-sm text-ink-700">
                        <li><strong>Chutes :</strong> Sols encombrés, câbles au sol.</li>
                        <li><strong>TMS :</strong> Postures statiques prolongées, poste de travail inadapté.</li>
                        <li><strong>Risques psychosociaux :</strong> Charge mentale, interruptions fréquentes, bruit.</li>
                    </ul>
                </div>
                <p className="mt-4 text-sm text-ink-600 italic">Source : Document ED6383 de l'INRS.</p>
              </article>

              <article>
                <h2>Pour aller <span className="text-cyan">plus loin</span></h2>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-ink-700">
                  <li><a href="https://www.inrs.fr" target="_blank" rel="noopener noreferrer">Institut National de Recherche et de Sécurité (INRS)</a></li>
                  <li><a href="https://www.service-public.fr" target="_blank" rel="noopener noreferrer">Service-public.fr (Droits des apprentis et contrats pros)</a></li>
                  <li><a href="https://www.ameli.fr" target="_blank" rel="noopener noreferrer">AMELI – Assurance Maladie</a></li>
                  <li><a href="https://travail-emploi.gouv.fr" target="_blank" rel="noopener noreferrer">Ministère du Travail</a></li>
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