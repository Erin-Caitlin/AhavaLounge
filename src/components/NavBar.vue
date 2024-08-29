<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid d-flex flex-column align-items-center">
      <div class="navbar-left">
        <router-link class="navbar-brand" to="/" id="title"><i class="bi bi-person-fill"></i></router-link>
      </div>
      <div class="navbar-title">
        <h1>Ahava Lounge</h1>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/movies">Movie Deals</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/booking">Book Now</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
        </ul>
        <div class="ms-auto navbar-right">
          <router-link class="navbar-brand" to="/user-profile" id="user-icon"><i class="bi bi-cart2"></i></router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
}
</script>

<style scoped>
h1 {
  font-size: 24px;
}
.navbar-right {
  margin-left: auto;
}
</style>
