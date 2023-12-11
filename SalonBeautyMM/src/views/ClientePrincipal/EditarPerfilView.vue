<template>
  <v-container class="pa-9 " align="center" justify="center">
              <v-card class="contenedor" align="start" justify="center"  style="font-family:'Britannic'" color="#FFE5FD">            
        <v-form  @submit.prevent="submitForm">   
          <v-row class='ml-6 mr-4'>  
            <v-col  style="font-family:'Oswald'" cols="11">
              <v-card-title class="titulo" style="font-family:'Britannic'">Mi cuenta</v-card-title>
              <v-divider class="mx-4 mb-5 border-opacity-25" ></v-divider> 
              <v-text-field  variant="underlined" v-model="datos.nombre" label="Nombre/s" ></v-text-field>
              <v-text-field variant="underlined" v-model="datos.apellido_p" label="Apellido paterno"></v-text-field>
              <v-text-field variant="underlined" v-model="datos.apellido_m" label="Apellido materno"></v-text-field>
              <v-text-field variant="underlined" v-model="datos.telefono" label="Numero de teléfono"></v-text-field>
              <v-text-field variant="underlined" v-model="datos.email" label="Correo Electrónico *" type="email"></v-text-field>
              <v-text-field variant="underlined" v-model="datos.contraseña" label="Contraseña *" type="password"></v-text-field>   
             
            </v-col>   
            <v-col  class='esconder1'>
              <boton  texto='Actualizar' class='mb-4'></boton>
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
  import boton from '@/components/BotonPagina.vue'

    
 
         var datos= {
            nombre: '',
            apellido_p: '',
            apellido_m:'',
            email: '',
            telefono: '',
            contraseña: ''
          }
   
      
       
      
    
    </script>
  