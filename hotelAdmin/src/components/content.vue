<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-content',
  props: ['title'],
  data () {
    return {}
  }
}
</script>
<style scoped>
</style>
