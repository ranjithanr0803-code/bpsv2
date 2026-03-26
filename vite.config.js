// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Add this for better path resolution

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    open: true,
  },
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // More robust than '/src'
      '@common': path.resolve(__dirname, './src/components'), // More robust than '/src'
      '@pages': path.resolve(__dirname, './src/pages'), // More robust than '/src'
      '@assets': path.resolve(__dirname, './src/assets'), // More robust than '/src'
      '@utils': path.resolve(__dirname, './src/utils'), // More robust than '/src'
      '@hooks': path.resolve(__dirname, './src/hooks'), // More robust than '/src'
      '@services': path.resolve(__dirname, './src/services'), // More robust than '/src'
      '@store': path.resolve(__dirname, './src/store'), // More robust than '/src'
      '@styles': path.resolve(__dirname, './src/styles'), // More robust than '/src'
    },
  },
});