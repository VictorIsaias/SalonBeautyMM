<script setup>
import boton from '../components/BotonPagina.vue'
import { ref,onMounted} from 'vue';
import {ServiciosStore} from '../stores/ServiciosStore.js'
import { storeToRefs } from 'pinia'

const serv = ServiciosStore()

const {servicios} = storeToRefs(serv)




</script>

<template>
  <v-container class="bg-red-lighten-4 elevation-5">
    <v-card v-for="service in servicios" :key="service.id" class="pink lighten-4" style="margin-bottom: 20px;">
        <v-container v-if='$route.params.id==service.catalogo' style="background-color: #fee0e0;">
            <v-row>
        <v-col cols="3">
          <v-img :src="service.imagen" cover class='h-100' width="300" :aspect-ratio="1">
      </v-img>
        </v-col>
        <v-col>
          <h2 style="font-family: Britannic;">{{ service.nombre }}</h2>
          <h4 style="font-family: Oswald;">${{ service.precio }}.00</h4>
          <p style="font-family: Oswald;">{{ service.duracion }}min.</p>
          <p style="font-family: Oswald;">{{ service.descripcion }}</p>
          <v-row class="fill-height d-flex align-center justify-end">
            <v-col cols="6"><router-link :to='{name:"detalles",params:{idserv:service.id,serv:service.nombre}}'><boton texto="Mas informacion"></boton></router-link></v-col>
            <v-col cols="6"><router-link :to='{name:"crear_cita",params:{idserv:service.id}}'><boton texto="Crear cita"></boton></router-link></v-col>
          </v-row>
        </v-col>
      </v-row>
        </v-container>
    </v-card>
  </v-container>
</template>

<style>
.custom-card {
  max-width: 600px;
  width: 100%;
}
</style>