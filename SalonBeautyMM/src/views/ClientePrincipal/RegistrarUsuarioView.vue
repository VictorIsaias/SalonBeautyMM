<template>
  <div class="fondo" align='center'>
    <v-container class="item">

<FormularioPrincipal tamañobtn='large' pie='Ya tengo cuenta' link='iniciar' :param='correo' @datos='verificar' titulo='Registro para clientes' enviar='Registrar'>

  <v-form ref="form">
      <v-text-field :rules="[rules.requerido]" v-model="input.input1" label="Nombre/s*" variant="underlined"></v-text-field>

   
  <v-row>
    <v-col>
      <v-text-field  v-model="input.input2" label="Apellido Paterno" variant="underlined" class="text"></v-text-field>
      <v-text-field  v-model="input.input2" label="Apellido P." variant="underlined" class="text2"></v-text-field>
     
    </v-col>
    <v-col>
      <v-text-field v-model="input.input3" label="Apellido Materno" variant="underlined" class="text"></v-text-field>
      <v-text-field v-model="input.input3" label="Apellido M." variant="underlined" class="text2"></v-text-field>
     
    </v-col>
  </v-row>
 
  <v-text-field v-model="input.input4" label="Numero de telefono" variant="underlined"></v-text-field>
      
  <v-text-field :rules="[rules.correo,rules.correoval(input.input5,usuarios)]" v-model="input.input5" label="Correo electronico*" variant="underlined"></v-text-field>
     
     <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" hint="Ingresa al menos 8 caracteres" counter  @click:append="show1 = !show1" :type="show1 ? 'text' : 'password'" :rules="[rules.requerido,rules.min]"   v-model="input.input6" label="Contraseña*" variant="underlined"></v-text-field>
      <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" hint="Ingresa al menos 8 caracteres" counter  @click:append="show1 = !show1" :type="show1 ? 'text' : 'password'" :rules="[rules.requerido,rules.min]"   v-model="input.input7" label="Confirmar contraseña*" variant="underlined"></v-text-field>

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
import {ref,computed} from 'vue'
import FormularioPrincipal from '@/components/FormularioLayout.vue'
import router from '@/router/index'
import {PaginaStore} from '@/stores/PaginaStore.js'
import { storeToRefs } from 'pinia'
import rules from '@/validations/rules.js'

const pagina = PaginaStore()
const {usuarios,id} = storeToRefs(pagina)

var error=ref(false)

const form = ref()
async function verificar(){
  const { valid } = await form.value.validate()
  
  if (valid){
    
    

if (input.value.input6!=input.value.input7){
  error.value=true
    return
  }

id.value= usuarios.value.length + 1
usuarios.value.push({
    id: id,
    nombre: input.value.input1,
    apellidoP: input.value.input2,
    apellidoM: input.value.input3,
    telefono: input.value.input4,
    correo: input.value.input5,
    contrasena: input.value.input6
})
router.replace({ name: 'iniciar'})
  }
  
}

var input = ref({
  input1:'',
  input2:'',
  input3:'',
  input4:'',
  input5:'',
  input6:'',
  input7:'',
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
</style>