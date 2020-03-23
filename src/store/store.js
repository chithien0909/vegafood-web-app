import Vue from 'vue'
import Vuex from 'vuex'
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
