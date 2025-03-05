<template>
    <div class="booking-container">
      <h1 class="booking-title">Start Your Booking</h1>
      <label>Choose a Cinema</label>
      <select class="dropdown">
        <option>V&A</option>
      </select>
      <label>Choose a Cinema Type</label>
      <select class="dropdown">
        <option>2D</option>
      </select>
      <label>Choose a Date and Time</label>
      <div class="date-selector">
        <button class="date-button">09 Today</button>
        <button class="date-button">10 Tomorrow</button>
        <button class="date-button">11 Wednesday</button>
        <button class="date-button">12 Thursday</button>
      </div>
      <button @click="$router.push('/seats')" class="next-button">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookingStartView'
  };
  </script>
  
  <style scoped>
  .booking-container { padding: 20px; }
  .booking-title { font-size: 24px; }
  .dropdown { width: 100%; padding: 8px; }
  .date-selector { display: flex; gap: 10px; }
  .date-button, .next-button { padding: 10px; cursor: pointer; }
  </style>
  