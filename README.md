# Hono API en Cloudflare Workers

Endpoint sencillo con [Hono](https://hono.dev/docs/):

- `GET /` -> `Hello Hono!`
- `GET /api/hello` -> JSON

## Local
```bash
npm install
npm run dev
```

## Despliegue manual con API Token (sin usuario/contraseña)
1. Cloudflare Dashboard > My Profile > API Tokens > Create Token > plantilla **Edit Cloudflare Workers**.
2. Copia también tu **Account ID** (Workers & Pages).
```bash
export CLOUDFLARE_API_TOKEN=xxxxx
export CLOUDFLARE_ACCOUNT_ID=xxxxx
npx wrangler deploy
```

## GitLab CI/CD
1. Sube este repo a GitLab.
2. Settings > CI/CD > Variables: crea `CLOUDFLARE_API_TOKEN` (Masked) y `CLOUDFLARE_ACCOUNT_ID`.
3. Cada push a la rama principal ejecuta el job `deploy_cloudflare` (`.gitlab-ci.yml`).

## Verificación
Tras el despliegue, prueba el endpoint:
```bash
curl https://hono-api.<tu-subdominio>.workers.dev/api/hello
```
