<template>
  <Navbar/>
  <div class="pt-5">
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
    Navbar,
  }
}
</script>

<style scoped>

</style>