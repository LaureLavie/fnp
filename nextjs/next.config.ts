import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Autorise next/image à charger les médias hébergés par Strapi
    // (uploads : couvertures d'articles, photos de témoignages, visuels d'événements).
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "213.32.21.79",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;