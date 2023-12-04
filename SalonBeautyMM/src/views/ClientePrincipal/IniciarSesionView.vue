<template>
  <div class="fondo" style='height: 100vh;' align='center'>
    <v-container class="pt-16">

<FormularioPrincipal class='w-50 h-100' tamañobtn='large' link='registrar' pie='Registrarse' @datos='login' titulo='Acceso para cliente' enviar='Iniciar'>
  <v-form @submit.prevent ref='form'>

    <v-text-field  :rules="[rules.correo,rules.requerido]" v-model="usuario.input1" label="Correo electronico" variant="underlined"></v-text-field>
    <v-text-field @keypress.enter="verificar" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" hint="Ingresa al menos 8 caracteres" counter  @click:append="show1 = !show1" :type="show1 ? 'text' : 'password'" :rules="[rules.requerido,rules.min]"  v-model="usuario.input2" label="Contraseña" variant="underlined"></v-text-field>

  </v-form>



  <v-alert
    type="error"
    variant='tonal'
    text="Correo electronico o contraseña no validos"
    v-model='error'
  ></v-alert>

</FormularioPrincipal>

</v-container>  
  </div>
</template>

<script setup>
import {ref,computed,onMounted,onUnmounted} from 'vue'
import FormularioPrincipal from '@/components/FormularioLayout.vue'
import router from '@/router/index'
import {useRouter} from 'vue-router'
import { storeToRefs } from 'pinia'
import rules from '@/validations/rules.js'

import {PaginaStore} from '@/stores/PaginaStore.js'

const pagina = PaginaStore()

const {usuarioLocal,usuarios,estadonav} = storeToRefs(pagina)
const {setUser}=pagina



var error=ref(false)

async function login(){
  
  const { valid } = await form.value.validate()
  
  if(!valid){
    return
  }


  fetch("http://localhost/user",{
    method:'POST',
    body:JSON.stringify(usuario.value)
  }).then(response=>response.json()).then(data=>{
    //window.clearLocalStorage()
    if(data.status!=200){
      alert(data.message)

      return
    }
    usuarioLocal.setUser(data).date
  //  router.push({name:'citas_cliente'})

  })





}





const form = ref()

async function verificar(){
  
  if (valid){
    
    let val = true
    for(let i = 0;i<usuarios.value.length;i++){
      if (usuario.value.input1==usuarios.value[i].correo&&usuario.value.input2==usuarios.value[i].contrasena){
        
        val=false
        i=usuarios.value.length
      }
    }
     if(val){
      error.value=true
      return
     }
     


estadonav.value=1
router.replace({ name: 'inicio' })
  }
  
}


var usuario=ref({
input1 :'',
input2 :''
})
var show1 = ref('')
var show2 = ref('')

</script>

<style scoped>
.fondo{
  height: 100vh;
  width: 100vw;
  background: linear-gradient(158deg, #ffe9eb 0%, #ffd2d6 43.38%, #e5a7ad 100%);
}

</style>