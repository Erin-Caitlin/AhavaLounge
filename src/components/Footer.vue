<template>
  <div class="footer">
    <div class="container-fluid p-3 text-center">
      <hr/>
      <a href="https://github.com/Erin-Caitlin/AhavaLounge.git" target="_blank"><i class="bi bi-github icon"></i></a>
      <a href="www.linkedin.com/in/erin-caitlin-williams-25356a320" target="_blank"><i class="bi bi-linkedin icon"></i></a>
      <p>Ahava Lounge &copy; {{ cYear }}</p>
    </div>
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
.footer {
  position: relative;
  z-index: 1040; 
}

.container-fluid {
  position: relative;
  z-index: 1040;
  color: white;
}

hr {
  color: white;
}

.icon {
  color: #532823;
  font-size: 1.5rem; 
  margin: .2rem; 
}

.icon:hover{
  color: white;
}
</style>
verifyAToken