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
                    <input type="number" class="form-control" id="userAge" v-model="age" required>
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
    
        <!-- User Table -->
        <table id="userTable" class="table table-striped">
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
              <td><img v-bind:src="user.userProfile" alt="Profile Image" style="width: 50px; height: auto;"></td>
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
  
  export default {
    data() {
      return {
        userProfile: '',
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        emailAddress: '',
        userRole: '',
        pswd: ''
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
            pswd: this.pswd,
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
      await this.fetchUsers(); 
    }
  };
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
