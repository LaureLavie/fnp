"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia, type ArticleCategorie, type StrapiArticle } from "@/lib/strapi";

const PAGE_SIZE = 4;

const filters: { label: string; value: ArticleCategorie | "all" }[] = [
  { label: "Tous", value: "all" },
  { label: "Actualités", value: "Actualités" },
  { label: "Guides", value: "Guide" },
  { label: "Formations", value: "Formation" },
  { label: "Ressources", value: "Ressource" },
  { label: "Job Dating", value: "Job Dating" },
];

const categoryBadgeClass: Record<ArticleCategorie, string> = {
  "Actualités": "badge-cyan",
  "Formation": "badge-orange",
  "Guide": "badge-terracotta",
  "Ressource": "badge-cyan",
  "Job Dating": "badge-orange",
};

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(iso));
}

export default function BlogExplorer({ articles }: { articles: StrapiArticle[] }) {
  const [activeFilter, setActiveFilter] = useState<ArticleCategorie | "all">("all");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // L'article "à la une" reste affiché en tête tant qu'aucune recherche/filtre n'est actif,
  // pour ne pas le faire disparaître incohéremment pendant l'exploration.
  const articleUne = useMemo(
    () => articles.find((a) => a.aLaUne) ?? articles[0],
    [articles]
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesFilter =
        activeFilter === "all" || article.categorie === activeFilter;

      const matchesQuery =
        normalizedQuery === "" ||
        article.titre.toLowerCase().includes(normalizedQuery) ||
        article.chapo.toLowerCase().includes(normalizedQuery);

      return matchesFilter && matchesQuery;
    });
  }, [articles, activeFilter, query]);

  const isBrowsing = query.trim() !== "" || activeFilter !== "all";
  const list = isBrowsing
    ? filtered
    : filtered.filter((a) => a.documentId !== articleUne?.documentId);

  const visibleList = list.slice(0, visibleCount);
  const hasMore = visibleCount < list.length;

  return (
    <section className="section pt-0">
      <div className="container">
        {/* Recherche */}
        <div className="relative max-w-md mb-5">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-terracotta">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
            placeholder="Rechercher une ressource..."
            aria-label="Rechercher une ressource"
            className="field field-pill pl-11"
          />
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => {
                  setActiveFilter(filter.value);
                  setVisibleCount(PAGE_SIZE);
                }}
                aria-pressed={isActive}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-display font-semibold border transition-colors ${
                  isActive
                    ? "bg-indigo border-indigo text-white"
                    : "bg-surface border-ink-300 text-ink-900 hover:border-primary hover:text-primary"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
          <a
            href="#temoignages"
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-display font-semibold border border-ink-300 bg-surface text-ink-900 hover:border-accent hover:text-accent transition-colors"
          >
            Témoignages
          </a>
        </div>

        {/* Article à la une */}
        {!isBrowsing && articleUne && (
          <Link
            href={`/blog/${articleUne.slug}`}
            className="card p-0 overflow-hidden flex flex-col md:flex-row mb-12 hover:no-underline group"
          >
            <div className="relative w-full md:w-1/2 aspect-[16/10] shrink-0">
              {getStrapiMedia(articleUne.image?.url) ? (
                <Image
                  src={getStrapiMedia(articleUne.image?.url) as string}
                  alt={articleUne.image?.alternativeText || articleUne.titre}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-cyan-soft" />
              )}
              <span className="absolute top-4 left-4 badge badge-terracotta">
                À la une
              </span>
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3 text-sm">
                <span className={`badge ${categoryBadgeClass[articleUne.categorie]}`}>
                  {articleUne.categorie}
                </span>
                <span className="text-ink-500">
                  {formatDate(articleUne.datePublication)}
                </span>
              </div>
              <h2 className="mb-3 group-hover:text-primary transition-colors">
                {articleUne.titre}
              </h2>
              <p className="text-ink-700 mb-4">{articleUne.chapo}</p>
              <span className="inline-flex items-center gap-1 font-display font-semibold text-ink-900 group-hover:text-primary">
                Lire l&apos;article
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </div>
          </Link>
        )}

        {/* Liste des ressources */}
        <h2 className="mb-6">
          {isBrowsing ? "Résultats" : "Dernières Ressources"}
        </h2>

        {visibleList.length === 0 ? (
          <p className="card text-center text-ink-700">
            Aucun article ne correspond à ta recherche pour le moment.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {visibleList.map((article) => (
              <Link
                key={article.documentId}
                href={`/blog/${article.slug}`}
                className="card p-4 flex gap-4 items-start hover:no-underline group"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-md overflow-hidden shrink-0 bg-cyan-soft">
                  {getStrapiMedia(article.image?.url) && (
                    <Image
                      src={getStrapiMedia(article.image?.url) as string}
                      alt={article.image?.alternativeText || article.titre}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2 text-xs">
                    <span className={`badge ${categoryBadgeClass[article.categorie]}`}>
                      {article.categorie}
                    </span>
                    {article.tempsLecture && (
                      <span className="inline-flex items-center gap-1 text-ink-500">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {article.tempsLecture}
                      </span>
                    )}
                  </div>
                  <p className="font-display font-semibold text-ink-900 mb-1 group-hover:text-primary transition-colors">
                    {article.titre}
                  </p>
                  <p className="text-sm text-ink-700 mb-0 line-clamp-2">
                    {article.chapo}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {hasMore && (
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
              className="btn btn-outline-ink"
            >
              Charger plus d&apos;articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}