<!-- 模板 -->
<template>
    <div class="comment">
       <div id="good-comment-star">
           <dl class="comment-level-item"> 
               <dt>
                   <span>{{commentData.good}}%</span>
                   <span>好评</span>
               </dt>
               <dd>
                  <div> 
                     <span class="pull-left">口感</span>  
                    <img src="/fruitday/content/images/main/lighting_star@3x-cedc664b96.png">
                    <img src="/fruitday/content/images/main/lighting_star@3x-cedc664b96.png">  
                    <img src="/fruitday/content/images/main/lighting_star@3x-cedc664b96.png">    
                    <img src="/fruitday/content/images/main/lighting_star@3x-cedc664b96.png">
                    <img src="/fruitday/content/images/main/half_star@3x-f43e6f0b42.png">    
                 </div> 
                 <div> 
                     <span class="pull-left">颜值</span>
                     <img src="/fruitday/content/images/main/lighting_star@3x-cedc664b96.png">
                     <img src="/fruitday/content/images/main/lighting_star@3x-cedc664b96.png">      
                     <img src="/fruitday/content/images/main/lighting_star@3x-cedc664b96.png">  
                     <img src="/fruitday/content/images/main/lighting_star@3x-cedc664b96.png"> 
                     <img src="/fruitday/content/images/main/half_star@3x-f43e6f0b42.png"> 
                 </div>
              </dd> 
            </dl> 
            <div class="comment-tab-menu" id="searchBar" :class="searchBarFixed == true ? 'isFixed' :''"> 
                <ul> 
                    <li @click="changeB(0)" :class="{active:index===0}">评价 {{num.total}}</li>
                    <li @click="changeB(1)" :class="{active:index===1}">晒图 {{num.has_image}}</li> 
                </ul> 
            </div>
        </div>
        <!--所有评价-->
        <div class="comment-item">            
            <comments v-show="commentShow"></comments>
            <!--有图评价-->
            <comment-pic v-show="!commentShow"></comment-pic>
        </div>
    </div>
</template>
<script>
import { mapGetters , mapActions } from 'vuex'

import Comments from '@/components/comments'
import CommentPic from '@/components/commentPic'
    export default{
        components:{
            'comments':Comments,
            'comment-pic':CommentPic
        },
        data(){
            return {
                index:0,
               searchBarFixed:false,
                commentShow:true
            }  
        },
         computed:{
            ...mapGetters(['commentData','num'])
        },
        methods:{
            changeB(val){
                this.index = val
                this.commentShow = !this.commentShow
            },
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop              
                var offsetTop = document.querySelector('#searchBar').offsetTop              
                if (scrollTop > offsetTop) {
                    this.searchBarFixed = true
                } else {
                    this.searchBarFixed = false
                }
            },   
        },
        mounted(){
             window.addEventListener('scroll', this.handleScroll)     
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll)
        }
        
    }
</script>

<style scoped>
#good-comment-star{
    background: #fff !important;
    height: auto;
    position: relative;
}
.comment{
    display: flex;
    flex-direction: column;
}
.comment .comment-level-item {
   
    display: block;
    padding: .2rem .1rem;
    height: .96rem;
}

.comment .comment-level-item>dt {
    float: left;
    width: .56rem;
    /*height: .4rem;*/
    padding: .08rem 0;
    margin-right: .3rem;
    border-radius: 100%;
    background: #ff8000;
    font-size: .16rem;
    color: #fff;
    text-align: center;
}
.comment .comment-level-item>dt span{
    display: block;
}
.comment .comment-level-item>dd {
    float: left;
    width: 2.05rem;
}
.comment .comment-level-item>dd>div {
    height: .24rem;
    line-height: .24rem;
}
.comment .comment-level-item>dd>div>img {
    float: left;
    margin-left: .15rem;
    margin-top: .02rem;
    width: .2rem;
    height: .2rem;
}
.pull-left{
    float: left;
}
.comment .comment-tab-menu {
    padding: .2rem 0;
    border-top: .01rem solid #d8d8d8;
    border-bottom: .01rem solid #d8d8d8;
    background: #fff;
    width: 100%;
    
    }
.comment .comment-tab-menu>ul {
    border: .01rem solid #ff8000;
    border-radius: .06rem;
    text-align: center;
    width: 2.07rem;
    margin: 0 auto;
}
.comment .comment-tab-menu>ul>li {
    display: inline-block;
    min-width: 1rem;
    height: .32rem;
    padding: .05rem;
    line-height: .22rem;
    color: #ff8000;
    
}
.active {
    background: #ff8000;
    color: #fff !important;
}

 .isFixed{
    position:fixed;
    background-color:#Fff;
    top:0.45rem;
    z-index:1;
    
  }

.comment-item{
    background:#fff;
}

</style>