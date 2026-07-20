import Link from "next/link";

export default function RejoindreSection() {
  return (
    <section className="pb-3">
      <div className="container">
         <div className="grid md:grid-cols-3 gap-6 mt-0 md:mt-6">
          
          {/* Bloc 1 : Trouver son alternance */}
          <div className="card p-6 bg-white flex flex-col justify-between">
            <div>
              <h4 className="font-display font-semibold text-terracotta mb-3">Trouver son alternance</h4>
              <p className="text-sm text-ink-700 leading-relaxed mb-4">
                La recherche d'entreprise est une étape clé de votre parcours. Découvrez nos conseils, nos outils de prospection et les ressources disponibles pour décrocher votre contrat en alternance avec succès.
              </p>
            </div>
            <Link
              href="/formations/trouver-alternance"
              className="text-terracotta font-medium text-sm hover:text-cyan hover:underline underline-offset-4"
              target="_blank"
            >
              En savoir plus →
            </Link>
          </div>

          {/* Bloc 2 : Financer sa formation */}
          <div className="card p-6 bg-white flex flex-col justify-between">
            <div>
              <h4 className="font-display font-semibold text-cyan mb-3">Financer sa formation</h4>
              <p className="text-sm text-ink-700 leading-relaxed mb-4">
                Votre projet professionnel mérite d'être soutenu. Identifiez les aides publiques auxquelles vous pouvez prétendre grâce au simulateur officiel et financez votre montée en compétences.
              </p>
            </div>
            <Link
              href="https://www.jeunes.gouv.fr/le-simulateur-mes-aides-649"
              className="text-cyan font-medium text-sm hover:text-indigo hover:underline underline-offset-4"
              target="_blank"
            >
              Simuler mes aides →
            </Link>
          </div>

          {/* Bloc 3 : Candidater */}
          <div className="card p-6 bg-white flex flex-col justify-between">
            <div>
              <h4 className="font-display font-semibold text-orange mb-3">Candidater à la Fabrique</h4>
              <p className="text-sm text-ink-700 leading-relaxed mb-4">
                Prêt(e) à relever le défi ? Rejoignez une promotion innovante et inclusive. Découvrez notre processus de candidature, les prérequis et les étapes pour intégrer nos prochaines sessions.
              </p>
            </div>
            <Link
              href="/formations/candidater"
              className="text-orange font-medium text-sm hover:text-terracotta hover:underline underline-offset-4"
              target="_blank"
            >
              En savoir plus →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}