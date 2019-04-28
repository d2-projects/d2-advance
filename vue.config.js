module.exports = {
  chainWebpack: config => {
    // for SourceViewer component
    // about: https://vue-loader.vuejs.org/options.html#exposefilename
    if (process.env.VUE_APP_SOURCE_VIEWER_ENABLE) {
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
