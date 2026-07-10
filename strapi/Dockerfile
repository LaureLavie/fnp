# --- Base ---
  FROM node:20-alpine AS base
  RUN apk add --no-cache libc6-compat vips-dev python3 make g++
  WORKDIR /opt/app
  
  # --- Dependencies (Développement & Build) ---
  FROM base AS deps
  COPY package.json package-lock.json ./
  RUN npm ci
  
  # --- Build de l'application ---
  FROM base AS build
  COPY --from=deps /opt/app/node_modules ./node_modules
  COPY . .
  ENV NODE_ENV=production
  RUN npm run build
  
  # --- Production Env (Juste ce qui est nécessaire pour tourner) ---
  FROM base AS production
  ENV NODE_ENV=production
  
  # On récupère le build de l'admin et du serveur
  COPY --from=build /opt/app/package.json /opt/app/package-lock.json ./
  COPY --from=build /opt/app/dist ./dist
  COPY --from=build /opt/app/public ./public
  
  # On installe UNIQUEMENT les dépendances de production (ça inclut 'pg' sans les outils de dev)
  RUN npm ci --only=production
  
  RUN chown -R node:node /opt/app
  USER node
  EXPOSE 1337
  CMD ["npm", "run", "start"]