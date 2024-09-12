<template>
  <div class="container">
    <video autoplay muted loop class="background-video">
      <source src="https://erin-caitlin.github.io/AhavaImages/videos/video13.mp4" type="video/mp4" loading="lazy">
    </video>
    <div class="row">
      <h2 class="display-2">Movie Details</h2>
    </div>
    <div class="row justify-content-center" v-if="movie">
      <Card>
        <template #cardHeader>
          <img :src="movie.mImage" loading="lazy" class="img-fluid" :alt="movie.mName">
        </template>
        <template #cardBody>
          <h5 class="card-title fw-bold">{{ movie.mName }}</h5>
          <p class="lead">{{ movie.mDescription }}</p>
          <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ movie.amount }}</p>
        </template>
      </Card>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()

const movie = computed(() => store.state.movie)

onMounted(() => {
  store.dispatch('fetchMovie', route.params.id)
})
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
</style>
