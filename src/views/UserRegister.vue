<template>
  <div class="form-container">
    <div class="form-content">
      <h2>Message Us</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <input type="text" placeholder="First Name" v-model="payload.firstName" required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Last Name" v-model="payload.lastName" required />
        </div>
        <div class="form-group">
          <input type="email" placeholder="Email Address" v-model="payload.emailAddress" required />
        </div>
        <div class="form-group">
          <textarea placeholder="Your Message" v-model="payload.message" required></textarea>
        </div>
        <div class="form-actions">
          <button type="submit" class="btn send-btn">Send</button>
          <button type="reset" class="btn clear-btn">Clear</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const payload = reactive({
  firstName: '',
  lastName: '',
  emailAddress: '',
  message: ''
})

function register() {
  store.dispatch('register', payload)
}
</script>

#### **Styles**:

```css
<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('@/assets/image.png'); /* Ensure the image is correctly located */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.form-content {
  background-color: rgba(255, 255, 255, 0.85); /* Make it slightly transparent */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  width: 400px;
}

h2 {
  font-family: 'Georgia', serif;
  font-size: 24px;
  text-align: center;
  color: #5a3e2b; /* Dark brown color */
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

input, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.95);
  font-family: 'Arial', sans-serif;
  font-size: 16px;
}

textarea {
  resize: none;
  height: 100px;
}

input::placeholder, textarea::placeholder {
  color: #666;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn {
  width: 48%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-btn {
  background-color: #5a3e2b;
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
