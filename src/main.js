import Vue from 'vue'
import StartLoading from '@/components/StartLoading.vue'

Vue.config.productionTip = false

const MIN_LOADING_TIME = 600

document.getElementById('app').appendChild(
  new Vue({
    render: h => h(StartLoading),
    mounted() {
      if (process.env.VUE_APP_START_LOADING_DEBUG === 'on') {
        console.warn('VUE_APP_START_LOADING_DEBUG is turn on')
        return
      }

      const startTime = new Date().getTime()

      import('./mount')
        .then(module => {
          const loadingTime = new Date().getTime() - startTime
          if (loadingTime < MIN_LOADING_TIME) {
            setTimeout(() => {
              !(module.default || module).mount()
            }, MIN_LOADING_TIME - loadingTime)
          }
        })
        .catch(error => {
          console.error('Ops!', error)
        })
    }
  }).$mount().$el
)
