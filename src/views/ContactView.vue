<template>
  <div class="container-fluid" id="contact-page">
    <video autoplay muted loop preload="auto" class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video4.mp4" type="video/mp4">
    </video>
    <div class="text-center text-white py-2">
      <h2>Contact Us</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-8 mb-4 p-4 rounded shadow contact" data-aos="fade-up">
        <form @submit.prevent="handleSubmit" ref="form">
          <div class="form-group mb-3">
            <div class="row">
              <div class="col-6">
                <input type="text" v-model="form.first_name" @input="validateFirstName" @blur="validateFirstName" :class="{'is-invalid': errors.first_name}" class="form-control border-bottom" placeholder="First Name" pattern="[A-Za-z\s]*" title="First name should only contain letters and spaces">
                <div v-if="errors.first_name" class="invalid-feedback">{{ errors.first_name }}</div>
              </div>
              <div class="col-6">
                <input type="text" v-model="form.last_name" @input="validateLastName" @blur="validateLastName" :class="{'is-invalid': errors.last_name}" class="form-control border-bottom" placeholder="Last Name" pattern="[A-Za-z\s]*" title="Last name should only contain letters and spaces">
                <div v-if="errors.last_name" class="invalid-feedback">{{ errors.last_name }}</div>
              </div>
            </div>
          </div>
          <div class="form-group mb-3">
            <input type="email" v-model="form.email" @blur="validateEmail" :class="{'is-invalid': errors.email}" class="form-control border-bottom" placeholder="email@gmail.com">
            <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
          </div>
          <div class="form-group mb-4">
            <textarea v-model="form.message" @blur="validateMessage" :class="{'is-invalid': errors.message}" class="form-control border-bottom" rows="5" placeholder="Your message..."></textarea>
            <div v-if="errors.message" class="invalid-feedback">{{ errors.message }}</div>
          </div>
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-dark me-2">Send</button>
            <button type="reset" class="btn btn-outline-dark" @click="resetForm">Clear</button>
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
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        message: ''
      },
      errors: {}
    };
  },
  mounted() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true 
    });
  },
  methods: {
    validateFirstName() {
      const nameRegex = /^[A-Za-z\s]+$/;
      this.errors.first_name = this.form.first_name
        ? (nameRegex.test(this.form.first_name) ? '' : 'First name should only contain letters and spaces.')
        : 'First name is required.';
    },
    validateLastName() {
      const nameRegex = /^[A-Za-z\s]+$/;
      this.errors.last_name = this.form.last_name
        ? (nameRegex.test(this.form.last_name) ? '' : 'Last name should only contain letters and spaces.')
        : 'Last name is required.';
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.errors.email = emailRegex.test(this.form.email) ? '' : 'Please enter a valid email address.';
    },
    validateMessage() {
      this.errors.message = this.form.message ? '' : 'Message cannot be empty.';
    },
    handleSubmit() {
      this.validateFirstName();
      this.validateLastName();
      this.validateEmail();
      this.validateMessage();

      if (Object.values(this.errors).every(error => !error)) {
        this.$refs.form.submit();
      }
    },
    resetForm() {
      this.form = {
        first_name: '',
        last_name: '',
        email: '',
        message: ''
      };
      this.errors = {};
    }
  }
}
</script>

<style scoped>
.invalid-feedback {
  color: #dc3545;
  background-color: white;
  font-size: 0.875em; 
  display: block; 
}

.is-invalid {
  border-color: #dc3545 !important;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); 
}

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
