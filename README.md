# Thande Roy — Portfolio

Personal portfolio website, built with [Qwik City](https://qwik.dev/) as a
static site (SSG).

## Develop

```bash
npm install
npm start          # dev server at http://localhost:5173
```

## Build

```bash
npm run build      # type-check, lint, and prerender to ./dist
```

The static output in `dist/` can be served by any static host.

## Deploy

Runs as a small nginx container behind Traefik; all routing/TLS wiring lives in
`docker-compose.yml`.

```bash
docker compose up -d --build
```
