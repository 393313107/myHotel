<template>
  <div>
    <div class="heard">{{val}}</div>
  </div>
</template>

<script>
import bus from '@/common/bus.js'
export default {
  name: 'heard',
  props: ['title'],
  data () {
    return {
      val: this.title
    }
  },
  mounted: function () {
    bus.$on('talk', (e) => {
      this.val = e
      this.$emit('update:title', this.title)
    })
  }
}
</script>
<style scoped>
.heard{
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #60ACF7;
    color: white;
}
</style>
