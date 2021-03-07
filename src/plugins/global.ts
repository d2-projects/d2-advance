import { App } from 'vue';
import { RoutePath, RouteName, RouteMap } from '@/constants/route';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $RoutePath: typeof RoutePath;
    $RouteName: typeof RouteName;
    $RouteMap: typeof RouteMap;
  }
}

export default (app: App): void => {
  app.config.globalProperties.$RoutePath = RoutePath;
  app.config.globalProperties.$RouteName = RouteName;
  app.config.globalProperties.$RouteMap = RouteMap;
};
