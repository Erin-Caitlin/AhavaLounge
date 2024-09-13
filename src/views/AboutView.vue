<template>
    <div class="full-page-background">
      <video autoplay muted loop preload="auto" class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video13.mp4" type="video/mp4" loading="lazy">
    </video>
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
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
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
  