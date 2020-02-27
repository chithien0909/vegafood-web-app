import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import HomeComponent from '@/components/HomeComponent/HomeComponent';
import ShopComponent from '@/components/ShopComponent/ShopComponent'
import WishlistComponent from '@/components/WishlistComponent/WishlistComponent.vue';
import ProductSingleComponent from '@/components/ProductSingleComponent/ProductSingleComponent.vue';
import CartComponent from '@/components/CartComponent/CartComponent.vue';
import CheckoutComponent from '@/components/CheckoutComponent/CheckoutComponent.vue';
import AboutComponent from '@/components/AboutComponent/AboutComponent.vue';
import ContactComponent from '@/components/ContactComponent/ContactComponent.vue';
import BlogComponent from '@/components/BlogComponent/BlogComponent.vue';
import LoginComponent from '@/components/LoginComponent/LoginComponent.vue';
import RegisterComponent from '@/components/RegisterComponent/RegisterComponent.vue';
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
    },
    {
      path:'/shop',
      name:'ShopComponent',
      component:ShopComponent,
    },
    {
      path:'/wishlist',
      name:'WishlistComponent',
      component:WishlistComponent,
    },
    {
      path:'/product-single',
      name:'ProductSingleComponent',
      component:ProductSingleComponent,
    },
    {
      path:'/cart',
      name:'CartComponent',
      component:CartComponent,
    },
    {
      path:'/checkout',
      name:'CheckoutComponent',
      component:CheckoutComponent,
    },
    {
      path:'/about',
      name:'AboutComponent',
      component:AboutComponent,
    },
    {
      path:'/contact',
      name:'ContactComponent',
      component:ContactComponent,
    },
    {
      path:'/blog',
      name:'BlogComponent',
      component:BlogComponent,
    },
    {
      path:'/login',
      name:'LoginComponent',
      component:LoginComponent,
    },
    {
      path:'/register',
      name:'RegisterComponent',
      component:RegisterComponent,
    },

  ]
})
