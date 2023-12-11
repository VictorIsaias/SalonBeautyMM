import { createRouter, createWebHistory } from 'vue-router'
import iniciarview from '../views/ClientePrincipal/IniciarSesionView.vue'
import registrarview from '../views/ClientePrincipal/RegistrarUsuarioView.vue'
import administrarview from '../views/AdminAdministrar/AdministrarPaginaView.vue'
import userview from '../views/ClientePrincipal/UserView.vue'
import servicesview from '../views/ClienteVerServicios/ServicesView.vue'
import detalleview from '../views/ClienteVerServicios/DetalleView.vue'
import vercatalogoview from '../views/ClienteVerServicios/VerCatalogoView.vue'
import verserviciosview from '../views/ClienteVerServicios/VerServiciosView.vue'
import paginaprincipalview from '../views/ClientePrincipal/PaginaPrincipalView.vue'
import citasclienteview from '../views/ClienteCitas/CitasClienteView.vue'
import calendarioclienteview from '../views/ClienteCitas/CalendarioClienteView.vue'
import calendarioadminview from '../views/AdminControl/CalendarioAdminView.vue'
import infocontactoview from '../views/ClientePrincipal/InformacionContactoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: paginaprincipalview
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
      path: '/dates',
      name: 'citas_cliente',
      component: citasclienteview
    },

    {
      path: '/create_appmnt/:idserv/:serv',
      name: 'crear_cita',
      component: calendarioclienteview
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
    },
    {
      path: '/contact',
      name: 'contacto',
      component: infocontactoview
    },
    // Administrador
    {
      path: '/administrar',
      name: 'Administrar',
      component: administrarview
    },
    {
      path: '/calendar',
      name: 'Calendario-admin',
      component: calendarioadminview
    }
  ]
})

export default router   
