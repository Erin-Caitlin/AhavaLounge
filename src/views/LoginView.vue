<template>
  <div class="container-fluid">
    <video autoplay muted loop class="background-video">
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
        <h6 class="sign-up-link">Don't have an account? <router-link class="navbar-brand" to="/user-register" id="title"><span> Sign up here</span></router-link></h6>
        <div class="form-actions">
          <button type="submit" @click.prevent="login" class="btn send-btn">Send</button>
          <button type="reset" class="btn clear-btn">Clear</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const payload = reactive({
  emailAddress: '',
  pswd: ''
});

function login() {
  store.dispatch('login', payload);
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
  padding: 0 20px; /* Add padding for responsiveness */
}

.form-content {
  background: rgba(255, 255, 255, 0.8); /* Slightly opaque background */
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
}

h2 {
  font-family: 'Georgia', serif;
  font-size: 28px;
  text-align: center;
  color: #532823;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.95);
  font-family: 'Arial', sans-serif;
  font-size: 16px;
}

input::placeholder {
  color: #666;
}

.sign-up-link {
  text-align: center;
  margin-top: 1rem;
  font-size: 14px;
}

.sign-up-link a {
  color: #532823;
  text-decoration: none;
}

.sign-up-link a:hover {
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
