<template>
    <div class="category">
        <!--搜索-->
        <div class="category-search">
            <div>奇异果</div>
        </div>
        <div class="content">
            <ul class="sortLeft">
                <li 
                    v-for="(ele,index) in classOneGroup" 
                    :class="{active: index==defaultIndex}" 
                    @click="changeStyle(ele,index)" 
                    :id='ele.id'
                    :key="ele.id"
                >
                    {{ele.name}}
                </li>
            </ul>
            <div class="item">
                <h3>{{childrenList[0].class2Name.name}}</h3>
                <ul>
                    <li v-for="ele in childrenList[0].class3Group" :key="ele.id">
                        <router-link :to="`list/${ele.class2Id}/${ele.id}`"><img :src="ele.class_photo"></router-link>
                        <p>{{ele.name}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <footer-common></footer-common>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
    export default {
        name:'product',
        data(){
            return{               
                 active:false,
                 defaultIndex:0,
                 id:303
            }          
        },
        methods:{
            ...mapActions(['getCategoryData']),
            changeStyle(ele,index){              
                this.id = ele.id
                this.getCategoryData({id:this.id})
                console.log(this.id)
                this.defaultIndex = index;
            }         
        },
        computed:{
            ...mapGetters([
                'classOneGroup','childrenList'
            ])
        },
        mounted(){
            this.getCategoryData({id:this.id});   
        }
  }
 
</script>
<style scoped>
.category{ background: #fff;}
.content{
    background: #fff;
    overflow: hidden;
}
/*搜索样式*/
.category-search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    line-height: .28rem;
    text-align: center;
    background: #f8f8f8;
    border-bottom: .01rem solid #d8d8d8;
    
}
.category-search div{
    margin: .08rem;
    background: #eee;
    border-radius: .04rem;
    color: #878787;
    font-size: .12rem;
}
/*内容区域*/
.content{
    position: relative;
    margin-top: .47rem;
}
.sortLeft{
    position: fixed;
    left: 0;
    top: .47rem;
    width: .8rem;
    height: 100%;
    background: #f5f5f5;
    text-align: center;
    margin: 0;
    overflow-y: auto;
}
.sortLeft li{
    height: .42rem;
    width: 100%;
    line-height: .46rem;
    font-size: .15rem;
    color: #3a3a3a;
    border: .02rem solid #f5f5f5;
    border-right: 0;
 }
 .active{
     border-left: .02rem solid #65a032 !important;
     color: #65a032 !important;
     background: #fff;
 }
.item {
    margin-left: .8rem;
    padding: .1rem .1rem .18rem .1rem;

}
.item li{
    width: 33%;
    float: left;
    text-align: center;
    padding-bottom: .2rem;
}   
.item li img{
    width: 100%
} 
.item h3{
    font-weight: 400;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    margin: 0;
    font-size: .14rem;
    color:#000
}
</style>