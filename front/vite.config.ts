import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@widgets': path.resolve(__dirname, 'widgets'),
      '@entities': path.resolve(__dirname, 'entities'),
      '@features': path.resolve(__dirname, 'features')
    },
  },
})
