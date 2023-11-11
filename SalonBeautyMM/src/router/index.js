import { createRouter, createWebHistory } from 'vue-router'
import iniciarview from '../views/IniciarView.vue'
import registrarview from '../views/Registrarview.vue'
import administrarview from '../views/Administrarview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Principal',
      component: iniciarview  // Cambiar a componente de pagina principal
    },
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
    }
  ]
})

export default router
