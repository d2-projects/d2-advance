import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { RouteMap } from '@/constants/route';
import Home from '@/views/home/index.vue';
import Admin from '@/views/admin/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: RouteMap.HOME,
    component: Home
  },
  {
    path: RouteMap.ADMIN,
    component: Admin,
    redirect: RouteMap.ADMIN_DASHBOARD,
    children: [
      {
        path: RouteMap.ADMIN_DASHBOARD,
        component: () => import('../views/admin/views/dashboard.vue')
      },
      {
        path: RouteMap.ADMIN_CRUD_DEMO,
        component: () => import('../views/admin/views/crud-demo.vue')
      },
      {
        path: RouteMap.ADMIN__NO_MATCH,
        component: () => import('../views/admin/views/no-match.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
