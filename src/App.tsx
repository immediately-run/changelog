// Root component — immediately.run renders the default export of THIS file.
// Global CSS is imported here (not in main.tsx) because immediately.run's
// runtime never loads main.tsx.
import './index.css';
import './App.css';
import ChangelogList from './components/ChangelogList';

function App() {
  return (
    <main className="page">
      <header className="masthead">
        <p className="eyebrow">Changelog</p>
        <h1 className="title">
          What&apos;s <span className="grad-text">new.</span>
        </h1>
        <p className="lede">
          Notable changes to immediately.run, newest first. Each release links
          to itself — copy the date to share a deep link.
        </p>
      </header>

      <ChangelogList />

      <footer className="footer">
        <p>Built with immediately.run — this changelog is itself a forkable app.</p>
      </footer>
    </main>
  );
}

export default App;
