module.exports = {
  // https://cli.vuejs.org/zh/config/#productionsourcemap
  productionSourceMap: false,

  configureWebpack: {
    entry: {
      app: ['./src/start.js']
    },
    performance: {
      // https://webpack.js.org/configuration/performance/#performancehints
      hints: false // false | "error" | "warning"
    }
  },

  chainWebpack(config) {
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
