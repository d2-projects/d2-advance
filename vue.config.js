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
  }
}
