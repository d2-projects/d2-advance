'use strict';

module.exports = {
  publicPath: process.env.BASE_URL || './',
  productionSourceMap: process.env.VUE_APP_SOURCE_MAP === 'on'
};
