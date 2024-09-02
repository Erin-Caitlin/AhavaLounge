<template>
  <div class="home">
    <video autoplay muted loop class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/backgroundvideo.mp4" type="video/mp4">
    </video>
    <div class="content">
      <h1 class="display-1">Welcome to Ahava Lounge</h1>
      <p class="lead">A prestige cinema and restaurant combined, offering you an elegant experience where you can savor gourmet dining and enjoy your favorite movies all in one place.</p>
      <button type="button">BOOK NOW</button>
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
</style>

