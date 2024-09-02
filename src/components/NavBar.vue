<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid d-flex flex-column align-items-center">
      <div class="navbar-title d-flex justify-content-between align-items-center w-100">
        <router-link class="navbar-brand" to="/" id="title"><i class="bi bi-person-fill"></i></router-link>
        <h1>Ahava Lounge</h1>
        <router-link class="navbar-brand" to="/user-profile" id="user-icon"><i class="bi bi-cart2"></i></router-link>
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
<!-- <template>
  <header id="header">
    <div class="container">
      <h1 dune>D-U-N-E</h1>
      <nav>
        <ul>
          <li><router-link to="/" exact-active-class="active">Home</router-link></li>
          <li><router-link to="/products" exact-active-class="active">Products</router-link></li>
          <li><router-link to="/about" exact-active-class="active">About</router-link></li>
          <li><router-link to="/contact" exact-active-class="active">Contact Me</router-link></li>
          <li><router-link to="/admin" exact-active-class="active">Admin</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: 'NavBar',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }
}
</script>
<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: transparent;
  transition: background-color 0.3s ease;
  padding: 20px 0;
  z-index: 1000;
  font-family: 'Marcellus', serif;
}
header.scrolled {
  background-color: #F9CA92;
}
header .container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header h1 {
  margin: 0;
  color: #FFFFFF;
}
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
nav ul li {
  margin-left: 20px;
  position: relative;
}
nav ul li a {
  text-decoration: none;
  color: #FFFFFF;
  padding: 10px;
  display: block;
  transition: color 0.3s, border-bottom 0.3s;
}
nav ul li a.active {
  color: #FFFFFF;
  font-weight: bold;
  border-bottom: 2px solid #FFFFFF;
}
nav ul li a:hover {
  color: #FFFFFF;
}
header.scrolled nav ul li a {
  color: #E8C281;
}
header.scrolled [dune]{
  color: #E8C281;
}
header.scrolled nav ul li a.active {
  color: #E8C281;
  border-bottom: 2px solid #FFFFFF;
}
header.scrolled nav ul li a::after {
  background: #E8C281;
}
#header {
  position: fixed;
  width: 100%;
  background: transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background 0.3s;
}
#header h1 {
  color: #fff;
}
</style> -->