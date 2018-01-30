<template>
  <div class="content">
     <div class="comment-tab-box">
            <div class="tips">
                <i class="iconfont" @click="commentChange" :class="{'icon-duihao-copy':flag}">√</i>
                只看有内容的评价
            </div>
     </div>
     <div class="load-wrap">
         <mt-loadmore 
            :top-method="loadTop" 
            :bottom-method="loadBottom" 
            :bottom-all-loaded="listAllLoaded" 
            ref="loadmore"
        >       
            <div class="comment-con-chief" v-for="(ele,index) in commentsData" :key="ele.index"> 
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
                <div class="comment-img" v-if="ele.images"><p v-for="(img,index) in ele.images" :key="index"><img :src="img"></p></div>
            </div> 
        </mt-loadmore>
    </div> 
</div>
</template>
<script>
    import { mapGetters , mapActions } from 'vuex'

    export default{
        data(){
            return {
                 flag:1,             
                 page:1
            }
        },
        computed: {
            ...mapGetters(['commentsData','commentData','num','listAllLoaded'])
        },
        methods:{
            ...mapActions(['getComments']),
            loadTop() {
                console.log("下拉刷新")
                this.page = 1;
                const id = this.$route.params.product_id
                const show = this.flag
                this.getComments({
                    page:this.page,
                    callback:()=>{
                        this.$refs.loadmore.onTopLoaded();
                    },
                    id,
                    show
                })
               
            },
            loadBottom() {
                console.log("上拉加载")
                this.page++;
                const id = this.$route.params.product_id
                const show = this.flag
                this.getComments({
                    page:this.page,
                    callback:()=>{
                        this.$refs.loadmore.onBottomLoaded();
                    },
                    id,
                    show
                })

            },
            commentChange(){
                this.flag === 1? this.flag=0:this.flag=1 
                const page = this.page
                const show = this.flag
                const id = this.$route.params.product_id
                this.getComments({page,id,show})    
            }
        },
        mounted(){
                const page = this.page
                const id = this.$route.params.product_id
                const show = this.flag
                this.getComments({page,id,show})
                

        }
     }
</script>
<style scoped>
.content{
    overflow: auto;
}
    .load-wrap{
        height: 90vh;
        
    }
   .comment-con-chief {
       background:#fff;
        padding: .15rem .1rem .15rem .1rem;
        color: #3a3a3a;
    }
    .comment-con-chief>.comment-info {
        height: .36rem;
        line-height: .36rem;
    }
    .comment-con-chief>.comment-level {
        height: .3rem;
        font-size: .13rem;
        line-height: .3rem;
        color: #878787;
    }
    .comment-con-chief>.comment-msg {
        font-size: .15rem;
        line-height: .2rem;
    }
    .comment-con-chief>.comment-info>.avatar {
        float: left;
        width: .36rem;
        height: .36rem;
        margin-right: .15rem;
        border-radius: 100%;
    }
    .comment-con-chief>.comment-info>.user {
        float: left;
        margin-right: .05rem;
        font-size: .14rem;
    }
    .comment-con-chief>.comment-info>.date {
        float: right;
        font-size: .13rem;
        color: #878787;
    }
    .comment-con-chief>.comment-level>span {
        display: inline-block;
        margin-right: .3rem;
    }
    .comment-img{
      height: .56rem;  
    }
    .comment-img img {
        display: block;
        float: left;
        width: .56rem;
        height: .56rem;
        margin: .08rem .08rem 0 0;
    }

.comment-tab-box{
    background:#fff;
    flex: 1;
    overflow: auto;
}
/*评论内容tabs*/
.comment .comment-tab-box>.tips {
    height: .16rem;
    padding: .15rem .1rem;
    font-size: .12rem;
    line-height: .16rem;
    color: #878787;
}
.comment-tab-box>.tips>.iconfont {
    float: left;
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
/*点击变*/
.comment-tab-box>.tips>.iconfont.icon-duihao-copy {
    font-size: .14rem;
    border-color: #ff8000;
    background: #ff8000;
}
</style>
