const CompressionWebpackPlugin = require('compression-webpack-plugin')
const VueFilenameInjector = require('@d2-projects/vue-filename-injector')
const { get, set, reduce, chain, each } = require('lodash')
const check = require('check-node-version')
const packageInfo = require('./package.json')

// ! Multi-page config here. must be undefind or object
// https://cli.vuejs.org/zh/config/#pages
const pages = undefined
// const pages = {
//   index: './src/start.js',
//   subpage: './src/subpage.js'
// }

module.exports = {
  // https://cli.vuejs.org/zh/config/#publicpath
  publicPath: process.env.BASE_URL || '/',

  pages,

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
      VueFilenameInjector(config)
    }

    /**
     * compress assets
     * https://github.com/webpack-contrib/compression-webpack-plugin
     */
    if (process.env.NODE_ENV !== 'development') {
      const multipleCompression = []
      if (process.env.VUE_APP_GZIP === 'on') {
        multipleCompression.push({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8
        })
      }
      if (process.env.VUE_APP_BROTLI === 'on') {
        /**
         * https://github.com/webpack-contrib/compression-webpack-plugin#using-brotli
         */
        check({ node: '>= 11.7.0' }, (error, result) => {
          if (result.isSatisfied) {
            multipleCompression.push({
              filename: '[path].br[query]',
              algorithm: 'brotliCompress',
              test: /\.(js|css|html|svg)$/,
              compressionOptions: { level: 11 },
              threshold: 10240,
              minRatio: 0.8
            })
          } else {
            console.error('Node version need >= 11.7.0 for brotli compress')
          }
        })
      }
      if (multipleCompression.length) {
        config
          .plugin('compression-webpack-plugin')
          .use(CompressionWebpackPlugin, multipleCompression)
      }
    }

    /**
     * use public cdn dependencies by webpack externals and htmlWebpackPlugin
     * https://webpack.js.org/configuration/externals
     * https://github.com/jantimon/html-webpack-plugin
     */
    if (process.env.VUE_APP_CDN_DEPENDENCIES === 'on') {
      const cdnDependencies = get(packageInfo, 'cdnDependencies', [])

      // inject cdn config to all html. like `htmlWebpackPlugin.options.cdn`
      // already adapt to multi-page mode
      const multiHtmlPluginNames = chain(pages)
        .keys()
        .map(page => 'html-' + page)
        .value()
      const targetHtmlPluginNames = multiHtmlPluginNames.length
        ? multiHtmlPluginNames
        : ['html']
      each(targetHtmlPluginNames, name => {
        config.plugin(name).tap(args => {
          set(args, '[0].cdnDependencies', cdnDependencies)
          return args
        })
      })

      // with webpack externals. for fast devServer and build
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
