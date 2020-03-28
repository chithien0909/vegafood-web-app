import axios from "../api";

const state = {
  status: '',
  err:'',
  token: localStorage.getItem('token') || '',
  isLogin: false,
  expire: null,
  user: {},
};

const getters = {
  status(state){
    return state.status;
  },
  error(state){
    return state.err;
  },
  user: (state) => {
    return state.user;
  },
  isLogin: (state) => {
    return state.isLogin;
  }
};

const mutations = {
  SUCCESS_STATUS(state, status){
    state.status = status;
  },
  ERROR_STATUS(state, err){
    state.err = err;
  },
  SET_TOKEN(state, token){
    state.token = token;
    axios.defaults.headers.common['Authorization'] = token;
    localStorage.setItem('token', token);
  },
  LOGIN(state, {token, expire}){
    state.expire = expire;
    state.token = token;
    state.isLogin = true
  },
  LOGOUT(state){
    state.status = '';
    state.token = '';
    state.user = {};
    localStorage.setItem('token', '');
    commit('SET_IS_LOGIN', false);
    delete axios.defaults.headers.common['Authorization'];
  },
  SET_USER(state, user){
    state.user = user;
  },
  SET_IS_LOGIN(state, payload){
    state.isLogin = payload;
  }
};

const actions = {
  login({dispatch, commit}, payload){
    axios.post('/auth/login', payload)
      .then(response => response.data)
      .then(result =>{
        commit('LOGIN', {
          token: result.token,
          expire: result.expire
        });
        commit('SET_TOKEN', result.token);
        dispatch('directHome');
        dispatch('currentUser');
      })
      .catch(err => console.log(err.message))
  },
  register({dispatch, commit}, {username, email, password}){
    axios.post('/auth/register', {username, email, password})
      .then(response => response.data)
      .then(result => {
        console.log(result);
        commit('SUCCESS_STATUS', result.data.message);
        commit('ERROR_STATUS', '');
        dispatch('directLogin');
      })
      .catch(err=> {
        const error = err.response.data.message;
        commit('SUCCESS_STATUS', '');
        commit('ERROR_STATUS', error);
      })
  },
  logout({commit}){
    localStorage.removeItem('token');
    commit('SET_USER', {});
    commit('LOGOUT');
  },
  currentUser({state, dispatch, commit}){
    dispatch('getToken');
    if(!state.token){
      return;
    }
    axios.get('/auth/current-user')
      .then(response => response.data)
      .then(result => {
        const data = result.data;
        commit('SET_IS_LOGIN', true);
        commit('SET_USER', data);
      })
      .catch(err => {
        const error = err.response.data.message;
      });
  },
  getToken({commit}) {
    const token = localStorage.getItem('token');
    if(token){
      commit('SET_TOKEN', token);
    }
  },
  isAuth({state}) {
    return state.user;
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
