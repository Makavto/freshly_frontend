import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const srcDir = fileURLToPath(new URL('./src', import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@app': path.join(srcDir, 'app'),
      '@pages': path.join(srcDir, 'pages'),
      '@features': path.join(srcDir, 'features'),
      '@entities': path.join(srcDir, 'entities'),
      '@shared': path.join(srcDir, 'shared'),
      '@widgets': path.join(srcDir, 'widgets'),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'favicon-16x16.png',
        'favicon-32x32.png',
        'apple-touch-icon.png',
      ],
      workbox: {
        // добавляем woff2 — шрифты Inter из node_modules собираются в dist/assets.
        // .woff не кэшируем: это фолбэк для браузеров без поддержки woff2, которых в PWA не бывает
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
      },
      manifest: {
        name: 'Freshly',
        short_name: 'Freshly',
        theme_color: '#4CA85B',
        background_color: '#F6F5F2',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
});
