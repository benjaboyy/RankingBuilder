<template>
  <section class="container">
    <ol class="list-group list-group-numbered">
      <router-link to="/list" class="li list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">Coffee</div>
          Rank the best japanese coffee brands
        </div>
        <span class="badge bg-primary rounded-pill">14</span>
      </router-link>
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">Cheese</div>
          All the cheese you need to try
        </div>
        <span class="badge bg-primary rounded-pill">14</span>
      </li>
    </ol>
  </section>
</template>

<script>
export default {
  name: "HomeView"
}
</script>

<style scoped>

</style>