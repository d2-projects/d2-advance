import { routes as adminRoutes } from './admin'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  ...adminRoutes(),
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
