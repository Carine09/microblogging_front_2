// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../pages/Home.vue') // charge le composant Home.vue
  },
//   {
//     path: '/profile',
//     component: () => import('')
//   }
]

const router = createRouter({
  history: createWebHistory(), // mode historique (url propres)
  routes
})

export default router
