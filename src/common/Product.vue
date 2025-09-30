<template>
  <div class="p-0 card border-dark rounded-5" style="height: 35rem;">
    <!-- IMAGE -->
    <img
        :src="product.image"
        alt="Imagen del producto"
        class="card-img-top mx-auto product-cover rounded-5"
        @click="openLightbox(product.image)"
        style="cursor: zoom-in;"
    />

    <!-- BODY -->
    <div class="card-body d-flex flex-wrap flex-column align-items-around justify-content-center">
      <h3 class="card-title w-100 text-center">{{ product.name }}</h3>
      <div><span class="fw-bold">Precio: </span>{{ formatPrice(product.price) }}</div>

      <div v-if="product.links.length > 0" class="mt-2 d-flex align-items-center">
        <span class="fw-bold align-center my-auto">Referencias <i class="bi bi-box-arrow-up-right"></i></span>
        <a v-for="link in product.links" :key="link.name" :href="link.url" target="_blank" class="text-decoration-none mx-1">
          <span class="badge rounded-pill px-3" :class="link.class">
            <div>{{ link.name }}<br /><small>{{ formatPrice(link.price) }}</small></div>
          </span>
        </a>
      </div>

      <a
          :href="`https://wa.me/59175364642?text=Quiero%20negociar%20el%20producto%20${encodeURIComponent(product.name)}%20con%20precio%20${encodeURIComponent(formatPrice(product.price))}`"
          target="_blank"
          class="btn btn-outline-success mt-3 w-100"
      >
        <i class="bi bi-whatsapp"></i> Negociar por WhatsApp
      </a>
    </div>

    <!-- LIGHTBOX -->
    <transition name="fade">
      <div v-if="lightbox.open" class="lightbox" @click.self="closeLightbox">
        <button class="lightbox__close btn btn-light shadow" @click="closeLightbox" aria-label="Cerrar">✕</button>
        <img :src="lightbox.src" alt="" class="lightbox__img" @click.stop />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AppProduct",
  props: { product: { type: Object, required: true } },
  data() {
    return {
      lightbox: { open: false, src: "" }
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return "Bs. " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    openLightbox(src) {
      this.lightbox.src = src;
      this.lightbox.open = true;
      document.body.style.overflow = "hidden"; // lock scroll
    },
    closeLightbox() {
      this.lightbox.open = false;
      document.body.style.overflow = ""; // restore scroll
    },
    onKey(e) {
      if (e.key === "Escape" && this.lightbox.open) this.closeLightbox();
    }
  },
  mounted() { window.addEventListener("keydown", this.onKey); },
  beforeUnmount() { window.removeEventListener("keydown", this.onKey); } // Vue 3
  // beforeDestroy() { window.removeEventListener("keydown", this.onKey); } // Vue 2
};
</script>

<style scoped>
.product-cover{ width:100%; height:20rem; object-fit:cover; object-position:center; display:block; }

.lightbox{
  position: fixed; inset: 0; z-index: 1060; /* above Bootstrap modals */
  background: rgba(0,0,0,.8);
  display: grid; place-items: center; padding: 2rem;
}
.lightbox__img{
  max-width: 90vw; max-height: 90vh;
  border-radius: 1rem; box-shadow: 0 1.25rem 3rem rgba(0,0,0,.5);
}
.lightbox__close{
  position: absolute; top: 1rem; right: 1rem;
  line-height: 1; font-size: 1.1rem; padding: .4rem .6rem;
}

/* simple fade */
.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
