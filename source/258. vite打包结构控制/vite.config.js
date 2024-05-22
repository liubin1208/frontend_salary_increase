import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames(assetInfo) {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name]-[hash].css';
          }
          const imgExts = [
            '.png',
            '.jpg',
            '.jpeg',
            '.webp',
            '.svg',
            '.gif',
            '.ico',
          ];
          if (imgExts.some((ext) => assetInfo.name.endsWith(ext))) {
            return 'imgs/[name]-[hash].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        },
      },
    },
  },
});
