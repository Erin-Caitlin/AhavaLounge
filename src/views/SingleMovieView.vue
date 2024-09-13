<template>
  <div class="container">
    <video autoplay muted loop preload="auto" class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video13.mp4" type="video/mp4">
    </video>
    <div class="row">
      <h2 class="display-2 text-white">Movie Details</h2>
    </div>
    <div class="row justify-content-center">
      <Card v-if="movie" class="movie-card">
        <template v-slot:cardHeader>
          <img :src="movie.mImage" loading="lazy" class="img-fluid movie-image" :alt="movie.mName">
        </template>
        <template v-slot:cardBody>
          <h5 class="card-title fw-bold text-white">{{ movie.mName }}</h5>
          <p class="lead text-white">{{ movie.mDescription }}</p>
          <p class="lead">
            <span class="text-success fw-bold">Amount</span>: 
            <span class="text-white">R{{ movie.ticketPrice }}</span>
          </p>
        </template>
      </Card>
      <Spinner v-if="loading" />
      <p v-if="!loading && !movie" class="text-white">Movie not found</p>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    Card,
    Spinner
  },
  computed: {
    movie() {
      return this.$store.state.movie;
    },
    loading() {
      // Determine if the data is still being fetched or if the movie is null
      return !this.movie && this.$store.state.loading;
    }
  },
  mounted() {
    this.$store.dispatch("fetchMovie", this.$route.params.id);
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.container {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
}

.movie-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 100%;
  margin: 20px;
}

.movie-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

.text-white {
  color: #fff;
}

.text-success {
  color: #44bd32;
}

@media (max-width: 768px) {
  .container {
    padding: 20px;
  }
}
</style>
