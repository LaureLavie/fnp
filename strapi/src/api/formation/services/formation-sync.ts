import type { Core } from '@strapi/strapi';

const DIGIFORMA_GRAPHQL_URL = process.env.GRAPHQL_URL_DIGIFORMA;
const DIGIFORMA_API_TOKEN = process.env.API_TOKEN_DIGIFORMA;

// Mapping explicite et contrôlé des formations à synchroniser.
// badge / badgeColor / level / levelTags : Digiforma n'a pas cette notion,
// on les définit donc ici, en dur, une fois pour toutes par formation.
// Ils sont réécrits à chaque synchro (create ET update) pour ne jamais
// se désynchroniser d'une modification manuelle oubliée dans Strapi.
const DIGIFORMA_MAPPING = [
  {
    siteSlug: 'developpeur-web-full-stack',
    programId: '2694169',
    sessionId: '2568270',
    badge: 'DWFS',
    badgeColor: 'cyan' as const,
    level: 'Bac +2',
    levelTags: ['bac2'],
  },
  {
    siteSlug: 'concepteur-developpeur-applications-ia',
    programId: '2694178',
    sessionId: '2613007',
    badge: 'CDA-IA',
    badgeColor: 'terracotta' as const,
    level: 'Bac +3/4',
    levelTags: ['bac3', 'bac4'],
  },
  {
    siteSlug: 'expert-en-informatique-et-systeme-d-information',
    programId: '2555063',
    sessionId: '2333521',
    badge: 'EISI',
    badgeColor: 'orange' as const,
    level: 'Bac +5',
    levelTags: ['bac5'],
  },
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

        const existing = await strapi.db.query('api::formation.formation').findOne({
          where: { slug: mapping.siteSlug },
        });

        // Statut d'inscription dérivé du champ "onSale" de Digiforma :
        // si la session n'est plus en vente, on le reflète sur le site
        // au lieu de laisser un statut "Inscriptions ouvertes" périmé.
        const status = program.onSale === false ? 'Complet' : 'Inscriptions ouvertes';
        const statusColor: 'cyan' | 'orange' = program.onSale === false ? 'orange' : 'cyan';

        const syncedData = {
          digiformaId: program.id,
          title: program.name,
          description: program.description || 'Description en cours de mise à jour.',
          startDateLabel: formatStartDateLabel(session.startDate),
          link: program.publicRegistrationUrl || '#',
          // Champs codés en dur côté mapping, désormais synchronisés à chaque passage :
          badge: mapping.badge,
          badgeColor: mapping.badgeColor,
          level: mapping.level,
          levelTags: mapping.levelTags,
          status,
          statusColor,
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