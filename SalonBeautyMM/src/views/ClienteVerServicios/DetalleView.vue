<script setup>
import boton from '@/components/BotonPagina.vue';
import { ref,onMounted } from 'vue';
import {ServiciosStore} from '@/stores/ServiciosStore.js'
import { storeToRefs } from 'pinia'

const serv = ServiciosStore()

const {seleccion} = serv

import {useRoute} from 'vue-router'

  const route = useRoute()
 

const servicio = seleccion(route.params.idserv)

const items = ref([
  { src: 'https://trozmer.edu.mx/wp-content/uploads/2020/08/corte_dama.jpg' },
  { src: 'https://www.peluqueriacristinacisneros.es/wp-content/uploads/2023/03/cortes-pelo-mujer.png' },
  { src: 'https://prixz.com/salud/wp-content/uploads/2021/05/Los-mejores-cortes-de-cabello-para-mujeres-en-2021-.jpg' }
]);
</script>

<template>
  <div style='height: 100vh;'>
    <v-container  class="bg-red-lighten-4 elevation-5 contenedor">
    <v-row >
      <v-col cols="6" class='carrusel'>
        <v-carousel style="height: 100%; width: 100%;" cycle interval="3000">
          <v-carousel-item v-for="(item, index) in items" :key="index">
            <v-img :src="item.src" aspect-ratio="1" width="600"></v-img></v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col cols="6" >
        <v-container class='d-flex  h-100 w-100 flex-column' >
          <v-card-title class="font-weight-black" style="font-family: Britannic ; font-size:1.5rem">{{servicio.nombre}}</v-card-title>
        
          <v-card-text style="font-family: Oswald;">{{servicio.descripcion}}</v-card-text>
          <v-row class="h-100  d-flex justify-center align-end ">
           <v-card-text style='font-size:1.1rem' class=" font-weight-black"> <v-divider class="mb-5 border-opacity-25"></v-divider>
            ${{servicio.precio}}</v-card-text>
        
          </v-row>
          <v-row class=" d-flex align-end justify-end">
           
          <v-col cols="3" >
            
              <div class="font-weight-bold">{{servicio.duracion_min}} min. Aprox.</div>
            </v-col>
            <v-col cols="9">
              <router-link :to='{name:"crear_cita",params:{idserv:servicio.id,serv:servicio.nombre}}'><boton tipo='pedir' clase='btncita' texto="PEDIR CITA" ></boton></router-link>
            </v-col>
        </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
  </div>
      
</template>

<style scoped>
.contenedor{
  background: linear-gradient(153deg, #ffd3c6 0%, #ffc0ab 30.2%, #fcb5b5 100%);
  background-blend-mode: normal;
  box-shadow: 0px 2px 4px 4px rgba(100,100,100,0.5);
}
.carrusel{
  border-radius: 8px;
  border: 1px dashed rgba(128,128,128,0);
  background: linear-gradient(182deg, rgba(255,255,255,0.55) 0%, rgba(211,211,211,0.55) 100%);
  background-blend-mode: normal;
  backdrop-filter: blur(50px);
  box-shadow: 0px 1px 1px 1px rgba(100,100,100,0.3);
}
</style>