import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths' // <-- Adicione esta importação

export default defineConfig({
  base: '/about-2026/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tsconfigPaths(),
  ],

  server: {
    open: true,
    port: 5173,
    strictPort: true,
    host: true,
  },

  preview: {
    port: 4173,
    strictPort: true,
  },

  build: {
    sourcemap: true,
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'esnext',
  },
})