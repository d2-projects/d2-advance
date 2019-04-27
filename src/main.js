import Vue from 'vue'
import App from './App.vue'
import { router, store } from './core'

import Theme from './theme/pure-element-ui'
Vue.use(Theme, { prefix: 'pure-element-ui' })

import './styles/index.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
