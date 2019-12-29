const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    name: 'admin',
    component: () => import('../views/admin/$index'),
    children: [
      {
        path: 'dashboard',
        name: 'admin-dashboard',
        component: () => import('../views/admin/dashboard')
      },
      {
        path: 'component-demo/page-container',
        name: 'admin-component-demo-page-container',
        component: () => import('../views/admin/component-demo/page-container')
      },
      {
        path: 'component-demo/aside-nav-menu',
        name: 'admin-component-demo-aside-nav-menu',
        component: () => import('../views/admin/component-demo/aside-nav-menu')
      }
    ]
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: () => import('../views/NotFound')
  },
  {
    path: '*',
    redirect: '/not-found'
  }
]

export default routes
