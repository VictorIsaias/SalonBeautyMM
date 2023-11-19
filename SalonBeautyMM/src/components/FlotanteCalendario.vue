<template>
  <div>
    <v-overlay
    v-model="flotante"
          class="align-center justify-center "
        >
        <formulario  tipo='info' class='w-100 h-100' >
         <v-container class='pa-0 ' style="height:34rem;">
          <v-row>
            <v-col>
              <formulario class='h-100 w-100 flotante' titulo='Crear cita' tipo='sinboton'>
              <v-text-field style='width: 25rem;' v-model="servicios" label="Añadir servicio" variant="underlined"></v-text-field>

            </formulario>
            </v-col>
          
          </v-row>
           
         
          <v-row style="height: 56%;">
            <v-col class='d-flex flex-wrap justify-end'>
              
                <formulario tipo='info' class='mb-7 w-100 h-100' titulo='Servicios:'></formulario>
                <boton @click="cancelar" texto='Cancelar' class='w-75'></boton>
            </v-col>
            <v-col>
               
                <formulario tipo='info' class='mb-7 w-100 h-100' titulo='Detalle:'></formulario>
                
                
                  <boton @click="listo" texto='Listo' class='w-75'></boton>
                
                
            </v-col>
          </v-row>
         
        </v-container>
        </formulario>  
        </v-overlay>
        
  </div>
</template>

<script setup>

import {ref,computed} from 'vue'
import {CalendarioStore} from '../stores/CalendariosStore.js'
import { storeToRefs } from 'pinia'
import boton from './BotonPagina.vue'
import formulario from './FormularioLayout.vue'

const cal = CalendarioStore()

const {flotante} = storeToRefs(cal)



</script>

<style scoped>

</style>