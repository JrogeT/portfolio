<template>
  <Navbar/>
  <slot/>
</template>

<script>
import Navbar from '@/common/Navbar.vue'

export default {
  name: "MasterLayout",
  components: {
    Navbar
  }
}
</script>

<style scoped>

</style>