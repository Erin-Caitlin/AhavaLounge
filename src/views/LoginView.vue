<template>
  <div class="container-fluid">
    <video autoplay muted loop preload="auto" class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video13.mp4" type="video/mp4" loading="lazy">
    </video>
  </div>
  <div class="form-container">
    <div class="form-content">
      <h2 class="display-2">Welcome Back!</h2>
      <p class="lead">Login here</p>
      <form @submit.prevent="login">
        <div class="form-group">
          <input class="form-control" type="email" placeholder="Email address" v-model="payload.emailAddress" required />
        </div>
        <div class="form-group">
          <input class="form-control" type="password" placeholder="Password" v-model="payload.pswd" required />
        </div>
        <p class="lead">Don't have an account? <router-link to="/user-register" class="sign-up-link">Sign up here</router-link></p>
        <div class="form-actions">
          <button type="submit" class="btn send-btn">Login</button>
          <button type="button" @click="clearForm" class="btn clear-btn">Clear</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const payload = ref({
  emailAddress: '',
  pswd: ''
})

function login() {
  store.dispatch('login', payload.value)
}

function clearForm() {
  // Reset the form fields
  payload.value.emailAddress = ''
  payload.value.pswd = ''
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

.sign-up-link {
  text-align: center;
  color: #532823;
  text-decoration: none;
  font-weight: bold;
}

.sign-up-link:hover {
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
