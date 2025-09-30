<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="container">
        <div class="row text-center">
          <h1>Venta de Garage</h1>
        </div>

        <div class="row justify-content-center mb-4">
          <div class="col-md-3">
            <label for="category">Categoria:</label>
            <select class="form-select" v-model="selectedCategory">
              <option value="">Todas las categorías</option>
              <option value="living">Living</option>
              <option value="limpieza">Limpieza</option>
              <option value="entretenimiento">Entretenimiento</option>
              <option value="tecnologia">Tecnologia</option>
              <option value="mascotas">Mascotas</option>
              <option value="deporte">Deporte</option>
              <!-- <option value="educacion">Educacion</option> -->
              <option value="cocina">Cocina</option>
              <option value="herramientas">Herramientas</option>
              <option value="otros">Otros</option>
            </select>
          </div>

          <div class="col-md-3">
            <label for="price">Precio:</label>
            <select class="form-select" v-model="selectedPriceOrder">
              <option value="">Ordenar por precio</option>
              <option value="asc">Menor a Mayor</option>
              <option value="desc">Mayor a Menor</option>
            </select>
          </div>
        </div>

        <div class="row px-md-5">
          <div v-for="product in products" :key="product" class="col-12 col-md-3 my-3">
            <AppProduct :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal (shown by default on mount) -->
  <div
      class="modal fade"
      id="staticBackdrop"
      ref="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">No lo olvides!!😱😱</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body">
          Esto es una venta de garage😊<br>
          Todos los precios son regateables/negociables😉<br>
          Por su puesto, puedes comprar más de un producto y te hago un descuento especial😎
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Entendido👍🏼</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGarageSaleStore } from "@/store/modules/garageSale";
import AppProduct from "@/common/Product.vue";
import { Modal } from "bootstrap"; // make sure bootstrap JS is bundled

export default {
  name: "AppProjects",
  components: { AppProduct },

  data() {
    return {
      selectedCategory: "",
      selectedPriceOrder: "",
      products: [],
    };
  },

  created() {
    const store = useGarageSaleStore();
    this.products = store.getProducts();
  },

  mounted() {
    const el = this.$refs.staticBackdrop;
    const modal = new Modal(el, { backdrop: "static", keyboard: false });
    modal.show(); // show by default
  },

  watch: {
    selectedCategory(newCategory) {
      const store = useGarageSaleStore();
      newCategory ? store.setFilter(newCategory) : store.resetFilter();
      this.products = store.getProducts();
    },
    selectedPriceOrder(newOrder) {
      const store = useGarageSaleStore();
      newOrder ? store.setPriceOrder(newOrder) : store.resetPriceOrder();
      this.products = store.getProducts();
    },
  },
};
</script>
