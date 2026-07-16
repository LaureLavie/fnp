const infoCards = [
  {
    label: "Téléphone",
    value: "09 72 65 78 93",
    href: "tel:+33972657893",
    accent: "cyan",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.5a2 2 0 0 1 2.1-.4c1 .3 2 .5 3 .7a2 2 0 0 1 1.7 2Z" />
      </svg>
    ),
  },
  {
    label: "E-mail",
    value: "contact@fabriquenumerique.fr",
    href: "mailto:contact@fabriquenumerique.fr",
    accent: "terracotta",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 6 10 7 10-7" />
      </svg>
    ),
  },
] as const;

export default function ContactInfoCards() {
  return (
    <section className="section pt-0 pb-10">
      <div className="container flex flex-col gap-4">
        {infoCards.map((info) => (
          <a
            key={info.label}
            href={info.href}
            className={`card flex items-center gap-4 border-l-4 ${
              info.accent === "cyan" ? "border-l-cyan" : "border-l-terracotta"
            } hover:no-underline`}
          >
            <span
              className={`flex items-center justify-center w-11 h-11 rounded-full shrink-0 ${
                info.accent === "cyan"
                  ? "bg-cyan-soft text-indigo"
                  : "bg-terracotta-soft text-terracotta"
              }`}
            >
              {info.icon}
            </span>
            <span>
              <span className="block font-display font-semibold text-xs uppercase tracking-wide text-ink-500">
                {info.label}
              </span>
              <span className="block text-lg font-display font-semibold text-ink-900">
                {info.value}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}