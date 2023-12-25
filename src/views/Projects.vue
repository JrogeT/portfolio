<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div v-for="project in projects" :key="project" class="col-lg-5 p-3">
        <AppProject :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import AppProject from "@/common/Project.vue";
import {useProjectsStore} from "@/store/modules/projects";
import { mapState } from "pinia";

export default {
  name: "AppProjects",
  components: {
    AppProject,
  },
  computed: {
    ...mapState(useProjectsStore, [
      "projects"
    ]),
  },
}
</script>
