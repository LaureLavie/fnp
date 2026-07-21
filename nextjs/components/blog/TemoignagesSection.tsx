import Image from "next/image";
import { getStrapiMedia, type StrapiTemoignage } from "@/lib/strapi";

export default function TemoignagesSection({
  temoignages,
}: {
  temoignages: StrapiTemoignage[];
}) {
  return (
    <section id="temoignages" className="bg-indigo py-16 scroll-mt-16">
      <div className="container">
        <span className="badge badge-orange mb-4">Ils en parlent</span>
        <h2 className="text-white mb-2">Paroles d&apos;Alumni</h2>
        <p className="text-white/80 max-w-lg mb-10">
          Ils ont transformé leur carrière avec nous.
        </p>

        {temoignages.length === 0 ? (
          <p className="text-white/70">
            Les premiers témoignages arrivent bientôt.
          </p>
        ) : (
          <div className="flex gap-5 overflow-x-auto pb-4 -mx-1 px-1 snap-x snap-mandatory">
            {temoignages.map((temoin) => (
              <figure
                key={temoin.documentId}
                className="snap-start shrink-0 w-[280px] sm:w-[320px] bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-cyan-soft border-2 border-cyan">
                    {getStrapiMedia(temoin.photo?.url) && (
                      <Image
                        src={getStrapiMedia(temoin.photo?.url) as string}
                        alt={temoin.photo?.alternativeText || temoin.nom}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <figcaption>
                    <span className="block font-display font-semibold text-white leading-tight">
                      {temoin.nom}
                    </span>
                    <span className="block text-sm text-white/70">
                      {temoin.role}
                    </span>
                  </figcaption>
                </div>

                <span className="text-cyan text-3xl leading-none font-display mb-2">
                  &ldquo;
                </span>
                <blockquote className="text-white/90 text-sm leading-relaxed mb-0">
                  {temoin.citation}
                </blockquote>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}