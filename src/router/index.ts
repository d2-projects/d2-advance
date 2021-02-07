import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { RoutePath, RouteMap, MATCH_ALL } from '@/constants/route';
import Home from '@/views/home/index.vue';
import Admin from '@/views/admin/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    ...RouteMap.HOME,
    component: Home,
  },
  {
    ...RouteMap.ADMIN,
    component: Admin,
    redirect: RoutePath.ADMIN_DASHBOARD,
    children: [
      // # main views
      {
        ...RouteMap.ADMIN_DASHBOARD,
        component: () => import('../views/admin/main-views/dashboard.vue'),
      },
      {
        ...RouteMap.ADMIN_CRUD_DEMO,
        component: () => import('../views/admin/main-views/crud-demo.vue'),
      },

      // # system views
      {
        ...RouteMap.ADMIN_PROFILE,
        component: () => import('../views/admin/system-views/profile.vue'),
      },
      {
        ...RouteMap.ADMIN_NOTIFICATIONS,
        component: () =>
          import('../views/admin/system-views/notifications.vue'),
      },
      {
        ...RouteMap.ADMIN_NOTIFICATION_DETAIL,
        component: () =>
          import('../views/admin/system-views/notification-detail.vue'),
      },
      {
        path: MATCH_ALL,
        component: () => import('../views/admin/system-views/not-found.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
