// Couche d'accès au CMS Strapi (Blog / Actualités / Témoignages).
// Toutes les pages "contenu vivant" passent par ici : rien n'est codé en dur,
// un admin Strapi peut créer / modifier / supprimer les entrées sans toucher au code.

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/$/, "") ||
  "http://localhost:1337";

// Durée de revalidation ISR : le contenu Strapi est "vivant" mais n'a pas besoin
// d'être temps réel à la seconde près -> 60s est un bon compromis perf / fraîcheur.
const REVALIDATE_SECONDS = 60;

export type StrapiMedia = {
  id: number;
  url: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
} | null;

export type ArticleCategorie =
  | "Actualités"
  | "Formation"
  | "Guide"
  | "Ressource"
  | "Job Dating";

export type EvenementType =
  | "Job Dating"
  | "Portes ouvertes"
  | "Webinaire"
  | "Salon"
  | "Autre";

export type TemoinType = "Alumni" | "Partenaire" | "Entreprise";

// Bloc minimal du format "Blocks" de Strapi (RTE par blocs) — suffisant pour
// afficher des paragraphes / titres / listes simples sans dépendance externe.
export type StrapiBlock = {
  type: string;
  level?: number;
  format?: string;
  children: { text?: string; type?: string; bold?: boolean; italic?: boolean }[];
};

export interface StrapiArticle {
  id: number;
  documentId: string;
  titre: string;
  slug: string;
  chapo: string;
  contenu?: StrapiBlock[];
  categorie: ArticleCategorie;
  tempsLecture?: string;
  aLaUne: boolean;
  auteur?: string;
  datePublication: string;
  image?: StrapiMedia;
}

export interface StrapiEvenement {
  id: number;
  documentId: string;
  titre: string;
  slug?: string;
  description?: string;
  dateEvenement: string;
  lieu?: string;
  typeEvenement: EvenementType;
  lienExterne?: string;
  image?: StrapiMedia;
}

export interface StrapiTemoignage {
  id: number;
  documentId: string;
  nom: string;
  role: string;
  citation: string;
  typeTemoin: TemoinType;
  photo?: StrapiMedia;
}

/** Construit une URL absolue pour un média Strapi (uploads locaux ou déjà en http). */
export function getStrapiMedia(url?: string | null): string | null {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${STRAPI_URL}${url}`;
}

async function fetchStrapi<T>(
  path: string,
  query = ""
): Promise<T | null> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/${path}${query}`, {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) {
      console.error(`Strapi (${path}) a répondu ${res.status}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (error) {
    // Le CMS peut être injoignable (build local sans Strapi lancé, panne réseau...) :
    // on ne casse jamais la page, on retombe sur un état vide géré par les composants.
    console.error(`Erreur de connexion à Strapi (${path}) :`, error);
    return null;
  }
}

/** Tous les articles publiés, triés du plus récent au plus ancien. */
export async function getArticles(): Promise<StrapiArticle[]> {
  const data = await fetchStrapi<{ data: StrapiArticle[] }>(
    "articles",
    "?populate=image&sort=datePublication:desc&pagination[pageSize]=100"
  );
  return data?.data ?? [];
}

/** Un seul article par son slug (page de détail). */
export async function getArticleBySlug(
  slug: string
): Promise<StrapiArticle | null> {
  const data = await fetchStrapi<{ data: StrapiArticle[] }>(
    "articles",
    `?populate=image&filters[slug][$eq]=${encodeURIComponent(slug)}`
  );
  return data?.data?.[0] ?? null;
}

/** Événements à venir, triés du plus proche au plus lointain. */
export async function getEvenements(): Promise<StrapiEvenement[]> {
  const now = new Date().toISOString();
  const data = await fetchStrapi<{ data: StrapiEvenement[] }>(
    "evenements",
    `?populate=image&sort=dateEvenement:asc&filters[dateEvenement][$gte]=${now}&pagination[pageSize]=20`
  );
  return data?.data ?? [];
}

/** Tous les témoignages (alumni, partenaires, entreprises). */
export async function getTemoignages(): Promise<StrapiTemoignage[]> {
  const data = await fetchStrapi<{ data: StrapiTemoignage[] }>(
    "temoignages",
    "?populate=photo&pagination[pageSize]=30"
  );
  return data?.data ?? [];
}

/** Rendu texte minimal du format "Blocks" (paragraphes, titres, listes). */
export function renderBlocksAsPlainText(blocks?: StrapiBlock[]): string {
  if (!blocks) return "";
  return blocks
    .map((block) => block.children?.map((c) => c.text ?? "").join(""))
    .join("\n\n");
}