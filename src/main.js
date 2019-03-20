import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
import Resource from 'vue-resource'
Vue.use(Resource);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import App from './App.vue'

Vue.use(ElementUI);
Vue.config.productionTip = true;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
