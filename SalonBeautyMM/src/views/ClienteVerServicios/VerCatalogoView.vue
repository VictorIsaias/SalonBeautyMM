
<template>
  <div class="fondo">
    <v-container class="bg-red-lighten-4 elevation-5 contenedor">
      <v-card  v-for="(item, index) in cServicios" :key="index" cols="12" style="background-color: #FCE4EC; margin-bottom: 20px;">
      <v-container style="background-color: #fee0e0;">
        <v-row class="desaparce">
                <v-col cols="3">
                  <v-img :src="item.img" cover class="h-100" width="300" :aspect-ratio="1"></v-img>
                </v-col>
                <v-col cols="9">
                  <v-card-title class="font-weight-black" style="font-family: Britannic; font-size: 1.5rem">{{ item.nombre }}</v-card-title>
                  <v-card-text style="font-family: Oswald;">{{ item.descripcion }}</v-card-text>
                  <v-row class="fill-height d-flex align-center">
                    <v-card-actions>
                      <router-link :to='{name:"sub-servicios",params:{idcat:item.id}}'>
                   
                        <boton class="botoncito mb-4 ml-5" elevation="8" size="x-large" texto="Ver servicios"></boton>
                      
                    </router-link>
                    </v-card-actions>
                </v-row>
                </v-col>
              </v-row>

              <div align="center" justify="center">
              <v-row class="desaparce2">
                <v-col cols="12" align="center" justify="center">
                  <v-img :src="item.img" cover class="h-100" width="300" :aspect-ratio="1"></v-img>
                </v-col>
                <v-col cols="12">
                  <v-card-title class="font-weight-black" style="font-family: Britannic; font-size: 1.5rem">{{ item.nombre }}</v-card-title>
                  <v-card-text style="font-family: Oswald;">{{ item.descripcion }}</v-card-text>
                  <v-row class="fill-height d-flex align-center" justify="center">
                    <v-card-actions>
                    <router-link :to='{name:"sub-servicios",params:{idcat:item.id}}'>
                    
                        <boton class="botoncito" elevation="8" tamaño='large' texto="Ver servicios"></boton>
                      
                    </router-link>
                  </v-card-actions>
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
@media screen and (max-width: 800px){
.botoncito{
  margin-bottom: 20px;
}
}
@media screen and (max-width: 752px){
.botoncito{
  margin-bottom: 60px;
}
.desaparce{
  display: none;
}
.contenedor{
  width: 300px;
}
}
@media screen and (min-width: 753px){
  .desaparce2{
    display: none;
  }
}
</style>

<script setup>
import { ref } from 'vue';
import {ServiciosStore} from '@/stores/ServiciosStore.js'
import { storeToRefs } from 'pinia'
import boton from '@/components/BotonPagina.vue'

const serv = ServiciosStore()

const {cServicios} = storeToRefs(serv)




</script>
