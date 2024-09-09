import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/booking',
    name: 'booking',
    component: () => import('../views/BookNowView.vue')
  },
  {
    path: '/single-meal',
    name: 'single-meal',
    component: () => import('../views/SingleMealView.vue')
  },
  {
    path: '/useradmin',
    name: 'useradmin',
    component: () => import('../views/UsersAdminView.vue')
  },
  {
    path: '/moviesadmin',
    name: 'moviesadmin',
    component: () => import('../views/MoviesAdminView.vue')
  },
  {
    path: '/user-login',
    name: 'user-login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/user-register',
    name: 'user-register',
    component: () => import('../views/UserRegister.vue')
  },
  {
    path: '/order-list',
    name: 'order-list',
    component: () => import('../views/OrderView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
