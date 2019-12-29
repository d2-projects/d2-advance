import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import App from './App.vue'
import routes from './routes'
import { VueApplication, RoutingGuards } from './lib/core'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI, { locale })

class MyApplication extends VueApplication {
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

    router.onError(error => {
      if (/loading chunk \d* failed./i.test(error.message)) {
        NProgress.done()
        this.vm.loadingChunkFailed(error)
      }
    })

    router.beforeEach(
      new RoutingGuards()
        .use(this.firstRoutingMiddleware())
        .use(async (_, next) => {
          NProgress.start()
          await next()
        })
        .use(async () => {
          // router guards here...
        })
        .callback()
    )

    router.afterEach(
      new RoutingGuards()
        .use(async (_, next) => {
          NProgress.done()
          await next()
        })
        .callback()
    )

    return router
  }

  createVM({ store, router }) {
    return new Vue({
      store,
      router,
      render: h => h(App),
      methods: {
        loadingChunkFailed(_) {
          this.$alert('Application out-of-date or loading failed', 'Ops!', {
            confirmButtonText: 'Reloading',
            center: true,
            callback: () => {
              window.location.reload()
            }
          })
        }
      }
    })
  }

  mount(vm) {
    vm.$mount('#app')
  }
}

export default new MyApplication()
