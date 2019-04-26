export default [
  {
    path: '/',
    redirect: '/welcome',
    component: () => import('../layout/home'),
    children: [
      {
        path: 'welcome',
        component: () => import('../pages/home/welcome')
      }
    ]
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: () => import('../layout/admin'),
    children: [
      {
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard')
      }
    ]
  },
  {
    path: '/404',
    name: 'notfount',
    component: () => import('../pages/404')
  },
  { path: '*', redirect: '/404' }
]
