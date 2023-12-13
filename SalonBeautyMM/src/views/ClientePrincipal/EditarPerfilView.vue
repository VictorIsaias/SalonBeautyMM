<template>
  <v-container class="pa-9 " align="center" justify="center">
              <v-card class="contenedor" align="start" justify="center"  style="font-family:'Britannic'" color="#FFE5FD">            
        <v-form ref='form' @submit.prevent="submitForm">   
          <v-row class='ml-6 mr-4'>  
            <v-col  style="font-family:'Oswald'" cols="11">
              <v-card-title class="titulo" style="font-family:'Britannic'">MI CUENTA</v-card-title>
              <v-divider class="mx-4 mb-5 border-opacity-25" ></v-divider> 
              <v-text-field  variant="underlined"  :rules='[rules.requerido,rules.max(datos.nombre,30)]' v-model="datos.nombre" label="Nombre/s" ></v-text-field>
              <v-text-field variant="underlined"  :rules='[rules.max(datos.apellido_paterno,15)]'  v-model="datos.apellido_paterno" label="Apellido paterno"></v-text-field>
              <v-text-field variant="underlined"  :rules='[rules.max(datos.apellido_materno,15)]'  v-model="datos.apellido_materno" label="Apellido materno"></v-text-field>
              <v-text-field variant="underlined" v-mask="'(00) 0000-000-000'" :rules="[rules.mintel]" v-model="datos.telefono" label="Numero de teléfono"></v-text-field>
              <v-text-field variant="underlined" :rules="[rules.requerido,rules.correo,rules.correoval2(datos.user,usuarios),rules.max(datos.user,25)]" v-model="datos.user" label="Correo Electrónico *" type="email"></v-text-field>
              <v-text-field variant="underlined" :rules="[rules.requerido,rules.min,rules.max(datos.contrasena,25)]" v-model="datos.contrasena" label="Contraseña *" type="password"></v-text-field>   
             
            </v-col>   
            <v-col  class='esconder1'>
              <boton @click='editar' texto='Actualizar' class='mb-4'></boton>
            </v-col>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          </v-row>     
        </v-form>    
      </v-card>
      </v-container>
    </template>
    
    <style>
    .boton{
      background: linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);
      color: purple;
      font-family: "Britannic";
      margin-bottom: 20px;
    }
   
    
    </style>
    <script setup>
    
import rules from '@/validations/rules.js'
    import {ref,onMounted} from 'vue'
  import boton from '@/components/BotonPagina.vue'
  import { storeToRefs } from 'pinia'
import {useUsuarioStore} from '@/stores/UsuariosStore.js'

const user = useUsuarioStore()

const {usuario} = storeToRefs(user)
const form = ref()

      var datos= ref({
            id: usuario.value.usuario.id,
            nombre: usuario.value.usuario.nombre,
            apellido_paterno: usuario.value.usuario.apellido_paterno,
            apellido_materno:usuario.value.usuario.apellido_materno,
            user: usuario.value.usuario.user,
            telefono: usuario.value.usuario.telefono,
            contrasena: usuario.value.usuario.contrasena
      })

      const usuarios=ref([])

const response = async ()=>{
  const { valid } = await form.value.validate()
  if(!valid){
    return
  }
    try{
        const respuesta = await fetch('http://18.116.31.102/usuarios');
        const data = await respuesta.json();
        usuarios.value=data.data;
    }catch{

    }
  }  


  onMounted(response);
   
   async  function editar(){

  
     

await fetch('http://18.116.31.102/usuario/actualizar', {
method: 'POST',
body: JSON.stringify(datos.value),
}).then(response => response.json())
.then(responsej => {
    if (responsej.status != 200) {
        return
    }
   usuario.value= {usuario: {user: datos.value.user,
    apellido_paterno: datos.value.apellido_paterno,
    apellido_materno: datos.value.apellido_materno,
    nombre: datos.value.nombre,
    telefono: datos.value.telefono,
    contrasena: datos.value.contrasena}, _token: usuario.value._token}

});
}

   
      
       
      
    
    </script>
  