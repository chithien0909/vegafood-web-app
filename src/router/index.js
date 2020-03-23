import Router from 'vue-router'
const HomeComponent = () => import('@/components/HomeComponent/HomeComponent');
const ShopComponent = () => import('@/components/ShopComponent/ShopComponent');
const WishlistComponent = () => import('@/components/WishlistComponent/WishlistComponent.vue');
const ProductSingleComponent = () => import('@/components/ProductSingleComponent/ProductSingleComponent.vue');
const CartComponent = () => import('@/components/CartComponent/CartComponent.vue');
const CheckoutComponent = () => import('@/components/CheckoutComponent/CheckoutComponent.vue');
const AboutComponent = () => import('@/components/AboutComponent/AboutComponent.vue');
const ContactComponent = () => import('@/components/ContactComponent/ContactComponent.vue');
const BlogComponent = () => import('@/components/BlogComponent/BlogComponent.vue');
const LoginComponent = () => import('@/components/LoginComponent/LoginComponent.vue');
const RegisterComponent = () => import('@/components/RegisterComponent/RegisterComponent.vue');

//Admin import
const DashboardComponent = () => import("../admin/components/DashboardComponent/DashboardComponent.vue");
const ChartComponent = () => import("../admin/components/ChartComponent/ChartComponent.vue");
const ProductsTableComponent = () => import("../admin/components/ProductsTableComponent/ProductsTableComponent.vue");
const UsersTableComponent = () => import("../admin/components/UsersTableComponent/UsersTableComponent.vue");
const OrderTableComponent = () => import("../admin/components/OrderTableComponent/OrderTableComponent.vue");
const MessengerComponent = () => import("../admin/components/MessengerComponent/MessengerComponent.vue");
const PostComponent  = () => import("../admin/components/PostComponent/PostComponent.vue");
const Admin = () => import("../Admin.vue");
const App = () => import("../App.vue");

import {store} from '../store/store';

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      exact: true,
      component: App,
      children: [
        {
          path: '/',
          name:'HomeComponent',
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
          component:LoginComponent
        },

        {
          path:'/register',
          name:'RegisterComponent',
          component:RegisterComponent,
        },
      ]
    },
    {
      path: '/dashboard',
      exact: true,
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: '/',
          exact: true,
          component: DashboardComponent,
          name: 'DashboardComponent'
        },
        {
          path: 'chart',
          exact: true,
          name: 'ChartComponent',
          component: ChartComponent
        },
        {
          path: 'products',
          exact: true,
          name: 'ProductsTableComponent',
          component: ProductsTableComponent
        },
        {
          path: 'users',
          exact: true,
          name: 'UsersTableComponent',
          component: UsersTableComponent
        },
        {
          path: 'orders',
          exact: true,
          name: 'OrderTableComponent',
          component: OrderTableComponent
        },
        {
          path: 'messenger',
          exact: true,
          name: 'MessengerComponent',
          component: MessengerComponent
        },
        {
          path: 'post',
          exact: true,
          name: 'PostComponent',
          component: PostComponent
        },
      ],
    }
  ],
});
router.beforeEach(async (to, from, next) => {
  console.log(to.name);
  if(to.name === "LoginComponent" || to.name === "RegisterComponent"){
    const isAuth = store.dispatch('isAuth');
    if(isAuth){
      next({name: "HomeComponent"})
    } else {
      next();
    }
  }
  next();
});
export default router;
