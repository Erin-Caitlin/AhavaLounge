<template>
  <div class="container-fluid" id="booking-page">
    <video autoplay muted loop class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video13.mp4" type="video/mp4">
    </video>
    <div class="text-center text-white py-2">
      <h2>Book Now</h2>
    </div>
    <div class="container">
      <div class="row search-filter-container">
        <div class="filter-container">
          <input type="text" placeholder="Search Movies" class="search-bar" v-model="searchQuery" />
          <select class="filter-dropdown" v-model="selectedCategory">
            <option value="" disabled selected>Select Category</option>
            <option value="all">All Categories</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
          <select class="filter-dropdown" v-model="selectedFilter">
            <option value="" disabled selected>Select Sort</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      <div class="row gap-lg-5 justify-content-center" id="products">
        <Card v-for="movie in filteredMovies" :key="movie.movieID">
          <template v-slot:cardHeader>
            <div class="carousel-img-container">
              <img :src="movie.mImage" class="carousel-img" :alt="movie.mName" loading="lazy">
              <div class="overlay">
                <div class="movie-info">
                  <button class="btn view-movie">
                    <router-link :to="`/movies/${movie.movieID}`" class="link-no-decoration">
                      View movie
                    </router-link>
                  </button>
                </div>
              </div>
            </div>
          </template>
          <template v-slot:cardBody>
            <h4 class="movie-name">{{ movie.mName }}</h4>
            <p class="movie-price">R {{ movie.ticketPrice }}</p>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import store from '@/store';

export default {
  components: {
    Card,
  },
  data() {
    return {
      selectedFilter: 'priceAsc',
      selectedCategory: 'all', 
      searchQuery: '',
    };
  },
  computed: {
    movies() {
      return store.state.movies || [];
    },
    categories() {
      const categoriesSet = new Set(this.movies.map(movie => movie.mCategory));
      return Array.from(categoriesSet).sort();
    },
    filteredMovies() {
      let movies = [...this.movies].filter(movie =>
        movie.mName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      if (this.selectedCategory !== 'all') {
        movies = movies.filter(movie => movie.mCategory === this.selectedCategory);
      }

      switch (this.selectedFilter) {
        case 'priceAsc':
          return movies.sort((a, b) => a.ticketPrice - b.ticketPrice);
        case 'priceDesc':
          return movies.sort((a, b) => b.ticketPrice - a.ticketPrice);
        case 'name':
          return movies.sort((a, b) => a.mName.localeCompare(b.mName));
        default:
          return movies;
      }
    },
  },
  mounted() {
    store.dispatch('fetchMovies')
  }
}
</script>

<style scoped>
#booking-page {
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

.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.view-movie {
  text-decoration: none;
  background: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  color: #2c3e50;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s;
}

.view-movie:hover {
  background: #2c3e50;
  color: #fff;
}
</style>
