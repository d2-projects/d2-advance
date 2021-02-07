import { App } from 'vue';
import { RoutePath, RouteName } from '@/constants/route';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $RoutePath: typeof RoutePath;
    $RouteName: typeof RouteName;
  }
}

export default (app: App): void => {
  app.config.globalProperties.$RoutePath = RoutePath;
  app.config.globalProperties.$RouteName = RouteName;
};
