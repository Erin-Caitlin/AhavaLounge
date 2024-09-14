<template>
  <div class="container-fluid" id="admin-page">
    <video autoplay muted loop preload="auto" class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video1.mp4" type="video/mp4">
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
            <th>Film Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-movies">
          <tr v-for="movie in movies" :key="movie.movieID">
            <td>{{ movie.movieID }}</td>
            <td><img :src="movie.mImage" alt="Movie Cover" style="width: 50px; height: auto;"></td>
            <td>{{ movie.mName }}</td>
            <td>
              <div>
                <p :class="{ 'show-more': expandedMovies.includes(movie.movieID) }">{{ movie.mDescription }}</p>
                <button @click="toggleDescription(movie.movieID)">
                  {{ expandedMovies.includes(movie.movieID) ? 'Read Less' : 'Read More' }}
                </button>
              </div>
            </td>
            <td>{{ movie.mCategory }}</td>
            <td>{{ movie.mDuration }}</td>
            <td>R{{ movie.ticketPrice }}</td>
            <td>{{ movie.releaseDate }}</td>
            <td>
              <button @click="editMovie(movie.movieID)" class="btn btn-primary btn-sm">Edit</button>
              <button @click="deleteMovie(movie.movieID)" class="btn btn-danger btn-sm">Delete</button>
            </td>
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
      releaseDate: '',
      loading: true,
      expandedMovies: [],
    };
  },
  computed: {
    ...mapState(['movies'])
  },
  methods: {
    ...mapActions(['addMovie', 'fetchMovies', 'editMovie', 'deleteMovie']),
    
    async saveMovie() {
      const payload = {
        mImage: this.mImage,
        mName: this.mName,
        mDescription: this.mDescription,
        mCategory: this.mCategory,
        mDuration: this.mDuration,
        ticketPrice: this.ticketPrice,
        releaseDate: this.releaseDate
      };

      try {
        await this.addMovie(payload);
        alert('Movie added successfully.');
        await this.fetchMovies();
      } catch (error) {
        alert('Error saving movie:', error);
      }
    },

    toggleDescription(movieID) {
      if (this.expandedMovies.includes(movieID)) {
        this.expandedMovies = this.expandedMovies.filter(id => id !== movieID);
      } else {
        this.expandedMovies.push(movieID);
      }
    },

    deleteMovie(movieID) {
      if (confirm('Are you sure you want to delete this movie?')) {
        this.$store.dispatch('deleteMovie', movieID)
          .then(() => {
            alert('Movie deleted successfully.');
            this.fetchMovies();
          })
          .catch(error => {
            alert('Error deleting movie:', error);
          });
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
  font-family: 'Roboto', sans-serif;
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
  background-color: rgba(255, 255, 255, 0.9);
  color: #532823;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 1rem auto;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  font-family: 'Roboto', sans-serif;
}

#movieTable thead {
  background-color: #532823;
  color: white;
}

#movieTable th {
  padding: 1rem;
  background-color: #532823;
  color: white;
}

#movieTable tbody tr:nth-child(even) {
  background-color: #b37f55f8;
}

#movieTable tbody tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.8);
}

.table img {
  transition: transform 0.2s;
}

.table img:hover {
  transform: scale(1.1);
}

.table td img {
  width: 50px;
  height: auto;
  border-radius: 50%;
}

.table td div {
  position: relative;
}

.table td p {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 300px;
}

.table td p.show-more {
  white-space: normal;
  overflow: visible;
}

.table td button {
  margin-top: 0.5rem;
  background-color: #532823;
  border-radius: .2rem;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
}

.table td button:hover {
  background-color: #6b3a30;
}

.table td button:focus {
  outline: none;
}

.table td button.btn-sm {
  padding: 0.3rem 0.6rem;
}

.table td button.btn-primary {
  background-color: #007bff;
}

.table td button.btn-primary:hover {
  background-color: #0056b3;
}

.table td button.btn-danger {
  background-color: #dc3545;
}

.table td button.btn-danger:hover {
  background-color: #c82333;
}
</style>
