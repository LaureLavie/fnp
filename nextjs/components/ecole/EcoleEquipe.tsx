type TeamMember = {
  name: string;
  role: string;
  borderColor: "cyan" | "terracotta" | "indigo" | "orange";
  image: string; 
};

const team: TeamMember[] = [
  { name: "Jean Michel CHAUVEAU", role: "Directeur", borderColor: "indigo", image: "/image/jeanmichel.webp" },
  { name: "Sandrine ROGER", role: "Référente Handicap", borderColor: "terracotta", image: "/image/sandrine.webp" },
  { name: "Clémentine COMPAIN", role: "Coordinatrice Pédagogique", borderColor: "cyan", image: "/image/clementine.webp" },
  { name: "Bertrand FILLION", role: "Formateur Référent", borderColor: "orange", image: "/image/bertrand.webp" },
  { name: "Oussama JOMAA", role: "Formateur référent", borderColor: "cyan", image: "/image/oussama.webp" },
  { name: "Charlotte PREVOST", role: "Chargée de relations", borderColor: "indigo", image: "/image/charlotte.webp" },
  { name: "Laure LASPALLES", role: "Chargée de Communication", borderColor: "terracotta", image: "/image/laure.webp" },
];


export default function EcoleEquipe() {
  return (
    <section id="equipe" className="section-alt section scroll-mt-16">
      <div className="container">
        <div className="text-center max-w-md mx-auto mb-8">
          <h2>L&apos;équipe à vos côtés</h2>
          <p className="mb-0">
            Des professionnels passionnés pour vous accompagner.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="card flex items-center gap-4">
              {/* Remplacement de l'initiale par l'image */}
              <div className={`w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 ${member.borderColor}`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <span>
                <span className="block font-display font-semibold text-indigo">
                  {member.name}
                </span>
                <span className="block text-sm text-ink-700">
                  {member.role}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}