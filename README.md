# Thande Roy — Portfolio

Personal portfolio website, rebuilt with [Qwik City](https://qwik.dev/) as a
static site (SSG). Deployed as an nginx container on **the homelab host**.

## Develop

```bash
npm install
npm start          # Vite dev server (SSR) at http://localhost:5173
```

## Build

```bash
npm run build      # type-check, lint, and prerender to ./dist
```

The static output lands in `dist/` and can be served by any static host.

## Deploy

The site ships as a small nginx image serving the prerendered `dist/`. In
production it runs behind [Traefik](https://traefik.io/) on **roythan.de**,
joining the homelab's shared `traefik-public` network — Traefik terminates TLS
(Let's Encrypt) and routes to the container's port 80. All wiring is in
`docker-compose.yml` via container labels.

```bash
# Prereq (once on the host): the shared ingress network must exist
docker network create traefik-public

# Build + run; Traefik discovers it by its labels and serves https://roythan.de
docker compose up -d --build
```

Override the domain with `PORTFOLIO_DOMAIN` (defaults to `roythan.de`).
`www.roythan.de` is served by a second router that 301-redirects to the apex —
point DNS for **both** `roythan.de` and `www.roythan.de` at the host.

For a quick local preview without Traefik, publish the port directly:

```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio   # http://localhost:8080
```

## Structure

```text
public/            # static assets (images, fonts) served from /
src/
  components/nav/  # interactive nav (mobile menu)
  routes/index.tsx # the single-page portfolio + <head>
  global.css       # theme (placeholder until the design revamp)
adapters/static/   # Qwik static-site-generator (SSG) config
Dockerfile         # node build -> nginx serve
nginx.conf         # static serving + cache headers
```

