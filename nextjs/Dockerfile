# --- Base ---
  FROM node:20-alpine AS base
  RUN apk add --no-cache libc6-compat
  WORKDIR /app
  
  # --- Dependencies ---
  FROM base AS deps
  COPY package.json package-lock.json ./
  RUN npm ci
  
  # --- Build ---
  FROM base AS build
  # Reçue depuis --build-arg (CI) : nécessaire ici car Next.js grave les
  # variables NEXT_PUBLIC_* dans le bundle au moment du build, pas au runtime.
  ARG NEXT_PUBLIC_STRAPI_URL
  ENV NEXT_PUBLIC_STRAPI_URL=$NEXT_PUBLIC_STRAPI_URL
  COPY --from=deps /app/node_modules ./node_modules
  COPY . .
  RUN npm run build
  
  # --- Production (image finale légère grâce à output: "standalone") ---
  FROM base AS production
  ENV NODE_ENV=production
  COPY --from=build /app/public ./public
  COPY --from=build /app/.next/standalone ./
  COPY --from=build /app/.next/static ./.next/static
  
  EXPOSE 3000
  CMD ["node", "server.js"]