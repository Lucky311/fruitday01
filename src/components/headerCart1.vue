<template>
  <div>
    <header>
            <nav>
                
                <ul>
                    <li><slot name="left"></slot></li>
                    <li>{{tit}}</li>
                    <li><slot name="right"></slot></li>
                </ul>
                
            </nav>
        </header>
  </div>
</template>
<script>
    import { mapGetters , mapActions } from 'vuex'

    export default{
    props: {
      tit: {
        type: String,
        default: '头部'
      }
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
        font-weight: bold;
        color: #75a739;
    }
    header nav ul{
         width: 100%; 
        display: flex;
        justify-content: space-between;
        /*flex: 1; */
        font-size: .17rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
     header nav ul li{
        margin: 0 .06rem;
        font-size: .16rem;
        text-align: center;
        color: #75a739;
      }    
    header nav a{
        margin-right: .08rem;
    }
    .active{
        color: #65a032;
        border-bottom: .02rem solid #65a032;
    }
</style>
