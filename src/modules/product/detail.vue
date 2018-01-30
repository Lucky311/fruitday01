<!-- 模板 -->

<template>
    <div class="detail-cart">
        <header-cart></header-cart>
        <content-cart v-show="tabNum === 0" ></content-cart>
        <pro-detail v-show="tabNum === 1"></pro-detail>
        <comment-star v-show="tabNum === 2"></comment-star>
        <footer-cart></footer-cart>
    </div>
</template>
<script>
import contentCart from '@/components/contentCart'
import proDetail from '@/components/proDetail'
import comment from '@/components/comment'

import { mapGetters , mapActions } from 'vuex'

    export default{
         components: {
            "content-cart":contentCart,
            'pro-detail':proDetail,
            'comment-star':comment
        },
        computed: {
            ...mapGetters(['tabNum'])
        }
        
    }
</script>

<style scoped>
   .detail-cart{
       height: auto;
       margin-top: .46rem;
       margin-bottom: .46rem;
   } 
    
</style>