<template>
    <div class="footer">
        <div class="footer-item">
          <router-link to="/"><a href="javascript:;">首页</a></router-link>
          <router-link to="/product"><a href="javascript:;">分类</a></router-link>
          <a href="">购物车</a>
          <a href="">我的果园</a>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        }
    }
</script>
<style scoped>
    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        box-shadow: 0 -2px 2px 0 rgba(0,0,0,.15);
        background: #fff;
        height: .42rem;
        font-size: .1rem;
        /*line-height: 1.2;*/
    }
    .footer-item{
      height: .42rem;
      display: flex;
      align-items: center;
      text-align: center;
    }
    .footer-item a{
        display: block;
        width:100%;
        color: #f00;
    }
</style>
