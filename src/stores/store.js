import Vue from 'vue'
import Vuex from 'vuex'
import authModule from './modules/auth.module';
import router from '../router/index';
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    auth: "123"
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
