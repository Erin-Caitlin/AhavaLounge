<template>
  <div class="container-fluid" id="admin-page">
    <video autoplay muted loop preload="auto" class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video1.mp4" type="video/mp4">
    </video>
    <div id="users">
      <h1 class="table-heading">User Table</h1>
      <div class="admin-container">
        <button id="adminSortUser" class="btn btn">Sort</button>
        <button id="adminAddUserBtn" class="btn btn" data-bs-toggle="modal" data-bs-target="#adminAddUser">Add User</button>
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
                <input type="hidden" v-model="userID">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" class="form-control" id="username" v-model="user.username" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" v-model="user.password" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" v-model="user.email" required>
                </div>
                <button type="submit" class="btn btn-primary">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.username }}</td>
            <td>{{ user.password }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="editUser(user)" class="btn btn-warning btn-sm">Edit</button>
              <button @click="deleteUser(user.id)" class="btn btn-danger btn-sm">Delete</button>
            </td>
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
      user: {
        username: '',
        password: '',
        email: ''
      },
      userID: null
    };
  },
  computed: {
    ...mapState(['users'])
  },
  methods: {
    ...mapActions(['fetchUsers', 'register', 'updateUser', 'deleteUser']),
    async saveUser() {
      if (this.userID) {
        await this.updateUser({
          userID: this.userID,
          ...this.user
        });
      } else {
        await this.register(this.user);
      }
      this.resetForm();
      this.fetchUsers();
    },
    editUser(user) {
      this.user = { ...user };
      this.userID = user.id;
      // Trigger modal to show up
      const modal = new bootstrap.Modal(document.getElementById('adminAddUser'));
      modal.show();
    },
    deleteUser(id) {
      this.deleteUser(id);
      this.fetchUsers();
    },
    resetForm() {
      this.user = {
        username: '',
        password: '',
        email: ''
      };
      this.userID = null;
    }
  },
  created() {
    this.fetchUsers();
  }
};
</script>

<style scoped>
/* Your styles here */
</style>


<style scoped>
#admin-page {
  padding: 2rem;
  text-align: center;
  color: white;
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
.table-heading {
  font-size: 2rem;
  font-family: 'Playfair Display', serif;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.6);
}
.btn {
  background-color: #532823; 
  border-color: #532823;
  color: white;
  margin: 0.5rem;
}
.btn:hover {
  background-color: #b37f55f8; 
  border-color: #b37f55f8;
  color: white;
}
.table {
  background-color: rgba(255, 255, 255, 0.9);
  color: #532823; 
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 1rem auto;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
}
#userTable thead {
  background-color: #532823;
  color: white;
}
#userTable th, #userTable td {
  padding: 1rem;
}
#userTable tbody tr:nth-child(even) {
  background-color: #b37f55f8; 
}
#userTable tbody tr:nth-child(odd) {
  background-color: rgba(255, 255, 255, 0.8); 
}
.profile-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.table img {
  transition: transform 0.2s;
}
.table img:hover {
  transform: scale(1.1);
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

.btn-secondary {
  background-color: #532823; 
  border-color: #532823; 
  color: #fff; 
}

.btn-secondary:hover {
  background-color: #6b3a30; 
  border-color: #6b3a30; 
}
@media (max-width: 768px) {
  .table-heading {
    font-size: 1.5rem;
  }
  #userTable th, #userTable td {
    padding: 0.5rem;
  }
  .profile-img {
    width: 40px;
    height: 40px;
  }
  .btn {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
}
@media (max-width: 576px) {
  .table-heading {
    font-size: 1.2rem;
  }
  .btn {
    width: 100%;
    margin: 0.25rem 0;
  }
  .modal-body {
    padding: 1rem;
  }
}
</style>
