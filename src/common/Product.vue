<template>
  <div class="p-0 card border-dark rounded-5" style="height: 35rem;" >
    <img :src="product.image" alt="..." class="card-img-top rounded-5 mx-auto product-cover" onclick="this.style.transform='scale(1.05)'; this.style.transition='transform 0.3s'; setTimeout(() => { this.style.transform='scale(1)'; }, 300);">
    <div class="card-body d-flex flex-wrap flex-column align-items-start justify-content-center">
      <h3 class="card-title w-100 text-center">
        {{ product.name }}
      </h3>
      <div>
        <span class="fw-bold">Precio: </span>
        {{ formatPrice(product.price) }}
      </div>
      <div v-if="product.links.length > 0" class="mt-2 d-flex align-items-center">
        <span class="fw-bold align-center my-auto">
          Referencias <i class="bi bi-box-arrow-up-right"></i>
        </span>
        <a v-for="link in product.links" :href="link.url" target="_blank" class="text-decoration-none mx-1" :key="link.name">
          <span class="badge rounded-pill px-3" :class="link.class">
            <div>
              {{ link.name }}
              <br>
              <small>{{ formatPrice(link.price) }}</small>
            </div>
          </span>
        </a>
      </div>
      <a :href="`https://wa.me/59175364642?text=Quiero%20negociar%20el%20producto%20${encodeURIComponent(product.name)}%20con%20precio%20${encodeURIComponent(formatPrice(product.price))}`" target="_blank" class="btn btn-outline-success mt-3 w-100">
        <i class="bi bi-whatsapp"></i>
        Negociar por WhatsApp
      </a>
    </div>
  </div>
</template>

<style>
.product-cover {
  width: 100%;
  height: 20rem;        /* same for all cards */
  object-fit: cover;    /* fill & crop uniformly */
  object-position: center;
  display: block;       /* removes inline-image baseline gap */
  border-top-left-radius: var(--bs-border-radius-xxl);
  border-top-right-radius: var(--bs-border-radius-xxl);
}
</style>

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
      return 'Bs. ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
}
</script>
