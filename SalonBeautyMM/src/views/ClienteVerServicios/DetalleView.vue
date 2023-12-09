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
  <div class="fondo">
    <v-container class="bg-red-lighten-4 elevation-5 contenedor">
      <v-card>
        <v-container style="background-color: #fee0e0;">
          
          <v-row class="desaparce">
            <v-col cols="6">
              <div class="carrusel"  align="center" justify="center">
            <v-carousel cycle interval="3000" style="height: 100%; width: 100%;" :aspect-ratio="1" hide-delimiter-background show-arrows="hover">
                <v-carousel-item v-for="(item, index) in items" :key="index">
                    <v-img :src="item.src" aspect-ratio="1" width="600"></v-img>
                </v-carousel-item>
            </v-carousel>
        </div>
            </v-col>
            <v-col cols="6">
              <v-card-title class="font-weight-black titulo" style="font-family: Britannic Bold;">{{servicio.nombre}}</v-card-title>
              <v-card-text style="font-family: Oswald;">{{servicio.descripcion}}</v-card-text>
              <div class="fill-height d-flex align-center">
              <v-row>
                <v-col cols="4">
                  <v-card-subtitle class="font-weight-black">${{servicio.precio}}</v-card-subtitle>
                  <v-card-text class="font-weight-bold">{{servicio.duracion_min}}min Aprox.</v-card-text>
                </v-col>
                <v-col cols="8">
                  <v-row justify="end">
                <v-card-actions>
                  <router-link :to='{name:"crear_cita",params:{idserv:servicio.id,serv:servicio.nombre}}'><boton tipo='pedir'  texto="PEDIR CITA" ></boton></router-link>
                </v-card-actions>
              </v-row>
              </v-col>
              </v-row>
            </div>
            </v-col>
          </v-row>

          <div align="center" justify="center">
            <v-row class="desaparce2">
              <v-col cols="12" align="center" justify="center">
                <div class="carrusel">
            <v-carousel cycle interval="3000" style="height: 100%; width: 100%;" :aspect-ratio="1" hide-delimiter-background show-arrows="hover">
                <v-carousel-item v-for="(item, index) in items" :key="index">
                    <v-img :src="item.src" aspect-ratio="1" width="600"></v-img>
                </v-carousel-item>
            </v-carousel>
                </div>
              </v-col>
              <v-col cols="12">
                <v-card-title class="font-weight-black titulo" style="font-family: Britannic Bold;">{{servicio.nombre}}</v-card-title>
              <v-card-text style="font-family: Oswald;">{{servicio.descripcion}}</v-card-text>
              <v-row align="center" justify="center">
                <v-col cols="4">
                  <v-card-subtitle class="font-weight-black">${{servicio.precio}}</v-card-subtitle>
                  <v-card-text class="font-weight-bold">{{servicio.duracion_min}}min Aprox.</v-card-text>
                </v-col>
                <v-col cols="8">
                  <v-row justify="end">
                <v-card-actions>
                  <router-link :to='{name:"crear_cita",params:{idserv:servicio.id,serv:servicio.nombre}}'><boton tipo='pedir'  texto="PEDIR CITA" ></boton></router-link>
                </v-card-actions>
              </v-row>
              </v-col>
              </v-row>
              </v-col>
            </v-row>
          </div>

        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.titulo{
  font-size: 2em;
}
.contenedor{
  background: linear-gradient(153deg, #ffd3c6 0%, #ffc0ab 30.2%, #fcb5b5 100%);
  background-blend-mode: normal;
  box-shadow: 0px 2px 4px 4px rgba(100,100,100,0.5);
  margin-top: 50px;
}
.carrusel{
  border-radius: 8px;
  border: 1px dashed rgba(128,128,128,0);
  background: linear-gradient(182deg, rgba(255,255,255,0.55) 0%, rgba(211,211,211,0.55) 100%);
  background-blend-mode: normal;
  backdrop-filter: blur(50px);
  box-shadow: 0px 1px 1px 1px rgba(100,100,100,0.3);
}

@media screen and (min-width: 686px) {
  .desaparce2{
    display: none;
  }
}

@media screen and (max-width: 686px) {
  .desaparce{
    display: none;
  }

  .contenedor{
    width: 550px;
  }

  .titulo{
    font-size: 2em;
  }
}

@media screen and (max-width: 634px) {
  .titulo{
    font-size: 1.8em;
  }
}
@media screen and (max-width: 585px) {
  .titulo{
    font-size: 1.6em;
  }
}
@media screen and (max-width: 780px) {
  .botoncito{
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 752px) {
  .botoncito{
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 425px) {
  .titulo{
    font-size: 1.3em;
  }
}
</style>