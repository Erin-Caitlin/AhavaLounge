<template>
  <div class="container-fluid">
    <video autoplay muted loop class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video13.mp4" type="video/mp4" loading="lazy">
    </video>
  </div>
  <div class="form-container">
    <div class="form-content">
      <h2 class="display-2">Sign Up</h2>
      <p class="lead">Create a new account</p>
      <form @submit.prevent="register">
        <div class="form-group">
          <input class="form-control" type="text" placeholder="First name" v-model="payload.firstName" required />
        </div>
        <div class="form-group">
          <input class="form-control" type="text" placeholder="Last name" v-model="payload.lastName" required />
        </div>
        <div class="form-group">
          <input class="form-control" type="number" placeholder="Age" v-model="payload.age" required />
        </div>
        <div class="form-group">
          <input class="form-control" type="text" placeholder="Gender" v-model="payload.gender" required />
        </div>
        <div class="form-group">
          <input class="form-control" type="email" placeholder="Email address" v-model="payload.emailAddress" required />
        </div>
        <div class="form-group">
          <input class="form-control" type="password" placeholder="Password" v-model="payload.pswd" required />
        </div>
        <div class="form-group">
          <input class="form-control" type="url" placeholder="Profile link" v-model="payload.userProfile" />
        </div>
        <p class="lead">Already have an account? <router-link to="/user-login" class="login-link">Login here</router-link></p>
        <div class="form-actions">
          <button type="submit" class="btn send-btn">Sign Up</button>
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
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  emailAddress: '',
  pswd: '',
  userProfile: 'https://erin-caitlin.github.io/AhavaImages/images/user-profile.png'
});

function register() {
  store.dispatch('register', payload);
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

.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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


