// The list of releases, newest first.
import { CHANGELOG } from '../data/changelog';
import Entry from './Entry';

function ChangelogList() {
  return (
    <div className="timeline">
      {CHANGELOG.map((entry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </div>
  );
}

export default ChangelogList;
