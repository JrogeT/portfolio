<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div v-for="socialElement in social" :key="socialElement" class="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
        <div class="p-0 card border-dark rounded-5" style="height: 30rem;" >
          <img :src="socialElement.image" alt="..." class="card-img-top rounded-5 mx-auto" style="color: black;width: 12rem;height: 12rem;">
          <div class="card-body d-flex flex-wrap flex-column align-items-start justify-content-center">
            <h3 class="card-title w-100 text-center">
              {{ socialElement.name }}
            </h3>
            <label class="mt-0 w-100 text-center fst-italic">
              {{ socialElement.title }}
            </label>
            <p class="card-text my-auto">
              {{ socialElement.description }}
            </p>
            <div class="row mt-auto mx-auto">
              <a :href="socialElement.link" target="_blank" class="btn btn-outline-dark mx-auto">
                Go to
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "pinia";
import {useSocialStore} from "@/store/modules/social";

export default {
  name: "AppContactMe",
  computed: {
    ...mapState(useSocialStore, [
      "social",
    ]),
  },
}
</script>

<style scoped>

</style>
