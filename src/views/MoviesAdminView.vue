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
              <form id="addMovieForm" @submit.prevent="saveMovie">
                <div class="mb-3">
                  <label for="MovieName" class="form-label">Title</label>
                  <input type="text" class="form-control" id="MovieName" v-model="mName" required>
                </div>
                <div class="mb-3">
                  <label for="MovieDescription" class="form-label">Description</label>
                  <input type="text" class="form-control" id="MovieDescription" v-model="mDescription" required>
                </div>
                <div class="mb-3">
                  <label for="MovieCategory" class="form-label">Category</label>
                  <input type="text" class="form-control" id="MovieCategory" v-model="mCategory" required>
                </div>
                <div class="mb-3">
                  <label for="MovieDuration" class="form-label">Duration</label>
                  <input type="text" class="form-control" id="MovieDuration" v-model="mDuration" required>
                </div>
                <div class="mb-3">
                  <label for="MovieTicketPrice" class="form-label">Ticket Price</label>
                  <input type="number" class="form-control" id="MovieTicketPrice" v-model="ticketPrice" required>
                </div>
                <div class="mb-3">
                  <label for="MovieReleaseDate" class="form-label">Film Year</label>
                  <input type="text" class="form-control" id="MovieReleaseDate" v-model="releaseDate" required>
                </div>
                <div class="mb-3">
                  <label for="mImage" class="form-label">Movie Cover</label>
                  <input type="text" class="form-control" id="mImage" v-model="mImage" required>
                </div>
                <button type="submit" class="btn btn-primary">Save Movie</button>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="loading">
        <Spinner />
      </div>
      <!-- Movies Table -->
      <table v-else id="movieTable" class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cover</th>
            <th>Movie Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Duration</th>
            <th>Ticket Price</th>
            <th>Film year</th>
          </tr>
        </thead>
        <tbody id="table-movies">
          <tr v-for="movie in movies" :key="movie.movieID">
            <td>{{ movie.movieID }}</td>
            <td><img :src="movie.mImage" alt="Movie Cover" style="width: 50px; height: auto;"></td>
            <td>{{ movie.mName }}</td>
            <td>{{ movie.mDescription }}</td>
            <td>{{ movie.mCategory }}</td>
            <td>{{ movie.mDuration }}</td>
            <td>{{ movie.ticketPrice }}</td>
            <td>{{ movie.releaseDate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    Spinner
  },
  data() {
    return {
      mImage: '',
      mName: '',
      mDescription: '',
      mCategory: '',
      mDuration: '',
      ticketPrice: '',
      ageRestriction: '', 
      releaseDate: '',
      loading: true 
    };
  },
  computed: {
    ...mapState(['movies'])
  },
  methods: {
    ...mapActions(['addMovie', 'fetchMovies']),
    
    async saveMovie() {
      console.log('Saving movie...');
      const payload = {
        mImage: this.mImage,
        mName: this.mName,
        mDescription: this.mDescription,
        mCategory: this.mCategory,
        mDuration: this.mDuration,
        ticketPrice: this.ticketPrice,
        ageRestriction: this.ageRestriction,
        releaseDate: this.releaseDate
      };

      try {
        await this.addMovie(payload); 
        alert('Movie added successfully.');
        await this.fetchMovies();
      } catch (error) {
        alert('Error saving movie:', error);
      }
    }
  },
  async mounted() {
    try {
      await this.fetchMovies(); 
    } finally {
      this.loading = false; 
    }
  }
};
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

.admin-container {
  margin: 1rem 0;
}

.btn {
  margin: 0.4rem;
  background-color: #532823;
  border-color: #532823;
  color: #fff;
}

.btn-secondary {
  background-color: #532823;
  border-color: #532823;
  color: #fff;
}

.btn-secondary:hover {
  background-color: #6b3a30;
  border-color: #6b3a30;
}

.modal-content {
  background-color: #532823;
  color: #fff;
  border-radius: 0.5rem;
  border: none;
}

.modal-header {
  border-bottom: 1px solid #6b3a30;
}

.modal-header .btn-close {
  filter: invert(1);
}

.modal-body {
  padding: 2rem;
}

.modal-body .form-control {
  background-color: #6b3a30;
  border: 1px solid #532823;
  color: #fff;
}

.modal-body .form-control:focus {
  border-color: #8d5c51;
  box-shadow: 0 0 0 0.2rem rgba(141, 92, 81, 0.25);
}

.modal-footer {
  border-top: 1px solid #6b3a30;
}

.table {
  background-color: #532823;
  color: #fff;
  border-radius: 0.5rem;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #6b3a30;
}

.table th, .table td {
  border: 1px solid #532823;
}

.table th {
  background-color: #6b3a30;
  color: #fff;
}

.table td img {
  border-radius: 50%;
}

.table td {
  vertical-align: middle;
}
</style>
