import store from './store'
import createRouter from './router'
import plugin from './lib/plugin'
import config from './config'

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

const app = plugin(
  config({
    router,
    store
  })
)

export { router, store, app }
