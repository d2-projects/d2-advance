# Vue Filename Injector

Inject the file path of the `.vue` on `this.$options.__source`.

## in chainWebpack

`vue.config.js`:

``` js
const VueFilenameInjector = require('./path/to/vue-filename-loader')

module.exports = {
  chainWebpack: config => {
    VueFilenameInjector(config, {
      propName: '__source' // default
    })
  }
}
```
