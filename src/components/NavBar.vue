<template>
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid d-flex flex-column align-items-center">
        <div class="navbar-left"><router-link class="navbar-brand" to="/" id="title"><i class="bi bi-person-fill"></i></router-link></div>
        <div class="navbar-title"><h1>Ahava Lounge</h1></div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
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
  .navbar {
    background-color: #f8f9fa;
    padding-top: 10px;
  }
  

  .navbar-left {
    position: absolute;
    left: 20px;
    top: 15px;
  }
  
  .navbar-title {
    margin-bottom: 10px;
  }
  
  .navbar-title h1 {
    font-size: 24px;
    color: #343a40;
    text-align: center;
    margin: 0
  }
  .navbar-nav {
    justify-content: center;
  }
  
  .nav-item {
    margin: 0 10px;
  }
  
  .nav-link {
    color: #000;
    text-align: center;
  }
  
  .nav-link:hover {
    background-color: #e2e6ea;
  }
  
  @media (max-width: 991.98px) {
    .navbar-title {
      margin-bottom: 15px;
    }
    
    .navbar-toggler {
      margin-top: 10px;
    }
    
    .navbar-collapse {
      position: fixed;
      top: 0;
      left: -250px;
      width: 250px;
      height: 100%;
      background-color: #343a40;
      transition: left 0.3s ease;
      z-index: 1050;
    }
  
    .navbar-collapse.show {
      left: 0;
    }
  
    .nav-link {
      color: #fff;
      padding: 15px 20px;
    }
  }
  </style>
  