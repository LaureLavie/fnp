export default function EcolePedagogie() {
  return (
    <section id="pedagogie" className="section scroll-mt-16">
      <div className="container">
        <h2 className="text-center mb-6">Apprendre Autrement</h2>

        {/* Approche pédagogique phare */}
        <div className="bg-indigo rounded-lg p-6 md:p-8">
          <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-orange mb-4">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </span>
          <h3 className="text-white">Socio-constructivisme</h3>
          <p className="text-white/80 mb-0">
            Apprentissage par l&apos;action et le partage. Nos apprenants
            construisent leurs savoirs à travers des projets réels en équipe.
          </p>
        </div>

        {/* Piliers complémentaires */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="rounded-lg p-5 bg-ink-100">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-surface text-indigo mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <p className="font-display font-semibold text-ink-900 mb-1">
              Inclusion Totale
            </p>
            <p className="text-sm text-ink-700 mb-0">
              Accompagnement spécifique PSH et mixité.
            </p>
          </div>

          <div className="rounded-lg p-5 bg-orange-soft">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-surface text-orange mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="13" rx="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
              </svg>
            </span>
            <p className="font-display font-semibold text-ink-900 mb-1">
              Mix Learning
            </p>
            <p className="text-sm text-ink-700 mb-0">
              Équilibre parfait entre présentiel et digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}