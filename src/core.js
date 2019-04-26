import store from './store'
import createRouter from './router'

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

export { router, store }
