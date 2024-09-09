<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid d-flex flex-column align-items-center">
      <div class="navbar-title d-flex justify-content-between align-items-center w-100">
        <router-link class="navbar-brand" to="/user-login" id="title"><i class="bi bi-person-fill"></i></router-link>
        <h1>Ahava Lounge</h1>
        <router-link class="navbar-brand" to="/order-list" id="user-icon" alt="order"><i class="bi bi-calendar-week"></i></router-link>
      </div>
      <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-controls="navbarSupportedContent" aria-expanded="isNavbarVisible" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse justify-content-center" :class="{ show: isNavbarVisible }" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item"><router-link class="nav-link" to="/" @click="handleLinkClick">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/about" @click="handleLinkClick">About</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/booking" @click="handleLinkClick">Book Now</router-link></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Admin</a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/useradmin">Users</router-link></li>
              <li><router-link class="dropdown-item" to="/moviesadmin">Moviess</router-link></li>
            </ul>
          </li>
          <li class="nav-item"><router-link class="nav-link" to="/contact" @click="handleLinkClick">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      isNavbarVisible: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarVisible = !this.isNavbarVisible;
    },
    handleLinkClick() {
      if (window.innerWidth <= 991) {
        this.isNavbarVisible = false;
      }
    },
    handleResize() {
      if (window.innerWidth > 991) {
        this.isNavbarVisible = false;
      }
    },
    handleScroll() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>

<style scoped>
h1 {
  font-size: 24px;
}
.navbar-right {
  margin-left: auto;
}

.navbar .dropdown-menu {
  background-color: #532823b4;
  border: none; 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
}

.navbar .dropdown-item {
  color: #fff;
  padding: 10px 20px; 
  font-size: 14px; 
}

.navbar .dropdown-item:hover {
  background-color: #422020; 
  color: #fff; 
}

.navbar .dropdown-toggle::after {
  display: none; 
}

.navbar .nav-item.dropdown {
  position: relative;
}

.navbar .dropdown-menu {
  position: absolute; 
  top: 100%; 
  left: 0;
  width: 100%; 
}

@media (max-width: 991.98px) {
  .navbar-collapse {
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100%;
    background-color: #532823b4;
    transition: left 0.3s ease;
    z-index: 1050;
  }
  .navbar-collapse.show {
    left: 0;
  }
}
</style>
