export default ({ env }: any) => {
  const client = env('DATABASE_CLIENT', 'postgres');

  return {
    connection: {
      client,
      connection: {
        connectionString: env('DATABASE_URL'), // Strapi préfère souvent utiliser l'URL complète
        ssl: env.bool('DATABASE_SSL', false),
      },
      useNullAsDefault: true,
      pool: { min: 0, max: 10 },
    },
  };
};