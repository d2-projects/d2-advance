const CompressionWebpackPlugin = require('compression-webpack-plugin')
const VueFilenameInjector = require('@d2-projects/vue-filename-injector')
const checkNode = require('node-version-matches')
const packageInfo = require('./package.json')
const { get, set, reduce, chain, each, map, filter } = require('lodash')

// ! Mutil page always
// https://cli.vuejs.org/zh/config/#pages
const pages = {
  index: {
    entry: 'src/start.js',
    template: 'public/index.html',
    filename: 'index.html'
  }
}

module.exports = {
  // https://cli.vuejs.org/zh/config/#publicpath
  publicPath: process.env.BASE_URL || '/',

  pages,

  // https://cli.vuejs.org/zh/config/#productionsourcemap
  productionSourceMap: false,

  // https://github.com/neutrinojs/webpack-chain
  chainWebpack(config) {
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
      if (process.env.VUE_APP_GZIP === 'on') {
        config
          .plugin('compression-webpack-plugin-gzip')
          .use(CompressionWebpackPlugin, [
            {
              filename: '[path].gz[query]',
              algorithm: 'gzip',
              test: /\.js$|\.css$|\.html$/,
              threshold: 10240,
              minRatio: 0.8
            }
          ])
      }
      if (process.env.VUE_APP_BROTLI === 'on') {
        // https://github.com/webpack-contrib/compression-webpack-plugin#using-brotli
        if (!checkNode('>=11.7.0')) {
          console.error('Node version need >= 11.7.0 for brotli compress')
        } else {
          config
            .plugin('compression-webpack-plugin-brotli')
            .use(CompressionWebpackPlugin, [
              {
                filename: '[path].br[query]',
                algorithm: 'brotliCompress',
                test: /\.(js|css|html|svg)$/,
                compressionOptions: { level: 11 },
                threshold: 10240,
                minRatio: 0.8
              }
            ])
        }
      }
    }

    /**
     * use public cdn dependencies by webpack externals and htmlWebpackPlugin
     * https://webpack.js.org/configuration/externals
     * https://github.com/jantimon/html-webpack-plugin
     */
    if (process.env.VUE_APP_CDN_DEPENDENCIES === 'on') {
      const cdnDependencies = cdnDependenciesModePreproccess(
        get(packageInfo, 'cdnDependencies', [])
      )

      // inject cdn config to all html. like `htmlWebpackPlugin.options.cdn`
      // already adapt to multi-page mode
      eachHtmlPlugins(pages, config, plugin => {
        plugin.tap(args => {
          set(args, '[0].cdnDependencies', cdnDependencies)
          return args
        })
      })

      // with webpack externals. for fast devServer and build
      config.externals(cdnDependenciesToWebpackExternals(cdnDependencies))
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

const eachHtmlPlugins = (webpackPagesConfig, chainConfig, callback) => {
  const multiHtmlPluginNames = chain(webpackPagesConfig)
    .keys()
    .map(page => 'html-' + page)
    .value()
  const targetHtmlPluginNames = multiHtmlPluginNames.length
    ? multiHtmlPluginNames
    : ['html']
  each(targetHtmlPluginNames, name => {
    callback(chainConfig.plugin(name), name)
  })
  return targetHtmlPluginNames
}

const cdnDependenciesToWebpackExternals = dependencies => {
  return reduce(
    dependencies,
    (prev, { name, library }) => (
      library ? (prev[name] = library) : (prev[name] = { root: null }), prev
    ),
    {}
  )
}

const cdnDependenciesModePreproccess = dependencies => {
  return process.env.NODE_ENV === 'development'
    ? map(dependencies, item => {
        const overrides = chain(item)
          .pick(
            chain(item)
              .keys()
              .filter(key => /(.+\.dev)$/.test(key))
              .value()
          )
          .mapKeys((_, key) => key.replace(/(\.dev)$/, ''))
          .value()
        return { ...item, ...overrides }
      })
    : dependencies
}
