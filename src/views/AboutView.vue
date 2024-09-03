<template>
    <div class="full-page-background">
      <div class="content-overlay">
        <div class="text-center text-white py-5">
          <h2>About</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
  .full-page-background {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: url(https://erin-caitlin.github.io/AhavaImages/images/image24.jpg) no-repeat center center;
    background-size: cover;
    z-index: -1; 
    overflow: hidden;
  }
  
  .content-overlay {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  </style>
  