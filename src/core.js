import packageInfo from '../package.json'
import store from './store'
import createRouter from './router'
import plugin from './lib/plugin'

const router = createRouter({
  async init() {
    await store.dispatch('init')
  },
  async before() {
    // ...
  },
  async after() {
    // ...
  }
})

const app = plugin({
  logger: true,
  localStorage: {
    name: 'default',
    domain: packageInfo.name,
    version: packageInfo.version,
    defaults: {}
  }
})

export { router, store, app }
