// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',               // ← make URLs relative so index.html works in sub‐paths
  build: {
    outDir: 'docs',         // ← output into docs/ for GH Pages
  },
  plugins: [react()],
})