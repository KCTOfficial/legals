# legals — site (`docs` branch)

Astro site that publishes the legal documents stored on the `main` branch to GitHub Pages.
This branch holds only the site code; documents are never edited here.

## How content is read

`npm run dev` and `npm run build` first run [`scripts/sync-content.mjs`](scripts/sync-content.mjs), which copies these files from `main` into `content/` (git-ignored):

| File on `main`         | Used for                                              |
| ---------------------- | ----------------------------------------------------- |
| `<app>/<doc>.md`       | A page at `/apps/<app>/<doc>/`, listed under the app  |
| `<app>/icon.png`       | App icon (also `.jpg`, `.webp`, `.svg`); optional     |
| `<app>/app.json`       | `{ "name", "description", "tags" }` (max 5 tags); optional |

A new Markdown file on `main` becomes a new page and sidebar entry automatically. The page title comes from the file's first `# Heading`, and the effective date from the text `effective as of YYYY-MM-DD`. Both can be overridden with optional frontmatter (`title`, `description`, `order`, `effective`).

Sync source, in order of precedence:

```sh
CONTENT_PATH=../legals npm run dev   # a checked-out folder, to preview uncommitted drafts
CONTENT_REF=origin/main npm run dev  # any git ref
npm run dev                          # default: local main, else origin/main
```

## Routes

- `/` — home
- `/apps/` — all apps, with search and tag filter (state kept in `?q=` and `?tag=`)
- `/apps/<app>/` — app overview
- `/apps/<app>/<doc>/` — document (use this URL in Google Play)

## Deployment

`.github/workflows/deploy-site.yml` on `main` builds this branch with the documents from `main` and deploys to GitHub Pages. It runs on every push to `main`; pushes to this branch dispatch it via [`trigger-deploy.yml`](.github/workflows/trigger-deploy.yml).

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Commands

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # output in dist/
npm run preview
```

Requires Node.js 22.23.4 or newer.
