import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import fs from 'node:fs';

const MyPlugin = (limit = 4096) => {
  return {
    name: 'my-plugin',
    async transform(code, id) {
      if (process.env.NODE_ENV !== 'development') {
        return;
      }
      if (!id.endsWith('.png')) {
        return;
      }
      const stat = await fs.promises.stat(id);
      if (stat.size > limit) {
        return;
      }
      const buffer = await fs.promises.readFile(id);
      const base64 = buffer.toString('base64');
      const dataurl = `data:image/png;base64,${base64}`;
      return {
        code: `export default "${dataurl}"`,
      };
    },
  };
};

export default defineConfig({
  plugins: [vue(), MyPlugin()],
  build: {
    assetsInlineLimit: 4096,
  },
});
