const ADDRESS = "Pôle Laherrère, 3 place Laherrère, 64000 Pau";
const MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(ADDRESS) +
  "&output=embed";
const MAPS_DIRECTIONS_HREF =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(ADDRESS);

export default function ContactMap() {
  return (
    <section className="section pt-0 pb-10">
      <div className="container">
        <div className="card p-0 overflow-hidden">
          {/* En-tête "Nous trouver" */}
          <div className="p-6 pb-4">
            <h2 className="mb-1">Nous trouver</h2>
            <p className="mb-0 text-ink-700">{ADDRESS}</p>
          </div>

          {/* Carte + bouton itinéraire flottant */}
          <div className="relative aspect-[4/3] md:aspect-[16/7]">
            <iframe
              title={`Localisation de la Fabrique Numérique Paloise — ${ADDRESS}`}
              src={MAPS_EMBED_SRC}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <a
              href={MAPS_DIRECTIONS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 btn bg-surface text-ink-900 shadow-md py-2 px-4 text-sm hover:text-primary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              Itinéraire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}