<template>
  <div class="body">
    <heard :title='title'></heard>
    <my-menu class="menu"></my-menu>
    <my-content class="content"></my-content>
  </div>
</template>

<script>
import heard from '@/components/heard'
import myMenu from '@/components/menu'
import myContent from '@/components/content'
export default {
  name: 'layout',
  data () {
    return {
      title: '首页'
    }
  },
  components: {
    heard, myMenu, myContent
  }
}
</script>

<style>
.body{overflow: hidden;height: 100vh;}
.menu{
  width:190px;
  height: 100%;
  float: left;
}
.content{
  background: red;
  margin-left: 190px
}
</style>
