module.exports = {
  // https://cli.vuejs.org/zh/config/#productionsourcemap
  productionSourceMap: false,

  chainWebpack(config) {
    config
      .entry('app')
      .clear()
      .add('./src/start.js')

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
