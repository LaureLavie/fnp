export default function Hero() {
  return (
    <section className="section pb-12">
      <div className="container">
        <h1 className="text-4xl md:text-5xl max-w-2xl">
          La Fabrique Numérique : Formez-vous à la tech de demain
        </h1>

        <p className="text-lg max-w-xl mt-6">
          Envie de transformer ton avenir professionnel ? Depuis 2018, la
          Fabrique Numérique Paloise propose des parcours professionnalisants
          dans le domaine du <strong>développement informatique et des
          systèmes réseaux</strong>, du niveau Bac+2 à Bac+5.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="/formations" className="btn btn-ink">
            Voir nos formations
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="/candidater" className="btn btn-outline-ink">
            Candidater
          </a>
        </div>
      </div>
    </section>
  );
}