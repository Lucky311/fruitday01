/**
 * Created by Administrator on 2018/1/23.
 */
import Vue from 'vue'

const config = {
  state:{
    bannerData:{
      mainBanners:[{
        content:[]
      },{
        content:[]
      },{
        content:[]
      },{
        content:[]
      },{
        content:[]
      },{
        content:[]
      },{
        content:[]
      },{
        content:[]
      }]
    }
  },
  getters:{
    pics:state=>{
      return state.bannerData.mainBanners[0].content
    },
    brand:state=>{
      return state.bannerData.mainBanners[1].content
    },
    sortIndex:state=>{
      return state.bannerData.mainBanners[2].content
    },
    item1:state=>{
      return state.bannerData.mainBanners[5].content
    },
    floor1:state=>{
      return state.bannerData.mainBanners[6].content
    },
    product1:state=>{
      return state.bannerData.mainBanners[7].content
    }

  },
  mutations:{
    setBannerData(state,payload){
      state.bannerData = payload.bannerData
    }
  },
  actions:{
    getBannerData({commit},payload){
      Vue.prototype.axios.get('/fruitday/v3/ad/homepage?connect_id=&type=2&lonlat=116.25153%2C40.11623&ad_code=110114&tab_id=').then(res=>{
        const banner = res.data.data.banner
        console.log(res.data.data.banner)
        commit('setBannerData',{bannerData:banner})
      })
    }

  }
}
 export default config
