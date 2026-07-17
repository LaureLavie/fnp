import { env } from '@strapi/utils';

export default ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'postgres'),
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'fnp_strapi'),
      user: env('DATABASE_USERNAME', 'fnp_admin'),
      password: env('DATABASE_PASSWORD', 'change_me_strong_password'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});