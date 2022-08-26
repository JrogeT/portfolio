<template>
  <master-layout>
    <router-view></router-view>
  </master-layout>
</template>

<script>
import MasterLayout from '@/layouts/Master'

export default {
  name: 'App',
  components: {
    MasterLayout
  }

}
</script>
