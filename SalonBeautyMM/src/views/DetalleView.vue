<script setup>
import boton from '@/components/BotonPagina.vue';
import { ref,onMounted } from 'vue';
import {ServiciosStore} from '../stores/ServiciosStore.js'
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
        <v-container class="bg-red-lighten-4 elevation-5">
    <v-row>
      <v-col cols="6">
        <v-carousel style="max-height: 100%vh; width: 100%;" cycle interval="3000">
          <v-carousel-item v-for="(item, index) in items" :key="index">
            <v-img :src="item.src" aspect-ratio="1" width="600"></v-img></v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col cols="6">
        <v-card-title class="font-weight-black" style="font-family: Britannic Bold;">{{servicio.nombre}}</v-card-title>
        <v-card-text style="font-family: Oswald;">{{servicio.descripcion}}</v-card-text>
        <v-row class="fill-height d-flex align-center justify-end">
            <v-col cols="3">
                <v-card-subtitle class="font-weight-black">${{servicio.precio}}</v-card-subtitle>
                <v-card-text class="font-weight-bold">{{servicio.duracion}}min Aprox.</v-card-text>
            </v-col>
            <v-col cols="9">
              <router-link :to='{name:"crear_cita",params:{idserv:servicio.id,serv:servicio.nombre}}'><boton texto="Pedir cita" >Crear cita</boton></router-link>
            </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>