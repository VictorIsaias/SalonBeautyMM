<template>
  <div class='pa-4 fondo'>
    <vue-row >
        <vue-col  class="flex-shrink-3 ">

        </vue-col>
        <vue-col>
            <v-expansion-panels multiple>
                <v-expansion-panel class='barra' >
                    <v-expansion-panel-title>Servicios</v-expansion-panel-title>
                    <v-expansion-panel-text style='height:25rem'>
                        <servicios></servicios>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class='barra'>
                    <v-expansion-panel-title>Horarios</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class='barra'>
                    <v-expansion-panel-title>Contacto</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class='barra'>
                    <v-expansion-panel-title>Direccion</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class='barra'>
                    <v-expansion-panel-title>Otros</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        
                    </v-expansion-panel-text>
                </v-expansion-panel>
                

            </v-expansion-panels>
        </vue-col>
    </vue-row>
  </div>
</template>

<script setup>
import {ref,computed} from 'vue'
import servicios from '../components/ContenedorServicios.vue'


</script>

<style scoped>

.barra{
    background: #ffedf7;
  background-blend-mode: normal;
  backdrop-filter: blur(29px);
}
.fondo{
    height: 100vh;
    width: 100vw;
    background: linear-gradient(158deg, #ffe9eb 0%, #ffd2d6 43.38%, #e5a7ad 100%);
  }

</style>