import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import RoutingGuards from '../lib/routing-guards/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({ routes })

const fakeApi = () =>
  new Promise(resolve => setTimeout(() => resolve('hello'), 500))

router.beforeEach(
  new RoutingGuards()
    .use(async (ctx, next) => {
      const { from, to } = ctx
      // eslint-disable-next-line no-console
      console.log('1', from.path, to.path)
      await next()
      // eslint-disable-next-line no-console
      console.log('2')
    })
    .use(async () => {
      const data = await fakeApi()
      // eslint-disable-next-line no-console
      console.log(data)
    })
    .callback()
)

export default router
