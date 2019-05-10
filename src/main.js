import Vue from 'vue'
import App from './App.vue'
import { router, store, app } from './core'

import Theme from './theme/pure-element-ui'
Vue.use(Theme, { prefix: 'pure-element-ui' })

import './styles/index.styl'

Vue.config.productionTip = false
Vue.prototype.$app = app

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
