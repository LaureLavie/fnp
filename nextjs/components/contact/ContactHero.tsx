import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="section pb-10">
      <div className="container">
        <span className="badge badge-cyan mb-4">Contact</span>

        <h1 className="text-3xl md:text-4xl max-w-2xl">
          Parlons de <span className="text-terracotta">TON</span> avenir{" "}
          <span className="text-cyan">numérique</span>
        </h1>

        <p className="text-lg max-w-xl mt-4">
          Une question sur nos formations, une envie de collaborer ou besoin
          de renseignements ? Notre équipe vous répond avec bienveillance et
          réactivité.
        </p>

        {/* Visuel avec accent décoratif, cohérent avec le traitement des
            images de la page d'accueil (Engagements.tsx) */}
        <div className="relative mt-8 max-w-xl">
          <div
            aria-hidden
            className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-terracotta/20 -z-10"
          />
          <div className="relative rounded-lg overflow-hidden aspect-[16/10] shadow-md">
            <Image
              src="/image/teamFNP.webp"
              alt="Une conseillère de la Fabrique Numérique Paloise accueille un visiteur"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}