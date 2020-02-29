import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import DashboardComponent from '@/components/DashboardComponent/DashboardComponent.vue';
import ChartComponent from '@/components/ChartComponent/ChartComponent.vue';
import ProductsTableComponent from '@/components/ProductsTableComponent/ProductsTableComponent.vue';
import UsersTableComponent from '@/components/UsersTableComponent/UsersTableComponent.vue';
import OrderTableComponent from '@/components/OrderTableComponent/OrderTableComponent.vue';
import MessengerComponent from '@/components/MessengerComponent/MessengerComponent.vue';

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'DashboardComponent',
      component: DashboardComponent
    },
    {
      path: '/chart',
      name: 'ChartComponent',
      component: ChartComponent
    },
    {
      path: '/products',
      name: 'ProductsTableComponent',
      component: ProductsTableComponent
    },
    {
      path: '/users',
      name: 'UsersTableComponent',
      component: UsersTableComponent
    },
    {
      path: '/orders',
      name: 'OrderTableComponent',
      component: OrderTableComponent
    },
    {
      path: '/messenger',
      name: 'MessengerComponent',
      component: MessengerComponent
    },
  ]
})
