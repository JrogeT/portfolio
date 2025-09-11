<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div v-for="product in products" :key="product" class="col-lg-5 p-3">
        <AppProduct :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import {useGarageSaleStore} from "@/store/modules/garageSale";
import { mapState } from "pinia";
import AppProduct from "@/common/Product.vue";

export default {
  name: "AppProjects",
  components: {
    AppProduct,
  },
  computed: {
    ...mapState(useGarageSaleStore, [
      "products"
    ]),
  },
}
</script>
