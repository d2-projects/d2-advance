'use strict';

const zlib = require('zlib');
const checkNode = require('node-version-matches');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  publicPath: process.env.BASE_URL || './',
  productionSourceMap: process.env.VUE_APP_SOURCE_MAP === 'on',

  devServer: {
    // display console info on page
    overlay: {
      warnings: false,
      errors: true,
    },
  },

  chainWebpack(config) {
    // https://github.com/webpack-contrib/compression-webpack-plugin
    if (process.env.NODE_ENV === 'production') {
      if (process.env.VUE_APP_GZIP === 'on') {
        config
          .plugin('compression-webpack-plugin-gzip')
          .use(CompressionWebpackPlugin, [
            {
              filename: '[path][base].gz[query]',
              algorithm: 'gzip',
              test: /\.js$|\.css$|\.html$/,
              threshold: 10240,
              minRatio: 0.8,
            },
          ]);
      }
      if (process.env.VUE_APP_BROTLI === 'on') {
        // https://github.com/webpack-contrib/compression-webpack-plugin#using-brotli
        if (!checkNode('>=11.7.0')) {
          console.error('Node version need >= 11.7.0 for brotli compress');
        } else {
          config
            .plugin('compression-webpack-plugin-brotli')
            .use(CompressionWebpackPlugin, [
              {
                filename: '[path][base].br[query]',
                algorithm: 'brotliCompress',
                test: /\.(js|css|html|svg)$/,
                compressionOptions: {
                  params: {
                    [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                  },
                },
                threshold: 10240,
                minRatio: 0.8,
              },
            ]);
        }
      }
    }
  },
};
