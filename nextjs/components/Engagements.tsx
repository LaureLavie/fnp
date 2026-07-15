import Image from "next/image";

const engagements = [
  {
    title: "L'inclusion au cœur",
    text: "Notre centre rassemble des talents, alternants ou apprenants en formation continue dans un écosystème dynamique et collaboratif. Nous agissons concrètement pour réduire la fracture numérique en Nouvelle-Aquitaine.",
    variant: "card-primary",
  },
  {
    title: "Numérique Responsable",
    text: "Nous explorons de nouvelles solutions pour limiter notre empreinte écologique, jusque dans le code que nous produisons.",
    variant: "card-accent",
  },
  {
    title: "Innovation Sociale",
    text: "Des méthodes pédagogiques et des outils avec une vision tournée vers l'avenir pour former les talents de demain.",
    variant: "card",
  },
] as const;

export default function Engagements() {
  return (
    <section id="engagements" className="section pt-0 scroll-mt-20">
      <div className="container">
        <h2>Nos engagements</h2>
        <p className="max-w-xl">
          Fabrique Inclusive accélère l&apos;accès aux métiers du numérique
          avec la Fabrique Numérique Paloise. Peu importe le parcours, nous
          donnons à chacun l&apos;opportunité d&apos;acquérir des
          compétences.
        </p>

        <div className="grid gap-5 mt-8">
          {engagements.map((item) => (
            <article key={item.title} className={item.variant}>
              <h3 className={item.variant === "card" ? "text-terracotta" : ""}>
                {item.title}
              </h3>
              <p className="mb-0">{item.text}</p>
            </article>
          ))}
        </div>        
        <div className="relative mt-8 rounded-lg overflow-hidden aspect-[4/3]">
          <Image
            src="/image/teamFNP.webp"
            alt="L'équipe de formateurs de la Fabrique Numérique Paloise"
            fill
            className="object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo/90 via-indigo/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-white mb-1">Une équipe à tes côtés</h3>
            <p className="text-white/90 mb-0 text-sm">
              Formateurs passionnés et pédagogues certifiés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}