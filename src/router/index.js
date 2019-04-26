import Vue from 'vue'
import Router from 'vue-router'
import rules from './rules'
import creator from './creator'

Vue.use(Router)

const routes = [
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

export default options => {
  return creator({
    routes,
    rules,
    ...options
  })
}
