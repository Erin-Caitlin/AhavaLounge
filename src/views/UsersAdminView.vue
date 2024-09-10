<template>
  <div id="app">
    <nav class="navbar">
      <!-- Other Nav Items -->
      <span class="navbar-brand" @click="openModal" id="title">
        <i class="bi bi-person-fill"></i>
      </span>
    </nav>

    <!-- Modal Component -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal"></div>

    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close-modal" @click="closeModal">&times;</span>
        <h2 class="display-2">Sign Up</h2>
        <form @submit.prevent="register">
          <div class="form-control-wrapper">
            <input class="form-control" type="text" placeholder="First name" v-model="payload.firstName" required />
          </div>
          <div class="form-control-wrapper">
            <input class="form-control" type="text" placeholder="Last name" v-model="payload.lastName" required />
          </div>
          <div class="form-control-wrapper">
            <input class="form-control" type="text" placeholder="Age" v-model="payload.age" required />
          </div>
          <div class="form-control-wrapper">
            <input class="form-control" type="text" placeholder="Gender" v-model="payload.gender" required />
          </div>
          <div class="form-control-wrapper">
            <input class="form-control" type="email" placeholder="Email address" v-model="payload.emailAddress" required />
          </div>
          <div class="form-control-wrapper">
            <input class="form-control" type="password" placeholder="Password" v-model="payload.pswd" required />
          </div>
          <div class="form-actions">
            <button type="submit" class="btn send-btn">Send</button>
            <button type="reset" class="btn clear-btn">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isModalOpen = ref(false);

const payload = reactive({
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  emailAddress: '',
  pswd: ''
});

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

function register() {
  store.dispatch('register', payload);
  closeModal();
}
</script>
  
 <style scoped>
#admin-page {
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

.admin-container {
  margin: 1rem 0;
}

.btn {
  margin: 0.4rem;
  background-color: #532823;
  border-color: #532823;
  color: #fff;
}

.btn-secondary {
  background-color: #532823;
  border-color: #532823;
  color: #fff;
}

.btn-secondary:hover {
  background-color: #6b3a30;
  border-color: #6b3a30;
}

.modal-content {
  background-color: #532823;
  color: #fff;
  border-radius: 0.5rem;
  border: none;
}

.modal-header {
  border-bottom: 1px solid #6b3a30;
}

.modal-header .btn-close {
  filter: invert(1);
}

.modal-body {
  padding: 2rem;
}

.modal-body .form-control {
  background-color: #6b3a30;
  border: 1px solid #532823;
  color: #fff;
}

.modal-body .form-control:focus {
  border-color: #8d5c51;
  box-shadow: 0 0 0 0.2rem rgba(141, 92, 81, 0.25);
}

.modal-footer {
  border-top: 1px solid #6b3a30;
}

.table {
  background-color: #532823;
  color: #fff;
  border-radius: 0.5rem;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #6b3a30;
}

.table th, .table td {
  border: 1px solid #532823;
}

.table th {
  background-color: #6b3a30;
  color: #fff;
}

.table td img {
  border-radius: 50%;
}

.table td {
  vertical-align: middle;
}
</style>
