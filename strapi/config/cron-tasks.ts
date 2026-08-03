export default {
  syncDigiforma: {
    task: async ({ strapi }: { strapi: any }) => {
      strapi.log.info('Démarrage de la synchro Digiforma (cron)...');
      await strapi
        .service('api::formation.formation-sync')
        .syncFromDigiforma();
    },
    options: {
      rule: '0 */6 * * *', // toutes les 6h
    },
  },
};