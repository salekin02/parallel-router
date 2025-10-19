import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     'parallel-router': path.resolve(__dirname, '../src/index.ts'),
  //   },
  // },
  base: './',
  server: {
    port: 3002,
    open: true,
  },
})
