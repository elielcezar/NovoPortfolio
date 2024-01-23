const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {         
    proxy: "https://eliel.dev/"    
  },  
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
  //publicPath: process.env.NODE_ENV === 'production' ? '/novo/' : '/',
});
