import Vue from 'vue'
import 'normalize.css'
import './style/basic.styl'
import StartLoading from '@/components/StartLoading.vue'

Vue.config.productionTip = false

const startApp = async () => {
  const MIN_LOADING_TIME = 800

  if (process.env.VUE_APP_START_LOADING_DEBUG === 'on') {
    // eslint-disable-next-line no-console
    console.warn('VUE_APP_START_LOADING_DEBUG is turn on')
    return
  }

  const startTime = new Date().getTime()
  const module = await import('./main')
  const start = () => !(module.default || module).start()
  const loadingTime = new Date().getTime() - startTime
  loadingTime < MIN_LOADING_TIME
    ? setTimeout(start, MIN_LOADING_TIME - loadingTime)
    : start()
}

document.getElementById('app').appendChild(
  new Vue({
    data: { error: null },
    render(h) {
      return h(StartLoading, { props: { error: this.error } })
    },
    async mounted() {
      try {
        await startApp()
      } catch (error) {
        this.error = error
      }
    }
  }).$mount().$el
)
