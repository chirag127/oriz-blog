# oriz-blog

Long-form writing on engineering, finance, and books — the blog at
[blog.oriz.in](https://blog.oriz.in). Part of the
[oriz](https://github.com/chirag127/oriz) family of static sites.

Built on Astro 6 + React 19 + Tailwind v4, themed with
[`@chirag127/oriz-ui`](https://github.com/chirag127/oriz-ui), and deployed
to Cloudflare. Auth + cross-site sign-in via Firebase (`oriz-app`).

## Develop

```bash
pnpm install
npx envpact-cli@0.2.0          # pulls .env from envpact (shared Firebase + site secrets)
pnpm dev                        # http://localhost:4321
```

Useful scripts:

- `pnpm typecheck` — Astro type check
- `pnpm lint` / `pnpm format` — Biome
- `pnpm build` — static build into `dist/`
- `pnpm preview` — serve the built site locally

## Build &amp; deploy

Cloudflare (custom domain `blog.oriz.in` is bound via the dashboard):

```bash
pnpm build
pnpm deploy   # wrangler deploy — uploads ./dist to the oriz-blog Worker
```

Environment variables required at build time live in `.env.example`. In
production they're set on the Cloudflare project; locally they come from
envpact.

## Writing posts

Posts are MDX in `src/content/blog/`. Schema lives in `src/content.config.ts`
(title, description, pubDate, tags, category, series, draft, …). A multi-part
series is just a folder; a `<folder>/index.mdx` becomes the series overview.

Drafts (`draft: true`) are excluded from listings and the RSS feed. Decap
CMS lives at `/admin/` and writes to the same content collection.
