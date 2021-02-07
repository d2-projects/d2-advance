export enum RoutePath {
  HOME = '/',
  ADMIN = '/admin',
  ADMIN_DASHBOARD = '/admin/',
  ADMIN_CRUD_DEMO = '/admin/crud-demo',
  ADMIN_PROFILE = '/admin/profile',
  ADMIN_NOTIFICATIONS = '/admin/notifications',
  ADMIN_NOTIFICATION_DETAIL = '/admin/notifications/:id',
}

export const RouteName = Object.fromEntries(
  Object.keys(RoutePath).map((i) => [i, i])
) as Record<keyof typeof RoutePath, keyof typeof RoutePath>;
