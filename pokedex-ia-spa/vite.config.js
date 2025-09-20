import { defineConfig } from 'vite';

export default defineConfig({
  base: 'https://anthonysse.github.io/Proyecto-Final/pokedex-ia-spa/',
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  optimizeDeps: {
    include: ['@tensorflow/tfjs'],
  },
});