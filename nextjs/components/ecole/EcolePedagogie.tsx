import Link from "next/link";

export default function EcolePedagogie() {
  return (
    <section id="pedagogie" className="section scroll-mt-16">
      <div className="container">
        <h2 className="text-center mb-10">Apprendre Autrement</h2>

        {/* Approche pédagogique phare : Socio-constructivisme */}
        <div className="bg-indigo rounded-lg p-6 md:p-8 text-white">
          <h3 className="text-white mb-4">Méthodes Pédagogiques</h3>
          <p className="text-white/90 leading-relaxed mb-4">
            Ici, le savoir se co-construit. Nous plaçons l'interaction sociale et le projet au cœur de votre parcours. 
            Guidés par nos formateurs-médiateurs, vous apprenez à travers des défis réels, 
            favorisant l'intelligence collective et la montée en compétences par la pratique.
          </p>
          <div className="flex gap-4 text-sm font-medium opacity-90 text-terracotta">
            <span> - Projets collaboratifs</span>
            <span> - Apprentissage par l'expérience</span>
            <span> - Co-construction</span>
          </div>
          <div className="mt-6">
            <Link
              href="/ecole/approche-pedagogique"
              className="text-white/80 text-sm hover:text-primary hover:underline underline-offset-4"
            >
              En savoir plus
            </Link>
          </div>
        </div>

        {/* Piliers complémentaires */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          
          {/* Inclusion Numérique */}
          <div className="rounded-lg p-6 bg-ink-100">
            <h4 className="font-display font-semibold text-ink-900 mb-2">Inclusion Numérique</h4>
            <p className="text-sm text-ink-700 leading-relaxed">
              Une pédagogie ouverte à tous, intégrant l'accompagnement spécifique PSH. 
              La mixité de nos profils est une force : elle enrichit les échanges, 
              développe l'empathie et garantit un environnement d'apprentissage bienveillant et égalitaire.
            </p>
            <div className="mt-6">
            <Link
              href="/ecole/inclusion-numerique"
              className="text-ink-900/80 text-sm hover:text-primary hover:underline underline-offset-4"
            >
              En savoir plus
            </Link>
          </div>
          </div>

          {/* Droits & Santé au travail */}
          <div className="rounded-lg p-6 bg-orange-soft flex flex-col justify-between">
            <div>
              <h4 className="font-display font-semibold text-ink-900 mb-2">Droits & Santé au travail</h4>
              <p className="text-sm text-ink-700 leading-relaxed">
                Parce que votre bien-être est le socle de votre réussite, nous vous accompagnons sur la connaissance de vos droits, la prévention des risques professionnels et la santé au travail. Un cadre sécurisant pour une insertion professionnelle durable.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/ecole/droit-sante-travail"
                className="text-ink-900/80 text-sm hover:text-primary hover:underline underline-offset-4"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}