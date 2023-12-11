<template>
  <div class="fondo" align='center'>
    <v-container class="pt-16">
      <FormularioPrincipal class='w-50 h-100' tamañobtn='large' pie='Ya tengo cuenta' link='iniciar' :param='correo' @datos='submit' titulo='Registro para clientes' enviar='Registrar'>
        <v-form ref="form">
          <v-text-field :rules="[rules.requerido]" v-model="usuario.nombre" label="Nombre/s*" variant="underlined"></v-text-field>
          <v-row>
            <v-col>
              <v-text-field  v-model="usuario.apellido_paterno" label="Apellido Paterno" variant="underlined"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field v-model="usuario.apellido_materno" label="Apellido Materno" variant="underlined"></v-text-field>
            </v-col>
          </v-row>
          <v-text-field v-model="usuario.telefono" label="Numero de telefono" variant="underlined"></v-text-field>
          <v-text-field :rules="[rules.correo, rules.correoval(usuario.user, usuarios)]" v-model="usuario.user" label="Correo electronico*" variant="underlined"></v-text-field>
          <v-text-field :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" hint="Ingresa al menos 8 caracteres" counter  @click:append="show1 = !show1" :type="show1 ? 'text' : 'password'" :rules="[rules.requerido, rules.min]"   v-model="usuario.contrasena" label="Contraseña*" variant="underlined"></v-text-field>
          <v-text-field v-model="usuario.id_rol" label="Rol" variant="underlined"></v-text-field>
        </v-form>
        <v-alert type="error" variant='tonal' text="Las contraseñas no coinciden" v-model='error'></v-alert>
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
import { useRouter } from 'vue-router'

const pagina = PaginaStore()
const {usuarios,id} = storeToRefs(pagina)

var error=ref(false)

var show1 = ref('')
// consulta GET para mostrar usuarios
const usuario=ref({
  nombre:'',
  apellido_paterno:'',
  apellido_materno:'',
  user:'',
  contrasena:'',
  telefono:'',
  id_rol:''
})

const submit = async () =>{
  await fetch('http://localhost/registrar_usuario',{
    method:'POST',
    headers:{'Content-type': 'application/json'},
    body:JSON.stringify(usuario.value)
  });
}
</script>

<style scoped>
.fondo{
  height: 100vh;
  width: 100vw;
  background: linear-gradient(158deg, #ffe9eb 0%, #ffd2d6 43.38%, #e5a7ad 100%);
}

</style>