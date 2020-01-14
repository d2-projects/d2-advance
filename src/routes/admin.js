import { map, kebabCase } from 'lodash'

export const pathPrefix = '/admin'

export const routes = () => [
  {
    path: pathPrefix,
    name: 'admin',
    redirect: `${pathPrefix}/dashboard`,
    component: () => import('../views/admin/$index'),
    children: map(
      [
        'dashboard',
        'component-demo/page-container',
        'component-demo/aside-nav-menu',
        'roll-tools-api/fuli-images',
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
