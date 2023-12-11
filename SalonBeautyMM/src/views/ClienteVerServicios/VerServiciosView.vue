<script setup>
import boton from '@/components/BotonPagina.vue'
import { ref,onMounted} from 'vue';
import {ServiciosStore} from '@/stores/ServiciosStore.js'
import { storeToRefs } from 'pinia'

const serv = ServiciosStore()

const {servicios} = storeToRefs(serv)



</script>

<template>
  <div class="fondo">
    <v-container class="bg-red-lighten-4 elevation-5 contenedor">
      <v-row>
        <v-col cols="12">
          <div v-for="service in servicios"  :key="service.id">
          <v-card v-if='$route.params.idcat==service.categoria' class="pink lighten-4" style="margin-bottom: 20px;">
            <v-container  style="background-color: #fee0e0;">

              <v-row class="desaparce">
                <v-col cols="4">
                  <v-img :src="service.img" cover class='h-100' width="300" :aspect-ratio="1"></v-img>
                </v-col>
                <v-col cols="8">
                  <v-card-title style="font-family: Britannic; font-size: 1.5rem;">{{ service.nombre }}</v-card-title>
                  <v-card-subtitle style="font-family: Oswald;font-size: 1rem;">${{ service.precio }}.00  -  {{ service.duracion_min }}min.</v-card-subtitle>
     
                  <p class="text--primary pt-3" style="font-family: Oswald;">{{ service.descripcion }}</p>
                  <v-row class=" d-flex align-end justify-end botones" style="height: 67%;">
                    <v-col cols="6"><router-link  :to='{name:"detalles",params:{idserv:service.id}}'><boton texto="Mas informacion"></boton></router-link></v-col>
                    <v-col cols="6"><router-link :to='{name:"crear_cita",params:{idserv:service.id}}'><boton texto="Crear cita"></boton></router-link></v-col>
                  </v-row>
                </v-col>
              </v-row>

              <div align="center" justify="center">
                <v-row class="desaparce2">
                  <v-col cols="12" align="center" justify="center">
                    <v-img :src="service.img" cover class="h-100" width="300" :aspect-ratio="1"></v-img>
                  </v-col>
                  <v-col cols="12">
                    <v-card-text class="text" style="font-family: Britannic; font-size: 1.5rem;">{{ service.nombre }}</v-card-text>
                    <v-card-subtitle style="font-family: Oswald;font-size: 1rem;">${{ service.precio }}.00  -  {{ service.duracion_min }}min.</v-card-subtitle>
            <p class="text--primary pt-3" style="font-family: Oswald;">{{ service.descripcion }}</p>
                  <v-row class="botones item1">
                    <v-col cols="6"><router-link  :to='{name:"detalles",params:{idserv:service.id}}'><boton texto="Mas informacion"></boton></router-link></v-col>
            <v-col cols="6"><router-link :to='{name:"crear_cita",params:{idserv:service.id}}'><boton texto="Crear cita"></boton></router-link></v-col>
          </v-row>
                  <v-row class="botones item2">
                    <v-col cols="6"><router-link  :to='{name:"detalles",params:{idserv:service.id}}'><boton texto="Mas informacion"></boton></router-link></v-col>
            <v-col cols="6"><router-link :to='{name:"crear_cita",params:{idserv:service.id}}'><boton texto="Crear cita"></boton></router-link></v-col>
          </v-row>
                  </v-col>
                </v-row>
              </div>

            </v-container>
          </v-card>
        </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.fondo {
  width: 100%;
  height: 100%;
  background: linear-gradient(158deg, #ffe9eb 0%, #ffd2d6 43.38%, #e5a7ad 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.botones{
  padding: 0px;
}
.boton{
  margin-bottom: 0px;
}
.contenedor{
    margin-top: 50px;
  }
  @media screen and (max-width: 885px) {
    .boton{
      margin-bottom: 30px;
    }
  }
  @media screen and (min-width: 669px) {
    .desaparce2{
      display: none;
    }
  }
  @media screen and (max-width: 670px) {
    .contenedor{
      width: 425px;
    }
    .desaparce{
      display: none;
    }
    .botones{
      margin-top: 10px;
    }
  }
  @media screen and (min-width: 424px) {
    .item2{
      display: none;
    }
  }
  @media screen and (max-width: 425px) {
    .contenedor{
      width: 300px;
    }
    .item1{
      display: none;
    }
    .boton{
      margin: 0px;
    }
  }
</style>
