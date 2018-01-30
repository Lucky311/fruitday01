/**
 * Created by Administrator on 2018/1/23.
 */
import Vue from 'vue'

const categoryList = {
  state:{
    categoryList:{
      fatherClass:{},
      brotherClass:[],
      productGroup:[]
    }
  },
  getters:{
    listItem:(state)=>{
      return state.categoryList.fatherClass.name
    },
    listSwiper:(state)=>{
      return state.categoryList.brotherClass
    },
    productGroup:(state)=>{
      return state.categoryList.productGroup
    }
  },
  mutations:{
    setCategoryList(state,payload){
      state.categoryList = payload.categoryList
    }
  },
  actions:{
    getCategoryList({commit},{class2Id,id,sortType}){
      Vue.prototype.axios(`/fruitday/v3/product/sub_category_list?store_id_list=3&class2_id=${class2Id}&class3_id=${id}&sort_type=${sortType}&tms_region_type=1`).then(res=>{
        const categoryL = res.data.data
        commit('setCategoryList',{categoryList:categoryL})
      })
    }
    
  }
}
 export default categoryList
