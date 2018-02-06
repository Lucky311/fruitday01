/**
 * Created by Administrator on 2018/1/23.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import category from './modules/category'
import detail from './modules/detail'
import list from './modules/list'
import goods from './modules/goods'
import cartAddress from './modules/cartAddress'
import cartContent from './modules/cartContent'


Vue.use(Vuex)
  const store = new Vuex.Store({
   modules:{
     home,category,detail,list,cartAddress,cartContent
   }
 })

export default store
