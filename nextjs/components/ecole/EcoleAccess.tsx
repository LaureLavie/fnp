const infos = [
  {
    title: "Transports",
    description: "Ligne FEBUS (Arrêt Laherrère), Accès direct A64.",
    accent: "indigo",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="13" rx="2" />
        <path d="M4 11h16" />
        <circle cx="8" cy="19" r="1.5" />
        <circle cx="16" cy="19" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Restauration",
    description: "Boulangeries, Carrefour & commerces à 2 min.",
    accent: "orange",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h1v11" />
        <path d="M9 2v20" />
        <path d="M17 2c-1.1 0-2 3-2 6s.9 6 2 6 2-3 2-6-.9-6-2-6Z" />
        <path d="M17 14v8" />
      </svg>
    ),
  },
  {
    title: "Parking",
    description: "Parkings gratuits et abrités à proximité.",
    accent: "cyan",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </svg>
    ),
  },
] as const;

const accentClass = {
  indigo: "bg-indigo text-white",
  orange: "bg-orange text-ink-900",
  cyan: "bg-cyan text-white",
} as const;

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Pôle Laherrère, 3 place Laherrère, 64000 Pau") +
  "&z=12&output=embed";

export default function EcoleAccess() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="mb-6">Venir &amp; Vivre à la FNP</h2>

        <ul className="flex flex-col gap-5 list-none p-0 mb-8">
          {infos.map((info) => (
            <li key={info.title} className="flex items-start gap-4">
              <span
                className={`flex items-center justify-center w-11 h-11 rounded-lg shrink-0 ${accentClass[info.accent]}`}
              >
                {info.icon}
              </span>
              <span>
                <span className="block font-display font-semibold text-ink-900">
                  {info.title}
                </span>
                <span className="block text-sm text-ink-700">
                  {info.description}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <div className="rounded-lg overflow-hidden shadow-sm aspect-[4/3] md:aspect-[16/7]">
          <iframe
            title="Localisation de la Fabrique Numérique Paloise à Pau"
            src={MAP_EMBED_SRC}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}