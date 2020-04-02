import Vue from 'vue'
import Vuelidate from 'vuelidate';
import Main from './Main'
import router from './router';
import {store} from './store/store';
import Router from 'vue-router';

// import '@babel/polyfill';
Vue.config.productionTip = true;
Vue.use(Vuelidate);
Vue.use(Router);
new Vue({
  el: '#app',
  router,
  store,
  components: { Main },
  template: '<Main/>',
  created(){
    store.dispatch('currentUser');
  }
});
