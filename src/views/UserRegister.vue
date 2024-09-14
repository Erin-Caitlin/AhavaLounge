<template>
  <div class="container-fluid">
    <video autoplay muted loop preload="auto" class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video13.mp4" type="video/mp4">
    </video>
  </div>
  <div class="form-container">
    <div class="form-content">
      <h2 class="display-2">Sign Up</h2>
      <p class="lead">Create a new account</p>
      <form @submit.prevent="register">
        <div class="form-group">
          <input class="form-control" type="text" placeholder="First name" v-model="payload.firstName" @blur="validateFirstName" required />
          <span class="error-text">{{ errors.firstName }}</span>
        </div>
        <div class="form-group">
          <input class="form-control" type="text" placeholder="Last name" v-model="payload.lastName" @blur="validateLastName" required />
          <span class="error-text">{{ errors.lastName }}</span>
        </div>
        <div class="form-group">
          <input class="form-control" type="number" placeholder="Age (2 digits)" v-model="payload.age" @blur="validateAge" min="10" max="99" required />
          <span class="error-text">{{ errors.age }}</span>
        </div>
        <div class="form-group">
          <select class="form-control" v-model="payload.gender" @blur="validateGender" required>
            <option value="" disabled>Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          <span class="error-text">{{ errors.gender }}</span>
        </div>
        <div class="form-group">
          <input class="form-control" type="email" placeholder="Email address" v-model="payload.emailAddress" @blur="validateEmail" required />
          <span class="error-text">{{ errors.emailAddress }}</span>
        </div>
        <div class="form-group">
          <input class="form-control" type="password" placeholder="Password" v-model="payload.pswd" @blur="validatePassword" required />
          <span class="error-text">{{ errors.pswd }}</span>
        </div>
        <div class="form-group">
          <input class="form-control" type="url" placeholder="Profile link" v-model="payload.userProfile" />
        </div>
        <div class="form-group">
          <select class="form-control" v-model="payload.role" @blur="validateRole" required>
            <option value="" disabled>Select Role</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
          <span class="error-text">{{ errors.role }}</span>
        </div>
        <p class="lead">Already have an account? <router-link to="/user-login" class="login-link">Login here</router-link></p>
        <div class="form-actions">
          <button type="submit" class="btn send-btn">Sign Up</button>
          <button type="button" class="btn clear-btn" @click="clearForm">Clear</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const initialPayload = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  emailAddress: '',
  pswd: '',
  userProfile: 'https://erin-caitlin.github.io/AhavaImages/images/user-profile.png',
  role: 'User' 
};

const payload = reactive({ ...initialPayload });
const errors = reactive({
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  emailAddress: '',
  pswd: '',
  role: ''
});

function validateFirstName() {
  errors.firstName = payload.firstName ? '' : 'First name is required';
}

function validateLastName() {
  errors.lastName = payload.lastName ? '' : 'Last name is required';
}

function validateAge() {
  const age = parseInt(payload.age, 10);
  errors.age = (age >= 10 && age <= 99) ? '' : 'Age must be a two-digit number between 10 and 99';
}

function validateGender() {
  errors.gender = payload.gender ? '' : 'Gender is required';
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  errors.emailAddress = emailRegex.test(payload.emailAddress) ? '' : 'Invalid email address';
}

function validatePassword() {
  errors.pswd = payload.pswd.length >= 6 ? '' : 'Password must be at least 6 characters long';
}

function validateRole() {
  errors.role = payload.role ? '' : 'Role is required';
}

function register() {
  validateFirstName();
  validateLastName();
  validateAge();
  validateGender();
  validateEmail();
  validatePassword();
  validateRole();

  if (Object.values(errors).every(error => error === '')) {
    store.dispatch('register', payload);
  }
}

function clearForm() {
  payload.firstName = '';
  payload.lastName = '';
  payload.age = '';
  payload.gender = '';
  payload.emailAddress = '';
  payload.pswd = '';
  payload.role = 'User'; 
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

input, select {
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

select {
  font-size: 16px;
}

.error-text {
  color: red;
  font-size: 12px;
  margin-top: 0.5rem;
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
