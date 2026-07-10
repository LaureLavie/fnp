# --- Base ---
  FROM node:20-alpine AS base
  RUN apk add --no-cache libc6-compat vips-dev python3 make g++
  WORKDIR /opt/app
  
  # --- Dependencies ---
  FROM base AS deps
  COPY package.json package-lock.json ./
  RUN npm ci
  
  # --- Build ---
  FROM base AS build
  COPY --from=deps /opt/app/node_modules ./node_modules
  COPY . .
  ENV NODE_ENV=production
  RUN npm run build
  
  # --- Production ---
  FROM base AS production
  ENV NODE_ENV=production
  COPY --from=build /opt/app ./
  RUN chown -R node:node /opt/app
  USER node
  EXPOSE 1337
  CMD ["npm", "run", "start"]