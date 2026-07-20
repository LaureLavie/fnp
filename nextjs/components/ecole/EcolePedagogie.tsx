export default function EcolePedagogie() {
  return (
    <section id="pedagogie" className="section scroll-mt-16">
      <div className="container">
        <h2 className="text-center mb-10">Apprendre Autrement</h2>

        {/* Approche pédagogique phare : Socio-constructivisme */}
        <div className="bg-indigo rounded-lg p-6 md:p-8 text-white">
          <h3 className="text-white mb-4">Socio-constructivisme</h3>
          <p className="text-white/90 leading-relaxed mb-4">
            Ici, le savoir se co-construit. Nous plaçons l'interaction sociale et le projet au cœur de votre parcours. 
            Guidés par nos formateurs-médiateurs, vous apprenez à travers des défis réels, 
            favorisant l'intelligence collective et la montée en compétences par la pratique.
          </p>
          <div className="flex gap-4 text-sm font-medium opacity-90">
            <span>✓ Projets collaboratifs</span>
            <span>✓ Apprentissage par l'expérience</span>
            <span>✓ Co-construction</span>
          </div>
        </div>

        {/* Piliers complémentaires */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          
          {/* Inclusion Totale */}
          <div className="rounded-lg p-6 bg-ink-100">
            <h4 className="font-display font-semibold text-ink-900 mb-2">Inclusion Totale</h4>
            <p className="text-sm text-ink-700 leading-relaxed">
              Une pédagogie ouverte à tous, intégrant l'accompagnement spécifique PSH. 
              La mixité de nos profils est une force : elle enrichit les échanges, 
              développe l'empathie et garantit un environnement d'apprentissage bienveillant et égalitaire.
            </p>
          </div>

          {/* Mix Learning */}
          <div className="rounded-lg p-6 bg-orange-soft">
            <h4 className="font-display font-semibold text-ink-900 mb-2">Mix Learning</h4>
            <p className="text-sm text-ink-700 leading-relaxed">
              L'équilibre optimal entre le présentiel augmenté — pour le partage et la pratique guidée — 
              et le digital, pour une autonomie totale. Nos outils numériques prolongent 
              l'expérience de classe et personnalisent votre parcours selon votre rythme.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}