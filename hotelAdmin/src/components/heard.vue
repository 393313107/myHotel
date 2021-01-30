<template>
  <div>
    <div class="heard">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'heard',
  props: ['title'],
  data () {
    return {}
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
