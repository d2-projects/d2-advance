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
        name: 'dashboard',
        component: () => import('../views/admin/dashboard')
      },
      {
        path: 'submenu',
        name: 'submenu',
        component: () => import('../views/admin/dashboard')
      },
      {
        path: 'submenu/foo',
        name: 'submenu/foo',
        component: () => import('../views/admin/dashboard')
      },
      {
        path: 'submenu/bar',
        name: 'submenu/bar',
        component: () => import('../views/admin/dashboard')
      },
      {
        path: 'submenu/drink/milk-tea',
        name: 'submenu/drink/milk-tea',
        component: () => import('../views/admin/dashboard')
      },
      {
        path: 'submenu/drink/coffee',
        name: 'submenu/drink/coffee',
        component: () => import('../views/admin/dashboard')
      },
      {
        path: 'submenu/fruits',
        name: 'submenu/fruits',
        component: () => import('../views/admin/dashboard')
      },
      {
        path: 'submenu/fruits/apple',
        name: 'submenu/fruits/apple',
        component: () => import('../views/admin/dashboard')
      },
      {
        path: 'submenu/fruits/cherry',
        name: 'submenu/fruits/cherry',
        component: () => import('../views/admin/dashboard')
      }
    ]
  }
]

export default routes
