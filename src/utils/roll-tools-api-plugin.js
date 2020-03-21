import * as client from '@/lib/roll-tools-api'

export default {
  install(Vue) {
    Vue.prototype.$rtApi = client
  }
}
