import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import global from './plugins/global';

import './main.css';

if (process.env.MOCK === 'on') {
  import('./mock').then(({ makeServer }) => {
    makeServer({ environment: process.env.NODE_ENV });
  });
}

createApp(App).use(store).use(router).use(global).mount('#app');
