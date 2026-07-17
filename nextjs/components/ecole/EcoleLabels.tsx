const credentials = [
  {
    label: "Processus Certifié",
    caption: "Qualiopi",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Label GEN",
    caption: "Grande École du Numérique",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1L12 2Z" />
      </svg>
    ),
  },
];

export default function EcoleLabels() {
  return (
    <section id="engagements" className="bg-indigo scroll-mt-16 py-12">
      <div className="container">
        <h2 className="text-white mb-6">Nos Labels &amp; Certifications</h2>

        <div className="grid grid-cols-2 gap-4">
          {credentials.map((credential) => (
            <div
              key={credential.label}
              className="bg-surface rounded-lg p-5 text-center"
            >
              {/* Emplacement du logo officiel — à remplacer par le vrai
                  visuel de certification (Qualiopi / GEN) une fois
                  disponible dans les assets de marque. */}
              <span className="flex items-center justify-center h-16 text-indigo mb-3">
                {credential.icon}
              </span>
              <p className="font-display font-semibold text-ink-900 mb-0">
                {credential.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}