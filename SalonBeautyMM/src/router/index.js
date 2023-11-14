import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/inicio',
      name: 'inicio',
      component: ()=>import('../views/Inicio.vue')
    },
    {
      path: '/citas_cliente',
      name: 'citas_cliente',
      component: () => import('../views/citas_cliente.vue')
    }
  ]
})

export default router
