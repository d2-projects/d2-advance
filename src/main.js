import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import App from './App.vue'
import routes from './routes'
import store from './store'
import { VueApplication, RoutingGuards } from './lib/core'
import { createI18n } from './locales/main'

import useElementUI from './utils/use-element-ui'

class MyApplication extends VueApplication {
  constructor() {
    super()
    this.i18n = null
    this.progress = NProgress
    this.on('changeLanguage', this.onChangeLanguage)
  }

  beforeStart() {
    Vue.use(Vuex)
    Vue.use(VueI18n)
    Vue.use(VueRouter)
    this.i18n = createI18n()
    this.progress.configure({ showSpinner: false })
    useElementUI(this)
  }

  createStore() {
    return store()
  }

  createRouter() {
    const router = new VueRouter({ routes })

    router.beforeEach(
      new RoutingGuards()
        .use(this.firstRoutingMiddleware())
        .use((_, next) => (this.progress.start(), next()))
        .use(async (_, next) => {
          // router guards here...

          // if (!auth) {
          //   _.done('/forbidden')
          // }

          await next()
        })
        .callback()
    )

    router.afterEach(() => this.progress.done())

    return router
  }

  createVM({ store, router }) {
    return new Vue({
      store,
      router,
      render: h => h(App),
      i18n: this.i18n
    })
  }

  afterStart() {
    this.vm.$watch('$i18n.locale', lang => this.emit('changeLanguage', lang))
  }

  mount(vm) {
    vm.$mount('#app')
  }

  onChangeLanguage(lang) {
    document.querySelector('html').setAttribute('lang', lang)
  }

  onLoadingChunkFailed(_error) {
    this.progress.done()

    this.vm.$alert(this.vm.$t('loading-chunk-failed'), this.vm.$t('ooops'), {
      confirmButtonText: this.vm.$t('reload'),
      center: true,
      callback: () => {
        window.location.reload()
      }
    })
  }
}

export default new MyApplication()
