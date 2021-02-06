<template>
    <div>
        <div class="layer-box" v-if="show">
            弹窗:{{text}}
            <p @click="cancel">取消</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myLayer',
    data() {
        return{
            text : 'in',
            show : true
        }
    },
    methods:{
        cancel(){
            this.show = !this.show            
        }
    }
}
</script>

<style scoped>
.layer-box{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width:300px;
    height: 150px;
border: 1px solid red;
}
</style>