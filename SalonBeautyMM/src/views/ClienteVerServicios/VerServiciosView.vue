<script setup>
import boton from '@/components/BotonPagina.vue'
import { ref,onMounted} from 'vue';
import {ServiciosStore} from '@/stores/ServiciosStore.js'
import { storeToRefs } from 'pinia'

const serv = ServiciosStore()

const {servicios} = storeToRefs(serv)



</script>

<template>
  <v-container class="bg-red-lighten-4 elevation-5 fondo">
    <v-card v-for="service in servicios" :key="service.id" class="pink lighten-4" style="margin-bottom: 20px;">
        <v-container v-if='$route.params.idcat==service.categoria' style="background-color: #fee0e0;">
            <v-row>
        <v-col cols="3">
          <v-img :src="service.imagen" cover class='h-100' width="300" :aspect-ratio="1">
      </v-img>
        </v-col>
        <v-col>
          <v-card-title class="text-h5" style="font-family: Britannic;">{{ service.nombre }}</v-card-title>
          <v-card-subtitle style="font-family: Oswald;">${{ service.precio }}.00</v-card-subtitle>
          <p class="text--primary" style="font-family: Oswald;">{{ service.duracion_min }}min.</p>
          <p class="text--primary" style="font-family: Oswald;">{{ service.descripcion }}</p>
          <v-row class="fill-height d-flex align-center justify-end">
            <v-col cols="6"><router-link :to='{name:"detalles",params:{idserv:service.id,serv:service.nombre}}'><boton texto="Mas informacion"></boton></router-link></v-col>
            <v-col cols="6"><router-link :to='{name:"crear_cita",params:{idserv:service.id,serv:service.nombre}}'><boton texto="Crear cita"></boton></router-link></v-col>
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

.text-h4 {
font-size: 24px;
font-weight:bold;
}
.text-h5 {
font-size: 20px;
font-weight: bold;
}
.text-body-2 {
font-size: 14px;
color: #757575;
}
.fondo{
  
  background: linear-gradient(158deg, #ffe9eb 0%, #ffd2d6 43.38%, #e5a7ad 100%);
}
</style>