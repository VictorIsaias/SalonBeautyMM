<template>
    <div class="fondo" align='center'>
      <v-container class="pt-16">
  
  <FormularioPrincipal pie='Ya tengo cuenta' link='iniciar' @datos='verificar' titulo='Registro para clientes' enviar='Registrar'>
  
 
        <v-text-field :rules="[rules.requerido]" v-model="nombres" label="Nombre/s*" variant="underlined"></v-text-field>

     
    <v-row>
      <v-col>
        <v-text-field  v-model="apPaterno" label="Apellido Paterno" variant="underlined"></v-text-field>
       
      </v-col>
      <v-col>
        <v-text-field v-model="apMaterno" label="Apellido Materno" variant="underlined"></v-text-field>
       
      </v-col>
    </v-row>
   
    <v-text-field v-model="numero" label="Numero de telefono" variant="underlined"></v-text-field>
        
    <v-text-field :rules="[rules.correo]" v-model="correo" label="Correo electronico*" variant="underlined"></v-text-field>
       
       <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"  :type="show1 ? 'text' : 'password'" :rules="[rules.requerido]"  v-model="contra" label="Contraseña*" variant="underlined"></v-text-field>
        <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"  :type="show1 ? 'text' : 'password'" :rules="[rules.requerido]"  v-model="contraConfirmar" label="Confirmar contraseña*" variant="underlined"></v-text-field>

 
  </FormularioPrincipal>
  
  </v-container>  
    </div>
  
  
  </template>
  
  <script setup>
  import {ref,computed} from 'vue'
  import FormularioPrincipal from '../components/FormularioLayout.vue'
  
  function verificar(correo,contra){
      alert("tu correo es "+correo+" y tu contraseña es "+contra)
  }
  
  var correo = ref('')
  var contra = ref('')
  var apMaterno = ref('')
  var apPaterno = ref('')
  var contraConfirmar = ref('')
  var nombres = ref('')
  const rules = {
   
      requerido: value => !!value || 'Campo requerido',
      correo: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
    }}
  </script>
  
  <style scoped>
  .fondo{
    height: 100vh;
    width: 100vw;
    background: linear-gradient(158deg, #ffe9eb 0%, #ffd2d6 43.38%, #e5a7ad 100%);
  }
  
  </style>