<template>
  <div class="home">
    <video autoplay muted loop preload="auto" class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/backgroundvideo.mp4" type="video/mp4">
    </video>
    <div class="content">
      <h1 class="display-1">Welcome to Ahava Lounge</h1>
      <p class="lead">A prestige cinema and restaurant combined, offering you an elegant experience where you can savour gourmet dining and enjoy your favorite movies all in one place.</p>
      <button type="button" class="booking-page-link">BOOK NOW</button>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.home {
  position: relative;
  overflow: hidden;
  height: 100vh;
  margin: 0;
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

.content {
  position: relative;
  z-index: 1; 
  color: white; 
  text-align: center; 
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
p {
  width: 50%;
}
h1 {
  font-family: "Philosopher", sans-serif;
    font-weight: 400;
    font-style: normal;
}
.booking-page-link {
  background-color: #532823; 
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 50px; 
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
}

.booking-page-link::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.75s ease-in-out;
  transform: translate(-50%, -50%) rotate(45deg);
  opacity: 0;
  z-index: 0;
}

.booking-page-link:hover::before {
  opacity: 1;
  width: 400%;
  height: 400%;
}

.booking-page-link:hover {
  background-color: #6b392a; 
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4); 
}

.booking-page-link:active {
  transform: translateY(2px); 
}

</style>

