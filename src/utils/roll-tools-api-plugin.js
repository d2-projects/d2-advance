import { client as createRtaClient } from '@/api/roll-tools-api'

export default {
  install(Vue) {
    Vue.prototype.$rta = createRtaClient()
  }
}
