<template>
    <div class="fondo" align='center'>
      <v-container class="pt-16">
  
  <FormularioPrincipal link='registrar' pie='Registrarse' @datos='verificar' titulo='Acceso para cliente' enviar='Iniciar'>
  
    <v-text-field :rules="[rules.correo]" v-model="correo" label="Correo electronico" variant="underlined"></v-text-field>
    <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"  :type="show1 ? 'text' : 'password'" :rules="[rules.requerido]"  v-model="contra" label="Contraseña" variant="underlined"></v-text-field>
  
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