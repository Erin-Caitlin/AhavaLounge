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
            <th>Title</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(movie, index) in bookingDisplay" :key="index">
            <td><img :src="movie.mImage" :alt="movie.mName" class="profile-img" loading="lazy"></td>
            <td>{{ movie.mName }}</td>
            <td>{{ movie.mCategory }}</td>
            <td>R {{ movie.ticketPrice.toFixed(2) }}</td>
            <td><input type="number" v-model.number="movie.quantity" @change="updateSubtotal(index)" min="1"></td>
            <td>R {{ movie.subtotal.toFixed(2) }}</td>
            <td><button class="btn btn-danger" @click="removeMovie(index)">Remove</button></td>
          </tr>
        </tbody>
      </table>
      <router-link to="/booking"><button type="button" class="btn btn-secondary">Shop More</button></router-link>
      <button type="button" class="btn btn-primary" @click="purchaseTicket">Purchase Ticket</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookingDisplay: JSON.parse(localStorage.getItem('booking')) || []
    };
  },
  methods: {
    updateSubtotal(index) {
      const movie = this.bookingDisplay[index];
      movie.subtotal = movie.ticketPrice * movie.quantity;
      this.$forceUpdate();
    },
    removeMovie(index) {
      this.bookingDisplay.splice(index, 1);
      localStorage.setItem('booking', JSON.stringify(this.bookingDisplay));
    },
    purchaseTicket() {
      this.bookingDisplay = [];
      localStorage.removeItem('booking');
      alert('Your booking has been successful!');
    }
  },
  watch: {
    bookingDisplay: {
      handler(newVal) {
        localStorage.setItem('booking', JSON.stringify(newVal));
      },
      deep: true
    }
  },
  mounted() {
    this.bookingDisplay.forEach(movie => {
      if (!movie.quantity) {
        this.$set(movie, 'quantity', 1);
      }
      this.updateSubtotal(this.bookingDisplay.indexOf(movie));
    });
  }
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
