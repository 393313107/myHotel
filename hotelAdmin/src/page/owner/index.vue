<template>
  <div>
    <p @click="cl">owner</p>
    <input type="text" v-model="val">
  </div>
</template>

<script>
import bus from '@/common/bus.js'
export default {
  name: 'welcome',
  data () {
    return {
      val: ''
    }
  },
  methods: {
    cl: function () {
      console.log(1)
      bus.$emit('talk', this.val)
      // this.$myLayer('123')
    }
  }
}
</script>

<style>
</style>
