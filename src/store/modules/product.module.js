import axios from "../api";
let cart = window.localStorage.getItem('cart');
// let cartCount = window.localStorage.getItem('cartCount');
const state = {
  products:[],
  qty:1,
  cart: cart ? JSON.parse(cart) : [],
  // cartCount: cartCount ? parseInt(cartCount) : 0,
};
const getters = {
  products(state){
    return state.products;
  },
  cart(state){
    return state.cart;
  },
  // getNumberOfProducts: state => (state.all) ? state.all.length : 0,
  getNumberOfProducts(state){
    let totalProducts = state.cart.reduce((total, item) => total + item.qty,0);
    if(state.cart){
      return totalProducts;
    }
    return 0;
  }
};

const mutations = {
  FETCH_PRODUCTS(state, products){
    state.products = products;
  },
  ADD_TO_CART(state, product){
    let found = state.cart.findIndex(item => {
            return item._id === product._id;
          });
          if(found > -1){
            state.cart[found].qty+=1;
          }else{
            product.qty = 1;
            state.cart.push(product);
          }
        // state.cartCount++;
        this.commit('saveCart');
  },
  saveCart(state) {
    window.localStorage.setItem('cart', JSON.stringify(state.cart));
  },
  REMOVE_CART(state, product){
    if (confirm("Do you really want to delete?")) {
      state.cart.splice(product, 1);
      this.commit('saveCart');
    }
  },
};

const actions = {
  fetchProducts({commit}){
    axios.get('/product')
      .then(res =>res.data.data)
      .then(products => {
        commit('FETCH_PRODUCTS', products)
      })
  },
  addToCart({commit}){
    commit('ADD_TO_CART', product);
  },
  removeCart({commit}){
    commit('REMOVE_CART', product);
  },
};
export default {
  state,
  getters,
  mutations,
  actions
};
