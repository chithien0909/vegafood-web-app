import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import axios from './api';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    status:'',
    err:'',
    username:'',
    token: localStorage.getItem('token') || '',
    islogin:{}
    // token: localStorage.getItem('token') || '',
  },
  getters:{
    status(state){
      return state.status;
    },
    error(state){
      return state.err;
    },
    isLogin: state => !!state.token,
  },
  mutations:{
    UPDATE_STATUS(state, status){
      state.status = status;
    },
    ERROR_STATUS(state, err){
      state.err = err;
    },
    SUCCESS_STATUS(state, token, islogin){
      state.islogin = islogin;
      state.token = token;
    },
    LOGOUT(state){
      state.status = '';
      state.token = '';
    }
  },
  actions:{
    login({commit}, payload){
      axios.post('login', payload)
        .then(res => {
          const token = res.data.token;
          const mess = res.data.message;
          localStorage.setItem('token', token);
          if(token){
            axios.defaults.headers.common['Authorization'] = token;
          }
          commit('SUCCESS_STATUS', token, mess)
        })
        .catch(err => console.log(err.message))


    },
   register({commit}, {last_name, first_name , username, email, password}){
     axios.post('register', {username, email, password,last_name, first_name})
       .then(res => res.data)
       .then(data => {
         commit('UPDATE_STATUS', data.message);
       })
       .catch(err=> {
         const error = err.response.data.message;
         commit('ERROR_STATUS', error);
       })
   },
    logout({commit}){
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
      commit('LOGOUT');
    }
  }
});
