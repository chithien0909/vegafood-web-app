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
  isLogin: state => !!state.token,
  getToken(state) {
    state.token = localStorage.getItem('token');
    return state.token;
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
    // delete axios.defaults.headers.common['Authorization'];
  },
  CURRENT_USER(state, user){
    state.user = user;
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
    commit('LOGOUT');
  },
  currentUser({dispatch, commit}){
    console.log(localStorage.getItem('token'));
    axios.get('/auth/current-user')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        const error = err.response.data.message;
        console.log(error);
      })
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
