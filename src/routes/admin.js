import { map, kebabCase } from 'lodash'
import { namespace } from '@/store/modules/admin'

export const pathPrefix = '/admin'
export const homePath = pathPrefix
export const loginPath = pathPrefix + '/login'

export const routes = (app) => {
  const state = app.store.state[namespace]

  return [
    {
      path: `${pathPrefix}/login`,
      name: 'admin-login',
      component: () => import('@/views/admin/login'),
      beforeEnter(to, from, next) {
        if (state.token) {
          return next({ name: 'admin' })
        }
        next()
      }
    },
    {
      path: pathPrefix,
      name: 'admin',
      redirect: `${pathPrefix}/dashboard`,
      component: () => import('@/layout/admin'),
      beforeEnter(to, from, next) {
        if (!state.token) {
          return next({ name: 'admin-login' })
        }
        next()
      },
      children: map(
        [
          'dashboard',
          'preferences',
          'component-demo/page-container',
          'component-demo/aside-nav-menu',
          'roll-tools-api/china-cities',
          'roll-tools-api/fuli-images',
          'roll-tools-api/ip-address',
          'roll-tools-api/qrcode',
          'some-icon',
          'development',
          'forbidden',
          'not-found'
        ],
        (path) => ({
          path,
          name: kebabCase('admin ' + path),
          component: () =>
            import(
              // https://webpack.js.org/api/module-methods/#magic-comments
              /* webpackInclude: /index\.(vue|js)$/ */
              /* webpackExclude: /(components)/ */
              /* webpackMode: "lazy" */
              '@/views/admin/' + path
            )
        })
      )
    }
  ]
}
