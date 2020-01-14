import { map, kebabCase } from 'lodash'

export const pathPrefix = '/admin'

export const routes = (prefix = pathPrefix) => [
  {
    path: prefix,
    name: 'admin',
    redirect: `${prefix}/dashboard`,
    component: () => import('../views/admin/$index'),
    children: map(
      [
        'dashboard',
        'component-demo/page-container',
        'component-demo/aside-nav-menu',
        'some-icon',
        'development',
        'forbidden',
        'not-found'
      ],
      path => ({
        path,
        name: kebabCase('admin ' + path),
        component: () => import('../views/admin/' + path)
      })
    )
  }
]
