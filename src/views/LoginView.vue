<template>
  <div class="container-fluid">
    <video autoplay muted loop preload="auto" class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video13.mp4" type="video/mp4">
    </video>
  </div>
  <div class="form-container">
    <div class="form-content">
      <h2 class="display-2">Login</h2>
      <p class="lead">Log in to your account</p>
      <form @submit.prevent="login">
        <div class="form-group">
          <input class="form-control" type="email" placeholder="Email address" v-model="payload.emailAddress" @blur="validateEmail" required />
          <span class="error-text">{{ errors.emailAddress }}</span>
        </div>
        <div class="form-group position-relative">
          <input :type="passwordFieldType" class="form-control" placeholder="Password" v-model="payload.pswd" @blur="validatePassword" required />
          <button type="button" class="btn show-password-btn" @click="togglePasswordVisibility">
            <span v-if="passwordFieldType === 'password'">Show</span>
            <span v-if="passwordFieldType === 'text'">Hide</span>
          </button>
          <span class="error-text">{{ errors.pswd }}</span>
        </div>
        <p class="lead">Don't have an account? <router-link to="/user-signup" class="login-link">Sign up here</router-link></p>
        <div class="form-actions">
          <button type="submit" class="btn send-btn">
            <span v-if="!loading">Login</span>
            <span v-if="loading">Loading...</span>
          </button>
          <button type="button" class="btn clear-btn" @click="clearForm">Clear</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script setup>
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const payload = reactive({
  emailAddress: '',
  pswd: ''
});

const errors = reactive({
  emailAddress: '',
  pswd: ''
});

const passwordFieldType = ref('password'); // Track the type of the password field

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  errors.emailAddress = emailRegex.test(payload.emailAddress) ? '' : 'Invalid email address';
}

function validatePassword() {
  errors.pswd = payload.pswd.length >= 6 ? '' : 'Password must be at least 6 characters long';
}

function togglePasswordVisibility() {
  passwordFieldType.value = passwordFieldType.value === 'password' ? 'text' : 'password';
}

function login() {
  validateEmail();
  validatePassword();

  if (Object.values(errors).every(error => error === '')) {
    store.dispatch('login', payload);
  }
}

function clearForm() {
  payload.emailAddress = '';
  payload.pswd = '';
}
</script>

<style scoped>
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
}

.form-content {
  background-color: rgba(255, 255, 255, 0.9); 
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 500px; 
  max-height: 80vh; 
  overflow-y: auto;
}

h2 {
  font-family: 'Georgia', serif;
  font-size: 30px;
  text-align: center;
  color: #532823;
  margin-bottom: 1.5rem;
}

.lead {
  text-align: center;
  font-size: 16px;
  margin-bottom: 1.5rem;
  color: #666;
}

.form-group {
  margin-bottom: 1.5rem;
}

.position-relative {
  position: relative;
}

input {
  width: 100%;
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.95);
  font-family: 'Arial', sans-serif;
  font-size: 16px;
}

input::placeholder {
  color: #999;
}

.error-text {
  color: red;
  font-size: 12px;
  margin-top: 0.5rem;
}

.show-password-btn {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  color: #532823;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  z-index: 1; /* Ensure the button is above the input field */
}

.show-password-btn:hover {
  text-decoration: underline;
}

.login-link {
  color: #532823;
  text-decoration: none;
  font-weight: bold;
}

.login-link:hover {
  text-decoration: underline;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.btn {
  width: 48%;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-btn {
  background-color: #532823;
  color: #fff;
}

.send-btn:hover {
  background-color: #4b3324;
}

.clear-btn {
  background-color: #f5f5f5;
  color: #333;
}

.clear-btn:hover {
  background-color: #e6e6e6;
}
</style>
