import fast from './fast'

/* Fast */
const routes = fast({
  [['/', 'home']]: {
    'welcome': 'home/welcome',
    'login': 'home/login'
  },
  [['/admin', 'admin']]: {
    'dashboard': 'admin/dashboard',
    'collection/milk-tea': '404',
    'collection/ice-drink': '404',
    'collection/apple': '404',
    'collection/cherry': '404'
  },
  '/404': '404',
  '*!redirect': '/404'
})

// OR

/* Normal */
/*
const routes = [
  {
    path: '/',
    redirect: '/welcome',
    component: () => import('../pages/home'),
    children: [
      {
        path: 'welcome',
        component: () => import('../pages/home/welcome')
      },
      {
        path: 'login',
        component: () => import('../pages/home/login')
      }
    ]
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: () => import('../pages/admin'),
    children: [
      {
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('../pages/404')
  },
  { path: '*', redirect: '/404' }
]
*/

export default routes
