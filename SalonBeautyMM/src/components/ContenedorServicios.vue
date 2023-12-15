<template>
  <div >
    <div v-if='tipo=="servicios"'>
      <div  v-for='(servicio,index) in catalogo' :key='index'>

        <div v-if='idcatalogo==servicio.categoria'>
            <v-card :text="servicio.nombre" class='d-flex justify-space-between color ma-2'>
            <boton @click='editar(servicio.id,"servicio")' class=' ma-2'  texto='Editar'></boton>
        </v-card>
        </div>
     
        </div>
        <boton @click='abrirAñadir("servicio")' class='ma-2' tipo='servicio'  texto='Añadir servicio'>
        
      </boton>
    </div>
    <div v-if='tipo=="admins"'>
      <div  v-for='(user,index) in usuarios' :key='index'>

      <div v-if='user.id!=ID'>
         <v-card :text="user.nombre_completo" class='d-flex justify-space-between color ma-2'>
            <boton @click='editar(user.id,"admin")' class=' ma-2'  texto='Editar'></boton>
        </v-card>
      </div>
        </div>
        <boton @click='abrirAñadir("admin")' class='ma-2' tipo='servicio'  texto='Añadir usuario administrador'>
        
      </boton>
    </div>
  
    
  </div>
</template>

<script setup>
import {ref,computed, onMounted} from 'vue'
import Boton from './BotonPagina.vue'
import {AdministrarStore} from '@/stores/AdministrarStore'
import { storeToRefs } from 'pinia'

const admins = AdministrarStore()

const {servicio, cServicios,servicios,id,modo} = storeToRefs(admins)
const {abrirAñadir,cancelar,actualizar,editar,recibirid,eliminar,añadir} = admins



const props = defineProps({
  catalogo:Array,
  idcatalogo:Number,
  tipo:{type:String,default:'servicios'}
})
const usuarios=ref([])
onMounted(async()=>
{
  const respuesta = await fetch('http://18.116.31.102/usuariosAd');
        const data = await respuesta.json();
        usuarios.value=data.data;
})


</script>

<style scoped>
.color{
    background: #fff5fa;
  background-blend-mode: normal;
  backdrop-filter: blur(29px);

}
</style>