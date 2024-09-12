<template>
  <div class="container-fluid" id="contact-page">
    <video autoplay muted loop class="background-video" preload="metadata">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video4.mp4" type="video/mp4" loading="lazy">
    </video>
    <div class="text-center text-white py-2">
      <h2>Contact Us</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-8 mb-4 p-4 rounded shadow contact" data-aos="fade-up">
          <!-- <h4 class="text-center mb-4 text-white">Message Us</h4> -->
          <form action="https://formspree.io/f/myzgnzra" method="POST">
            <div class="form-group mb-3">
              <div class="row">
                <div class="col-6">
                  <input type="text" name="first_name" class="form-control border-bottom" placeholder="First Name" required>
                </div>
                <div class="col-6">
                  <input type="text" name="last_name" class="form-control border-bottom" placeholder="Last Name" required>
                </div>
              </div>
            </div>
            <div class="form-group mb-3">
              <input type="email" name="email" class="form-control border-bottom" placeholder="email@gmail.com" required>
            </div>
            <div class="form-group mb-4">
              <textarea name="message" class="form-control border-bottom" rows="5" placeholder="Your message..." required></textarea>
            </div>
            <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-dark me-2">Send</button>
              <button type="reset" class="btn btn-outline-dark">Clear</button>
            </div>
          </form>
      </div>
      <div class="col-md-8 reach-us p-4 rounded shadow" data-aos="fade-up">
          <h4 class="text-center mb-4 text-white">How to Reach Us</h4>
          <div id="details">
            <div class="mb-3">
              <p><i class="bi bi-envelope text-white"></i> bookings@ahavalounge.com</p>
            </div>
            <div class="mb-3">
              <p><i class="bi bi-telephone text-white"></i> +27 21 123 4567</p>
            </div>
            <div>
              <p><i class="bi bi-geo-alt text-white"></i> 123 Film Street,</p>
              <p>Cinema District,</p>
              <p>Cape Town, 8001</p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';

export default {
  mounted() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true 
    });
  }
}
</script>

<style scoped>
#contact-page {
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

.text-dark {
  color: #532823 !important;
}

.form-control {
  background-color: transparent;
  color: #ffffff42;
  border: none;
  border-bottom: 1px solid #fff; 
}

.form-control:focus {
  box-shadow: none;
  border-color: #532823;
}

.btn-dark {
  background-color: #532823;
  border-color: #532823;
}

.btn-outline-dark {
  background-color: white;
  color: #532823;
  border-color: #532823;
}

.btn-outline-dark:hover {
  background-color: #532823;
  color: #fff;
}

.reach-us,
.contact {
  background-color: #ffffff1f;
}

::placeholder {
  color: #fff;
}
</style>
