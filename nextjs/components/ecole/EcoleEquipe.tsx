type TeamMember = {
  name: string;
  role: string;
  accent: "cyan" | "terracotta" | "indigo" | "orange";
};

// TODO : ajouter la nouvelle Chargée de Relations Entreprises et Insertion
// dès que son nom et sa photo seront confirmés.
const team: TeamMember[] = [
  { name: "Jean Michel CHAUVEAU", role: "Directeur", accent: "indigo" },
  { name: "Sandrine ROGER", role: "Référente Handicap", accent: "terracotta" },
  { name: "Clémentine COMPAIN", role: "Coordinatrice Pédagogique", accent: "cyan" },
  { name: "Bertrand FILLION", role: "Formateur Référent", accent: "orange" },
  { name: "Oussama JOMAA", role: "Formateur référent", accent: "cyan" },
  { name: "Charlotte PREVOST", role: "Chargée de relations", accent: "indigo" },
  { name: "Laure LASPALLES", role: "Chargée de Communication", accent: "terracotta" },
];

const accentClass = {
  cyan: "bg-cyan-soft text-indigo",
  terracotta: "bg-terracotta-soft text-terracotta",
  indigo: "bg-indigo text-white",
  orange: "bg-orange-soft text-orange",
} as const;

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

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
              <span
                className={`flex items-center justify-center w-14 h-14 rounded-full font-display font-bold shrink-0 ${accentClass[member.accent]}`}
              >
                {getInitials(member.name)}
              </span>
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