import type { ProfilFormation } from "@/lib/quiz-data";

export type ResultContent = {
  badge: string;
  titre: string;
  texte: string;
  preuve: string;
  ctaLabel: string;
  ctaHref: string;
};

// Liens réels vers les fiches formation (mêmes liens que components/formations/data.ts)
export const resultsContent: Record<ProfilFormation, ResultContent> = {
  DWFS: {
    badge: "Ton profil",
    titre: "Tu es fait pour le Développement Web !",
    texte:
      "Tu aimes construire du concret, apprendre en faisant, et voir tes créations prendre vie. Le Développeur Web Full Stack est fait pour toi : une formation Bac+2 qui t'apprend à concevoir des sites et applications complets, du premier clic au dernier déploiement.",
    preuve:
      "Cette formation a déjà permis à des dizaines de profils comme toi de décrocher leur premier poste en alternance.",
    ctaLabel: "Découvrir la formation Développeur Web",
    ctaHref:
      "https://fabriquenumerique.catalogueformpro.com/2/formation-continue/2516293/2026-developpeur-web",
  },
  "CDA-IA": {
    badge: "Ton profil",
    titre: "Tu es fait pour le Concepteur Développeur d'Applications (IA) !",
    texte:
      "Tu aimes creuser en profondeur, comprendre la logique derrière les choses et repousser les limites du possible avec l'intelligence artificielle. Le CDA spécialisé IA (Bac+3/4) va t'emmener vers des projets ambitieux et des compétences très recherchées.",
    preuve: "95% de nos apprenants obtiennent leur certification.",
    ctaLabel: "Découvrir la formation CDA IA",
    ctaHref:
      "https://fabriquenumerique.catalogueformpro.com/7/formation-alternance/1771778/2026-concepteur-developpeur-dapplications-specialise-intelligence-artificielle",
  },
  EISI: {
    badge: "Ton profil",
    titre: "Tu es fait pour l'Expert Informatique & Systèmes d'Information !",
    texte:
      "Tu vois grand : tu aimes piloter, connecter les équipes et donner du sens à la technique. L'EISI (Bac+5, 21 mois) te prépare à devenir architecte ou manager technique, avec une vision globale des enjeux numériques.",
    preuve:
      "9,3/10 de satisfaction pour cette formation, la plus avancée de la Fabrique.",
    ctaLabel: "Découvrir la formation EISI",
    ctaHref:
      "https://fabriquenumerique.catalogueformpro.com/7/formation-alternance/1627520/2025-expert-en-informatique-et-systeme-dinformation",
  },
};

export const tie3Content: ResultContent = {
  badge: "Ton profil",
  titre: "Ton profil est riche et polyvalent !",
  texte:
    "Tes réponses sont partagées entre plusieurs univers : c'est plutôt une bonne nouvelle, ça veut dire que tu as plusieurs portes d'entrée possibles à la Fabrique. Le mieux, c'est d'en parler directement avec notre équipe pour affiner ton choix ensemble.",
  preuve:
    "Nos conseillers reçoivent chaque candidat individuellement pour trouver la formation la plus adaptée à son profil.",
  ctaLabel: "Voir toutes nos formations",
  ctaHref: "/formations",
};

export type Tie2Content = ResultContent & {
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

function formationName(profil: ProfilFormation){
  switch (profil) {
    case "DWFS":
      return "le Développement Web";
    case "CDA-IA":
      return "le CDA spécialisé IA";
    case "EISI":
      return "l'EISI";
  }
}

export function getTie2Content(a: ProfilFormation, b: ProfilFormation): Tie2Content {
  const contentA = resultsContent[a];
  const contentB = resultsContent[b];
  return {
    badge: "Ton profil",
    titre: "Deux voies s'offrent à toi !",
    texte: `Ton profil est à la croisée entre ${formationName(a)} et ${formationName(
      b
    )}. C'est une bonne nouvelle : ça veut dire que tu as plusieurs portes d'entrée possibles. On t'en dit plus sur les deux, ou tu peux échanger directement avec notre équipe pour affiner ton choix.`,
    preuve: `${contentA.preuve} ${contentB.preuve}`,
    ctaLabel: `Découvrir ${formationName(a)}`,
    ctaHref: contentA.ctaHref,
    secondaryCtaLabel: `Découvrir ${formationName(b)}`,
    secondaryCtaHref: contentB.ctaHref,
  };
}