<!-- 模板 -->
<template>
    <div class="category-list">
        <header>
            <nav>
                <a href="javascript:history.go(-1);"><</a>
                <p>{{listItem}}</p>
                <span>搜索</span>
            </nav>
            <div class="hidd">
                <div class="category-swiper" ref="wrapper">
                    <ul class="con">
                        <li 
                            v-for="(ele,index) in listSwiper" 
                            :iii="ele.id"
                            :class="{active:(ele.id==defaultIdex)||(defaultIdex == index)}"
                            @click="changeColor(ele,index)"
                            :key="ele.id"
                        >
                            {{ele.name}}
                            <span :class="{pos:(ele.id==defaultIdex)||(defaultIdex == index)}"></span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="sort">
                <ul id="default">
                    <li 
                        v-for="(ele,index) in sort" 
                        :class='{active:index==defaultId}'
                        @click="changeItem(index)"
                        :key="index"
                    >{{ele}}
                    </li>
                </ul>
            </div>
        </header>
        <div class="content"> 
            <div v-for="(ele,index) in productGroup" :key="ele.id">
                <router-link :to="`/detail/${ele.id}`">
                    <img :src="ele.middle_photo">
                    <dl class="detail"> 
                        <dt>{{ele.product_name}}</dt> 
                        <dd>{{ele.product_desc}}</dd> 
                        <dd>{{ele.volume}}</dd> 
                        <div> 
                            <small>￥</small>
                            <big>{{parseInt(ele.price)}}</big>
                            <small>.{{ele.price.substring(ele.price.length-2,ele.price.length-1)}}</small>
                            <span style="background: #FF8000">明日达  </span>
                        </div>
                    </dl>
                </router-link>
            </div>
        </div>
        
    </div>
</template>
<script>
    import { mapGetters,mapActions } from 'vuex'
    import BScroll from 'better-scroll';
    export default{
        data(){
            return {
                sort:['综合','销量','价格'],
                defaultIdex:0,
                defaultId:0,
                type:1,
                sortType:1,
                id:this.$route.params.id
            }
        },
        computed:{
            ...mapGetters(['listItem','listSwiper','productGroup'])
        },
        methods:{
           ...mapActions(['getCategoryList']),
           changeColor(ele,index){
             const class2Id = this.$route.params.class2Id
             this.defaultIdex=index
             this.id = ele.id
             const id = this.id
             this.getCategoryList({class2Id,id})
           },
           changeItem(index){
             this.defaultId=index
             const id = this.id              
             this.type = index+1
             if(index===0){
                 this.sortType=1
             }else if(index===1){
                 this.sortType=2
             }else if(index===2){
                 this.sortType=(this.sortType===3?4:3)
             }else{
                 this.sortType=3
             }
             const sortType = this.sortType
             console.log(sortType,id)
             const class2Id = this.$route.params.class2Id
             this.getCategoryList({class2Id,id,sortType})
           }
        },
        mounted(){
            const class2Id = this.$route.params.class2Id
            const id = this.$route.params.id
            const sortType = this.type
            this.getCategoryList({class2Id,id,sortType}); 
            // const options = {
            //     scrollX: true // 因为scrollY默认为true，其实可以省略
            // }
            if (this.$route.params.id){
               this.defaultIdex = this.$route.params.id;
            }
            // this.$nextTick(() => {
            //     this.scroll = new Bscroll(this.$refs.wrapper, options)
            // })
              
        }
    }
</script>

<style scoped>
    header{
        width: 100%;
        height: 1.1rem;
        position: fixed;
        top:0;
        left:0;
        padding: .08rem 0;
        background: #f5f5f5;
        z-index: 11;
        
    }
    header nav{
        border-bottom: .01rem solid #d8d8d8;
        color: #75a739;
        height: .45rem;
        line-height: .43rem;
        display: flex;
        justify-content: space-between;
     }
    header nav a{
        padding-left: .07rem;
        font-size: .26rem;
        font-weight: bold
    }
    header nav p{
        text-align: center;
        flex: 1; 
        font-size: .17rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    header nav span{
        margin-right: .08rem;
        font-size: .14rem;
    }
    .hidd{
        width: 100%;
        overflow: hidden;
    }
    .category-swiper{       
        overflow-x: auto;
        overflow-y: hidden;
        height: .36rem;
        line-height: .36rem;
        
    }    
    .category-swiper ul{
        position: relative;
        height: .36rem;
        white-space: nowrap;
        width: 8rem;
        background: #fff;
     }
    .category-swiper ul li{
        position: relative;
        color:#555;
        font-weight: bold;
        background: #fff;
        width: .68rem;
        float: left;
        text-align: center;
    }
    /*滚动条样式*/
    .category-swiper::-webkit-scrollbar {/*滚动条整体样式*/
            width: 1px;     /*高宽分别对应横竖滚动条的尺寸*/
            height: 1px;
        }
    .category-swiper::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(160,160,160,0.1);
    }
    .category-swiper::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 0;
        background: rgba(200,200,200,0.1);
    }
    .active{       
        color: #65a032 !important;
     }
    .pos{
        transition:.4s;
        background-color: #65a032;
        border-radius: .06rem .06rem 0 0;
        position: absolute;
        bottom:0;
        left: 10%;
        height: .03rem;
        width: 80%;
        opacity: 1;
     }
     .pos::after{
        content: ' ';
        width: 0;
        height: .02rem;
        bottom: .01rem;
        left: 50%;
        opacity: 0;
        transition:.4s;
     }
     .sort{
        background: #f5f5f5 !important;
        text-align: center;
        height: .36rem;
        line-height: .36rem;
        width: 100%;
        }
    .sort ul li{
        float: left;
        width: 33%;
        text-align: center;
        color:#333

     }
     .sort ul li:hover{
         color:#65a032
      }
      /*内容区域*/
      .content{
        box-sizing: border-box;
        padding-top: 1.25rem;
        min-height: 100%;
        overflow: hidden;
        background: #fff;
      }
      .content a{
        display: flex;
        height: 1.05rem;
        padding: .1rem;
        position: relative;
        border-bottom: .01rem solid #d8d8d8;
        color: #3a3a3a;
      }
      .content a img{
        width: 1.05rem;
        height: 1.05rem;
        margin-right: .1rem;
        border-radius: .04rem;
        display: block
      }
      .detail{
        position: relative;
        height: 1.05rem;
        /*width: 2rem;*/
      }
      .detail dt{
          
      }
      .detail dd{
        height: .2rem;
        font-size: .12rem;
        color: #878787;
        line-height: 1.8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .detail dd:last-of-type{
        top: .6rem;
        right: 0;
        bottom: auto;
        left: 0;
        position: absolute;
      }
    .detail div{
        margin-top: .05rem;
        color: #ff8000;
        line-height: 1;
        top: auto;
        right: 0;
        bottom: 0;
        left: 0;
        position: absolute;
        } 
    .detail span{
        position: relative;
        top: -.03rem;
        border-radius: .02rem;
        padding: .02rem .02rem;
        line-height: 1;
        margin-left: .08rem;
        font-size: .08rem;
        color: #fff;
    }
</style>