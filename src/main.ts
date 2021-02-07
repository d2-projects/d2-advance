import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import global from './plugins/global';

import './main.css';

import { makeServer } from './mock';
if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

createApp(App).use(store).use(router).use(global).mount('#app');
