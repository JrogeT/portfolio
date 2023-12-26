<template>
  <div class="container bg-white border border-dark rounded-3">
    <div class="row">
      <samp>
        <h3>
          <strong>
            Coding Principles, Design Patterns and Architectures
          </strong>
        </h3>
        <p>
          Clean code, OOP principles, SOLID principles, WET-DRY-KISS-YAGNI principles
        </p>
        <p>
          Design Patterns, Anti-Patterns, Architectures: Onion, Clean, Hexagonal, SOFEA, Microservices, MVC, MVVM
        </p>
        <h3>
          <strong>
            Web Development
          </strong>
        </h3>
        <h5>
          Frontend
        </h5>
        <div class="row mb-5">
          <div class="col-6 col-md-3 mx-auto" v-for="technology in frontendTechnologies" :key="technology">
            <AppTechnology :technology="technology" />
          </div>
        </div>
        <h5>
          Backend
        </h5>
        <div class="row mb-5">
          <div class="col-6 col-md-3 mx-auto" v-for="technology in backendTechnologies" :key="technology">
            <AppTechnology :technology="technology" />
          </div>
        </div>
        <h5>
          Web APIs
        </h5>
        <div class="row mb-5">
          <div class="col-6 col-md-3 mx-auto" v-for="technology in webApiTechnologies" :key="technology">
            <AppTechnology :technology="technology" />
          </div>
        </div>
      </samp>
    </div>
  </div>
</template>

<script>
import AppTechnology from "@/common/Technology.vue";
import { useTechnologyStore } from "@/store/modules/technology";
import { mapState } from "pinia";

export default {
  name: "AppKnowledge",
  components: {
    AppTechnology,
  },
  computed: {
    ...mapState(useTechnologyStore, [
      "frontendTechnologies",
      "backendTechnologies",
      "webApiTechnologies",
    ]),
  },
}
</script>
