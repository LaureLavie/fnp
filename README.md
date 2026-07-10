# Guide de mise en place — fabriquenumerique.fr (environnement de travail)

Stack : **Next.js** (front) + **Strapi v5** (CMS headless) + **PostgreSQL** + **Matomo** — **tout hébergé sur le VPS OVH**, sur un sous-domaine `dev.fabriquenumerique.fr` pour ne pas toucher au site en prod.

Node 20 LTS · npm · Deux images Docker Hub séparées : `fnp-strapi` et `fnp-nextjs`.

---

## 0. Récapitulatif des accès confirmés

| Élément | Valeur |
|---|---|
| SSH | `ssh ubuntu@vps-02b5d7ab.vps.ovh.net` |
| IP | `213.32.21.79` |
| OS | Ubuntu 22.04 |
| Sous-domaine de travail | `dev.fabriquenumerique.fr` |
| CMS (staging) | `cms.dev.fabriquenumerique.fr` |
| Stats (staging) | `stats.dev.fabriquenumerique.fr` |
| Docker Hub | `lorlaviedevdesign/fnp-strapi` + `lorlaviedevdesign/fnp-nextjs` |

Ce qu'il te reste à faire de ton côté avant qu'on aille plus loin :
- [ ] Créer un **Access Token** Docker Hub (Account Settings -> Security) — pas ton mot de passe
- [ ] Générer une **clé SSH dédiée au déploiement** (voir §6) et l'ajouter aux `authorized_keys` de `ubuntu@` sur le VPS
- [ ] Créer les 3 enregistrements DNS chez OVH (voir §5)

---

## 1. Structure du repo GitHub (`github.com/LaureLavie/fnp`)

```
fnp/
├── strapi/
│   └── Dockerfile
├── nextjs/
│   ├── Dockerfile          # build de prod (image standalone)
│   └── Dockerfile.dev      # hot-reload local
├── nginx/conf.d/fnp.conf
├── docker-compose.yml          # dev local
├── docker-compose.prod.yml     # staging sur le VPS
├── .env.example
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

1. `.env.example` -> `.env` à la racine, génère les secrets Strapi :
   ```bash
   openssl rand -base64 32   # x4 pour STRAPI_APP_KEYS, puis 1x par autre secret
   ```
2. `docker compose up --build`
3. Accès : Next.js -> http://localhost:3000 · Strapi admin -> http://localhost:1337/admin

---

## 5. DNS chez OVH

Manager OVH -> domaine `fabriquenumerique.fr` -> zone DNS -> ajoute 3 enregistrements **A** :

| Sous-domaine | Type | Cible |
|---|---|---|
| `dev` | A | `213.32.21.79` |
| `cms.dev` | A | `213.32.21.79` |
| `stats.dev` | A | `213.32.21.79` |

(propagation : quelques minutes à quelques heures)

---

## 6. Provisionnement du VPS

```bash
ssh ubuntu@vps-02b5d7ab.vps.ovh.net
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
sudo mkdir -p /opt/fnp && sudo chown ubuntu:ubuntu /opt/fnp
```

### Clé SSH dédiée au déploiement (depuis ta machine, pas sur le VPS)
```bash
ssh-keygen -t ed25519 -f fnp_deploy_key -N ""
ssh-copy-id -i fnp_deploy_key.pub ubuntu@vps-02b5d7ab.vps.ovh.net
```
La clé **privée** (`fnp_deploy_key`) ira dans le secret GitHub `VPS_SSH_KEY` (§8).

### Copier les fichiers de config sur le VPS
Depuis ta machine, à la racine du repo :
```bash
scp docker-compose.prod.yml .env ubuntu@vps-02b5d7ab.vps.ovh.net:/opt/fnp/
scp -r nginx ubuntu@vps-02b5d7ab.vps.ovh.net:/opt/fnp/
```
⚠️ Le `.env` envoyé ici doit contenir les **vraies valeurs de staging** (différentes de ton `.env` local), avec en plus :
```
NEXT_PUBLIC_STRAPI_URL=https://cms.dev.fabriquenumerique.fr
```

### Certificats SSL (première fois, une fois les DNS propagés)
```bash
cd /opt/fnp
mkdir -p certbot/conf certbot/www
docker compose -f docker-compose.prod.yml up -d nginx
docker run --rm -v /opt/fnp/certbot/conf:/etc/letsencrypt \
  -v /opt/fnp/certbot/www:/var/www/certbot \
  certbot/certbot certonly --webroot -w /var/www/certbot \
  -d dev.fabriquenumerique.fr \
  -d cms.dev.fabriquenumerique.fr \
  -d stats.dev.fabriquenumerique.fr
docker compose -f docker-compose.prod.yml restart nginx
```

### Lancer tous les services
```bash
docker compose -f docker-compose.prod.yml up -d
```

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
3. se connecte en SSH au VPS et relance `docker compose -f docker-compose.prod.yml pull && up -d`

À chaque `git push origin main`, ton staging se met à jour automatiquement.

---

## 9. Prochaines étapes

1. Modéliser les **content-types Strapi** (Programme DWWM/CDA IA/EISI, Article, Témoignage, Page)
2. Configurer les rôles Strapi ("Éditeur blog" / "Administrateur")
3. Brancher le Next.js sur l'API Strapi via `NEXT_PUBLIC_STRAPI_URL`
4. Reprendre les maquettes Figma (charte : Indigo #1F1B43, Cyan #4EA3FF, Terracotta #BF5F2D, Montserrat/Kodchasan)
5. Une fois validé sur `dev.fabriquenumerique.fr`, on planifiera la bascule vers le vrai domaine