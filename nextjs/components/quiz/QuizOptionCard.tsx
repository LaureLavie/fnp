"use client";

import type { ProfilFormation } from "@/lib/quiz-data";

// Bordure supérieure colorée par profil, cohérente avec les badges des
// formations (data.ts) : DWFS = cyan, CDA-IA = terracotta, EISI = orange.
const borderClass: Record<ProfilFormation, string> = {
  DWFS: "border-t-cyan",
  "CDA-IA": "border-t-terracotta",
  EISI: "border-t-orange",
};

export default function QuizOptionCard({
  label,
  profil,
  onSelect,
}: {
  label: string;
  profil: ProfilFormation;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`card w-full text-left border-t-4 ${borderClass[profil]} flex items-center justify-between gap-4 hover:shadow-md transition-shadow group`}
    >
      <span className="font-body text-ink-900 text-base md:text-lg">{label}</span>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0 text-ink-300 group-hover:text-primary transition-colors"
        aria-hidden="true"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  );
}