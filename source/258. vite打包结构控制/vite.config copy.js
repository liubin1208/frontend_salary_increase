import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames(assetInfo) {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name].[hash].css';
          }
          if (
            ['.png', '.jpg', '.jpeg', 'webp', '.svg', '.gif'].some((ext) =>
              assetInfo.name.endsWith(ext)
            )
          ) {
            return 'img/[name].[hash].[ext]';
          }
          return 'assets/[name].[hash].[ext]';
        },
      },
    },
  },
});
