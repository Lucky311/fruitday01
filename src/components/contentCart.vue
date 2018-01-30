<template>
    <div>
        <!--轮博-->
        <div class="swipe-wrapper">
            <mt-swipe :auto="4000">
            <mt-swipe-item v-for="ele in swiperDetail" :key="ele.id">
                <img :src="ele.middle_image" alt="">
            </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="info-item" v-if="productInfo.price">
            <h3>{{productInfo.product_name}}<span v-if="sale.user_qty_limit">[限购{{sale.user_qty_limit}}份]</span></h3>
            <h4>{{productInfo.product_desc}} </h4>
            <div class="price">
                <small>￥</small>
                <em>{{parseInt(sale.secKillPrice || productInfo.price)}}</em>
                <small>.{{productInfo.price.substring(productInfo.price.length-2,productInfo.price.length-1)}}</small>
                 <del v-if="sale.secKillPrice">￥{{productInfo.price}}</del>
            </div> 
            <div class="size">
                <span 
                    v-for="(ele,index) in productItem" 
                    :class="{backgro:index==defaultb}" 
                    :key="ele.id"
                    @click="changeBack(index)"
                >
                     <strong>{{ele.volume}}</strong>
                     <small>  明日达  </small>
                </span>  
                <em>{{categoryDetail.sendTimeMsg}}</em>
                <h5 v-if="productInfo.op_weight">{{productInfo.op_weight}}</h5>
            </div>
       </div>
       <!--收货地址-->
        <div class="address-item">
            <span class="title">送至</span>
            <h4> 笨厨炒菜盖饭 </h4> 
        </div>
        <div class="tips-item"> <span>48小时退换货</span> <span>全程冷链</span> <span>果园标准</span> <span>全球直采</span></div>
        <!--评价-->
        <div class="comment-item" id="first-comment">
            <div class="comment-total">
                <span class="pull-right">
                    <small class="orange">{{commentData.good}}%</small>好评
                </span>评价({{num.total}})
            </div>   
            <div class="comment-con-chief" v-for="ele in data" :key="ele.id"> 
                <div class="comment-info"> 
                    <img class="avatar" :src="ele.userface" alt=""> 
                    <span class="user">{{ele.user_name}}</span>
                    <span class="date">{{ele.time.split(" ")[0]}}</span> 
                </div> 
                <div class="comment-level">
                    <span>口感 {{ele.star_eat}}</span>
                    <span>颜值 {{ele.star_show}}</span>
                </div> 
                <div class="comment-msg">{{ele.content}}</div>
            </div> 
            <div class="text-center">
                <span class="comment-view" @click="more">查看全部评论</span>
            </div>
        </div>
    </div>
    
      
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
   export default{
        data(){
            return {
               defaultb:0
            }
        },
        computed:{
            ...mapGetters(['swiperDetail','categoryDetail','productInfo','sale','productItem','data','commentData','num'])
        },
        methods:{
            ...mapActions(['getCategoryDetail','getComment','getTabNum']),
            changeBack(index){
                this.defaultb = index
            },
            more(){
                this.getTabNum({tabNum:2})
            }
        },
        mounted(){
            const id = this.$route.params.product_id
            this.getCategoryDetail({id})
            this.getComment({id})
            
        }
    }
</script>
<style scoped>
    .swipe-wrapper{
        height: 375px;
        
    }
    .swipe-wrapper img{
        display: block;
        width:100%;
        border: 0;
        height: 375px;
     }
     .info-item{
        padding: .1rem;
        margin-bottom: .1rem;
        background: #fff;
        text-align: center;
     }
     .info-item h3 {
        font-size: .18rem;
        color: #3a3a3a;
        margin: 0 0 .05rem;
        font-weight: 400;
        line-height: 1;
    }
    .info-item h4{
        font-size: .14rem;
        color: #878787;
        margin: 0 0 .05rem;
        font-weight: 400;
        line-height: 1;
    }
    .info-item .price {
        margin-bottom: .1rem;
    }
    .info-item .price small {

        font-size: .12rem;
        color: #ff8000;
    }
    .info-item .size small {
        display: block;
        font-size: .08rem;
    }
    .info-item .price em {
        font-size: .3rem;
        color: #ff8000;
    }
    .info-item .price del {
        margin: 0 0 0 .05rem;
        color: #878787;
        font-size: .12rem;
    }
    .info-item .size>span {
        display: inline-block;
        min-width: .5rem;
        border: .01rem solid #dcdcdc;
        border-radius: .04rem;
        padding: .04rem .1rem;
        margin: 0 .05rem;
        font-size: .14rem;
        height: .3rem;
        line-height: 1.2;
        color: #3a3a3a;
        text-align: center;
        margin-bottom: .1rem;
    }
    .backgro{
        background: #ff8000;
        color: #fff !important;
     }
    .info-item .size em {
        font-size: .1rem;
        display: block;
        color: #ff8000;
    }
    .address-item {
        position: relative;
        padding: .1rem .1rem .1rem .45rem;
        margin-bottom: .1rem;
        background: #fff;
}
    .address-item>.title {
        top: .13rem;
        right: auto;
        bottom: auto;
        left: .1rem;
        position: absolute;
        font-size: .12rem;
        color: #878787;
    }
    .address-item>h5 {
        margin: 0;
        height: .25rem;
        width: 100%;
        font-size: .13rem;
        line-height: .25rem;
        color: #3a3a3a;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .tips-item {
        position: relative;
        padding: .1rem .1rem;
        margin-bottom: .1rem;
        background: #fff;
    }
    /*评价*/
    .comment-item {
        padding: .1rem 0;
        margin-bottom: .1rem;
        background: #fff;
    }
    .comment-item>.comment-total {
        margin-left: .1rem;
        padding-right: .1rem;
        height: .25rem;
        border-bottom: .01rem solid #d8d8d8;
        font-size: .12rem;
        color: #878787;
    }
    .comment-item>.comment-con-chief {
        margin-left: .1rem;
        padding: .15rem .1rem .15rem 0;
        color: #3a3a3a;
    }
    .comment-item>.comment-con-chief>.comment-info {
        height: .36rem;
        line-height: .36rem;
    }
    .comment-item>.comment-con-chief>.comment-level {
        height: .3rem;
        font-size: .13rem;
        line-height: .3rem;
        color: #878787;
    }
    .comment-item>.comment-con-chief>.comment-msg {
        font-size: .15rem;
        line-height: .2rem;
    }
    .comment-item>.comment-con-chief>.comment-info>.avatar {
        float: left;
        width: .36rem;
        height: .36rem;
        margin-right: .15rem;
        border-radius: 100%;
    }
    .comment-item>.comment-con-chief>.comment-info>.user {
        float: left;
        margin-right: .05rem;
        font-size: .14rem;
    }
    .comment-item>.comment-con-chief>.comment-info>.date {
        float: right;
        font-size: .13rem;
        color: #878787;
    }
    .comment-item>.comment-con-chief>.comment-level>span {
        display: inline-block;
        margin-right: .3rem;
    }
   .comment-item .comment-view {
        display: inline-block;
        height: .18rem;
        margin-top: .1rem;
        padding: 0 .15rem;
        border: .01rem solid #878787;
        border-radius: .76rem;
        font-size: .12rem;
        line-height: .2rem;
        color: #878787;
        
    }
    .text-center {
        text-align: center;
    }
</style>
