import { routes as adminRoutes } from './admin'

export const pathPrefix = '/'
export const homePath = pathPrefix

const routes = [
  // global home
  {
    path: pathPrefix,
    component: () => import('../views/Home.vue')
  },

  // admin demo
  ...adminRoutes(),

  // global 404
  {
    path: '/not-found',
    component: () => import('../views/NotFound')
  },
  {
    path: '*',
    redirect: '/not-found'
  }
]

export default routes
