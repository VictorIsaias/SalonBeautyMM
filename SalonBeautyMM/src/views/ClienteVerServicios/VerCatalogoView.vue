<template>
  <v-container >
    <v-row style="background-color:#FDCCB5">
      <v-col v-for="(item, index) in cServicios" :key="index" cols="12">
        <v-card color= 'pink-lighten-5' theme='black'>
          <v-row>
            <v-col cols="12" md="4">

                <v-img class="h-100"  width="300" :aspect-ratio="1" :src="item.imagen" cover></v-img>

            </v-col>
            <v-col cols="12" md="6">
              <div class="d-flex flex-direction-column justify-space-between">
                <div>
                  <v-card-title class="text-h5">{{ item.nombre }}</v-card-title>
                  <v-card-subtitle>{{ item.descripcion }}</v-card-subtitle>
                  <v-card-actions>
                    <router-link :to='{name:"sub-servicios",params:{idcat:item.id,cat:item.nombre}}'>
                      <v-btn class="botoncito" elevation="8" size="x-large"  >
                       Ver servicio
                      </v-btn>
                    </router-link>
                    
                  </v-card-actions>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import {ServiciosStore} from '@/stores/ServiciosStore.js'
import { storeToRefs } from 'pinia'

const serv = ServiciosStore()

const {cServicios} = storeToRefs(serv)




</script>

<style>
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