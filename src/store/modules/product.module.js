import axios from "../api";
const state = {
  products:[],
  carts: [],
  badge:'0',
  qty: 1,
};
const getters = {
  product(state){
    return state.products;
  },
};

const mutations = {
  SET_PRODUCTS(state, products){
    state.products = products;
  },
  addToCart(state, items){
    const matchingProduct = state.carts.findIndex((item) => {
      return item._id === items._id;
    });
      if (matchingProduct > -1) {
        let quantity = state.carts[matchingProduct].qty+=1;
        localStorage.setItem('carts', JSON.stringify(quantity));
      } else {
        items.qty = 1;
        state.carts.push(items);
      }
    let parsed = JSON.stringify(state.carts);
    localStorage.setItem('carts', parsed);
  },
};

const actions = {
  showProducts({commit}){
    axios.get('/product')
      .then(res =>res.data.data)
      .then(products => {
        commit('SET_PRODUCTS', products)
      })
  },
};
export default {
  state,
  getters,
  mutations,
  actions
};
