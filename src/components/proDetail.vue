<template>
    <div>
        <ul>
            <li v-for="ele in swiperDetail" :key="ele.id">
                <img :src="ele.middle_image" />
            </li>
        </ul>
    </div>

      
</template>
<script>
import { mapGetters } from 'vuex'
   export default{
        data(){
            return {
               defaultb:0
            }
        },
        computed:{
            ...mapGetters(['swiperDetail'])
        },
        methods:{
            changeBack(index){
                this.defaultb = index
            }
        }
    }
</script>
<style scoped>
    img{
        width: 100%
     }
</style>
