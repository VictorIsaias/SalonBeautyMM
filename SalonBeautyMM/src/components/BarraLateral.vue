<template>
  <div  class='fondobarra h-100 w-100'>
    <v-container v-if='tipo==0'>
        <v-row class='pa-3 mb-1 d-flex align-center justify-space-between'>
            <h4>{{titulo}}</h4>
            <v-btn @click='abrirAñadir("param")' variant="text" color='#169873' density="compact" icon="mdi-plus"></v-btn>
          
        </v-row>
   
        <v-divider class="border-opacity-50"></v-divider>
         <v-row class="pa-3 mt-2 ">
            <div class="d-flex justify-space-around  w-100" v-for='serv in cServicios' :key='serv.id'>
            <v-btn @click='recibirid(serv.id)'  density="compact" class='mb-1 w-100 d-flex justify-start'  variant="text">
                    {{serv.nombre}}
            </v-btn>
            <v-btn @click='editar(serv.id,"param")' size="small" variant="text" density="compact" icon="mdi-pencil"></v-btn>
                    
                </div>
              
         </v-row>
        
    </v-container>
  </div>
</template>

<script setup>
import {ref,computed} from 'vue'

import {AdministrarStore} from '../stores/AdministrarStore'
import { storeToRefs } from 'pinia'

const admins = AdministrarStore()

const {servicio, cServicios,servicios,id,modo} = storeToRefs(admins)
const {abrirAñadir,cancelar,actualizar,editar,recibirid,eliminar,añadir} = admins


const props = defineProps({
    tipo:Number,
    titulo:String
})



</script>

<style scoped>
.fondobarra{
    background-color: #D9F7FA;
    color: #757575;

}
</style>