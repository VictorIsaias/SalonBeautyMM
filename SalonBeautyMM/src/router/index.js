import { createRouter, createWebHistory } from 'vue-router'
import iniciarview from '../views/IniciarView.vue'
import registrarview from '../views/Registrarview.vue'
import administrarview from '../views/Administrarview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: ()=>import('../views/Inicio.vue')},
    {
      path: '/iniciar',
      name: 'iniciar',
      component: iniciarview
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: registrarview
    },
    {
      path: '/Administrar',
      name: 'Administrar',
      component: administrarview
    },
    {
      path: '/citas_cliente',
      name: 'citas_cliente',
      component: () => import('../views/citas_cliente.vue')
    }
  ]
})

export default router
