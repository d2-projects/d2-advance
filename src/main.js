import Vue from 'vue'
import 'normalize.css'
import './style/basic.styl'
import StartLoading from '@/components/StartLoading.vue'

Vue.config.productionTip = false

const mountApp = async () => {
  const MIN_LOADING_TIME = 800

  if (process.env.VUE_APP_START_LOADING_DEBUG === 'on') {
    // eslint-disable-next-line no-console
    console.warn('VUE_APP_START_LOADING_DEBUG is turn on')
    return
  }

  const startTime = new Date().getTime()
  const module = await import('./mount')
  const mount = () => !(module.default || module).mount()
  const loadingTime = new Date().getTime() - startTime
  loadingTime < MIN_LOADING_TIME
    ? setTimeout(mount, MIN_LOADING_TIME - loadingTime)
    : mount()
}

document.getElementById('app').appendChild(
  new Vue({
    data: { error: null },
    render(h) {
      return h(StartLoading, { props: { error: this.error } })
    },
    async mounted() {
      try {
        await mountApp()
      } catch (error) {
        this.error = error
      }
    }
  }).$mount().$el
)
