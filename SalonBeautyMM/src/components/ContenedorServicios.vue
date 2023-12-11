<template>
  <div >
    
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
</template>

<script setup>
import {ref,computed} from 'vue'
import Boton from './BotonPagina.vue'
import {AdministrarStore} from '@/stores/AdministrarStore'
import { storeToRefs } from 'pinia'

const admins = AdministrarStore()

const {servicio, cServicios,servicios,id,modo} = storeToRefs(admins)
const {abrirAñadir,cancelar,actualizar,editar,recibirid,eliminar,añadir} = admins



const props = defineProps({
  catalogo:Array,
  idcatalogo:Number
})



</script>

<style scoped>
.color{
    background: #fff5fa;
  background-blend-mode: normal;
  backdrop-filter: blur(29px);

}
</style>