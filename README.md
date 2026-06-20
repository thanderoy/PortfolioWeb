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

## Deploy (the homelab host)

The site ships as a small nginx image that serves the prerendered `dist/`.

```bash
docker compose up -d --build      # serves on http://<host>:8080
# or:
docker build -t portfolio .
docker run -p 8080:80 portfolio
```

## Structure

```
public/            # static assets (images, fonts) served from /
src/
  components/nav/  # interactive nav (mobile menu)
  routes/index.tsx # the single-page portfolio + <head>
  global.css       # theme (placeholder until the design revamp)
adapters/static/   # Qwik static-site-generator (SSG) config
Dockerfile         # node build -> nginx serve
nginx.conf         # static serving + cache headers
```

The contact section uses a `mailto:` link (no backend).
