const VueFilenameInjector = require('@d2-projects/vue-filename-injector')

// @ https://cli.vuejs.org/config/#vue-config-js
module.exports = {
  // @ https://cli.vuejs.org/config/#publicpath
  publicPath: process.env.BASE_URL,

  // @ https://cli.vuejs.org/zh/config/#productionsourcemap
  productionSourceMap: process.env.VUE_APP_SOURCE_MAP === 'on',

  configureWebpack: {
    performance: {
      hints: false // false | "error" | "warning"
    }
  },

  // @ https://cli.vuejs.org/config/#chainwebpack
  chainWebpack: config => {
    // for SourceViewer component
    if (process.env.VUE_APP_SOURCE_LINK === 'on') {
      VueFilenameInjector(config, {
        propName: process.env.VUE_APP_SOURCE_LINK_PROP_NAME
      })
    }

    // @ https://cli.vuejs.org/zh/guide/html-and-static-assets.html
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  }
}
