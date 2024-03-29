<template>
  <div class="container">
    <router-link to="/submit" class="btn btn-primary float-end">Add entree</router-link>
    <h1>Cheese</h1>
    <h3>All the cheese you need to try</h3>
    <div v-for="item in ListItems" class="card mt-3">
      <div class="row g-0">
        <div class="col-6 col-md-3">
          <img src="https://placehold.co/600x400" class="img-fluid rounded-start object-fit-cover h-100 w-100" alt="...">
        </div>
        <div class="col-6 col-md-3 order-md-last">
          <RadarChart :labels="labels" :data-set="item.data" />
        </div>
        <div class="col-md-6">
          <div class="card-body h-100">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <p class="card-text"><small class="text-muted">Last updated: {{ item.date }}</small></p>
            <button class="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RadarChart from "@/components/RadarChart.vue";

export default {
  name: "ListView",
  data() {
    return {
      labels: ['A', 'B', 'C', 'D', 'E'],
      ListItems: [
        {
          name: 'name',
          description: 'this is a description',
          date: 'datum',
          data: [4, 2, 3, 8, 5]
        },
        {
          name: 'name',
          description: 'this is a description',
          date: 'datum',
          data: [1, 7, 6, 8, 7]
        }
      ]
    }
  },
  components: {
    RadarChart
  }
}
</script>

<style scoped>

</style>