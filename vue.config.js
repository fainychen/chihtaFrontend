const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // transpileDependencies: true,

  "publicPath": "",
  "transpileDependencies": [
    "vuetify"
  ],
  lintOnSave: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '智達軟體設計有限公司'
        return args
      })
  }
})
