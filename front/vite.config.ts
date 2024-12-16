import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts','.tsx'],
    alias: {
      '@': '/src',
      '@shared': '/src/shared',
      '@widgets': '/src/widgets',
      '@entities': '/src/entities',
      '@features': '/src/features',
    },
  },
})
