import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// A standalone immediately.run content app (the Changelog). Typed data + React,
// no filesystem or MDX, so the config stays minimal. immediately.run renders the
// default export of src/App.tsx directly; this config only powers local dev/build.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
