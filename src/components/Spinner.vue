<template>
    <div class="spinner">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SpinnerComp'
  }
  </script>
  
  <style scoped>
  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Adjust as needed */
  }
  
  .dot {
    width: 12px;
    height: 12px;
    margin: 0 5px;
    background-color: #fff; /* Dot color */
    border-radius: 50%;
    animation: bounce 1.4s infinite;
  }
  
  .dot:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .dot:nth-child(3) {
    animation-delay: 0.4s;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  }
  </style>
  