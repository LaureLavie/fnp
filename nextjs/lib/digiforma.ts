const DIGIFORMA_GRAPHQL_URL =
  process.env.GRAPHQL_URL_DIGIFORMA;

const DIGIFORMA_API_TOKEN =
  process.env.API_TOKEN_DIGIFORMA;


const REVALIDATE_SECONDS = 60;


export type FormationLevelTag =
  | "bac2"
  | "bac3"
  | "bac4"
  | "bac5";


export interface Formation {
  slug: string;
  id: number | string;
  title: string;
  description: string;
  startDateLabel: string;
  link: string;
  badge: string;
  badgeColor: "cyan" | "terracotta" | "orange";
  level: string;
  levelTags: FormationLevelTag[];
  status: string;
  statusColor: "cyan" | "orange";
}


// "link" = lien de secours vers la fiche formation sur le catalogue public.
// Utilisé si Digiforma ne renvoie pas de publicRegistrationUrl (valeur vide
// ou absente) : on préfère toujours afficher un lien fonctionnel plutôt
// qu'un "#" qui ne mène nulle part.
const DIGIFORMA_MAPPING = [
  {
    siteSlug: "developpeur-web-full-stack",
    sessionId: "2568270",
    badge: "DWFS",
    badgeColor: "cyan",
    level: "Bac +2",
    levelTags: ["bac2"],
    link: "https://fabriquenumerique.catalogueformpro.com/2/formation-continue/2516293/2026-developpeur-web",
  },
  {
    siteSlug: "concepteur-developpeur-applications-ia",
    sessionId: "2613007",
    badge: "CDA-IA",
    badgeColor: "terracotta",
    level: "Bac +3/4",
    levelTags: ["bac3", "bac4"],
    link: "https://fabriquenumerique.catalogueformpro.com/7/formation-alternance/1771778/2026-concepteur-developpeur-dapplications-specialise-intelligence-artificielle",
  },
  {
    siteSlug: "expert-en-informatique-et-systeme-d-information",
    sessionId: "2333521",
    badge: "EISI",
    badgeColor: "orange",
    level: "Bac +5",
    levelTags: ["bac5"],
    link: "https://fabriquenumerique.catalogueformpro.com/7/formation-alternance/1627520/2025-expert-en-informatique-et-systeme-dinformation",
  },
] as const;


const SESSION_QUERY = `
query GetSession($sessionId: ID!) {
  trainingSession(id:$sessionId) {
    id
    startDate
    program {
      id
      name
      description
      publicRegistrationUrl
      onSale
    }
  }
}
`;


function formatStartDateLabel(date: string | null) {

  if (!date) {
    return "À venir";
  }

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return "À venir";
  }

  return parsed.toLocaleDateString(
    "fr-FR",
    {
      day: "2-digit",
      month: "long",
      year: "numeric"
    }
  );
}


export async function getFormations(): Promise<Formation[]> {

  if (!DIGIFORMA_GRAPHQL_URL || !DIGIFORMA_API_TOKEN) {

    console.error(
      "Variables Digiforma manquantes"
    );

    return [];
  }


  const formations = await Promise.all(

    DIGIFORMA_MAPPING.map(async (mapping) => {

      try {

        const response = await fetch(
          DIGIFORMA_GRAPHQL_URL,
          {
            method: "POST",

            headers: {
              Authorization:
                `Bearer ${DIGIFORMA_API_TOKEN}`,
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              query: SESSION_QUERY,
              variables: {
                sessionId: mapping.sessionId
              }
            }),

            next: {
              revalidate: REVALIDATE_SECONDS
            }
          }
        );


        const json = await response.json();


        const session =
          json.data?.trainingSession;


        if (!session?.program) {
          return null;
        }


        const program = session.program;


        return {

          slug: mapping.siteSlug,
          id: session.id,
          title: program.name,
          description:
            program.description.slice(0, 300) + '…' ||
            "Description en cours de mise à jour.",
          startDateLabel:
            formatStartDateLabel(
              session.startDate
            ),
          // Priorité au lien renvoyé par Digiforma ; sinon, on retombe
          // sur le lien catalogue défini dans le mapping ci-dessus.
          link:
            program.publicRegistrationUrl ||
            mapping.link,
          badge: mapping.badge,
          badgeColor: mapping.badgeColor,
          level: mapping.level,
          levelTags: [
            ...mapping.levelTags
          ],
          status:
            program.onSale
              ? "Inscriptions ouvertes"
              : "Formation démarrée",
          statusColor:
            program.onSale
              ? "cyan"
              : "orange"
        };

      } catch (error) {

        console.error(
          "Erreur Digiforma",
          mapping.siteSlug,
          error
        );

        return null;
      }

    })
  );


  return formations.filter(
    Boolean
  ) as Formation[];

}