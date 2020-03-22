import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import axios from './api';
import authModule from './modules/auth.module';
import router from '../router/index';
Vue.use(Vuex);
export const store = new Vuex.Store({
  state:{
  },
  getters:{
  },
  mutations:{
  },
  actions:{
    directHome(){
      router.push({
        name: 'HomeComponent'
      });
    },
    directLogin(){
      router.push({
        name: 'LoginComponent'
      });
    }
  },
  modules: {
    auth: {
      ...authModule,
    }
  }
});
