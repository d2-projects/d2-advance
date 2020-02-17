const CompressionWebpackPlugin = require('compression-webpack-plugin')
const VueFilenameInjector = require('@d2-projects/vue-filename-injector')
const { get, set, reduce } = require('lodash')
const packageInfo = require('./package.json')

module.exports = {
  // https://cli.vuejs.org/zh/config/#publicpath
  publicPath: process.env.BASE_URL || '/',

  // https://cli.vuejs.org/zh/config/#productionsourcemap
  productionSourceMap: false,

  // https://github.com/neutrinojs/webpack-chain
  chainWebpack(config) {
    /**
     * chunk split for start-loading page
     * https://webpack.js.org/guides/code-splitting/#dynamic-imports
     */
    config
      .entry('app')
      .clear()
      .add('./src/start.js')

    /**
     * for SourceLink component
     * https://github.com/d2-projects/vue-filename-injector
     */
    if (process.env.VUE_APP_SOURCE_LINK === 'on') {
      VueFilenameInjector(config, {
        propName: process.env.VUE_APP_SOURCE_LINK_PROP_NAME
      })
    }

    /**
     * for gzip outputs
     * https://github.com/webpack-contrib/compression-webpack-plugin
     */
    if (process.env.VUE_APP_GZIP === 'on') {
      config
        .plugin('compression-webpack-plugin')
        .use(CompressionWebpackPlugin, [
          {
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false
          }
        ])
    }

    /**
     * use public cdn dependencies by webpack externals and htmlWebpackPlugin
     * https://webpack.js.org/configuration/externals
     * https://github.com/jantimon/html-webpack-plugin
     */
    if (process.env.VUE_APP_CDN_DEPENDENCIES === 'on') {
      const cdnDependencies = get(packageInfo, 'cdnDependencies', [])
      config.externals(
        reduce(
          cdnDependencies,
          (prev, { name, library }) => (
            library ? (prev[name] = library) : (prev[name] = { root: null }),
            prev
          ),
          {}
        )
      )
      config.plugin('html').tap(args => {
        set(args, '[0].cdnDependencies', cdnDependencies)
        return args
      })
    }

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
