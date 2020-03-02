import Vue from 'vue'
import 'normalize.css'
import '@/style/global.styl'
import StartLoading from '@/views/StartLoading'
import { createI18n } from '@/locales/start'
import getStorage from '@/utils/get-storage'
import { langs } from '@/locales'

Vue.config.productionTip = false

export const i18n = createI18n()

export const vm = new Vue({
  i18n,
  data: { error: null },
  beforeCreate() {
    const lang = getStorage()
      .get('lang')
      .value()
    if (langs.find(item => item.value === lang)) {
      this.$i18n.locale = lang
    }
  },
  async mounted() {
    try {
      const MIN_LOADING_TIME = process.env.VUE_APP_MIN_LOADING_TIME || 800
      if (process.env.VUE_APP_START_LOADING_DEBUG === 'on') {
        // eslint-disable-next-line no-console
        console.warn('VUE_APP_START_LOADING_DEBUG is turn on')
        return
      }

      const startTime = new Date().getTime()
      const module = await import(/* webpackChunkName: "main" */ './main')
      const start = () => !(module.default || module).init(this)
      const loadingTime = new Date().getTime() - startTime
      loadingTime < MIN_LOADING_TIME
        ? setTimeout(start, MIN_LOADING_TIME - loadingTime)
        : start()
    } catch (error) {
      this.fail(error)
    }
  },
  methods: {
    fail(error) {
      this.error = error
      // eslint-disable-next-line no-console
      console.error(error)
    }
  },
  render(h) {
    return h(StartLoading, { props: { error: this.error } })
  }
})

document.getElementById('app').appendChild(vm.$mount().$el)
