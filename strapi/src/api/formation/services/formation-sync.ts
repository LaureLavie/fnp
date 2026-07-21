import type { Core } from '@strapi/strapi';

const DIGIFORMA_GRAPHQL_URL = process.env.GRAPHQL_URL_DIGIFORMA;
const DIGIFORMA_API_TOKEN = process.env.API_TOKEN_DIGIFORMA;

// Mapping explicite et contrôlé des formations à synchroniser
const DIGIFORMA_MAPPING = [
  {
    siteSlug: 'developpeur-web-full-stack',
    programId: '2694169',
    sessionId: '2568270',
  },
  {
    siteSlug: 'concepteur-developpeur-applications-ia',
    programId: '2694178',
    sessionId: '2613007',
  },
  {
    siteSlug: 'expert-en-informatique-et-systeme-d-information',
    programId: '2555063',
    sessionId: '2333521',
  }
];

const SESSION_QUERY = `
  query GetSession($sessionId: ID!) {
    trainingSession(id: $sessionId) {
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

// Définition de l'interface pour rassurer TypeScript
interface DigiformaGraphQLResponse {
  data?: {
    trainingSession?: {
      id: string;
      startDate: string | null;
      program?: {
        id: string;
        name: string;
        description?: string;
        publicRegistrationUrl?: string;
        onSale?: boolean;
      };
    };
  };
  errors?: Array<{ message: string }>;
}

function formatStartDateLabel(startDate: string | null): string {
  if (!startDate) return 'À venir';
  const date = new Date(startDate);
  if (Number.isNaN(date.getTime())) return 'À venir';
  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async syncFromDigiforma() {
    if (!DIGIFORMA_GRAPHQL_URL || !DIGIFORMA_API_TOKEN) {
      strapi.log.warn("Sync Digiforma désactivée : variables d'env manquantes.");
      return;
    }

    let syncedCount = 0;

    for (const mapping of DIGIFORMA_MAPPING) {
      try {
        const response = await fetch(DIGIFORMA_GRAPHQL_URL, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${DIGIFORMA_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: SESSION_QUERY,
            variables: { sessionId: mapping.sessionId },
          }),
        });

        if (!response.ok) {
          strapi.log.error(`Erreur API Digiforma HTTP pour ${mapping.siteSlug} : ${response.status}`);
          continue;
        }

        // C'est ici que la magie TypeScript opère : on "cast" le résultat
        const json = (await response.json()) as DigiformaGraphQLResponse;

        if (json.errors) {
          strapi.log.error(`Erreur GraphQL pour ${mapping.siteSlug} : ${JSON.stringify(json.errors)}`);
          continue;
        }

        const session = json.data?.trainingSession;
        if (!session || !session.program) {
          strapi.log.warn(`Session ou programme introuvable pour ${mapping.siteSlug}`);
          continue;
        }

        const program = session.program;

        // Requête via la syntaxe du Query Engine Strapi v4/v5
        const existing = await strapi.db.query('api::formation.formation').findOne({
          where: { slug: mapping.siteSlug },
        });

        const syncedData = {
          digiformaId: program.id,
          title: program.name,
          // Fallback au cas où l'API renvoie null sur ces champs
          description: program.description || 'Description en cours de mise à jour.',
          startDateLabel: formatStartDateLabel(session.startDate),
          link: program.publicRegistrationUrl || '#',
          lastSyncedAt: new Date(),
        };

        if (existing) {
          await strapi.db.query('api::formation.formation').update({
            where: { id: existing.id },
            data: syncedData,
          });
          strapi.log.info(`Mise à jour réussie : ${mapping.siteSlug}`);
        } else {
          await strapi.db.query('api::formation.formation').create({
            data: {
              ...syncedData,
              slug: mapping.siteSlug,
              badge: 'Nouveau',
              badgeColor: 'cyan',
              level: 'Niveau à définir',
              status: 'Inscriptions ouvertes',
              statusColor: 'cyan',
              publishedAt: new Date(), // Auto-publish
            },
          });
          strapi.log.info(`Création réussie : ${mapping.siteSlug}`);
        }

        syncedCount++;
      } catch (error) {
        strapi.log.error(`Crash inattendu lors de la synchro de ${mapping.siteSlug}:`, error);
      }
    }

    strapi.log.info(`Sync Digiforma terminée : ${syncedCount}/${DIGIFORMA_MAPPING.length} formation(s) traitée(s).`);
  },
});