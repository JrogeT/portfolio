<template>
  <Navbar/>
  <div class="bg-light pt-5" style="height: 100vh;">
    <div class="container bg-white">
      <div class="row">
        <div class="col">
          <slot/>
        </div>
      </div>
    </div>
  </div>
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