<template>
  <div class="fondo" align='center'>
    <v-container class=" item">

<FormularioPrincipal  tamañobtn='large' pie='Ya tengo cuenta' link='iniciar' :param='correo' @datos='submit' titulo='Registro para clientes' enviar='Registrar'>

 <v-form ref="form">
      <v-text-field :rules="[rules.requerido,rules.max(usuario.nombre,30)]" v-model="usuario.nombre" label="Nombre/s*" variant="underlined"></v-text-field>

   
      <v-row>
    <v-col>
      <v-text-field  v-model="usuario.apellido_paterno" :rules='[rules.max(usuario.apellido_paterno,15)]' label="Apellido Paterno" variant="underlined" class="text"></v-text-field>
      <v-text-field  v-model="usuario.apellido_paterno" :rules='[rules.max(usuario.apellido_paterno,15)]' label="Apellido P." variant="underlined" class="text2"></v-text-field>
     
    </v-col>
    <v-col>
      <v-text-field v-model="usuario.apellido_materno" :rules='[rules.max(usuario.apellido_materno,15)]' label="Apellido Materno" variant="underlined" class="text"></v-text-field>
      <v-text-field v-model="usuario.apellido_materno" :rules='[rules.max(usuario.apellido_materno,15)]' label="Apellido M." variant="underlined" class="text2"></v-text-field>
     
    </v-col>
  </v-row>
 
  <v-text-field v-mask-phone.br v-model="usuario.telefono" label="Numero de telefono" variant="underlined"></v-text-field>
      
  <v-text-field :rules="[rules.correo,rules.correoval(usuario.user,usuarios),rules.max(usuario.user,25)]" v-model="usuario.user" label="Correo electronico*" variant="underlined"></v-text-field>
     
    <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" hint="Ingresa al menos 8 caracteres" counter  @click:append="show1 = !show1" :type="show1 ? 'text' : 'password'" :rules="[rules.requerido,rules.min,rules.max(usuario.contrasena,25)]"   v-model="usuario.contrasena" label="Contraseña*" variant="underlined"></v-text-field>
    <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" hint="Ingresa al menos 8 caracteres" counter  @click:append="show1 = !show1" :type="show1 ? 'text' : 'password'" :rules="[rules.requerido,rules.min,rules.max(confirmar,25)]"   v-model="confirmar" label="Confirmar contraseña*" variant="underlined"></v-text-field>

  </v-form>
  <v-alert
    type="error"
    variant='tonal'
    text="Las contraseñas no coinciden"
    v-model='error'
  ></v-alert>
</FormularioPrincipal>

</v-container>  
  </div>


</template>

<script setup>
import {ref,computed,onMounted} from 'vue'
import FormularioPrincipal from '@/components/FormularioLayout.vue'
import router from '@/router/index'
import {useUsuarioStore} from '@/stores/UsuariosStore.js'
import { storeToRefs } from 'pinia'
import rules from '@/validations/rules.js'

const pagina = useUsuarioStore()

const usuarios=ref([])

const response = async ()=>{
    try{
        const respuesta = await fetch('http://3.143.143.93/usuarios');
        const data = await respuesta.json();
        usuarios.value=data.data;
    }catch{

    }
  }  


  onMounted(response);


var error=ref(false)
var confirmar=ref('')
const form = ref()
var show1 = ref('')
var show2 = ref('')
// consulta GET para mostrar usuarios
const usuario=ref({
  nombre:'',
  apellido_paterno:'',
  apellido_materno:'',
  user:'',
  contrasena:'',
  telefono:'',
  id_rol:'1'
})

const submit = async () =>{
  const { valid } = await form.value.validate()
  
  if (valid){
    
    

if (usuario.value.contrasena!=confirmar.value){
  error.value=true
    return
  }


  await fetch('http://3.143.143.93/registrar_usuario',{
    method:'POST',
    headers:{'Content-type': 'application/json'},
    body:JSON.stringify(usuario.value)
  });
  router.replace({ name: 'iniciar'})
  }
}
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
  width: 200px;
}
}
@media screen and (min-width: 700px) {
.item{
  width: 500px;
}
}
@media screen and (min-width: 381px){
  .text2{
    display: none;
  }
}
@media screen and (max-width: 380px) {
  .fondo {
    height: auto;
  }
  .item {
    width: 100%;
  }
  .text{
    display: none;
  }
}
@media screen and (max-width: 700px) {

  .item {
    width: 70%;
  }

}
</style>