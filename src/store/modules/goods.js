/**
 * Created by Administrator on 2018/1/23.
 */
import Vue from 'vue'

const categoryDetail = {
  state:{
    
    categoryDetail:{
      templatePhoto:[],
      productInfo:{},
      sale:{},
      
    },
    commentData:{data:[],num:{}},
    tabNum: 0,
    // listPage:1,
    listCount:9999,
  },
  getters:{
    tabNum: state => state.tabNum,
    swiperDetail:(state)=>{
      return state.categoryDetail.templatePhoto
    },
    categoryDetail:(state)=>{
      return state.categoryDetail
    },
    productInfo:(state)=>{
      return state.categoryDetail.productInfo
    },
    sale:(state)=>{
      if(state.categoryDetail.sale){
        return state.categoryDetail.sale
      }else{
        return {}
      }
      
    },
    productItem:(state)=>{
      return state.categoryDetail.productItem
    },
    data:(state)=>{
      return state.commentData.data
    },
    num:(state)=>{
      return state.commentData.num
    },
    commentData:(state)=>{
      return state.commentData
    }
    
  },
  mutations:{

    setCategoryDetail(state,payload){
      state.categoryDetail = payload.categoryDetail
    },
    setComment(state,{commentData,count}){
      state.commentData = commentData
      state.listCount = count //把总数据 条目保存起来
    },
    setTabNum(state,cateTabNum) {
      state.tabNum = cateTabNum.cateTabNum
    }
  },
  actions:{
    getCategoryDetail({commit},{id}){
      Vue.prototype.axios(`/fruitday/v3/product/detail?store_id_list=3&product_id=${id}&store_id=&delivery_code=3`).then(res=>{
        const categoryD = res.data.data
        commit('setCategoryDetail',{categoryDetail:categoryD})
      })
    },
    getComment({commit},{id}){   
      Vue.prototype.axios(`/fruitday/v3/comment/rate_and_comment?product_id=${id}`).then(res=>{
        const comment = res.data.data
         
        commit('setComment',{commentData:comment,count:comment.num.total})
      })
    },
    getTabNum({commit},{tabNum}){
      let cateTabNum = tabNum
      commit('setTabNum',{cateTabNum})
    }
  }
}
 export default categoryDetail
