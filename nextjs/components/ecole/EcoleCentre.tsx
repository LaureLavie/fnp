const features = [
  {
    title: "Salles équipées",
    description: "4 salles avec vidéoprojecteurs HD, tableaux blancs et mobilier ergonomique Ecloz",
  },
  {
    title: "Matériel informatique",
    description: "PC portables (Lenovo T470, T480, P51) et environnement réseau complet",
  },
  {
    title: "Accessibilité",
    description: "Proche centre-ville, desservi par le FEBUS et les grands axes",
  },
  {
    title: "Écosystème",
    description: "Synergie avec 30 structures partenaires au sein du pôle",
  },
];

export default function EcoleCentre() {
  return (
    <section id="centre" className="section scroll-mt-16">
      <div className="container">
  <p className="font-display font-semibold text-terracotta text-sm uppercase tracking-wide mb-2">
    Le lieu
  </p>
  
  {/* On utilise items-center pour aligner le texte et l'image verticalement */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10">
    
    {/* Bloc Texte */}
    <div>
      <h2 className="max-w-lg mb-4">Notre campus de 250 m² au Pôle Laherrère</h2>
      <p className="text-ink-700 leading-relaxed">
        Depuis mai 2023, nous vous accueillons au cœur du quartier Saragosse à Pau. 
        Conçu pour favoriser l'immersion technologique, notre espace regroupe 4 salles 
        de formation, un espace d'accueil et un pôle administratif.
      </p>
    </div>

    {/* Bloc Image */}
    <div className="relative w-[500px] md:aspect-auto md:h-full">
      <img
        src="/image/lahererre.webp"
        alt="Centre de Formations au Pôle Laherrère"
        className="rounded-lg shadow-md w-full h-full object-cover"
      />
    </div>
  </div>


        {/* Focus Équipement */}
        <div className="bg-surface-light p-6 rounded-lg border border-ink-100 my-6">
          <h3 className="font-display font-bold text-ink-900 mb-3">Confort et technicité</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-10">
    <div className="relative w-[500px] md:aspect-auto md:h-full">
      <img
        src="/image/salles.webp"
        alt="salle de cours au Pôle Laherrère"
        className="rounded-lg shadow-md w-auto h-full object-cover"
      />
    </div>
          <p className="text-ink-700 text-sm">
            Chaque salle dispose d'une connexion sécurisée, de vidéoprojecteurs HD et de tables sur-mesure 
            réalisées par l'entreprise Ecloz. Nos étudiants bénéficient d'un équipement nomade complet 
            (PC portables série T/P) et d'un accès aux infrastructures réseaux (baies, switchs, serveurs).
          </p>
        </div>
        </div>

        {/* Grille de points clés */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          {features.map((feature) => (
            <div key={feature.title} className="card py-5 px-4">
              <p className="font-display font-semibold text-ink-900 mb-1">
                {feature.title}
              </p>
              <p className="text-sm text-ink-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}