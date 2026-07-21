import type { StrapiEvenement, EvenementType } from "@/lib/strapi";

const typeAccent: Record<EvenementType, { badge: string; date: string }> = {
  "Job Dating": { badge: "badge-terracotta", date: "bg-terracotta text-white" },
  "Portes ouvertes": { badge: "badge-cyan", date: "bg-cyan text-white" },
  "Webinaire": { badge: "badge-orange", date: "bg-orange text-ink-900" },
  "Salon": { badge: "badge-cyan", date: "bg-cyan text-white" },
  "Autre": { badge: "badge-orange", date: "bg-orange text-ink-900" },
};

function formatDay(iso: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit" }).format(new Date(iso));
}
function formatMonth(iso: string) {
  return new Intl.DateTimeFormat("fr-FR", { month: "short" })
    .format(new Date(iso))
    .replace(".", "")
    .toUpperCase();
}
function formatFull(iso: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

export default function EvenementsAgenda({
  evenements,
}: {
  evenements: StrapiEvenement[];
}) {
  return (
    <section id="agenda" className="section pt-0 scroll-mt-20">
      <div className="container">
        <span className="badge badge-terracotta mb-4">Agenda</span>
        <h2 className="mb-2">Événements à venir</h2>
        <p className="max-w-xl mb-8">
          Job dating, portes ouvertes, webinaires : les prochains rendez-vous
          de la Fabrique Numérique Paloise, avec toutes les infos pour t&apos;y
          préparer.
        </p>

        {evenements.length === 0 ? (
          <p className="card text-center text-ink-700">
            Aucun événement programmé pour le moment. Reviens bientôt !
          </p>
        ) : (
          <ul className="flex flex-col gap-4 list-none p-0 m-0">
            {evenements.map((evenement) => {
              const accent = typeAccent[evenement.typeEvenement];
              return (
                <li key={evenement.documentId} className="card flex gap-5 items-start">
                  <div
                    className={`flex flex-col items-center justify-center rounded-lg w-16 h-16 shrink-0 ${accent.date}`}
                  >
                    <span className="font-display font-extrabold text-xl leading-none">
                      {formatDay(evenement.dateEvenement)}
                    </span>
                    <span className="text-xs font-display font-semibold uppercase tracking-wide">
                      {formatMonth(evenement.dateEvenement)}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`badge ${accent.badge}`}>
                        {evenement.typeEvenement}
                      </span>
                      {evenement.lieu && (
                        <span className="text-sm text-ink-500">{evenement.lieu}</span>
                      )}
                    </div>
                    <p className="font-display font-semibold text-ink-900 mb-1">
                      {evenement.titre}
                    </p>
                    <p className="text-sm text-ink-700 mb-2 capitalize">
                      {formatFull(evenement.dateEvenement)}
                    </p>
                    {evenement.description && (
                      <p className="text-sm text-ink-700 mb-2">
                        {evenement.description}
                      </p>
                    )}
                    {evenement.lienExterne && (
                      <a
                        href={evenement.lienExterne}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-display font-semibold text-primary hover:text-primary-hover"
                      >
                        En savoir plus
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}