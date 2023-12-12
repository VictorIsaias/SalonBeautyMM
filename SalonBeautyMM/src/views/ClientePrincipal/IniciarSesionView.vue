<template>
  <div class="fondo" style='height: 100vh;' align='center'>
    <v-container class="item">
      <FormularioPrincipal tamañobtn='large' link='registrar' pie='Registrarse' @datos='login'
        titulo='Acceso para cliente' enviar='Iniciar'>
        <v-form @submit.prevent ref='form'>
          <v-text-field :rules="[rules.correo, rules.requerido]" v-model="user" label="Correo electronico"
            variant="underlined"></v-text-field>
          <v-text-field @keypress.enter="login" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            hint="Ingresa al menos 8 caracteres" counter @click:append="show1 = !show1"
            :type="show1 ? 'text' : 'password'" :rules="[rules.requerido, rules.min]" v-model="contrasena"
            label="Contraseña" variant="underlined"></v-text-field>
        </v-form>
        <v-alert type="error" variant='tonal' text="Correo electronico o contraseña no validos" v-model='error'></v-alert>
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
import { useUsuarioStore } from "@/stores/UsuariosStore";

let usuarioStore = useUsuarioStore();
const pagina = PaginaStore()

const {usuarioLocal,usuarios,estadonav} = storeToRefs(pagina)
const {setUser}=pagina

const user = ref('')
const contrasena = ref('')

let valid = ref(true)
var error=ref(false)


const form = ref()
function login() {
  if(!valid.value){
    return
  }

  let usuarios = ref ({
    user: user.value,
    contrasena: contrasena.value
  });

  fetch('http://localhost/auth',{
    method:'POST',
    body:JSON.stringify(usuarios.value),
  }).then(response=>response.json())
  .then(data=>{
    if(data.status!=200){
      error.value=true;
      setTimeout(()=>{
        error.value=true;
      },3000)
      return 
    }

  });
}
var show1 = ref('')
</script>

<style scoped>
.fondo{
  height: 100vh;
  width: 100vw;
  background: linear-gradient(158deg, #ffe9eb 0%, #ffd2d6 43.38%, #e5a7ad 100%);
}
.item{
    margin-top: 50px;
  }
@media screen and (min-width: 500px) {
.item{
  width: 450px;
}
}
@media screen and (min-width: 700px) {
.item{
  width: 500px;
}
}
</style>