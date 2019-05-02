const { blockName } = require('./config.js')

// for chainWebpack
module.exports = function(config, options) {
  config.module
    .rule('vue')
    .use('vue-filename-injector')
    .loader(require.resolve('./injector.js'))
    .options(options)
    .after('vue-loader')
    .end()
  config.module
    .rule('')
    .resourceQuery(new RegExp(`blockType=${blockName}`))
    .use('vue-filename-loader')
    .loader(require.resolve('./loader.js'))
    .end()
}
