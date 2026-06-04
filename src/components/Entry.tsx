// One changelog release: date, optional version badge, headline, and grouped
// changes (added / changed / fixed / security). One component per file.
import type { ChangelogEntry } from '../data/changelog';

const KIND_LABEL: Record<string, string> = {
  added: 'Added',
  changed: 'Changed',
  fixed: 'Fixed',
  security: 'Security',
};

function formatDate(iso: string): string {
  // ISO -> "4 June 2026" without pulling in a date library.
  const [y, m, d] = iso.split('-').map(Number);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return `${d} ${months[m - 1]} ${y}`;
}

function Entry({ entry }: { entry: ChangelogEntry }) {
  return (
    <article className="entry" id={entry.id}>
      <div className="entry__meta">
        <a className="entry__date" href={`#${entry.id}`}>
          {formatDate(entry.date)}
        </a>
        {entry.version && <span className="entry__version">{entry.version}</span>}
      </div>

      <h2 className="entry__title">{entry.title}</h2>

      {entry.groups.map((group) => (
        <div className="group" key={group.kind}>
          <span className={`group__label group__label--${group.kind}`}>
            {KIND_LABEL[group.kind] ?? group.kind}
          </span>
          <ul className="group__items">
            {group.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  );
}

export default Entry;
