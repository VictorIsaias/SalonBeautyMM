import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/citas_cliente',
      name: 'citas_cliente',
      component: () => import('../views/citas_cliente.vue')
    }
  ]
})

export default router
