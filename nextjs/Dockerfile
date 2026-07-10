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
  COPY --from=deps /app/node_modules ./node_modules
  COPY . .
  ENV NEXT_TELEMETRY_DISABLED=1
  RUN npm run build
  
  # --- Production (utilise la sortie "standalone" de Next.js) ---
  # Nécessite dans next.config.js : module.exports = { output: "standalone" }
  FROM node:20-alpine AS production
  WORKDIR /app
  ENV NODE_ENV=production
  ENV NEXT_TELEMETRY_DISABLED=1
  COPY --from=build /app/public ./public
  COPY --from=build /app/.next/standalone ./
  COPY --from=build /app/.next/static ./.next/static
  EXPOSE 3000
  CMD ["node", "server.js"]