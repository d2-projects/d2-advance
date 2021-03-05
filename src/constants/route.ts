/**
 * @description vue-router v4 match
 */
export const MATCH_ALL = ':_(.*)';

/**
 * @example
 * router.push(RoutePath.HOME)
 */
export enum RoutePath {
  HOME = '/',
  ADMIN = '/admin',
  ADMIN_DASHBOARD = '/admin/',
  ADMIN_CRUD_DEMO = '/admin/crud-demo',
  ADMIN_PROFILE = '/admin/profile',
  ADMIN_NOTIFICATIONS = '/admin/notifications',
  ADMIN_NOTIFICATION_DETAIL = '/admin/notifications/:id',
  SPACE = '/space',
  SPACE_HOME = '/space/',
}

/**
 * @example
 * router.push({ name: RoutePath.HOME, params: { id: '123' } })
 */
export const RouteName = Object.fromEntries(
  Object.keys(RoutePath).map((i) => [i, i])
) as Record<keyof typeof RoutePath, keyof typeof RoutePath>;

/**
 * @example
 * router.push(RouteMap.HOME.path)
 * router.push({ name: RouteMap.HOME.name, params: { id: '123' } })
 */
export const RouteMap = Object.fromEntries(
  Object.entries(RoutePath).map(([name, path]) => [name, { name, path }])
) as Record<
  keyof typeof RoutePath,
  { name: keyof typeof RoutePath; path: string }
>;
