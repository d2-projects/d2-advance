import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { RoutePath, RouteMap, MATCH_ALL } from '@/constants/route';
import Home from '@/views/home/index.vue';
import Admin from '@/views/admin/index.vue';
import AdminSidebarMenuMain from '@/views/admin/common/sidebar-menu-main.vue';
import AdminSidebarMenuSystem from '@/views/admin/common/sidebar-menu-system.vue';
import Space from '@/views/space/index.vue';

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
        components: {
          SidebarMenu: AdminSidebarMenuMain,
          default: () => import('../views/admin/main-views/dashboard.vue'),
        },
      },
      {
        ...RouteMap.ADMIN_CRUD_DEMO,
        components: {
          SidebarMenu: AdminSidebarMenuMain,
          default: () => import('../views/admin/main-views/crud-demo.vue'),
        },
      },

      // # system views
      {
        ...RouteMap.ADMIN_PROFILE,
        components: {
          SidebarMenu: AdminSidebarMenuSystem,
          default: () => import('../views/admin/system-views/profile.vue'),
        },
      },
      {
        ...RouteMap.ADMIN_NOTIFICATIONS,
        components: {
          SidebarMenu: AdminSidebarMenuSystem,
          default: () =>
            import('../views/admin/system-views/notifications.vue'),
        },
      },
      {
        ...RouteMap.ADMIN_NOTIFICATION_DETAIL,
        components: {
          SidebarMenu: AdminSidebarMenuSystem,
          default: () =>
            import('../views/admin/system-views/notification-detail.vue'),
        },
      },

      // # common views
      {
        path: MATCH_ALL,
        component: () => import('../views/admin/common/not-found.vue'),
      },
    ],
  },
  {
    ...RouteMap.SPACE,
    component: Space,
    redirect: RoutePath.SPACE_HOME,
    children: [
      // # main views
      {
        ...RouteMap.SPACE_HOME,
        component: () => import('../views/space/home.vue'),
      },

      // # common views
      {
        path: MATCH_ALL,
        component: () => import('../views/space/common/not-found.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
