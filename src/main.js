import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import App from './App.vue'
import routes from './routes'
import store from './store'
import { VueApplication, RoutingGuards } from './lib/core'
import { createI18n } from './locales/main'

class MyApplication extends VueApplication {
  constructor() {
    super()
    this.i18n = null
    this.progress = NProgress
    this.on('changeLanguage', this.onChangeLanguage)
  }

  beforeStart() {
    this.i18n = createI18n()
    this.progress.configure({ showSpinner: false })
    Vue.use(Vuex)
    Vue.use(VueRouter)
    Vue.use(ElementUI, {
      i18n: (key, value) => this.i18n.t(key, value)
    })
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

  mount(vm) {
    vm.$mount('#app')
  }

  onChangeLanguage(lang) {
    document.querySelector('html').setAttribute('lang', lang)
  }

  onLoadingChunkFailed(_error) {
    this.progress.done()
    this.vm.$alert('Application out-of-date or loading failed', 'Ops!', {
      confirmButtonText: 'Reloading',
      center: true,
      callback: () => {
        window.location.reload()
      }
    })
  }
}

export default new MyApplication()
