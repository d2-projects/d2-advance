import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import global from './plugins/global';

import './main.css';

if (import.meta.env.VITE_APP_MOCK === 'on') {
  import('./mock').then(({ makeServer }) => {
    makeServer({ environment: import.meta.env.MODE });
  });
}

createApp(App).use(store).use(router).use(global).mount('#app');
