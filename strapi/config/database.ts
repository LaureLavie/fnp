module.exports = ({ env }: { env: (key: string, defaultValue?: any) => any }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'postgres'),
      port: Number(env('DATABASE_PORT', 5432)),
      database: env('DATABASE_NAME', 'fnp_strapi'),
      user: env('DATABASE_USERNAME', 'fnp_admin'),
      password: env('DATABASE_PASSWORD', 'change_me_strong_password'),
      ssl: false,
    },
    useNullAsDefault: true,
  },
});