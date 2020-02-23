import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import HeaderComponent from '@/components/HeaderComponent/HeaderComponent';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      mode: 'history',
      name: 'HelloWorld',
      component: HelloWorld
    }

  ]
})
