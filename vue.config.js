module.exports = {
  // @ https://cli.vuejs.org/config/#publicpath
  publicPath: process.env.BASE_URL,

  // @ https://cli.vuejs.org/config/#chainwebpack
  chainWebpack: config => {
    // for SourceViewer component
    // @ https://vue-loader.vuejs.org/options.html#exposefilename
    if (process.env.VUE_APP_SOURCE_VIEWER === 'on') {
      config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          options.exposeFilename = true
          return options
        })
    }
  }
}
