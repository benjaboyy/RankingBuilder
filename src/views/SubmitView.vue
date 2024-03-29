<template>
  <div class="container">
    <h1>New entree</h1>
    <h3>List: Cheese</h3>
    <hr>
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Name">
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" rows="3"></textarea>
          </div>
          <div class="mb-3">
            <label for="image" class="form-label">Image</label>
            <input class="form-control" type="file" id="image">
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="category" class="form-label">Categories</label>
                <select class="form-select" id="category" multiple>
                  <option value="1">Black</option>
                  <option value="2">Cappuccino</option>
                  <option value="3">Espresso</option>
                  <option value="4">Latte</option>
                  <option value="5">Mocha</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input type="number" class="form-control" id="price" placeholder="Price">
              </div>
              <div class="mb-3">
                <label for="weight" class="form-label">Volume</label>
                <input type="number" class="form-control" id="weight" placeholder="Weight">
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-9">
                  <div class="mb-3">
                    <label for="attribute1" class="form-label">Sweetness</label>
                    <input type="range" class="form-range" min="1" max="10" id="attribute1">
                  </div>
                </div>
                <div class="col-3">
                  <h1>9</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
        </div>
      </div>
      <hr>
      <router-link to="/list" type="submit" class="btn btn-primary">Submit</router-link>
      <router-link to="/list" type="submit" class="btn btn-primary-outline">Cancel</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: "ListView",
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>