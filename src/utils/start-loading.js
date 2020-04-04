import Vue from 'vue'
import 'normalize.css'
import { getThemeConfig } from '@/store/modules/admin/theme'
import '@/style/root.styl'
import { createI18n } from '@/locales/start'
import getStorage from '@/utils/get-storage'
import { langs } from '@/locales'

Vue.config.productionTip = false

export const i18n = createI18n()

export default (load, view) => {
  const vm = new Vue({
    i18n,
    data: { error: null },
    beforeCreate() {
      const lang = getStorage().get('lang').value()
      if (langs.find((item) => item.value === lang)) {
        this.$i18n.locale = lang
      }

      document.body.setAttribute(
        'data-admin-theme',
        getStorage('admin').get('theme').value() || getThemeConfig().theme
      )
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
        const module = await load()
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
      return h(view, { props: { error: this.error } })
    }
  })
  document.getElementById('app').appendChild(vm.$mount().$el)
}
