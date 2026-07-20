import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Inclusion & Accessibilité — Fabrique Numérique Paloise",
  description: "Engagement de La Fabrique Numérique Paloise en faveur de l'inclusion numérique et de l'accessibilité aux personnes en situation de handicap.",
};

export default function InclusionNumerique() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="section">
          <div className="container max-w-3xl">
            <span className="badge badge-cyan mb-4">Engagements</span>
            <h1 className="text-3xl md:text-4xl">Inclusion et <span className="text-cyan">Accessibilité</span></h1>

            <div className="flex flex-col gap-10 mt-8">
              
              <article>
                <h2>I. Inclusion <span className="text-cyan">Numérique</span></h2>
                <p>
                  Participer activement à une meilleure appropriation par le plus grand nombre des usages numériques, 
                  c’est l’objectif de notre activité « Inclusion numérique » au sein de La Fabrique Numérique.
                </p>
                <p>
                  Pour enrichir le parcours de ses collaborateurs en insertion, Step les forme depuis 3 ans 
                  aux fondamentaux du numérique dans le cadre de la certification PIX.
                </p>
                <p>
                  Step a souhaité élargir son action au territoire en étant volontaire pour porter 2 conseillers 
                  numériques France Services (CNFS) et a conclu une convention avec l’ANCT. À ce titre, Step 
                  intervient sur les quartiers prioritaires de la ville dans le cadre du projet “Pau, cité de l’emploi” 
                  et auprès de structures accueillant des usagers éloignés du numérique.
                </p>
                <div className="mt-4 p-4 bg-ink-100 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Nos partenaires :</p>
                  <p className="text-sm text-ink-700">
                    Ministère du Travail et de l'Emploi, Conseiller Numérique France Services, Les Cités Éducatives, 
                    Mission Société Numérique, Cité de l'Emploi.
                  </p>
                </div>
              </article>

              <article>
                <h2>II. Accueil des personnes <span className="text-cyan">en situation de handicap</span></h2>
                <p>
                  Les politiques dites « inclusives » visent à privilégier l’accueil des personnes handicapées 
                  dans le milieu ordinaire. Consciente de ces enjeux, La Fabrique Numérique Paloise est engagée 
                  dans une démarche de progrès auprès du <strong>Centre Ressource Formation Handicap (CRFH)</strong> 
                  afin d’améliorer l’accessibilité de ses formations.
                </p>
                <p>
                  Ce processus d’amélioration continue nous permet de construire et mettre en œuvre une 
                  politique d’accueil en lien avec le Programme Régional d’Accès à la Formation et à la 
                  Qualification des Personnes Handicapées en Nouvelle Aquitaine.
                </p>
                <p>
                  Notre centre de formation est signataire de la charte d’engagement à la démarche de progrès 
                  et labellisé par le CRFH. Cette charte, outil proposé par l’Agefiph, traduit notre engagement 
                  dans le développement de nos compétences en matière de formation inclusive.
                </p>
              </article>

              <article>
                <h2>III. Avantages de la <span className="text-cyan">démarche</span></h2>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Pour le public</h3>
                    <ul className="list-disc pl-5 flex flex-col gap-2 text-ink-700">
                      <li>Accès facilité aux formations professionnelles en environnement adapté.</li>
                      <li>Prise en considération des besoins spécifiques de l'accueil à la fin de la formation.</li>
                      <li>Adaptation des parcours et réelle égalité des chances.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Pour notre structure</h3>
                    <ul className="list-disc pl-5 flex flex-col gap-2 text-ink-700">
                      <li>Qualité de l'accueil pour l'ensemble des apprenants.</li>
                      <li>Conseils experts pour professionnaliser notre personnel.</li>
                      <li>Accès au Réseau des Référents Handicap.</li>
                    </ul>
                  </div>
                </div>
              </article>

              <article>
                <h2>IV. Nos référents <span className="text-cyan">handicap</span></h2>
                <p className="mb-0">
                  <strong>Sandrine ROGER</strong> est votre interlocutrice dédiée pour toute question 
                  relative à l'accessibilité et à l'adaptation de votre parcours de formation.
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