import { createRouter, createWebHistory } from 'vue-router'
import BoardView from '../views/BoardView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'board',
      component: BoardView
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: ProfileView
    },
  ]
})

export default router
