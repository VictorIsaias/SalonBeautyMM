import { createRouter, createWebHistory } from 'vue-router'
import iniciarview from '../views/IniciarSesionView.vue'
import registrarview from '../views/RegistrarUsuarioView.vue'
import administrarview from '../views/AdministrarPaginaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: ()=>import('../views/PaginaPrincipalView.vue')},
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
      component: () => import('../views/CitasClienteView.vue')
    },
    {
      path: '/detalles_servicio',
      name: 'detalles_servicio',
      component: () => import('../views/DetallesServicioView.vue')
    },
    {
      path: '/crear_cita',
      name: 'crear_cita',
      component: () => import('../views/CalendarioClienteView.vue')
    }
  ]
})

export default router
