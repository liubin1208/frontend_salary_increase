const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "~@/var.less";`,
      },
    },
  },
});
