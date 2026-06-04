# immediately.run — Changelog

A standalone [immediately.run](https://immediately.run) app: the project
**changelog**, newest first. Built as part of `docs/plans/ui-as-apps` **Phase
02** — no host dependency; loads via a `present` URL like any other app.

- **Content** is a typed array in `src/data/changelog.ts` (date, version, and
  grouped changes: added / changed / fixed / security). Add a release = add an
  entry. Each entry has a stable `id` for `#anchor` deep links.
- **Design** pulls tokens from `src/index.css` (the immediately.run design
  system). Mobile-first, scannable timeline.
- **Loading** rides the gh-pages zip cache (`.github/workflows/cache.yml`,
  `requireLatest: "stale_ok"`). One-time setup: Settings → Pages → Source:
  GitHub Actions.

## Local dev

```bash
npm install
npm run dev
npm run build   # tsc -b && vite build — must pass clean
npm run lint
```
