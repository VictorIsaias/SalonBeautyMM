<script setup>
import boton from '@/components/BotonNav.vue';
import { ref } from 'vue';
const services = ref([
  { id: 1, name: 'Corte de cabello para Dama', description: 'Un corte de cabello describe el acortamiento o la modificación del tipo de peinado del cabello. La actividad de la peluquería o salón de belleza supone arreglar los cabellos y modificar con ello el aspecto exterior de la persona.', image: 'service1.jpg', precio: '$75', hora: 'Aprox. 30 min' },
  { id: 2, name: 'Corte de cabello para Caballero', description: 'Un corte de cabello describe el acortamiento o la modificación del tipo de peinado del cabello. La actividad de la peluquería o salón de belleza supone arreglar los cabellos y modificar con ello el aspecto exterior de la persona.', image: 'service2.jpg', precio:'$50', hora: 'Aprox. 30 min' },
]);
</script>

<template>
  <v-container class="bg-red-lighten-4 elevation-5">
    <v-card v-for="service in services" :key="service.id" class="pink lighten-4" style="margin-bottom: 20px;">
        <v-container style="background-color: #fee0e0;">
            <v-row>
        <v-col cols="3">
          <v-img src="`/img/${service.image}`" width="600" :aspect-ratio="1">
      </v-img>
        </v-col>
        <v-col>
          <h2 style="font-family: Britannic;">{{ service.name }}</h2>
          <h4 style="font-family: Oswald;">{{ service.precio }}</h4>
          <p style="font-family: Oswald;">{{ service.hora }}</p>
          <p style="font-family: Oswald;">{{ service.description }}</p>
          <v-row class="fill-height d-flex align-center justify-end">
            <v-col cols="6"><boton texto="Mas informacion"></boton></v-col>
            <v-col cols="6"><boton texto="Crear cita"></boton></v-col>
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