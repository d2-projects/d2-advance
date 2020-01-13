const VueFilenameInjector = require('@d2-projects/vue-filename-injector')

module.exports = {
  // https://cli.vuejs.org/zh/config/#publicpath
  publicPath: process.env.BASE_URL || '/',

  // https://cli.vuejs.org/zh/config/#productionsourcemap
  productionSourceMap: false,

  chainWebpack(config) {
    /**
     * chunk split for start-loading page
     * https://webpack.js.org/guides/code-splitting/#dynamic-imports
     */
    config
      .entry('app')
      .clear()
      .add('./src/start.js')

    // for SourceLink component
    // https://github.com/d2-projects/vue-filename-injector
    if (process.env.VUE_APP_SOURCE_LINK === 'on') {
      VueFilenameInjector(config, {
        propName: process.env.VUE_APP_SOURCE_LINK_PROP_NAME
      })
    }

    // https://webpack.js.org/configuration/performance/#performancehints
    config.performance.hints(false) // false | "error" | "warning"

    /**
     * be fast
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
     */
    config.plugins.delete('prefetch').delete('preload')
  },

  pluginOptions: {
    i18n: {
      locale: process.env.VUE_APP_I18N_LOCALE || 'en',
      fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
