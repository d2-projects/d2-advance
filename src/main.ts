import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import global from './plugins/global';

import '@virtual/windi.css';
import './main.css';

const app = createApp(App).use(store).use(router).use(global);

if (import.meta.env.DEV) {
  if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app;
  }
}

if (import.meta.env.VITE_HTTP_MOCK === 'on') {
  import('./mock').then(({ makeServer }) => {
    makeServer({ environment: import.meta.env.MODE });
    app.mount('#app');
  });
} else {
  app.mount('#app');
}
