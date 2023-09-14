import { createRouter, createWebHistory } from 'vue-router'
import BoardView from '../views/BoardView.vue'
import ProfileView from '../views/ProfileView.vue'
import AboutView from '../views/AboutView.vue'

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
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
  ]
})

export default router
