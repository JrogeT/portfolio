<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="container">
        <div class="row text-center">
          <h1>
            Venta de Garage
          </h1>
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
<!--              <option value="educacion">Educacion</option>-->
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
</template>

<script>
import {useGarageSaleStore} from "@/store/modules/garageSale";
import AppProduct from "@/common/Product.vue";

export default {
  name: "AppProjects",
  components: {
    AppProduct,
  },
  // use the method 'getProducts' in the garagesale store
  created() {
    const store = useGarageSaleStore();
    this.products = store.getProducts();
  },
  data() {
    return {
      selectedCategory: "",
      selectedPriceOrder: "",
      products: [],
    };
  },
  watch: {
    selectedCategory(newCategory) {
      const store = useGarageSaleStore();
      console.log(newCategory);
      if (newCategory) {
        store.setFilter(newCategory);
      } else {
        store.resetFilter();
      }
      this.products = store.getProducts();
    },
    selectedPriceOrder(newOrder) {
      const store = useGarageSaleStore();
      console.log(newOrder);
      if (newOrder) {
        store.setPriceOrder(newOrder);
      } else {
        store.resetPriceOrder();
      }
      this.products = store.getProducts();
    },
  },
}
</script>
