const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  //publicPath: process.env.NODE_ENV === 'production' ? '/novo/' : '/',
  css: {
    loaderOptions: {
        sass: {
            additionalData:  `
              @import "@/scss/variables.scss";
              @import "@/scss/global.scss";
            `
        }
    }
  }
});
