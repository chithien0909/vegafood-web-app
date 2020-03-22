// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate';
import Main from './Main'
import router from './router';
import {store} from './store/store';
import '@babel/polyfill';
Vue.config.productionTip = true;
Vue.use(Vuelidate);
new Vue({
  el: '#app',
  router,
  store,
  components: { Main },
  template: '<Main/>'
});
