import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/Home'
import Product from '@/modules/product'
import Detail from '@/modules/product/detail'
import List from '@/modules/product/list'
import Cart from '@/modules/cart'
import Comfirm from '@/modules/cart/comfirm'

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
      path:"/pro",
      component:{
            template:`<div>
          
            <transition name="fade" mode="out-in">
              <keep-alive>
                <router-view class="view"></router-view>
              </keep-alive>
            </transition>
         
        </div>`
      },
      children:[
        {
          path: '/list/:class2Id/:id',
          name: 'list',
          component: List
        },
        {
          path: '/detail/:product_id',
          name: 'detail',
          component: Detail
        },
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/comfirm',
      name: 'comfirm',
      component: Comfirm
    }
  ]
})
