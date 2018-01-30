/**
 * Created by Administrator on 2018/1/23.
 */
import Vue from 'vue'

const categoryList = {
  state:{
    categoryData:{
      childrenList:[{class2Name:{},class3Group:[]}],
      classOneGroup:[]
    }
  },
  getters:{
    
    classOneGroup:(state)=>{
      return state.categoryData.classOneGroup
    },
    childrenList:(state)=>{
      return state.categoryData.childrenList
    }
  },
  mutations:{
    setCategoryData(state,payload){
      state.categoryData = payload.categoryData
    }
  },
  actions:{
    getCategoryData({commit},{id}){
      Vue.prototype.axios('/fruitday/v3/product/category_list?store_id_list=3&class_id='+id).then(res=>{
        const category = res.data.data
        commit('setCategoryData',{categoryData:category})
      })
    }
  }
}
 export default categoryList
