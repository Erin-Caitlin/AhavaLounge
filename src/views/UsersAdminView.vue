<template>
  <div class="container-fluid" id="admin-page">
    <video autoplay muted loop class="background-video" preload="metadata">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video1.mp4" type="video/mp4" loading="lazy">
    </video>
    <div id="users">
      <h1>Users Table</h1>
      <div class="admin-container">
        <button id="adminSortUser" class="btn btn-secondary">Sort</button>
        <button id="adminAddUserBtn" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#adminAddUser">Add User</button>
      </div>
      <div class="modal fade" id="adminAddUser" tabindex="-1" aria-labelledby="adminAddUserLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="adminAddUserLabel">Add User</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="addUserForm" @submit.prevent="saveUser">
                <div class="mb-3">
                  <label for="userFirstName" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="userFirstName" v-model="firstName" required>
                </div>
                <div class="mb-3">
                  <label for="userLastName" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="userLastName" v-model="lastName" required>
                </div>
                <div class="mb-3">
                  <label for="userAge" class="form-label">Age</label>
                  <input type="number" class="form-control" id="userAge" v-model.number="age" required>
                </div>
                <div class="mb-3">
                  <label for="userGender" class="form-label">Gender</label>
                  <input type="text" class="form-control" id="userGender" v-model="gender" required>
                </div>
                <div class="mb-3">
                  <label for="userEmail" class="form-label">Email Address</label>
                  <input type="email" class="form-control" id="userEmail" v-model="emailAddress" required>
                </div>
                <div class="mb-3">
                  <label for="userPassword" class="form-label">Password</label>
                  <input type="password" class="form-control" id="userPassword" v-model="pswd" required>
                </div>
                <div class="mb-3">
                  <label for="userProfile" class="form-label">Profile</label>
                  <input type="text" class="form-control" id="userProfile" v-model="userProfile" required>
                </div>
                <button type="submit" class="btn btn-primary">Save User</button>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="loading">
        <Spinner />
      </div>
      <!-- User Table -->
      <table v-else id="userTable" class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody id="table-users">
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.userID }}</td>
            <td><img :src="user.userProfile" alt="Profile Image" style="width: 50px; height: auto;"></td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.emailAddress }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Spinner from '@/components/Spinner.vue'; 

export default {
  components: {
    Spinner 
  },
  data() {
    return {
      userProfile: 'https://erin-caitlin.github.io/AhavaImages/images/user-profile.png',
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      emailAddress: '',
      userRole: '',
      pswd: '',
      loading: true 
    };
  },
  computed: {
    ...mapState(['users'])
  },
  methods: {
    ...mapActions(['register', 'fetchUsers']),
    
    async saveUser() {
      console.log('Saving user...');
      const payload = {
        userProfile: this.userProfile,
        firstName: this.firstName,
        lastName: this.lastName,
        age: +this.age,
        gender: this.gender,
        emailAddress: this.emailAddress,
        userRole: this.userRole,
        pswd: this.pswd
      };

      try {
        await this.register(payload); 
        console.log('User registered successfully.');
        await this.fetchUsers();
      } catch (error) {
        console.error('Error saving user:', error);
      }
    }
  },
  async mounted() {
    try {
      await this.fetchUsers(); 
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style scoped>
#admin-page {
  padding: 2rem;
  text-align: center;
  color: #ffffff; /* White text */
  font-family: 'Roboto', sans-serif;
}

.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(40%);
}

.admin-container {
  margin: 1rem 0;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
}

.btn {
  margin: 0.4rem;
  background-color: #a50034;
  border-color: #a50034;
  color: #ffffff;
}

.btn-secondary {
  background-color: #c0392b;
  border-color: #c0392b;
}

.btn-secondary:hover {
  background-color: #e74c3c;
  border-color: #e74c3c;
}

.modal-content {
  background-color: rgba(255, 255, 255, 0.9);
  color: #532823;
  border-radius: 0.5rem;
  border: none;
}

.modal-header {
  border-bottom: 1px solid #c0392b;
}

.modal-header .btn-close {
  filter: invert(1);
}

.modal-body {
  padding: 2rem;
}

.modal-body .form-control {
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid #a50034;
  color: #532823;
}

.modal-body .form-control:focus {
  border-color: #e74c3c;
  box-shadow: 0 0 0 0.2rem rgba(231, 76, 60, 0.25);
}

.modal-footer {
  border-top: 1px solid #c0392b;
}

.table {
  background-color: rgba(255, 255, 255, 0.2); /* Transparent */
  color: #532823; /* Dark maroon text */
  border-radius: 0.5rem;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5); /* Soft shadow */
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(255, 255, 255, 0.3); /* Transparent alternating rows */
}

.table th, .table td {
  border: 1px solid rgba(165, 0, 52, 0.7);
}

.table th {
  background-color: rgba(165, 0, 52, 0.7);
  color: #ffffff;
}

.table td img {
  border-radius: 50%;
}

.table td {
  vertical-align: middle;
}

#userTable {
  margin: 2rem auto;
  width: 100%;
  max-width: 1200px;
}

/* Media Queries for Responsiveness */
@media (max-width: 1200px) {
  h1 {
    font-size: 2rem;
  }

  #userTable {
    max-width: 1000px;
  }
}

@media (max-width: 992px) {
  .admin-container {
    display: flex;
    flex-direction: column;
  }

  .btn {
    width: 100%; /* Full width buttons for small screens */
    margin-bottom: 0.8rem;
  }

  #userTable {
    max-width: 800px;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
  }

  .table th, .table td {
    font-size: 0.9rem;
    padding: 0.75rem;
  }

  #userTable {
    max-width: 700px;
  }
}

@media (max-width: 576px) {
  h1 {
    font-size: 1.5rem;
  }

  .modal-body .form-control {
    font-size: 0.9rem;
    padding: 0.5rem;
  }

  .table th, .table td {
    font-size: 0.8rem;
    padding: 0.5rem;
  }

  .table td img {
    width: 40px;
  }

  #userTable {
    max-width: 100%;
  }

  /* Adjust modal for smaller screens */
  .modal-dialog {
    max-width: 90%;
  }
}

</style>
