<template>
  <div class="container-fluid">
    <video autoplay muted loop preload="auto" class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video13.mp4" type="video/mp4">
    </video>
    <div id="order-view">
      <h2 class="table-heading">Booked Movies</h2>

      <table id="orderTable" class="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Movie</th>
            <th>Category</th>
            <th>Price</th>
            <th>Seats</th>
            <th>Subtotal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(movie, index) in bookingDisplay" :key="index">
            <td><img :src="movie.mImage" :alt="movie.mName" class="profile-img" loading="lazy"></td>
            <td>{{ movie.mName }}</td>
            <td>{{ movie.mCategory }}</td>
            <td>R {{ (movie.ticketPrice || 0).toFixed(2) }}</td>
            <td>{{ movie.seats }}</td>
            <td>R {{ (movie.subtotal || 0).toFixed(2) }}</td>
            <td><button class="btn btn-danger" @click="removeMovie(index)">Remove</button></td>
          </tr>
        </tbody>
      </table>
      <router-link to="/booking"><button type="button" class="btn btn-secondary">Book another movie</button></router-link>
      <button type="button" class="btn btn-primary" @click="purchaseTicket">Purchase Ticket</button>
    </div>
  </div>
</template>

<script>
import { reactive, watch, onMounted } from 'vue';

export default {
  setup() {
    const bookingDisplay = reactive(JSON.parse(localStorage.getItem('booking')) || []);

    const saveToLocalStorage = () => {
      localStorage.setItem('booking', JSON.stringify(bookingDisplay));
      console.log('Updated localStorage:', localStorage.getItem('booking'));
    };

    const updateSubtotal = (index) => {
      const movie = bookingDisplay[index];
      if (movie && movie.ticketPrice && movie.seats) {
        movie.subtotal = movie.ticketPrice * movie.seats;
      } else {
        movie.subtotal = 0;
      }
      console.log('Updated subtotal for movie:', movie);
    };

    const removeMovie = (index) => {
      bookingDisplay.splice(index, 1);
      saveToLocalStorage();
    };

    const purchaseTicket = () => {
      bookingDisplay.length = 0; // Clear array
      localStorage.removeItem('booking');
      alert('Your booking has been successful!');
      console.log('Booking cleared');
    };

    watch(
      () => bookingDisplay,
      () => saveToLocalStorage(),
      { deep: true }
    );

    onMounted(() => {
      bookingDisplay.forEach((movie, index) => {
        if (movie.seats === undefined) {
          movie.seats = 1;
        }
        updateSubtotal(index);
      });
    });

    return {
      bookingDisplay,
      updateSubtotal,
      removeMovie,
      purchaseTicket,
    };
  },
};
</script>

<style scoped>
#order-view {
  padding: 2rem;
  text-align: center;
  color: white;
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
  filter: brightness(40%);
}
.table-heading {
  font-size: 2rem;
  font-family: 'Playfair Display', serif;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6);
}
.btn {
  background-color: #532823; 
  border-color: #532823;
  color: white;
  margin: 0.5rem;
}
.btn:hover {
  background-color: #b37f55; 
  border-color: #b37f55;
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
}
#orderTable thead {
  background-color: #532823;
  color: white;
}
#orderTable th, #orderTable td {
  padding: 1rem;
}
#orderTable tbody tr:nth-child(even) {
  background-color: #b37f55; 
}
#orderTable tbody tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.8); 
}
.profile-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.table img {
  transition: transform 0.2s;
}
.table img:hover {
  transform: scale(1.1);
}
@media (max-width: 768px) {
  .table-heading {
    font-size: 1.5rem;
  }
  #orderTable th, #orderTable td {
    padding: 0.5rem;
  }
  .profile-img {
    width: 40px;
    height: 40px;
  }
  .btn {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
}
@media (max-width: 576px) {
  .table-heading {
    font-size: 1.2rem;
  }
  .btn {
    width: 100%;
    margin: 0.25rem 0;
  }
}
</style>
