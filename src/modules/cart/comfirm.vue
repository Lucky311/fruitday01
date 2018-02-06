<!-- 模板 -->
<template>
    <div class="cart">
     <header-cart tit="确认订单">
          <a slot="left" href="javascript:history.go(-1);"><</a>
     </header-cart>
     <!--地址-->
     <div id="address-con">
         <a href="javascript:;" class="address" @click="addAddress"> 
             <div class="specific"> 
               <saddress></saddress>
                <i class="icon-morehome">></i> 
            </div>
         </a>
    </div>

        <footer-common></footer-common>
    </div>
</template>
<script>
import { mapGetters , mapActions } from 'vuex'
import headerCart from '@/components/headerCart1'
import saddress from '@/components/address'

    export default{
        components:{
           'header-cart':headerCart,
           saddress
        },
        data(){
            return {
                popupVisible:false,
                selectgood:true,
            }  
        },
        computed: {
          ...mapGetters(['products','total','alerts','allSeleted'])
        },
        
        methods:{
            addAddress(){
                this.popupVisible = true
            },
            addNone(){
                this.popupVisible = false
            },
            toConfirm(){
                this.$router.push({path:"comfirm",query:{}})
            },
            ...mapActions(['getCartContent','changeSelect']),
        },
        mounted(){
            this.getCartContent({})
        }
    }
</script>

<style scoped>
#address-con{
    margin-top: .46rem;
}
 
.address{
    display: block;
    margin-bottom: .1rem;
    background-color: #fff;
}
.address::before{
    content:'';
    display: block;
    width: 100%;
    height: .02rem;
    background-image: url(../../assets/images/border.png)

}
.address::after{
    content:'';
    display: block;
    width: 100%;
    height: .02rem;
    background-image: url(../../assets/images/border.png)

}
.address .specific {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: .4rem;
    padding: .2rem 0;
}
.icon-morehome {
    padding: .1rem .08rem;
    font-style: normal
}

.picker-wrap{
    height: 200px;
    width:100%;
}
.address-prop {
    width: 100%;
    z-index: 91;
    height: 4.45rem;
}
.address-prop>.title {
    height: .4rem;
    padding: 0 .3rem;
    border-bottom: .01rem solid #d8d8d8;
    font-size: .16rem;
    line-height: .4rem;
    color: #3a3a3a;
    text-align: center;
}
.mint-popup-bottom{
     width: 100%;
}
.address-prop>.title>span {
    margin-left: -.2rem;
    color: #bfbfbf;
    float: left;
    font-size: .3rem
}
.address-prop>.scroll {
    width: 100%;
    height: 3.6rem;
    margin-bottom: 0;
}
.address-prop>.new-address {
    display: block;
    height: .45rem;
    background: #ff8000;
    font-size: .18rem;
    line-height: .45rem;
    color: #fff;
    text-align: center;
}
.scroll>ul>li {
    display: flex;
    padding: .15rem .1rem;
    margin: 0;
    border-bottom: .01rem solid #d8d8d8;
    align-items: center
}
section .iconfont{
    display: inline-block;
    width: .14rem;
    height: .14rem;
    margin-right: .1rem;
    border: .01rem solid #bfbfbf;
    background: #fff;
    color: #fff;
    border-radius: 100%;
    line-height: .14rem;
    text-align: center;
}
.selected {
    font-size: .14rem;
    border-color: #ff8000 !important;
    background-color: #ff7e05 !important;
}
.scroll>ul>li>a {
    width: .5rem;
    text-align: right;
    margin-left: .1rem;
    font-size: .12rem;
    color: #ff8000;
}
ul>li .pro-info>h4 {
    height: .15rem;
    margin: 0;
    font-weight: 400;
}
ul>li>a>.icon-qianbitubiao {
    padding: 0;
    /*font-size: .2rem;*/
    font-style: normal;
    color: #878787
}
/*section*/
section{
    margin-bottom: .92rem;
    background-color: #fff;
}
section>.title {
    display: flex;
    justify-content: space-between;
    height: .3rem;
    padding: 0 .1rem;
    font-size: .12rem;
    line-height: .3rem;
    color: #878787;
    border-bottom: .01rem solid #d8d8d8;
}
section ul>li{
    display: flex;
    position: relative;
    padding: .1rem;
    border-bottom: .01rem solid #d8d8d8;
}
section ul>li a{
    display: flex
}
section ul>li .pro-img {
    position: relative;
    width: .9rem;
    height: .9rem;
    margin-right: .1rem;
    border-radius: .04rem;
    overflow: hidden;
}
section ul>li .pro-img>span {
    top: 0;
    right: auto;
    bottom: auto;
    left: auto;
    position: absolute;
    height: .16rem;
    padding: 0 .05rem;
    background: #ff4848;
    font-size: .1rem;
    line-height: .16rem;
    color: #fff;
}
section ul>li .pro-img img{
    display: block;
    width: 100%
}
section ul>li .pro-info {
    height: .9rem;
}
section ul>li .pro-info>h3 {
    margin: 0 0 .05rem;
    height: .3rem;
    font-size: .14rem;
    line-height: .15rem;
    font-weight: 400;
    color: #3a3a3a;
    overflow: hidden;
    text-overflow: ellipsis;
}
ul>li .pro-info>h5 {
    height: .15rem;
    margin: 0 0 .05rem;
    font-weight: 400;
    font-size: .1rem;
    line-height: .15rem;
    color: #878787;
}
ul>li .pro-info>h5>span {
    float: left;
    margin-right: .1rem;
    font-size: .12rem;
}
ul>li .pro-info>p {
    font-size: .12rem;
    color: #bfbfbf;
}
ul>li .pro-info>p>.tag {
    display: inline-block;
    margin-left: .05rem;
    padding: .02rem .02rem .01rem;
    line-height: 1;
    color: #fff;
    font-size: .1rem;
    border-radius: .02rem;
}
ul>li>.count .plus>i {
    display: inline-block;
    width: .2rem;
    height: .2rem;
    border: .01rem solid #bfbfbf;
    border-radius: 100%;
    font-size: .16rem;
    line-height: .2rem;
    color: #ff8000;
    text-align: center;
}
ul>li>.count .num {
    display: inline-block;
    min-width: .2rem;
    height: .5rem;
    font-size: .16rem;
    line-height: .5rem;
    color: #3a3a3a;
    margin-right: .1rem;
    text-align: center;
}
ul>li>.count .minus,ul>li>.count .plus {
    display: inline-block;
    /*padding: .1rem;*/
}
ul>li>.count .minus>i, ul>li>.count .plus>i {
    display: inline-block;
    width: .2rem;
    height: .2rem;
    border: .01rem solid #bfbfbf;
    border-radius: 100%;
    font-size: .16rem;
    line-height: .2rem;
    color: #ff8000;
    text-align: center;
}
ul>li>.count {
    top: auto;
    right: .1rem;
    bottom: 0;
    left: auto;
    position: absolute;
    display: box;
    height: .5rem;
}
ul>li .pro-info>p .price small,ul>li .pro-info>p .price em {
    color: #ff8000;
}
ul>li .pro-info>p .price em{
    font-size: .18rem
}
/*优惠*/
.section {
    margin-bottom: .1rem;
    background-color: #fff;
    padding: .1rem;   
}
.cart-tips>a{
    display:flex;
}
.cart-tips>a>.tag {
    display: inline-block;
    padding: 0 .02rem;
    text-align: center;
    width: .48rem;
    background: #ff8000;
    height: .14rem;
    margin-right: .05rem;
    font-size: .1rem;
    line-height: .14rem;
    color: #fff;
    border-radius: .02rem;
}
.cart .cart-tips>a>.info {
    font-size: .12rem;
    color: #878787;
    line-height: .14rem;
}
/*foot*/
.base-nav {
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    position: fixed;
    display: flex;
    text-align: center;
    height: .5rem;
    align-items: center;
    box-shadow: 0 -0.02rem 0.02rem 0 rgba(0,0,0,.15);
    background: #fff;
}
.base-nav>span {
    font-size: .12rem;
    color: #878787;
}
.base-nav>span>.icon-duihao-copy {
    font-size: .14rem;
    border-color: #ff8000;
    background: #ff8000;
}
.base-nav>span>.iconfont {
    float: left;
    width: .14rem;
    height: .14rem;
    margin: 0 .05rem 0 .1rem;
    border: .01rem solid #bfbfbf;
    color: #fff;
    border-radius: 100%;
    line-height: .14rem;
    text-align: center;
}
.base-nav>.info {
    flex: 1;
    padding-right: .1rem;
    text-align: right;
    color: #878787;
    font-size: .12rem;
}
.base-nav>.info>.total {
    font-size: .14rem;
    color: #878787;
}
.cart~.base-nav>.info>.total small {
    font-size: .1rem;
}
.base-nav>.info>.total em, .cart~.base-nav>.info>.total small {
    color: #ff8000;
}
.base-nav>.info>.total em {
    font-size: .2rem;
}
.base-nav>.info>.discount {
    font-size: .1rem;
    color: #878787;
    text-decoration: underline;
}
.base-nav>.account {
    display: inline-block;
    min-width: 1rem;
    height: .5rem;
    padding: 0 .05rem;
    background: #ff8000;
    font-size: .16rem;
    line-height: .5rem;
    color: #fff;
    text-align: center;
}
.base-nav>.info>.total em,.base-nav>.info>.total small {
    color: #ff8000;
}
.dis {
    background: #bfbfbf !important;
}
</style>