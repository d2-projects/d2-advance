import { map, kebabCase } from 'lodash'
import { namespace } from '@/store/modules/admin'

export const pathPrefix = '/admin'
export const homePath = pathPrefix

export const routes = app => {
  const state = app.store.state[namespace]

  return [
    {
      path: `${pathPrefix}/login`,
      name: 'admin-login',
      component: () => import('../views/admin/login'),
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
      component: () => import('../views/admin/$index'),
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
          'some-icon',
          'development',
          'forbidden',
          'not-found'
        ],
        path => ({
          path,
          name: kebabCase('admin ' + path),
          component: () =>
            import(
              // https://webpack.js.org/api/module-methods/#magic-comments
              /* webpackInclude: /index\.vue$/ */
              /* webpackExclude: /(components)/ */
              /* webpackMode: "lazy" */
              '@/views/admin/' + path
            )
        })
      )
    }
  ]
}
