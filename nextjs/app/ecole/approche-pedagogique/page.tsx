import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Approche pédagogique — Fabrique Numérique Paloise",
  description:
    "Découvrez les méthodes pédagogiques de la Fabrique Numérique Paloise : socio-constructivisme, pédagogie active, projet et mix learning.",
};

export default function ApprochePedagogique() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="section">
          <div className="container max-w-3xl">
            <span className="badge badge-cyan mb-4">Notre pédagogie</span>
            <h1 className="text-3xl md:text-4xl">Approche et méthodes <span className="text-cyan">pédagogiques</span></h1>

            <div className="flex flex-col gap-10 mt-8">
              <article>
                <h2>I. Socio-<span className="text-cyan">constructivisme</span></h2>
                <p>
                  Le socio-constructivisme est une théorie de l’apprentissage qui met en avant l’importance des interactions sociales et culturelles dans le développement des connaissances et des compétences. Cette approche est influencée par les travaux de Lev Vygotsky.
                </p>
                <h3 className="text-lg font-bold mt-4 mb-2">Principes Clés :</h3>
                <ul className="list-disc pl-5 flex flex-col gap-2 text-ink-700">
                  <li><strong>Construction Sociale :</strong> Les connaissances sont construites activement par les apprenants à travers leurs interactions.</li>
                  <li><strong>Zone de Développement Proximal (ZDP) :</strong> L'écart entre ce qu'un élève fait seul et ce qu'il accomplit avec l'aide d'un pair ou formateur.</li>
                  <li><strong>Importance du Langage :</strong> Les interactions verbales aident à formuler et développer les pensées.</li>
                  <li><strong>Interaction Sociale & Médiation :</strong> L'apprentissage est un processus social guidé par des médiateurs.</li>
                </ul>
              </article>

              <article>
                <h2>II. Pédagogies <span className="text-cyan">actives et co-actives</span></h2>
                <p>
                  Les pédagogies actives centrent l'apprentissage sur l'apprenant en le rendant acteur. Les pédagogies co-actives, quant à elles, mettent l'accent sur la co-construction du savoir via une collaboration continue entre enseignants et élèves.
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-2 text-ink-700">
                  <li><strong>Participation & Autonomie :</strong> Encourager l'initiative et l'esprit critique.</li>
                  <li><strong>Apprentissage par l'expérience :</strong> Privilégier l'expérimentation à la transmission passive.</li>
                  <li><strong>Partenariat éducatif :</strong> Une relation basée sur l'égalité, le respect et la responsabilité partagée.</li>
                </ul>
              </article>

              <article>
                <h2>III. Pédagogie <span className="text-cyan">de l'alternance</span></h2>
                <p>
                  Cette approche combine formation théorique et pratique en entreprise. Ce modèle rapproche l'éducation du monde professionnel pour une intégration immédiate des savoirs.
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-ink-700">
                  <li><strong>Double accompagnement :</strong> Collaboration entre tuteur pédagogique et tuteur entreprise.</li>
                  <li><strong>Responsabilisation :</strong> Gestion simultanée des obligations académiques et professionnelles.</li>
                </ul>
              </article>

              <article>
                <h2>IV. Pédagogie <span className="text-cyan">du projet</span></h2>
                <p>
                  L'apprenant est au cœur du processus via la réalisation de projets concrets. Cette méthode développe des compétences techniques, créatives et collaboratives.
                </p>
                <p className="mb-0">
                  Elle repose sur l'autonomie, le travail d'équipe, l'intégration des disciplines et une évaluation continue tout au long du cycle de vie du projet.
                </p>
              </article>

              <article>
                <h2>V. Présentiel augmenté <span className="text-cyan">et Mix Learning</span></h2>
                <p>
                  Le "présentiel augmenté" intègre des outils numériques pour enrichir les interactions en face à face, tandis que le "Mix Learning" (ou blended learning) harmonise le présentiel et le distanciel.
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-1 text-ink-700 mb-0">
                  <li><strong>Flexibilité :</strong> Accès aux ressources pédagogiques selon le rythme de l'apprenant.</li>
                  <li><strong>Personnalisation :</strong> Utilisation de données pour adapter les parcours.</li>
                  <li><strong>Hybridation :</strong> Une expérience éducative complète alliant interaction humaine et puissance des outils numériques.</li>
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