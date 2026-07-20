const credentials = [
  {
    label: "Qualiopi",
    description: "Certification qualité garantissant l'excellence de nos processus de formation et d'apprentissage.",
    icon: <img src="/image/logo-qualiopi.webp" alt="Logo Qualiopi" />,
  },
  {
    label: "Label GEN",
    description: "Reconnaissance d'excellence pour nos formations aux métiers du numérique ouvertes à tous.",
    icon: <img src="/image/logo-gen.webp" alt="Logo Label GEN" />,
  },
  {
    label: "Engagement Handicap (CRFH)",
    description: "Un accompagnement dédié pour garantir l'accessibilité et la réussite de tous les parcours.",
    icon: <img src="/image/logo-crfh.webp" alt="Logo Engagement Handicap (CRFH)" />,
  },
  {
    label: "Apprentissage Nouvelle-Aquitaine",
    description: "Engagement régional pour des pratiques innovantes et qualitatives au service des bénéficiaires.",
    icon: <img src="/image/logo-ana.webp" alt="Logo Apprentissage Nouvelle-Aquitaine" />,
  },
];

export default function EcoleLabels() {
  return (
    <section id="engagements" className="bg-indigo scroll-mt-16 py-16">
      <div className="container">
        <h2 className="text-white text-center mb-12">Nos Engagements Qualité</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials.map((credential) => (
            <div
              key={credential.label}
              className="bg-surface rounded-lg p-6 flex flex-col items-center text-center shadow-sm"
            >
              <span className="flex items-center object-contain w-20 h-20 mb-4">
                {credential.icon}
              </span>
              <h3 className="font-display font-semibold text-ink-900 text-lg mb-2">
                {credential.label}
              </h3>
              <p className="text-sm text-ink-700 leading-relaxed">
                {credential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}