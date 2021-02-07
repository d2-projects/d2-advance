export enum RouteMap {
  HOME = '/',
  ADMIN = '/admin',
  ADMIN_DASHBOARD = '/admin/',
  ADMIN_CRUD_DEMO = '/admin/crud-demo',
  ADMIN_NOTIFICATIONS = '/admin/notifications',
  ADMIN_NOTIFICATION_DETAIL = '/admin/notifications/:id',
}

export const RouteName = Object.fromEntries(
  Object.keys(RouteMap).map((i) => [i, i])
) as Record<keyof typeof RouteMap, keyof typeof RouteMap>;
