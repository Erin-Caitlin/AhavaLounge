<template>
    <div class="snack-container">
      <h1 class="snack-title">Choose Snacks</h1>
      <div class="snack-grid">
        <div v-for="(size, index) in ['Small', 'Regular', 'Large']" :key="index" class="snack-card">
          <p class="snack-text">{{ size }} Combo</p>
          <p class="snack-price">R{{ (index + 1) * 50 }}.00</p>
          <button class="add-snack-button">Add</button>
        </div>
      </div>
      <router-link to="/booking-start" class="finish-booking">Finish Booking</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChooseSnacksView'
  };
  </script>
  
  <style scoped>
  .snack-container { padding: 20px; }
  .snack-title { font-size: 24px; }
  .snack-grid { display: flex; gap: 10px; }
  .snack-card { padding: 10px; border: 1px solid gray; }
  .snack-text { font-size: 18px; }
  .snack-price { font-size: 16px; }
  .add-snack-button { padding: 5px; cursor: pointer; }
  .finish-booking { display: block; margin-top: 20px; }
  </style>
  