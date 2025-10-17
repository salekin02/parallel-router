import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'parallel-router': path.resolve(__dirname, '../dist/index.mjs'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
