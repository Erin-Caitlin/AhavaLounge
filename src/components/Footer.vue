<template>
    <div class="container-fluid p-3 text-center">
      <hr/>
      <a href="" target="_blank"><i class="bi bi-github"></i></a>
      <a href="#" target="_blank"><i class="bi bi-linkedin"></i></a>
      <p>Ahava Lounge &copy; {{ cYear }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "FooterComp",
    data() {
      return {
        cYear: new Date().getUTCFullYear()
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  