import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lignin-database-website/',
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          charts: ['plotly.js', 'react-plotly.js'],
          utils: ['papaparse', 'lucide-react']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['plotly.js', 'react-plotly.js']
  }
})

