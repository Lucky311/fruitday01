<template>
  <div>
     <div class="comment-con-chief" v-for="ele in commentPic" :key="ele.id"> 
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
            <div class="comment-img" ><p v-for="(img,index) in ele.images" :key="index"><img :src="img"></p></div>
        </div> 
    </div>
</template>
<script>
    import { mapGetters , mapActions } from 'vuex'

    export default{
       computed: {
            ...mapGetters(['commentPic'])
        },
      methods:{
        ...mapActions(['getCommentPic']),
      },
      mounted(){
            const id = this.$route.params.product_id
            this.getCommentPic({id})
        }
    }
</script>
<style scoped>
   .comment-con-chief {
        margin-left: .1rem;
        padding: .15rem .1rem .15rem 0;
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
        float: left;
        width: .56rem;
        height: .56rem;
        margin: .08rem .08rem 0 0;
    }
</style>
