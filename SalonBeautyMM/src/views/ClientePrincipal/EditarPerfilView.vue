<template>
  <v-container align="center">
              <v-card classs="d-flex" align="start" justify="center" title="Mi cuenta" color="#FDE6DB" width="650" height="550" style="font-family:'Britannic'">
                  <v-divider class="mx-4 mb-5"></v-divider>
        <v-form @submit.prevent="submitForm">
          <v-row>
            <v-col style="font-family:'Oswald'">
              <v-text-field v-model="datos.nombre" label="Nombre *"></v-text-field>
              <v-text-field v-model="datos.apellido" label="Apellidos"></v-text-field>
              <v-text-field v-model="datos.telefono" label="Numero de teléfono"></v-text-field>
              <v-text-field v-model="datos.email" label="Correo Electrónico *" type="email"></v-text-field>
              <v-text-field v-model="datos.contraseña" label="Contraseña *" type="password"></v-text-field>
            </v-col>
          </v-row>
        </v-form> 
        <v-col>
              <v-btn class="boton" align="center" justify="center" type="submit" >Actualizar</v-btn>
            </v-col>
      </v-card>
  
      </v-container>
    </template>
    
    <style>
    .boton{
      background: linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);
      
    }
    </style>
    <script>
  
    
    export default {
      data() {
        return {
          datos: {
            nombre: 'Nombre existente',
            apellido: 'Apellido existente',
            email: 'correo@existente.com',
            telefono: 'numero existente',
            contraseña: 'contraseña existente'
          },
        };
      },
      methods: {
        submitForm() {
          // Aquí puedes manejar la lógica de envío del formulario
          console.log('Cambios guardados');
          console.log('Nuevo Nombre:', this.datos.nombre);
          console.log('Nuevo Apellido:', this.datos.apellido);
          console.log('Nuevo telefono:', this.datos.telefono);
          console.log('Nuevo Correo Electrónico:', this.datos.email);
        }
      }
    };
    </script>