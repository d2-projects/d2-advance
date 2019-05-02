
module.exports = {
  // @ https://cli.vuejs.org/config/#publicpath
  publicPath: process.env.BASE_URL,

  // @ https://cli.vuejs.org/config/#chainwebpack
  chainWebpack: config => {
    // for SourceViewer component
    if (process.env.VUE_APP_SOURCE_VIEWER === 'on') {
      config.module
        .rule('vue')
        .use('vue-filename-loader--injector')
        .loader(require.resolve('./tools/vue-filename-loader/injector.js'))
        .after('vue-loader')
        .end()
      config.module
        .rule('')
        .resourceQuery(/blockType=injector/)
        .use('vue-filename-loader--loader')
        .loader(require.resolve('./tools/vue-filename-loader/loader.js'))
        .end()
    }
  }
}
