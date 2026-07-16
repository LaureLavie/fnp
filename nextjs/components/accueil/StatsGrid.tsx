type Stat = {
  value: string;
  label: string;
  color: "cyan" | "orange" | "indigo" | "terracotta";
};

const stats: Stat[] = [
  { value: "600+", label: "Apprenants depuis 2018", color: "cyan" },
  { value: "100%", label: "Taux de réussite", color: "indigo" },
  { value: "95%", label: "Sorties positives", color: "terracotta" },
  { value: "0€", label: "Reste à charge", color: "orange" },
];

export default function StatsGrid() {
  return (
    <section className="pb-16">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="card text-center py-6 px-4"
          >
            <p
              className={`font-display font-extrabold text-3xl md:text-4xl mb-1 ${
                stat.color === "cyan" ? "text-cyan" : stat.color === "indigo" ? "text-indigo" : stat.color === "terracotta" ? "text-terracotta" : "text-orange"
              }`}
            >
              {stat.value}
            </p>
            <p className="text-sm text-ink-500 mb-0">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}