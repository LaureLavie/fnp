const hours = [
  { days: "Lundi - Vendredi", value: "08:30 - 16:30" },
  { days: "Samedi - Dimanche", value: "Fermé" },
];

export default function ContactHours() {
  return (
    <section className="section pt-0 pb-10">
      <div className="container">
        <div className="bg-indigo rounded-lg p-6 md:p-8 text-white">
          <h3 className="text-white mb-4">Horaires d&apos;ouverture</h3>

          <ul className="flex flex-col list-none p-0 m-0 divide-y divide-white/10">
            {hours.map((row) => (
              <li
                key={row.days}
                className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
              >
                <span className="text-white/80">{row.days}</span>
                <span className="font-display font-semibold text-white">
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}