const features = [
  {
    title: "Salles équipées",
    description: "Postes double écran & fibre optique",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 9h1" />
        <path d="M9 13h1" />
        <path d="M14 9h1" />
        <path d="M14 13h1" />
        <path d="M10 21v-4h4v4" />
      </svg>
    ),
  },
  {
    title: "Espace Détente",
    description: "Cuisine partagée & coin convivialité",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z" />
        <line x1="6" y1="2" x2="6" y2="4" />
        <line x1="10" y1="2" x2="10" y2="4" />
        <line x1="14" y1="2" x2="14" y2="4" />
      </svg>
    ),
  },
];

export default function EcoleCentre() {
  return (
    <section id="centre" className="section scroll-mt-16">
      <div className="container">
        <p className="font-display font-semibold text-terracotta text-sm uppercase tracking-wide mb-2">
          Le lieu
        </p>
        <h2 className="max-w-lg">Un campus de 250m²</h2>
        <p className="max-w-xl">
          Situé au sein du prestigieux Pôle Laherrère, notre espace est conçu
          pour favoriser la collaboration et l&apos;immersion technologique.
        </p>

        {/* Photo + repère de localisation */}
        <div className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-md mt-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=60"
            alt="Espace de travail collaboratif du campus de la Fabrique Numérique Paloise"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <span className="inline-flex items-center gap-2 bg-surface/95 backdrop-blur rounded-full py-2 px-4 shadow-sm text-sm font-display font-semibold text-ink-900">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-terracotta">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Pôle Laherrère, Pau
            </span>
          </div>
        </div>

        {/* Cartes d'équipements */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          {features.map((feature) => (
            <div key={feature.title} className="card py-5 px-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-soft text-indigo mb-3">
                {feature.icon}
              </span>
              <p className="font-display font-semibold text-ink-900 mb-1">
                {feature.title}
              </p>
              <p className="text-sm text-ink-700 mb-0">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}