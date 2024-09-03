<template>
  <div class="container-fluid" id="#admin-page">
    <video autoplay muted loop class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video1.mp4" type="video/mp4">
    </video>
    <div class="text-center text-white py-2">
      <h2>Admin</h2>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#admin-page {
  padding: 0 1.5rem;
  text-align: center;
  color: #fff;
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

</style>
