import { App } from 'vue';
import { RouteMap, RouteName } from '@/constants/route';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $RouteMap: typeof RouteMap;
    $RouteName: typeof RouteName;
  }
}

export default (app: App): void => {
  app.config.globalProperties.$RouteMap = RouteMap;
  app.config.globalProperties.$RouteName = RouteName;
};
