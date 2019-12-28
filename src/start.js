import { delay } from 'lodash'
import Vue from 'vue'
import 'normalize.css'
import './style/basic.styl'
import StartLoading from '@/components/StartLoading.vue'

Vue.config.productionTip = false

const startApp = async failHandler => {
  const MIN_LOADING_TIME = 800

  if (process.env.VUE_APP_START_LOADING_DEBUG === 'on') {
    // eslint-disable-next-line no-console
    console.warn('VUE_APP_START_LOADING_DEBUG is turn on')
    return
  }

  const startTime = new Date().getTime()
  const module = await import('./main')
  const start = () => !(module.default || module).start(failHandler)
  const loadingTime = new Date().getTime() - startTime
  loadingTime < MIN_LOADING_TIME
    ? delay(start, MIN_LOADING_TIME - loadingTime)
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
        await startApp(this)
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
    }
  }).$mount().$el
)
