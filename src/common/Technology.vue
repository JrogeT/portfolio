<template>
  <div class="container-fluid text-center text-warning">
    <div class="row">
      <img :src="technology.image" class="img-fluid" alt="logo" style="min-height: 9rem;">
    </div>
    <div class="row">
      <small class="text-dark">{{ technology.name }}</small>
    </div>
    <div class="row">
      <div class="col">
        <i v-for="star in parseInt(technology.knowledgeLevel)" :key="star" class="bi bi-star-fill"></i>
        <i v-if="!!(technology.knowledgeLevel % 1)" class="bi bi-star-half"></i>
        <i v-for="star in parseInt((5 - technology.knowledgeLevel).toString())" :key="star" class="bi bi-star"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTechnology",
  props: {
    technology: {
      type: Object,
      required: true
    }
  }
}
</script>
