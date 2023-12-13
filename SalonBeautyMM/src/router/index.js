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
import editarperfilview from '../views/ClientePrincipal/EditarPerfilView.vue'
import citasadminview from '../views/AdminControl/CitasAdminView.vue'
import {useUsuarioStore} from '../stores/UsuariosStore'

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
          path: 'login',
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
              path: 'sub-services/:idcat',
              name: 'sub-servicios',
              component: verserviciosview,
            },
                {
                  path: 'detail/:idserv',
                  name: 'detalles',
                  component: detalleview,
                }

      ]
    },




    
   
    {
      path: '/dates',
      name: 'citas_cliente',
      component: citasclienteview,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/create_appmnt/:idserv',
      name: 'crear_cita',
      component: calendarioclienteview,
      meta:{
        requiresAuth:true
      }
    },
    
    {
      path: '/contact',
      name: 'contacto',
      component: infocontactoview,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/profile',
      name: 'perfil',
      component: editarperfilview,
      meta:{
        requiresAuth:true
      }
    },




    // Administrador
    {
      path: '/administrar',
      name: 'Administrar',
      component: administrarview,
      meta:{
        requiresAuth:true,
        role: 2
      }
    },
    {
      path: '/calendar',
      name: 'Calendario-admin',
      component: calendarioadminview,
      meta:{
        requiresAuth:true,
        role: 2
      }
    },
    {
      path: '/dates_admin',
      name: 'citas_administrador',
      component: citasadminview,
      meta:{
        requiresAuth:true,
        role: 2
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  const authToken = useUsuarioStore().usuario._token;
  if (to.name === 'usuario' && authToken) {
      next('/');
  } 
  else
    {
      next();
  }
});


router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
      const authToken = useUsuarioStore().usuario._token;

      if (authToken) {
          next();
      } else {
          next('/user/login');
      }
  } else {
      next();
  }
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.role)) {
      const role = useUsuarioStore().usuario.usuario.id_rol;
     
      if (role==2) {
          next();
      } else {
          next('/');
      }
  } else {
      next();
  }
});

export default router   
