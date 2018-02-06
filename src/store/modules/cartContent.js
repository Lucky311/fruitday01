/**
 * Created by Administrator on 2018/1/23.
 */
import Vue from 'vue'
import { MessageBox } from 'mint-ui';
const cartContent = {
  state:{
    cartContent:{}
  },
  getters:{
      products:state => state.cartContent.products,
      total:state => state.cartContent.total,
      alerts:state => state.cartContent.alerts,
      allSeleted:state=>{
        let selected = true;
        state.cartContent.products.forEach((ele)=> {
          if(!ele.selected){
            selected = false;
          }
        });
         return {selected}
      }
    },
  mutations:{
    setCartContent(state,{cartContent,selected}){
      state.cartContent = cartContent
      state.cartContent.products.forEach((ele)=> {        
            ele.selected = !selected;
    })
    },
    setChangeSelect(state,{cartContent}){
      state.cartContent = cartContent
    },
    
  },
  actions:{
    getCartContent({commit},{selected}){
      let status = 'get'
      if(selected){
        status='unselect_all'
      }else{
        status='select_all'
      }
      Vue.prototype.axios(`/fruitday/v3/cart/${status}?connect_id=acbaapb0qocjrmtfpapgiqhop0&store_id_list=3&item_id=`).then(res=>{
        const cartContent = res.data.cart
        commit('setCartContent',{cartContent,selected})
      })
    },
    changeSelect({commit},{ele}){
      const itemid = ele.item_id
      const select = ele.selected
      let selected = ''
      if(select){
        selected='unselect'  
      }else{
        selected='select'
      }
      console.log(ele)
      Vue.prototype.axios(`/fruitday/v3/cart/${selected}?connect_id=acbaapb0qocjrmtfpapgiqhop0&store_id_list=3&item_id=${itemid}`).then(res=>{
        const cartContent = res.data.cart
        // console.log(payload)
        commit('setChangeSelect',{cartContent})
      })
    },
    changeNum({commit},{selected,ele}){
      const itemid = ele.item_id
      let num = 'get'
      if(selected=='decrease'){
        if(ele.qty==1){
          console.log(ele.qty);
          MessageBox.confirm('', {
                message: '确定要删除'+ele.name,
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }).then(action => {
                if (action == 'confirm') {
                    num='remove' 
                    Vue.prototype.axios(`/fruitday/v3/cart/${num}?connect_id=acbaapb0qocjrmtfpapgiqhop0&store_id_list=3&item_id=${itemid}`).then(res=>{
                      const cartContent = res.data.cart
                      commit('setChangeSelect',{cartContent})
                    })
                }
            }).catch(err => {
                if (err == 'cancel') {
                    console.log('取消');
                }
            });
        }else{
          num='decrease'  
        }
      }else if(selected=='increase'){
        num='increase'
      }
      console.log(num)
      Vue.prototype.axios(`/fruitday/v3/cart/${num}?connect_id=acbaapb0qocjrmtfpapgiqhop0&store_id_list=3&item_id=${itemid}`).then(res=>{
        const cartContent = res.data.cart
        commit('setChangeSelect',{cartContent})
      })
    },
  }
}
 export default cartContent
