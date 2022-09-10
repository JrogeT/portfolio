<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand text-white">
        <h4>
          Jorge R. Torrez A.
        </h4>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="link in links" v-bind:key="link.name">
            <router-link :to="{path: link.url}" class="nav-link text-secondary" :class="{'active text-white': isInUrl(link.url)}">{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      links: [
        {
          name: "About me",
          url: "/about-me"
        },
        {
          name: "Knowledge",
          url: "/knowledge"
        },
        {
          name: "Contact me",
          url: "/contact-me"
        },
        {
          name: "CV",
          url: "/cv"
        },
        {
          name: "Social Networks",
          url: "/social-networks"
        }
      ]
    }
  },
  methods: {
    isInUrl(url) {
      return this.$route.path.includes(url);
    }
  }
}
</script>
