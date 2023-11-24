import { createRouter, createWebHistory } from 'vue-router'
import iniciarview from '../views/IniciarSesionView.vue'
import registrarview from '../views/RegistrarUsuarioView.vue'
import administrarview from '../views/AdministrarPaginaView.vue'
import userview from '../views/UserView.vue'
import servicesview from '../views/ServicesView.vue'
import detalleview from '../views/DetalleView.vue'
import vercatalogoview from '../views/VerCatalogoView.vue'
import verserviciosview from '../views/VerServiciosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: ()=>import('../views/PaginaPrincipalView.vue')
    },
    {
      path: '/user',
      name: 'usuario',
      component: userview,
      children: [
        {
          path: 'log-in',
          name: 'iniciar',
          component: iniciarview
        },
          {
              path: 'sign-in',
              name: 'registrar',
              component: registrarview
          },
          
      ]
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
      path: '/crear_cita/:idserv',
      name: 'crear_cita',
      component: () => import('../views/CalendarioClienteView.vue')
    },
    {
      path: '/services',
      name: 'servicios',
      component: servicesview,
      children: [
        {
          path: 'catalog',
          name: 'catalogos',
          component: vercatalogoview,
        },
            {
              path: 'sub-services/:idcat/:cat',
              name: 'sub-servicios',
              component: verserviciosview,
            },
                {
                  path: 'detail/:idserv/:serv',
                  name: 'detalles',
                  component: detalleview,
                }
              
            
          
        
        
       
      ]
    }
  ]
})

export default router
