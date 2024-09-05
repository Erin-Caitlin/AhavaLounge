<template>
  <div class="container-fluid" id="admin-page">
    <video autoplay muted loop class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video1.mp4" type="video/mp4">
    </video>
    <div class="container text-center text-white py-2">
      <h3>Admin</h3>
      <button @click="fetchUsers">Get Users</button>
      <section v-for="user in $store.state.user" :key="user.userID">
        {{ user.userID }}
        {{ user.firstname }}
        {{ user.lastname }}
      </section>
      <section v-for="movie in $store.state.movie" :key="movie.movieID">
        {{ movie.movieID }}
        {{ movie.mName }}
        {{ movie.mCategory }}
      </section>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fetchUsers() {
      this.$store.dispatch('fetchUsers');
    },
    fetchUser() {
      this.$store.dispatch('fetchUser');
    },
    register() {
      this.$store.dispatch('register');
    },
    updateUser() {
      this.$store.dispatch('updateUser');
    },
    deleteUser() {
      this.$store.dispatch('deleteUser');
    },
    fetchMovies() {
      this.$store.dispatch('fetchMovies');
    },
    fetchMovie() {
      this.$store.dispatch('fetchMovie');
    },
    addAMovie() {
      this.$store.dispatch('addAMovie');
    },
    updateMovie() {
      this.$store.dispatch('updateMovie');
    },
    deleteMovie() {
      this.$store.dispatch('deleteMovie');
    },
  },
  mounted() {
    this.fetchUsers();
    this.fetchMovies();
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
