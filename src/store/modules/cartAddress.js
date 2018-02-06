/**
 * Created by Administrator on 2018/1/23.
 */
import Vue from 'vue'

const cartAddress = {
  state:{
    cartAddress:[] 
  },
  getters:{
      cartAddress:state => state.cartAddress,
    },
  mutations:{
    setCartAddress(state,{cartAddress}){
      state.cartAddress = cartAddress
    }
    
  },
  actions:{
    getCartAddress({commit},payload){
      Vue.prototype.axios(`/fruitday/v3/address/lists?connect_id=acbaapb0qocjrmtfpapgiqhop0`).then(res=>{
        const cartAddress = res.data.data
        console.log(cartAddress[0].address)
        commit('setCartAddress',{cartAddress})
      })
    }
  }
}
 export default cartAddress
