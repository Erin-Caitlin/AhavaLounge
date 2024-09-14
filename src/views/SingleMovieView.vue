<template>
  <div class="container">
    <video autoplay muted loop preload="auto" class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video13.mp4" type="video/mp4">
    </video>

    <div class="row">
      <h2 class="display-2 text-white">Movie Details</h2>
    </div>

    <div v-if="loading" class="row justify-content-center">
      <Spinner />
    </div>

    <div v-else-if="movie" class="row justify-content-center">
      <div class="movie-card">
        <div class="card-header">
          <img :src="movie.mImage" class="movie-image" :alt="movie.mName" loading="lazy" />
          <span class="age-label">{{ movie.ageRestriction }}+</span>
        </div>
        <div class="card-body">
          <h4 class="display-4">{{ movie.mName }}</h4>
          <p class="movie-category">{{ movie.mCategory }}</p>
          <p class="movie-description">{{ movie.mDescription }}</p>
          <p class="movie-info">
            <span class="info-label">Ticket Price:</span> R{{ movie.ticketPrice }}
          </p>
          <p class="movie-info">
            <span class="info-label">Duration:</span> {{ movie.mDuration }}
          </p>
          <p class="movie-info">
            <span class="info-label">Year:</span> {{ movie.releaseDate }}
          </p>
          <button class="btn-book" @click="addToBookingList">Book Now</button>
        </div>
      </div>
    </div>

    <p v-else class="text-white">Movie not found</p>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    Spinner,
  },
  computed: {
    movie() {
      return this.$store.state.movie;
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  methods: {
    addToBookingList() {
      const movieToAdd = { ...this.movie, seats: 1 };
      let bookingList = JSON.parse(localStorage.getItem('booking')) || [];
      const existingIndex = bookingList.findIndex(m => m.id === movieToAdd.id);
      if (existingIndex > -1) {
        bookingList[existingIndex].seats += 1;
      } else {
        bookingList.push(movieToAdd);
      }
      
      localStorage.setItem('booking', JSON.stringify(bookingList));
      this.$router.push('/order-list');
    }
  },
  mounted() {
    this.$store.dispatch('fetchMovie', this.$route.params.id);
    window.scrollTo(0, 0);
  }
};
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
  border-radius: 8px;
}

.movie-card {
  display: flex;
  align-items: center;
  background: rgba(80, 80, 80, 0.6);
  padding: 20px;
  border-radius: 8px;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 100%;
  margin: 20px 0;
}

.card-header {
  flex: 1;
  position: relative;
}

.movie-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.age-label {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #532823;
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
}

.card-body {
  flex: 2;
  padding-left: 20px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  text-align: center; 
}


.movie-name {
  font-size: 2rem;
  color: #fff;
}

.movie-category {
  font-size: 1.5rem;
  color: #532823;
}

.movie-description {
  max-width: 80%;
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: center;
  margin: 0 auto; 
}

.movie-info {
  margin-bottom: 10px;
}

.info-label {
  font-weight: bold;
  color: #c0c0c0;
}

.btn-book {
  background-color: #532823;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-book:hover {
  background-color: #6b392a;
}

.text-white {
  color: #fff;
}

@media (max-width: 768px) {
  .container {
    padding: 20px;
  }

  .movie-card {
    flex-direction: column;
  }

  .card-body {
    padding-left: 0;
    padding-top: 20px;
  }
}
</style>
