import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lignin-database-website/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: false, // Disable minification to avoid terser issues
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
