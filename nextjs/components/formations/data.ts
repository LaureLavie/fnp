export type FormationLevelTag = "bac2" | "bac3" | "bac4" | "bac5";

export type Formation = {
  slug: string;
  badge: string;
  badgeColor: "cyan" | "terracotta" | "orange";
  level: string;
  levelTags: FormationLevelTag[];
  title: string;
  description: string;
  status: "À venir" | "Programmé";
  link: string;
  statusColor: "cyan" | "orange";
  image: string;
  imageAlt: string;
};


export const formations: Formation[] = [
  {
    slug: "developpeur-web-full-stack",
    badge: "DWFS",
    badgeColor: "cyan",
    level: "Bac +2",
    levelTags: ["bac2"],
    title: "Développeur Web Full Stack",
    description:
      "Maîtrise les technologies front-end et back-end pour concevoir des applications web complètes et robustes.",
    status: "À venir",
    statusColor: "cyan",
    link: "https://fabriquenumerique.catalogueformpro.com/2/formation-continue/2516293/2026-developpeur-web",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=60",
    imageAlt: "Ordinateur portable affichant du code, formation Développeur Web Full Stack",
  },
  {
    slug: "concepteur-developpeur-applications-ia",
    badge: "CDA-IA",
    badgeColor: "terracotta",
    level: "Bac +3/4",
    levelTags: ["bac3", "bac4"],
    title: "Concepteur Développeur d'Applications",
    description:
      "Développe des solutions logicielles avancées intégrant l'intelligence artificielle pour répondre aux besoins métiers complexes.",
    status: "À venir",
    statusColor: "cyan",
    link: "https://fabriquenumerique.catalogueformpro.com/7/formation-alternance/1771778/2026-concepteur-developpeur-dapplications-specialise-intelligence-artificielle",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=60",
    imageAlt: "Développeuse consultant son smartphone et son ordinateur portable",
  },
  {
    slug: "expert-informatique-systemes-information",
    badge: "EISI",
    badgeColor: "orange",
    level: "Bac +5",
    levelTags: ["bac5"],
    title: "Expert Informatique & Systèmes d'Info",
    description:
      "Deviens un leader technique capable de piloter la transformation numérique et la sécurité des systèmes d'envergure.",
    status: "Programmé",
    statusColor: "orange",
    link: "https://fabriquenumerique.catalogueformpro.com/7/formation-alternance/1627520/2025-expert-en-informatique-et-systeme-dinformation",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=60",
    imageAlt: "Prise de notes manuscrites lors d'une session de travail",
  },
];

export const levelFilters: { label: string; tag: FormationLevelTag | "all" }[] = [
  { label: "Tous", tag: "all" },
  { label: "Bac +2", tag: "bac2" },
  { label: "Bac +3", tag: "bac3" },
  { label: "Bac +5", tag: "bac5" },
];