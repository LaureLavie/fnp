# Guide de mise en place — fabriquenumerique.fr (environnement de travail)

Stack : **Next.js** (front) + **Strapi v5** (CMS headless) + **PostgreSQL** + **Matomo** — **tout hébergé sur le VPS OVH**, accès direct par IP (`213.32.21.79`), pas de nom de domaine ni HTTPS pour l'instant. Le vrai site en prod n'est pas touché puisque ce VPS de travail est totalement séparé.

Node 20 LTS · npm · Deux images Docker Hub séparées : `fnp-strapi` et `fnp-nextjs`.

---

## 0. Récapitulatif des accès confirmés

| Élément | Valeur |
|---|---|
| SSH | `ssh ubuntu@vps-02b5d7ab` |
| IP | `213.32.21.79` |
| OS | Ubuntu 22.04 |
| Front Next.js | `http://213.32.21.79:3000` |
| Strapi admin | `http://213.32.21.79:1337/admin` |
| Matomo | `http://213.32.21.79:8080` |
| Docker Hub | `lorlaviedevdesign/fnp-strapi` + `lorlaviedevdesign/fnp-nextjs` |

---

## 1. Structure du repo GitHub (`github.com/LaureLavie/fnp`)

```
fnp/
├── strapi/
│   └── Dockerfile
├── nextjs/
│   ├── Dockerfile      
├── docker-compose.yml         
├── .env
├── .gitignore
└── .github/workflows/deploy.yml
```

```bash
git clone https://github.com/LaureLavie/fnp.git
cd fnp
# copie les fichiers fournis dedans
git add . && git commit -m "chore: init environnement dev (docker, ci/cd)"
git push origin main
```

`.gitignore` racine :
```
node_modules/
.next/
.env
.env.*
!.env.example
strapi/.tmp/
strapi/public/uploads/
```

⚠️ **Jamais de `.env` commité.**

---

## 2. VS Code

Extensions : **Docker**, **ESLint**, **Prettier**. Ouvre `fnp/` comme dossier racine du workspace.

---

## 3. Créer les projets (si partis de zéro)

```bash
cd fnp
npx create-strapi-app@latest strapi --quickstart --no-run
# -> choisir PostgreSQL comme base de données

npx create-next-app@latest nextjs --typescript --tailwind --app --eslint
```

Dans `nextjs/next.config.js`, ajoute (indispensable pour l'image Docker de prod) :
```js
module.exports = {
  output: "standalone",
};
```

---

## 4. Dev local (Docker)

1. `.env` -> `.env` à la racine, génère les secrets Strapi :
   ```bash
   openssl rand -base64 32   # x4 pour STRAPI_APP_KEYS, puis 1x par autre secret
   ```
2. `docker compose up --build`
3. Accès : Next.js -> http://localhost:3000 · Strapi admin -> http://localhost:1337/admin

---

## 5. DNS chez OVH

Aucun enregistrement DNS nécessaire : on travaille directement sur l'IP `213.32.21.79`. 

---

## 6. Provisionnement du VPS

```bash
ssh ubuntu@213.32.21.79
```

### Docker
```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker ubuntu
# se déconnecter/reconnecter pour appliquer le groupe
sudo apt update && sudo apt install -y docker-compose-plugin
```

### Dossier de déploiement
```bash
sudo mkdir -p /fnp && sudo chown ubuntu:ubuntu /fnp
```

### Clé SSH dédiée au déploiement (depuis ta machine, pas sur le VPS)
```bash
ssh-keygen -t ed25519 -f fnp_deploy_key -N ""
ssh-copy-id -i fnp_deploy_key.pub ubuntu@213.32.21.79
```
La clé **privée** (`fnp_deploy_key`) ira dans le secret GitHub `VPS_SSH_KEY` (§8).

### Copier les fichiers de config sur le VPS
Depuis ta machine, à la racine du repo :
```bash
scp docker-compose.prod.yml .env ubuntu@213.32.21.79:/fnp/
```
⚠️ Le `.env` envoyé ici doit contenir les **vraies valeurs de staging** (différentes de ton `.env` local), avec en plus :
```
NEXT_PUBLIC_STRAPI_URL=http://213.32.21.79:1337
```

### Ouvrir les ports nécessaires (pare-feu du VPS, si actif)
```bash
sudo ufw allow 3000/tcp   # Next.js
sudo ufw allow 1337/tcp   # Strapi admin
sudo ufw allow 8080/tcp   # Matomo
```

### Lancer tous les services
```bash
cd /fnp
docker compose -f docker-compose.prod.yml up -d
```

Accès direct ensuite :
- Next.js → `http://213.32.21.79:3000`
- Strapi admin → `http://213.32.21.79:1337/admin`
- Matomo → `http://213.32.21.79:8080`

---

## 7. Premier déploiement manuel (avant que le CI/CD prenne le relais)

Comme les images `fnp-strapi`/`fnp-nextjs` n'existent pas encore sur Docker Hub, le plus simple est de pousser ton code sur `main` : le workflow GitHub Actions s'occupe du build + push + déploiement automatiquement (§8).

---

## 8. CI/CD — GitHub Actions

Dans GitHub, **Settings -> Secrets and variables -> Actions** :

| Secret | Valeur |
|---|---|
| `DOCKERHUB_USERNAME` | `lorlaviedevdesign` |
| `DOCKERHUB_TOKEN` | l'Access Token créé en §0 |
| `VPS_HOST` | `213.32.21.79` |
| `VPS_USER` | `ubuntu` |
| `VPS_SSH_KEY` | contenu de `fnp_deploy_key` (clé **privée**) |

Le workflow `.github/workflows/deploy.yml` :
1. détecte si `strapi/` et/ou `nextjs/` ont changé
2. build + push uniquement l'image concernée sur Docker Hub (`fnp-strapi` et/ou `fnp-nextjs`)
3. se connecte en SSH au VPS et relance `docker compose -f docker-compose.yml pull && up -d`

À chaque `git push origin main`, ton staging se met à jour automatiquement.

---
