import type { ProfilFormation } from "./quiz-data";

export type ScoreMap = Record<ProfilFormation, number>;

export type QuizOutcome =
  | { type: "single"; profil: ProfilFormation }
  | { type: "tie2"; profils: [ProfilFormation, ProfilFormation] }
  | { type: "tie3" };

// Ordre fixe utilisé pour un affichage cohérent en cas d'égalité,
// quel que soit l'ordre dans lequel les réponses ont été données.
const PROFIL_ORDER: ProfilFormation[] = ["DWFS", "CDA-IA", "EISI"];

/** 1 point par réponse dans le profil correspondant. Simple et transparent. */
export function computeScores(profils: ProfilFormation[]): ScoreMap {
  const scores: ScoreMap = { DWFS: 0, "CDA-IA": 0, EISI: 0 };
  for (const profil of profils) {
    scores[profil] += 1;
  }
  return scores;
}

/**
 * Détermine le résultat du quiz à partir des scores :
 * - si les 3 profils sont proches (écart max/min <= 1 point) : on ne tranche
 *   pas artificiellement, on renvoie un message invitant à échanger avec
 *   un conseiller ("tie3").
 * - sinon, si les deux meilleurs scores sont strictement égaux : écran
 *   "deux voies s'offrent à toi" ("tie2").
 * - sinon : un profil se détache clairement ("single").
 */
export function resolveOutcome(scores: ScoreMap): QuizOutcome {
  const entries = PROFIL_ORDER.map((profil) => [profil, scores[profil]] as const).sort(
    (a, b) => b[1] - a[1]
  );

  const [first, , third] = entries;
  const maxScore = first[1];
  const minScore = third[1];

  if (maxScore - minScore <= 1) {
    return { type: "tie3" };
  }

  const tiedProfils = entries.filter(([, score]) => score === maxScore).map(([profil]) => profil);

  if (tiedProfils.length >= 2) {
    const [a, b] = PROFIL_ORDER.filter((p) => tiedProfils.includes(p));
    return { type: "tie2", profils: [a, b] };
  }

  return { type: "single", profil: first[0] };
}