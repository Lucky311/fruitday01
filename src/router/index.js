import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/Home'
import Product from '@/modules/product'
import Detail from '@/modules/product/detail'
import List from '@/modules/product/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/list/:class2Id/:id',
      name: 'list',
      component: List
    },
    {
      path: '/detail/:product_id',
      name: 'detail',
      component: Detail
    }
  ]
})
