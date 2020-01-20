import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import Async from '@/components/Async'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import App from './App.vue'
import routes from './routes'
import store from './store'
import { VueApplication, RoutingGuards } from './lib/core'
import { createI18n } from './locales/main'
import { client as createRtaClient } from './api/roll-tools-api'
import useElementUI from './utils/use-element-ui'
import getStorage from './utils/get-storage'
import { langs } from './locales'

class MyApplication extends VueApplication {
  constructor() {
    super()
    this.i18n = null
    this.rta = null
    this.progress = NProgress
    this.on('changeLanguage', this.onChangeLanguage)
  }

  beforeStart() {
    Vue.use(Vuex)
    Vue.use(VueI18n)
    Vue.use(VueRouter)
    Vue.component('async', Async)
    Vue.prototype.$rta = this.rta = createRtaClient()
    this.i18n = createI18n()
    this.progress.configure({ showSpinner: false })
    useElementUI(this)
  }

  createStore() {
    return store(this)
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
      i18n: this.i18n,
      render: h => h(App),
      beforeCreate() {
        const lang = getStorage()
          .get('lang')
          .value()
        if (langs.find(item => item.value === lang)) {
          this.$i18n.locale = lang
        }
      },
      watch: {
        '$i18n.locale': {
          handler: lang => this.emit('changeLanguage', lang),
          immediate: true
        }
      }
    })
  }

  afterStart() {
    // ...
  }

  mount(vm) {
    vm.$mount('#app')
  }

  onChangeLanguage(lang) {
    document.querySelector('html').setAttribute('lang', lang)
    getStorage()
      .set('lang', lang)
      .write()
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
