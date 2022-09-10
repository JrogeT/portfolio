<template>
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
      <div class="col-md-2 mx-4" v-for="technology in frontendTechnologies" :key="technology">
        <AppTechnology :technology="technology" />
      </div>
    </div>
    <h5>
      Backend
    </h5>
    <div class="row mb-5">
      <div class="col-md-2 mx-4" v-for="technology in backendTechnologies" :key="technology">
        <AppTechnology :technology="technology" />
      </div>
    </div>
    <h5>
      Web APIs
    </h5>
    <div class="row mb-5">
      <div class="col-md-2 mx-4" v-for="technology in webApiTechnologies" :key="technology">
        <AppTechnology :technology="technology" />
      </div>
    </div>
  </samp>
</template>

<script>
import AppTechnology from "@/common/Technology.vue";

export default {
  name: "AppKnowledge",
  components: {
    AppTechnology
  },
  data() {
    return {
      frontendTechnologies: [
        {
          name: 'Bootstrap',
          image: require('@/assets/icons/bootstrap.png'),
          knowledgeLevel: 4
        },
        {
          name: 'Angular',
          image: require('@/assets/icons/angular.png'),
          knowledgeLevel: 4
        },
        {
          name: 'Vue.js',
          image: require('@/assets/icons/vue-js.png'),
          knowledgeLevel: 3.5
        },
        {
          name: 'Html',
          image: require('@/assets/icons/html.png'),
          knowledgeLevel: 4
        },
      ],
      backendTechnologies: [
        {
          name: '.Net',
          image: require('@/assets/icons/dotnet-core.png'),
          knowledgeLevel: 4
        },
        {
          name: 'Node.js',
          image: require('@/assets/icons/node-js.png'),
          knowledgeLevel: 3
        },
        {
          name: 'Laravel',
          image: require('@/assets/icons/laravel.png'),
          knowledgeLevel: 4
        },
      ],
      webApiTechnologies:[
        {
          name: 'REST',
          image: require('@/assets/icons/rest.png'),
          knowledgeLevel: 3.5
        },
        {
          name: 'Postman',
          image: require('@/assets/icons/postman.png'),
          knowledgeLevel: 4
        },
        {
          name: 'Swagger',
          image: require('@/assets/icons/swagger.png'),
          knowledgeLevel: 3
        },
      ],

    };
  }
}
</script>
