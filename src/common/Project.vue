<template>
  <div class="p-0 card border-dark rounded-5" style="height: 30rem;" >
    <img :src="project.image" alt="..." class="card-img-top rounded-5 mx-auto" style="width: 100%; height: 20rem;">
    <div class="card-body d-flex flex-wrap flex-column align-items-start justify-content-center">
      <h3 class="card-title w-100 text-center">
        {{ project.name }}
      </h3>
      <label class="mt-0 w-100 text-center fst-italic">
        {{ project.date }}
      </label>
      <p class="card-text my-auto">
        {{ project.description ?? 'Github Repository' }}
      </p>
      <div class="row mt-auto mx-auto">
        <a :href="project.link" target="_blank" class="btn btn-outline-dark mx-auto">
          Go to
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppProject",
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
