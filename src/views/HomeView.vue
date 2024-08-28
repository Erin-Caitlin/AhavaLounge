<template>
  <div class="home">
    <video autoplay muted loop class="background-video">
      <source src="/videos/background.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="content">
      <h1>Welcome to Ahava Lounge</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped>
.home {
  position: relative;
  overflow: hidden;
  height: 100vh; /* Full viewport height */
  margin: 0;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Make sure the video covers the container */
  z-index: -1; /* Make sure the video is behind other content */
}

.content {
  position: relative;
  z-index: 1; /* Ensure that content is above the video */
  color: white; /* Optional: Adjust text color for better visibility */
  text-align: center; /* Center the text */
  padding: 20px; /* Optional: Add some padding */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
