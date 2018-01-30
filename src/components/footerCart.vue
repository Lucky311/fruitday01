<template>
    <div class="footer">
        <footer class="main-nav" id="cart-nav">
            <a class="cart-btn" href="javascript:;">
                <i class="icon-cartdefault">车</i> 
                <span id="cart-num"></span></a> 
                <a class="add-cart" href="javascript:;">
                <span id="deliver">明日达</span>
                <em>加入购物车</em>
            </a>
        </footer>

    </div>
</template>
<script>
    export default{
        data(){
            return {
               
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
    }
    .cart-btn {
        top: auto;
        right: auto;
        bottom: .05rem;
        left: .05rem;
        position: absolute;
        background: #65a032;
        text-align: center;
        color: #fff;
        width: .5rem;
        height: .5rem;
        line-height: .5rem;
        border-radius: 100%;
    }
    i{
        font-style: normal;
        font-size: .26rem;
    }
    .add-cart {
        float: right;
        width: 1.8rem;
        background: #ff8000;
        font-size: .18rem;
        line-height: .46rem;
        color: #fff;
        text-align: center
    }
    .add-cart span {
        display: inline-block;
        font-size: .14rem;
        color: rgba(255,255,255,.8);
        line-height: .46rem;
        padding-right: .1rem;
        
    }
</style>
