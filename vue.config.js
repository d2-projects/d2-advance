const VueFilenameInjector = require('./tools/vue-filename-loader')

module.exports = {
  // @ https://cli.vuejs.org/config/#publicpath
  publicPath: process.env.BASE_URL,

  // @ https://cli.vuejs.org/config/#chainwebpack
  chainWebpack: config => {
    // for SourceViewer component
    if (process.env.VUE_APP_SOURCE_VIEWER === 'on') {
      VueFilenameInjector(config, {
        propName: process.env.VUE_APP_SOURCE_VIEWER_PROP_NAME
      })
    }
  }
}
