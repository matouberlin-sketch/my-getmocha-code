# KitchenFlow

KitchenFlow is a food manufacturing planning tool built with Vite, React, and a Cloudflare Worker backend.

## Getting Started

Install dependencies and start the Vite dev server:

```bash
npm install
npm run dev
```

### Quality Commands

- `npm run lint` – ESLint across worker and web packages
- `npm run test` – Vitest unit suite
- `npm run test:e2e` – Playwright end-to-end smoke tests
- `npm run format:check` – Prettier formatting verification
- `npm run check` – TypeScript build, Vite build, and Wrangler dry-run deploy

## Project Layout

- `src/web` – React application (pages, components, hooks)
- `src/worker` – Cloudflare Worker (Hono app, middleware, utilities)
- `src/e2e` – Playwright test suites
- `migrations` – SQLite D1 migration files
