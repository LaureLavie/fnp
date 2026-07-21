export default ({ env }: { env: any }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'postgres'),
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: env('DATABASE_SSL', 'false') === 'true',
    },
    useNullAsDefault: true,
    pool: {
      min: parseInt(env('DATABASE_POOL_MIN', '0'), 10),
      max: parseInt(env('DATABASE_POOL_MAX', '10'), 10)
    },
  },
});