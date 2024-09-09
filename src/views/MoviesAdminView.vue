<template>
    <div class="container-fluid" id="admin-page">
    <video autoplay muted loop class="background-video" preload="metadata">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video1.mp4" type="video/mp4" loading="lazy">
    </video>
    <div id="movies">
      <h1>Movies Table</h1>
      <div class="admin-container">
        <button id="adminSortMovie" class="btn btn-secondary">Sort</button>
        <button id="adminAddMovieBtn" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#adminAddMovie">Add Movie</button>
      </div>
  
      <div class="modal fade" id="adminAddMovie" tabindex="-1" aria-labelledby="adminAddMovieLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="adminAddMovieLabel">Add Movie</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="addMovieForm">
                <div class="mb-3">
                  <label for="movieName" class="form-label">Movie Name</label>
                  <input type="text" class="form-control" id="movieName" name="movieName" required>
                </div>
                <div class="mb-3">
                  <label for="movieCategory" class="form-label">Category</label>
                  <input type="text" class="form-control" id="movieCategory" name="movieCategory" required>
                </div>
                <div class="mb-3">
                  <label for="movieImage" class="form-label">Description</label>
                  <input type="text" class="form-control" id="movieImage" name="movieImage" required>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" @click="saveMovie">Save Movie</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Movie Table -->
      <table id="movieTable" class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Movie Name</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Image</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody id="table-movies">
        </tbody>
      </table>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      saveMovie() {
        console.log('Saving product...');
        const form = document.getElementById('addProductForm');
        const formData = new FormData(form);
  
        const payload = {
          prod_name: formData.get('productName'),
          quantity: formData.get('productQuantity'),
          amount: formData.get('productAmount'),
          category: formData.get('productCategory')
        };
  
        console.log('Payload:', payload);
      }
    },
    mounted() {
      const saveButton = document.getElementById('saveProduct');
      if (saveButton) {
        saveButton.addEventListener('click', this.saveProduct);
      }
    },
    beforeUnmount() {
      const saveButton = document.getElementById('saveProduct');
      if (saveButton) {
        saveButton.removeEventListener('click', this.saveProduct);
      }
    }
  }
  </script>
<style scoped>
#admin-page {
  padding: 0 1.5rem;
  text-align: center;
  color: #fff;
}

.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>