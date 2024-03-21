<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <form class="container">
        <router-link to="/" class="navbar-brand me-auto" href="#">Ranking builder</router-link>
        <button class="btn btn-sm btn-outline-light me-2" type="button">Add ranking</button>
        <button class="btn btn-sm btn-outline-light" type="button">Smaller button</button>
      </form>
  </nav>

  <main class="pt-4">
    <router-view/>

    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded me-2" alt="...">
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </main>
</template>

<script>
import RadarChart from './components/RadarChart.vue'
export default {
  name: 'App',
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
