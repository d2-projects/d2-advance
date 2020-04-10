import { routes as adminRoutes } from './admin'

export const pathPrefix = '/'
export const homePath = pathPrefix

export default (app) => {
  // const store = app.store.state

  return [
    // global home
    {
      path: pathPrefix,
      component: () => import('@/views/Home.vue')
    },

    // admin demo
    ...adminRoutes(app),

    // global 404
    {
      path: '/not-found',
      component: () => import('@/views/NotFound')
    },
    {
      path: '*',
      redirect: '/not-found'
    }
  ]
}
