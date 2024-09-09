<template>
  <div class="container-fluid" id="booking-page">
    <video autoplay muted loop class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video13.mp4" type="video/mp4" loading="lazy">
    </video>
    <div class="text-center text-white py-2">
      <h2>Book Now</h2>
    </div>
    <div class="container">
      <div class="row search-filter-container">
        <div class="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <input type="text" placeholder="Search Movies" class="search-bar" v-model="searchQuery" />
          <select class="filter-dropdown" v-model="selectedFilter">
            <option value="" disabled selected>Select Filter</option>
            <optgroup label="Category">
              <option value="all">All Categories</option>
              <option v-for="category in categories" :key="category" :value="'category-' + category">{{ category }}</option>
            </optgroup>
            <optgroup label="Age Restriction">
              <option value="all">All Ages</option>
              <option v-for="age in ageRestrictions" :key="age" :value="'age-' + age">{{ age }}+</option>
            </optgroup>
            <optgroup label="Sort By">
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="name">Name</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="row gap-lg-5 justify-content-center" id="products">
        <CardComp v-for="movie in filteredMovies" :key="movie.movieID" class="text-light">
          <template v-slot:cardHeader>
            <div class="carousel-img-container">
              <img :src="movie.mImage" class="carousel-img" :alt="movie.mName" loading="lazy">
              <span class="age-label">{{ movie.ageRestriction }}+</span>
              <div class="overlay">
                <div class="movie-info">
                  <button class="view-movie">
                    <router-link :to="`/movies/${movie.movieID}`" class="link-no-decoration">
                      View movie
                    </router-link>
                  </button>
                </div>
              </div>
            </div>
          </template>
          <template v-slot:cardBody>
            <h5 class="movie-name">{{ movie.mName }}</h5>
            <p class="movie-category">{{ movie.mCategory }}</p>
          </template>
        </CardComp>
      </div>
    </div>
  </div>
</template>


<script>
import CardComp from '@/components/Card.vue';
import store from '@/store';

export default {
  components: {
    CardComp,
  },
  data() {
    return {
      selectedFilter: '',
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
    ageRestrictions() {
      const ageSet = new Set(this.movies.map(movie => movie.ageRestriction));
      return Array.from(ageSet).sort((a, b) => a - b);
    },
    filteredMovies() {
      let movies = [...this.movies].filter(movie =>
        movie.mName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      if (this.selectedFilter.startsWith('category-')) {
        const category = this.selectedFilter.replace('category-', '');
        if (category !== 'all') {
          movies = movies.filter(movie => movie.mCategory === category);
        }
      }

      if (this.selectedFilter.startsWith('age-')) {
        const age = this.selectedFilter.replace('age-', '');
        if (age !== 'all') {
          movies = movies.filter(movie => movie.ageRestriction == age);
        }
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
    store.dispatch('fetchMovies');
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
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
}

.search-filter-container {
  margin-bottom: 20px;
}

.search-bar,
.filter-dropdown {
  width: 100%;
  max-width: 400px;
  padding: 10px 15px;
  border: 1px solid #444;
  border-radius: 8px;
  background-color: #222;
  color: #fff;
  font-size: 16px;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.search-bar::placeholder {
  color: #888;
}

.search-bar:focus,
.filter-dropdown:focus {
  border-color: #fff;
  box-shadow: 0 2px 6px rgba(255, 255, 255, 0.5);
}

.filter-dropdown {
  background-color: #333;
  color: #fff;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 10px;
  margin-left: 10px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.filter-dropdown option {
  background-color: #333;
  color: #fff;
}

.carousel-img-container {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.age-label {
  position: absolute;
  bottom: 10px;
  left: 1.5rem; 
  background-color: rgba(255, 255, 255, 0.904);
  padding: 3px 8px;
  font-size: 12px;
  color: #532823;
  border-radius: 5px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s;
}

.carousel-img-container:hover .overlay {
  visibility: visible;
  opacity: 1;
}

.view-movie {
  text-decoration: none;
  background: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s;
}

.view-movie:hover {
  background: #532823;
  color: #fff;
}

#products {
  color: white;
}

.link-no-decoration {
  text-decoration: none;
  color: inherit;
}

@media (max-width: 768px) {
  .search-bar,
  .filter-dropdown {
    max-width: 100%;
    margin: 0;
  }

  .filter-dropdown {
    margin-left: 0;
    margin-top: 10px;
  }

  .d-flex {
    flex-direction: column;
    align-items: stretch;
  }

  .d-flex .filter-dropdown {
    margin-top: 10px;
  }
}
</style>
