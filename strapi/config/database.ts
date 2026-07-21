export default ({ env }: { env: any }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'postgres'),
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    useNullAsDefault: true,
    pool: { min: 0, max: 10 },
  },
});