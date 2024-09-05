<template>
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
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style>
  </style>