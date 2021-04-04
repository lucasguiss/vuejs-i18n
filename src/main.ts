import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import { createApp } from 'vue';
import i18n from './i18n';

createApp(App).use(store).use(router).use(i18n)
  .mount('#app');
