// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
//导入公用组件
import headerIndex from './components/headerIndex'
import headerCart from './components/headerCart'
import footer from './components/footer'
import footerCart from './components/footerCart'


import { Swipe, SwipeItem } from 'mint-ui'
import positionIndex from './modules/Home/position'
import { Loadmore ,Lazyload } from 'mint-ui';

Vue.use(Lazyload);
Vue.component(Loadmore.name, Loadmore);
Vue.component(positionIndex.name, positionIndex);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component('header-index',headerIndex)
Vue.component('footer-common',footer)
Vue.component('header-cart',headerCart)
Vue.component('footer-cart',footerCart)

Vue.config.productionTip = false
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
