import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import routes from './routes'
import { VueApplication, RoutingGuards } from './lib/core'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI)

class MyApplication extends VueApplication {
  constructor() {
    super()
  }

  createStore() {
    return new Vuex.Store({
      state: {},
      mutations: {},
      actions: {},
      modules: {}
    })
  }

  createRouter() {
    const router = new VueRouter({ routes })

    router.beforeEach(
      new RoutingGuards()
        .use(this.firstRoutingMiddleware())
        .use(async () => {
          await new Promise(resolve => setTimeout(resolve, 2000))
        })
        .callback()
    )

    return router
  }

  createVM({ store, router }) {
    return new Vue({
      store,
      router,
      render: h => h(App)
    })
  }

  mount(vm) {
    vm.$mount('#app')
  }
}

export default {
  app: new MyApplication(),
  start() {
    this.app.start()
  }
}
