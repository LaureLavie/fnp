"use client";

import { useMemo, useState } from "react";
import { levelFilters, type FormationLevelTag } from "./data";
import FormationCard, { type Formation } from "./FormationCard";

export default function FormationsExplorer({
  formations,
}: {
  formations: Formation[];
}) {
  const [activeFilter, setActiveFilter] = useState<FormationLevelTag | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return formations.filter((formation) => {
      const matchesQuery =
        normalizedQuery === "" ||
        formation.title.toLowerCase().includes(normalizedQuery) ||
        formation.badge.toLowerCase().includes(normalizedQuery);

      return matchesQuery;
    });
  }, [formations, query]);

  return (
    <section className="section mt-5 pt-0 pb-10">
      <div className="container">
        <p className="font-display font-semibold text-terracotta text-sm mb-3">
          Filtrer par niveau :
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {levelFilters.map((filter) => {
            const isActive = activeFilter === filter.tag;
            return (
              <button
                key={filter.tag}
                type="button"
                onClick={() => setActiveFilter(filter.tag)}
                aria-pressed={isActive}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-display font-semibold border transition-colors ${
                  isActive
                    ? "bg-orange border-orange text-ink-900"
                    : "bg-surface border-ink-300 text-ink-900 hover:border-primary hover:text-primary"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="relative max-w-md mb-8">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-terracotta">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une formation..."
            aria-label="Rechercher une formation"
            className="field field-pill pl-11"
          />
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((formation) => (
              <FormationCard key={formation.slug} formation={formation} />
            ))}
          </div>
        ) : (
          <p className="card text-center text-ink-700">
            Aucune formation ne correspond à ce filtre pour le moment.
          </p>
        )}
      </div>
    </section>
  );
}