<template>
  <div>
    <el-menu
      default-active="/layout/welcome"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :router="true"
    >
      <el-menu-item  index="/layout/welcome">
        <i class="el-icon-location"></i>
        <span slot="title">欢迎页</span>
      </el-menu-item>
      <el-menu-item index="/layout/owner">
        <i class="el-icon-menu"></i>
        <span slot="title">客户</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">暂停使用</span>
      </el-menu-item>
      <el-menu-item index="/layout/user">
        <i class="el-icon-setting"></i>
        <span slot="title">用户</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'my-menu',
  props: ['my-menu'],
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
.el-menu{height: 100%;}
</style>
