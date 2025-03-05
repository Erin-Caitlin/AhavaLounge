<template>
    <div class="seat-container">
      <h1 class="seat-title">Choose Your Seats</h1>
      <div class="seat-grid">
        <button v-for="i in 40" :key="i" @click="selectedSeat = i" :class="selectedSeat === i ? 'seat-selected' : 'seat-available'">
          {{ i }}
        </button>
      </div>
      <button @click="$router.push('/snacks')" class="next-button">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChooseSeatsView',
    data() {
      return {
        selectedSeat: null
      };
    }
  };
  </script>
  
  <style scoped>
  .seat-container { padding: 20px; }
  .seat-title { font-size: 24px; }
  .seat-grid { display: grid; grid-template-columns: repeat(8, 1fr); gap: 5px; }
  .seat-available { padding: 10px; background: gray; cursor: pointer; }
  .seat-selected { padding: 10px; background: yellow; cursor: pointer; }
  .next-button { padding: 10px; cursor: pointer; }
  </style>
  