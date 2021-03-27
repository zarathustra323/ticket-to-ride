import Vue from 'vue';
import App from './app.vue';
import closeable from './directives/closeable';

import './plugins/head';
import apolloProvider from './plugins/apollo-provider';
import router from './plugins/router';

import './styles/index.css';

Vue.config.productionTip = false;

Vue.directive('closeable', closeable);

new Vue({
  router,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
