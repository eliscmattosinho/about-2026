import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

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
