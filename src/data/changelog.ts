// The immediately.run changelog — pure typed data (no React) so component files
// stay HMR-friendly. Newest first. Each entry has a stable `id` for #anchors.

export type ChangeKind = 'added' | 'changed' | 'fixed' | 'security';

export interface ChangeGroup {
  kind: ChangeKind;
  items: string[];
}

export interface ChangelogEntry {
  /** Stable slug for deep links (`#<id>`). */
  id: string;
  /** ISO date, e.g. "2026-06-04". */
  date: string;
  /** Optional version/tag shown as a badge. */
  version?: string;
  /** One-line headline for the release. Sentence case, ends on a period. */
  title: string;
  groups: ChangeGroup[];
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    id: 'content-apps',
    date: '2026-06-04',
    version: 'v0.4',
    title: 'The first pieces of the UI are now apps you can fork.',
    groups: [
      {
        kind: 'added',
        items: [
          'Showcase, changelog, and docs now ship as standalone immediately.run apps — each a public repo you can open, run, and take apart.',
          'A design-system starter (cool-dark canvas, magenta↔violet gradient, hard-offset hover) shared across the content apps.',
        ],
      },
      {
        kind: 'changed',
        items: [
          'Content apps load through the gh-pages zip cache, so they open fast and work offline.',
        ],
      },
    ],
  },
  {
    id: 'data-plane',
    date: '2026-06-04',
    title: 'Apps can no longer reach data you did not grant them.',
    groups: [
      {
        kind: 'security',
        items: [
          'A previewed app now sees only the spaces you actively granted to it — never your full space list, and never spaces you belong to but never shared with that app.',
          'Mounting a space an app was not granted is refused, with the same response as “no such space” so it cannot be used to probe what exists.',
          'The signed-in identity (your GitHub login) is no longer pushed to untrusted preview apps — they learn whether you are signed in, not who you are.',
        ],
      },
    ],
  },
  {
    id: 'sdk-npm',
    date: '2026-05-28',
    title: 'The SDK is on npm.',
    groups: [
      {
        kind: 'added',
        items: [
          '@immediately-run/sdk is published to npm, the first step toward apps pinning their own SDK version and running unchanged forever.',
        ],
      },
    ],
  },
  {
    id: 'zip-cache',
    date: '2026-05-20',
    title: 'Faster, offline-friendly app loading.',
    groups: [
      {
        kind: 'added',
        items: [
          'A GitHub Actions workflow publishes a pre-cached zip of your repo to its own GitHub Pages, with a contribute-manifest sidecar so offline edits can still be pushed back.',
        ],
      },
      {
        kind: 'changed',
        items: [
          'Apps load from the cached zip first and fall back to the GitHub API only when needed — no more anonymous rate-limit stalls.',
        ],
      },
    ],
  },
  {
    id: 'local-dev',
    date: '2026-05-12',
    title: 'Develop locally, run on immediately.run.',
    groups: [
      {
        kind: 'added',
        items: [
          'An `immediately-run dev` command and a local provider let you work against your real disk, with in-place index refresh as you edit.',
        ],
      },
    ],
  },
];
