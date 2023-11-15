<script setup>
  import Calendario from '../components/Calendario.vue';
  import Servicios from '../components/Servicios.vue';
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer color="teal-lighten-4">
      <v-title class="text-h6 ml-2">Crear cita: </v-title>
      <v-divider class="mr-2"></v-divider>
      <v-card class="ma-2">
        <v-subtitle>Servicios</v-subtitle>
        <v-divider></v-divider>
        <v-subtitle><Servicios/></v-subtitle>
      </v-card>
      <v-container class="ml-2"> 
        <v-row>
          <v-subtitle >Duración Total: {{  }}</v-subtitle>
        </v-row>
        <v-row>
          <v-subtitle>Precio Total: {{  }}</v-subtitle>
        </v-row>
        <v-row>
          <v-subtitle>Fecha: {{  }}</v-subtitle>
        </v-row>
      </v-container>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center ma-10">
      <Calendario/>
    </v-main>
  </v-layout>
</template>

<style>
</style>
