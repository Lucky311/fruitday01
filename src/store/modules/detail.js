/**
 * Created by Administrator on 2018/1/23.
 */
import Vue from 'vue'

const categoryDetail = {
  state:{
    commentsData:[],
    commentPic:[],
     categoryDetail:{
      templatePhoto:[],
      productInfo:{},
      sale:{},
      
    },
    commentData:{data:[],num:{}},
    tabNum: 0,
    listCount:9999,
    listPage:1,
    listAllLoaded: false,
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
    },
    listAllLoaded:state=>{
      if(state.listPage*20>=state.listCount){
        return true
      }else{
        return false
      }
    },
    commentsData:(state)=>{
      return state.commentsData
    },
    commentPic:(state)=>{
      return state.commentPic
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
    },
    setComments(state,{commentsData,page}){
      // state.commentsData = commentsData
      state.listPage = page //把页面保存起来
      // console.log(state.listPage === 1);
      if(state.listPage===1){ //第一页就直接赋值
        state.commentsData = commentsData;
      }else{//更多数据需要 和之前的数据拼接
        
        state.commentsData = state.commentsData.concat(commentsData)
      }
    },
    setCommentPic(state,payload){
      state.commentPic = payload.commentPic
    },
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
    },
    getComments({commit},{page,id,show,callback}){
      Vue.prototype.axios(`/fruitday/v3/comment/list_by_product_id?product_id=${id}&curr_page=${page}&num_per_page=20&limit=20&show=${show}`).then(res=>{
        const comments = res.data.data
        console.log(comments)
        commit('setComments',{commentsData:comments,page})
        callback && callback()
      })    
    },
    getCommentPic({commit},{id}){
      Vue.prototype.axios(`/fruitday/v3/comment/list_by_product_id?product_id=${id}&curr_page=1&num_per_page=20&limit=20&show=&comment_type=1`).then(res=>{
        const commentPic = res.data.data
        commit('setCommentPic',{commentPic})
      })
    }
  }
}
 export default categoryDetail
