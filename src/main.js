import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Async from '@/components/Async'
import App from '@/App.vue'
import routes from '@/routes'
import store from '@/store'
import { VueApplication } from '@/lib/core'
import { createI18n } from '@/locales/main'
import rollToolsApiPlugin from '@/utils/roll-tools-api-plugin'
import useElementUI from '@/utils/use-element-ui'
import autoInjectorPlugin from '@/utils/auto-injector-plugin'
import i18nRootMixin from '@/utils/i18n-root-mixin'
import loadingChunkFailedRootMixin from '@/utils/loading-chunk-failed-root-mixin'

class MyApplication extends VueApplication {
  constructor() {
    super()
    this.i18n = createI18n()
  }

  before() {
    Vue.use(Vuex)
    Vue.use(VueRouter)
    Vue.use(autoInjectorPlugin)
    Vue.use(rollToolsApiPlugin)

    Vue.component('async', Async)
    useElementUI(this)
  }

  createStore() {
    return new Vuex.Store(store(this))
  }

  createRouter() {
    return new VueRouter({ routes: routes(this) })
  }

  createVM({ store, router }) {
    return new Vue({
      store,
      router,
      i18n: this.i18n,
      mixins: [i18nRootMixin(this), loadingChunkFailedRootMixin(this)],
      render: (h) => h(App)
    })
  }

  after() {
    // use waitFor to async operation
    // const done = this.waitFor('todo')
    // setTimeout(done, 3000)
  }

  mount(vm) {
    vm.$mount('#app')
  }

  life(eventName, ...args) {
    super.life(eventName, ...args)
    // if (process.env.NODE_ENV === 'development') {
    //   // eslint-disable-next-line no-console
    //   console.log(eventName, '/', ...args)
    // }
  }
}

export default new MyApplication()
