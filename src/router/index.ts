import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { RoutePath, RouteName } from '@/constants/route';
import Home from '@/views/home/index.vue';
import Admin from '@/views/admin/index.vue';

const MATCH_ALL = ':_(.*)';

const routes: Array<RouteRecordRaw> = [
  {
    path: RoutePath.HOME,
    component: Home,
  },
  {
    path: RoutePath.ADMIN,
    component: Admin,
    redirect: RoutePath.ADMIN_DASHBOARD,
    children: [
      {
        path: RoutePath.ADMIN_DASHBOARD,
        component: () => import('../views/admin/main-views/dashboard.vue'),
      },
      {
        path: RoutePath.ADMIN_CRUD_DEMO,
        component: () => import('../views/admin/main-views/crud-demo.vue'),
      },
      {
        path: RoutePath.ADMIN_PROFILE,
        component: () => import('../views/admin/system-views/profile.vue'),
      },
      {
        path: RoutePath.ADMIN_NOTIFICATIONS,
        component: () =>
          import('../views/admin/system-views/notifications.vue'),
      },
      {
        path: RoutePath.ADMIN_NOTIFICATION_DETAIL,
        name: RouteName.ADMIN_NOTIFICATION_DETAIL,
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
