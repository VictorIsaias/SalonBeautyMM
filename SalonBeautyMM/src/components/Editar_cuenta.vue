<template>
  <v-container class="pa-9 " align="center" justify="center">
              <v-card class="contenedor" align="start" justify="center"  style="font-family:'Britannic'" color="#FFE5FD">            
        <v-form  @submit.prevent="submitForm">   
          <v-row justify="center">  
            <v-col style="font-family:'Oswald'" cols="11">
              <v-card-title class="titulo" style="font-family:'Britannic'">Mi cuenta</v-card-title>
              <v-divider class="mx-4 mb-5 border-opacity-25" ></v-divider> 
              <v-text-field class="texto" variant="outlined" v-model="datos.nombre" label="Nombre/s" ></v-text-field>
              <v-text-field class="texto" variant="outlined" v-model="datos.apellido_p" label="Apellido paterno"></v-text-field>
              <v-text-field class="texto" variant="outlined" v-model="datos.apellido_m" label="Apellido materno"></v-text-field>
              <v-text-field class="texto" variant="outlined" v-model="datos.telefono" label="Numero de teléfono"></v-text-field>
              <v-text-field class="texto" variant="outlined" v-model="datos.email" label="Correo Electrónico *" type="email"></v-text-field>
              <v-text-field class="texto" variant="outlined" v-model="datos.contraseña" label="Contraseña *" type="password"></v-text-field>   
              <v-btn class="boton" align="center" justify="center" type="submit" elevation="6">Actualizar</v-btn>
            </v-col>     
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
    <script>
  
    
    export default {
      data() {
        return {
          datos: {
            nombre: '',
            apellido_p: '',
            apellido_m:'',
            email: '',
            telefono: '',
            contraseña: ''
          },
        };
      },
      methods: {
        submitForm() {
          // Aquí puedes manejar la lógica de envío del formulario
          console.log('Cambios guardados');
          console.log('Nuevo Nombre:', this.datos.nombre);
          console.log('Nuevo Apellido Paterno:', this.datos.apellido_p);
          console.log('Nuevo Apellido Materno:', this.data.apellido_m);
          console.log('Nuevo telefono:', this.datos.telefono);
          console.log('Nuevo Correo Electrónico:', this.datos.email);
        }
      }
    };
    </script>
  