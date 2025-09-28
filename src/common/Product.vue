<template>
  <div class="p-0 card border-dark rounded-5" style="height: 30rem;" >
    <img :src="product.image" alt="..." class="card-img-top rounded-5 mx-auto" style="width: 100%; height: 20rem;">
    <div class="card-body d-flex flex-wrap flex-column align-items-start justify-content-center">
      <h3 class="card-title w-100 text-center">
        {{ product.name }}
      </h3>
      <div>
        <span class="fw-bold">Precio: </span>
        Bs. {{ formatPrice(product.price) }}
      </div>
      <div>
        <span class="fw-bold">Tiempo de uso: </span>
        {{ product.usageTime }}
      </div>
      <div class="mt-2">
        <span class="fw-bold">Referencias: </span>
        <a v-for="link in product.links" :href="link.url" target="_blank" class="text-decoration-none mx-1" :key="link.name">
          <span class="badge rounded-pill" :class="link.class">
            {{ link.name }}
            <i class="bi bi-box-arrow-up-right"></i>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppProduct",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatPrice(value) {
      let val = (value/1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
}
</script>
