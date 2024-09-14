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
              <button type="button" class="btn btn" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="loading">
        <Spinner />
      </div>
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="table-users">
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.userID }}</td>
            <td><img :src="user.userProfile" alt="Profile Image" class="profile-img" loading="lazy"></td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.emailAddress }}</td>
            <td>
              <button class="btn btn-primary btn-sm" @click="editUser(user)"><i class="bi bi-pen"></i></button>
              <button class="btn btn-danger btn-sm" @click="deleteUser(user.userID)"><i class="bi bi-trash3"></i></button>
            </td>
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
      loading: true,
      selectedUser: null
    };
  },
  computed: {
    ...mapState(['users'])
  },
  methods: {
    ...mapActions(['register', 'fetchUsers', 'updateUser', 'deleteUserById']),

    async saveUser() {
      if (this.selectedUser) {
        const updatedUser = {
          userID: this.selectedUser.userID,
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
          await this.updateUser(updatedUser);
          console.log('User updated successfully.');
        } catch (error) {
          console.error('Error updating user:', error);
        }

      } else {
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
        } catch (error) {
          console.error('Error saving user:', error);
        }
      }

      await this.fetchUsers();
      this.resetForm();
    },

    editUser(user) {
      this.selectedUser = user;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.age = user.age;
      this.gender = user.gender;
      this.emailAddress = user.emailAddress;
      this.userRole = user.userRole;
      this.pswd = '';
    },

    async deleteUser(userID) {
      try {
        await this.deleteUserById(userID);
        console.log('User deleted successfully.');
        await this.fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },

    resetForm() {
      this.firstName = '';
      this.lastName = '';
      this.age = '';
      this.gender = '';
      this.emailAddress = '';
      this.userRole = '';
      this.pswd = '';
      this.selectedUser = null;
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

#userTable th {
  padding: 1rem;
  background-color: #532823; 
  color: white; 
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
