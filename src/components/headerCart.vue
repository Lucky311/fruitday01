<template>
  <div>
    <header>
            <nav>
                <a href="javascript:history.go(-1);"><</a>
                <ul>
                    <li @click="changeColor(0)" :class="{active:tabNum==0}">商品</li>
                    <li @click="changeColor(1)" :class="{active:tabNum==1}">详情</li>
                    <li @click="changeColor(2)" :class="{active:tabNum==2}">评价</li>
                </ul>
                <span>...</span>
            </nav>
        </header>
  </div>
</template>
<script>
    import { mapGetters , mapActions } from 'vuex'

    export default{
      data(){
        return(
          {
             headerTabNum: 0,
        })
      },
      computed: {
          ...mapGetters(['tabNum'])
      },
      methods:{
        ...mapActions(['getTabNum']),
        changeColor(index){
 
            this.getTabNum({tabNum:index})
         }
      },
    }
</script>
<style scoped>
   header nav{
        position: fixed;
        z-index: 12;
        top:0;
        left:0;
        border-bottom: .01rem solid #d8d8d8;
        width: 100%; 
        background: #fff;
        color: #75a739;
        height: .45rem;
        line-height: .43rem;
        display: flex;
    }
    header nav a{
        padding-left: .07rem;
        font-size: .26rem;
        font-weight: bold
    }
    header nav ul{
        display: flex;
        justify-content: center;
        flex: 1; 
        font-size: .17rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
     header nav ul li{
        margin: 0 .06rem;
        font-size: .16rem;
        text-align: center;
        color: #3a3a3a;
      }    
    header nav span{
        margin-right: .08rem;
        font-size: .4rem;
        line-height: .14rem
    }
    .active{
        color: #65a032;
        border-bottom: .02rem solid #65a032;
    }
</style>
