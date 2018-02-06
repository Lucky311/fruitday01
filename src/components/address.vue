<template>
    <div class="infor" v-if="cartAddress[0]"> 
        <span>{{cartAddress[0].name}}</span>
        <span class="tele">{{cartAddress[0].mobile}}</span>
        <span class="tag">{{cartAddress[0].flag}}</span>
        <p>  {{cartAddress[0].address}}  </p>
    </div>  
</template>
<script>
import { mapGetters , mapActions } from 'vuex'
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        computed: {
          ...mapGetters(['cartAddress'])
        },
        mounted(){
            this.getCartAddress()
        },
        methods:{
            ...mapActions(['getCartAddress'])
        },
    }
</script>
<style scoped>
.infor{
    color: #3a3a3a;
    padding-left: .08rem
} 
.infor .tag {
    padding: 0 .05rem;
    font-size: .1rem;
    color: #ff8000;
    border: .01rem solid #ff8000;
    height: .14rem;
    line-height: .16rem;
    border-radius: .04rem;
    position: relative;
    top: -.02rem;
}
</style>
